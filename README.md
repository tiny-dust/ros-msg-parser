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


## 枚举解析规则

解析器支持两种方式为字段定义枚举（会自动生成对应的 TypeScript `enum`，并将字段类型替换为该枚举）：

1) 紧贴字段上方的行内注释写法

- 在目标字段上一段注释中，使用多行 `# enum NAME=VALUE 备注` 描述枚举项；
- 注释必须紧贴字段（中间允许空行吗？建议不要留空行，以免被识别为类型描述）。

示例（位于 `examples/ros/custom_pkg/msg/RobotState.msg`）：

```msg
# enum MODE_IDLE=0 Idle
# enum MODE_ACTIVE=1 Active
# enum MODE_ERROR=2 Error
int32 mode              # Current mode
```

生成的类型（简化）：

```ts
export enum RobotStateMode {
  MODE_IDLE = 0,
  MODE_ACTIVE = 1,
  MODE_ERROR = 2,
}

export interface RobotState {
  mode: RobotStateMode;
}
```

2) 通过常量块定义，并用特殊注释绑定到字段

- 先写一段常量定义块，如 `uint8 NAME=VALUE # 备注` 多行；
- 常量块前，必须有一行注释 `# field <字段名>` 指定这些常量属于哪个字段；
- 字段可以写在常量块之前或之后，解析器都会在最终结果中把该字段的类型替换为生成的枚举。

示例：

```msg
# field mode
uint8 MODE_IDLE=0    # Idle
uint8 MODE_ACTIVE=1  # Active
uint8 MODE_ERROR=2   # Error

int32 mode           # Current mode
```

生成结果与写法 1 等价：会生成 `enum RobotStateMode { ... }`，并将 `mode` 的类型替换为 `RobotStateMode`。

### 命名与注释细节

- 枚举类型名：默认采用 `PascalCase(<消息/请求/结果/反馈名>, <字段名>)`，例如 `RobotState` + `mode` → `RobotStateMode`。
- 枚举项名称：保持 `.msg/.srv/.action` 中的名称原样（如 `MODE_IDLE`），不会自动改名。
- 值类型：目前仅支持数值（整数或浮点数），会原样输出到 TypeScript 枚举值右侧。
- 注释保留：
  - 写法 1 中，`# enum NAME=VALUE 注释` 的“注释”会成为该枚举项的注释；与字段同一行的尾注释仍属于字段注释；
  - 写法 2 中，常量行尾注释会成为枚举项注释；位于 `# field <字段名>` 周围且不以 `field` 起头的紧贴注释会合并到每个枚举项注释中。

> 另：通用解析规则
>
> - 文件开头直到第一个字段（或空行）之间的注释，作为类型的整体描述；
> - 紧贴字段的注释、以及字段行尾的 `# 注释` 都会作为该字段的注释。


## 目录结构

- `src/` 核心实现（解析器、内置类型、日志等）
- `index.ts` 包导出入口
- `vite.config.ts` 打包配置（产出 ESM + CJS）

## 许可证

MIT