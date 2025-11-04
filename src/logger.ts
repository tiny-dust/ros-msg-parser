export const c = {
  gray: (s: string) => `\x1b[90m${s}\x1b[0m`,
  red: (s: string) => `\x1b[31m${s}\x1b[0m`,
  green: (s: string) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s: string) => `\x1b[33m${s}\x1b[0m`,
  blue: (s: string) => `\x1b[34m${s}\x1b[0m`,
  magenta: (s: string) => `\x1b[35m${s}\x1b[0m`,
  cyan: (s: string) => `\x1b[36m${s}\x1b[0m`,
  bold: (s: string) => `\x1b[1m${s}\x1b[0m`,
};

export const icons = {
  config: '⚙️',
  clone: '⬇️',
  update: '🔄',
  checkout: '🪵',
  clean: '🧹',
  gen: '🛠️',
  done: '✅',
  error: '❌',
  section: '📦',
  skip: '⏭️',
};

type Level = 'info' | 'warn' | 'error';

function base(level: Level, msg: string) {
  const stamp = c.gray(new Date().toISOString());
  const colored =
    level === 'error' ? c.red(msg) : level === 'warn' ? c.yellow(msg) : msg;
  //eslint-disable-next-line no-console
  console.log(`${stamp} ${colored}`);
}

export const log = {
  info: (msg: string) => base('info', msg),
  warn: (msg: string) => base('warn', msg),
  error: (msg: string) => base('error', msg),
  //eslint-disable-next-line no-console
  raw: (...parts: unknown[]) => console.log(...parts),
};

export function format(icon: string, label: string, body: string) {
  return `${icon}  ${label} ${body}`.trim();
}

export function section(title: string, detail?: string) {
  log.raw(
    `\n${icons.section}  ${c.bold(title)}${detail ? ' ' + c.gray('(' + detail + ')') : ''}`
  );
}

export function success(msg: string) {
  log.raw(`${icons.done}  ${c.green('done')} ${msg}`);
}

export function failure(scope: string, message: string) {
  log.raw(`${icons.error}  ${c.red(scope)} ${message}`);
}
