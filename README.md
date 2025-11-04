# ros-msg-parser

ROS 消息/服务/动作（msg/srv/action）解析并生成 TypeScript 类型的工具与脚本集合。

## 功能

- 解析 ROS 仓库中的 `.msg` / `.srv` / `.action` 文件
- 支持内置消息类型映射，自动补齐依赖类型
- 生成带注释的 TypeScript 接口/枚举定义
- CLI：一键拉取仓库、解析并输出到 `ros.d.ts`

<!-- ts-pattern 相关说明已移除：项目不再使用 ts-pattern -->

## 安装与使用

```bash
npm i -D ros-msg-parser
```

### CLI

在项目根目录新建 `ros-generator.config.ts`：

```ts
import { defineConfig } from 'ros-msg-parser';

export default defineConfig({
  repo: 'https://github.com/ros2/common_interfaces.git',
  branch: 'rolling',
  cloneDir: 'node_modules/.cache',
  module: 'std_msgs',
  output: 'ros.d.ts',
});
```

执行：

```bash
npx ros-msg-parser
```

## 开发

- 构建：`npm run build`
- 单测：`npm test` / `npm run test:watch`
- 代码风格：`npm run lint` / `npm run lint:fix` / `npm run format`

## CI 与发布

- 持续集成：推送到 `main` 或 PR 将自动执行 Lint、Build、Test（见 `.github/workflows/ci.yml`）。
- 发布到 npm：推送标签 `v*` 会自动发布（见 `.github/workflows/release.yml`）。
  - 在仓库 Secrets 配置 `NPM_TOKEN`（具有发布权限）。
  - 示例：

  ```bash
  git tag v0.1.0
  git push origin v0.1.0
  ```

## 目录结构

- `src/` 核心实现（解析器、内置类型、日志等）
- `tests/` 单元测试
- `index.ts` 包导出入口
- `vite.config.ts` 打包配置（产出 ESM + CJS）

## 许可证

MIT