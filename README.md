# ros-msg-parser

ROS 消息/服务/动作（msg/srv/action）解析并生成 TypeScript 类型的工具与脚本集合。当前脚本为自用脚本，内置 msg/srv/action 类型不完善。请谨慎使用。

## 功能

- 解析 ROS 仓库中的 `.msg` / `.srv` / `.action` 文件
- 支持内置消息类型映射，自动补齐依赖类型
- 生成带注释的 TypeScript 接口/枚举定义
- CLI：一键拉取仓库、解析并输出到 `ros.d.ts`


## 安装与使用

```bash
npm i -D ros-msg-parser
```

### CLI

在项目根目录新建 `ros-generator.config.ts`：

```ts
import { defineConfig } from 'ros-msg-parser';

export default defineConfig({
  // 支持 Git 仓库地址或本地目录路径
  // Git 地址时才会使用 branch/cloneDir；本地目录则直接读取
  input: 'https://github.com/ros2/common_interfaces.git',
  branch: 'rolling',          // 仅当 input 为 Git 地址时生效
  cloneDir: 'node_modules/.cache', // 仅当 input 为 Git 地址时生效
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

### 快速演示：解析 examples 目录

本仓库内置了示例 ROS 文件（位于 `examples/ros`）。新增了一个命令用于直接解析示例：

```bash
# 使用已存在的构建产物（推荐先运行 dev 或 build）
npm run examples

# 先构建再解析（一次性）
npm run examples:build

# 或者开发模式：另开一个终端持续构建
npm run dev    # 终端 A，持续产出 dist/
npm run examples  # 终端 B，使用 dist/ 进行解析
```

等价的 CLI 子命令为：

```bash
npx ros-msg-parser examples \
  --input examples/ros \
  --module custom_pkg \
  --output ros.d.ts
```


## 目录结构

- `src/` 核心实现（解析器、内置类型、日志等）
- `index.ts` 包导出入口
- `vite.config.ts` 打包配置（产出 ESM + CJS）

## 许可证

MIT