import fse from 'fs-extra';
import { glob } from 'glob';
import { join } from 'path';
import simpleGit, { SimpleGit } from 'simple-git';
import { match, P } from 'ts-pattern';
import { Parse, ParseFileOptions } from '.';
import { getConfig } from './config';
import { format, icons, log, success } from './logger';
import {
  genTsContent,
  parseAction,
  parseMsg,
  parseSrv,
  trackEnum,
} from './utils';

const git: SimpleGit = simpleGit();

async function cloneRepo(repo: string, cloneDir: string, branch: string) {
  const repoName = repo.split('/').pop()?.replace('.git', '');
  if (!repoName) {
    throw new Error('Invalid repository URL');
  }
  const fullPath = join(cloneDir, repoName);

  const cloneDirExists = await fse.exists(fullPath);

  if (cloneDirExists) {
    log.info(
      format(icons.update, 'Directory already exists, fetching:', fullPath)
    );
    // 对比分支
    const currentBranch = await git.cwd(fullPath).branchLocal();
    if (currentBranch.current !== branch) {
      log.info(
        format(
          icons.checkout,
          `Current branch is ${currentBranch.current}, switching to ${branch}:`,
          fullPath
        )
      );
      await git.cwd(fullPath).fetch();
      await git.cwd(fullPath).checkout(branch, ['-f']);
    }
    // 拉取最新代码
    log.info(format(icons.update, 'Pulling latest changes:', fullPath));
    await git.cwd(fullPath);
    await git.fetch();
    await git.pull();
    success(format(icons.done, 'Repository updated at', fullPath));
    return fullPath;
  }
  // 打印
  log.raw(format(icons.clone, 'Cloning repository:', repo));
  await git.clone(repo, fullPath, ['--branch', branch]);
  log.raw(format(icons.done, 'Repository cloned to', fullPath));
  return fullPath;
}

/**
 * 解析指定目录下的所有 ROS 文件
 *  解析规则  定义 msg/srv/action 文件的字段、常量、注释等
 *  @rules 1 首行开始的注释直至第一个字段行或空行 为 描述信息
 *  @rules 2 紧贴字段的注释和 字段后放的注释  为 field 的注释
 *  @rules 3 枚举值上方必有 # enum field 注释
 *  @rules 4 字段的枚举值也可以  # enum field=value comment
 * @returns 解析后的对象数组
 */
function parseFile(dirs: string, options: ParseFileOptions): Parse[] {
  log.raw(format(icons.config, 'Read directory:', dirs));
  // 读取目录下的所有文件
  const files = glob.sync([
    `${dirs}/**/*.msg`,
    `${dirs}/**/*.srv`,
    `${dirs}/**/*.action`,
  ]);

  const content: Parse[] = [];
  const untrackEnums: { name: string; namespace: string }[] = [];

  for (const file of files) {
    match(file)
      .with(P.string.endsWith('.msg'), () => {
        const { data, untrackEnum = [] } = parseMsg(file, {
          ...options,
          required: true,
        });
        content.push(...data);
        untrackEnums.push(...untrackEnum);
      })
      .with(P.string.endsWith('.srv'), () => {
        const { data, untrackEnum = [] } = parseSrv(file, options);
        content.push(...data);
        untrackEnums.push(...untrackEnum);
      })
      .with(P.string.endsWith('.action'), () => {
        const { data, untrackEnum = [] } = parseAction(file, options);
        content.push(...data);
        untrackEnums.push(...untrackEnum);
      })
      .otherwise(() => {
        throw new Error(`Unknown file type: ${file}`);
      });
    success(`Processing file: ${file}`);
  }

  trackEnum(content, untrackEnums);

  return content;
}

export async function main() {
  const {
    repo,
    cloneDir = 'node_modules/.cache',
    clean = true,
    output = 'ros.d.ts',
    branch = 'main',
    module = '',
  } = await getConfig();

  const repoFullPath = await cloneRepo(repo, cloneDir, branch);
  const parseJson = parseFile(repoFullPath, { module });
  const content = genTsContent(parseJson);
  // 输出到文件 如果文件不存在就创建
  if (clean) {
    await fse.remove(output);
  }
  await fse.outputFile(output, content, 'utf-8');
  success(format('', 'TypeScript definitions generated at', output));
}
