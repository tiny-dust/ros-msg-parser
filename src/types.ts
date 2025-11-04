export interface ParseConfig {
  repo: string;
  /** 分支 */
  branch?: string;
  /** 克隆到本地的路径 */
  cloneDir?: string;
  /** 是否清除 */
  clean?: boolean;
  /** 输出的文件 */
  output?: string;
  /** 模块名 生成的类型会移除`模块名/ `  例如 `module/MyMessage` 会变成 `MyMessage` */
  module?: string;
}

export interface ParseFileOptions {
  /** 模块名 生成的类型会移除`模块名/ `  例如 `module/MyMessage` 会变成 `MyMessage` */
  module?: string;
  /** 是否必选 */
  required?: boolean;
}

export interface ParseResult {
  /** 生成的内容 */
  data: Parse[];
  /** 未处理的枚举 */
  untrackEnum?: { name: string; namespace: string }[];
}

export interface Field {
  /** 字段名称 */
  name: string;
  /** 字段类型 基础类型或自定义类型或枚举 */
  type: string;
  /** 是否内置类型 */
  isBuiltIn?: boolean;
  /** 是否数组 */
  isArray?: boolean;
  /** 是否枚举 */
  isEnum?: boolean;
  /** value 只在枚举中存在 */
  value?: string;
  /** 字段注释 */
  comment?: string[];
}

export enum FieldType {}

export interface Parse {
  /** 消息空间 */
  namespace: string;
  /** 类型描述 */
  desc: string[];
  /** 字段值 */
  fields: Field[];
  /** 是否是 enum */
  isEnum?: boolean;
  /** 是否必选 */
  required?: boolean;
}
