export function withUnixLineSeparators(str: string) {
  return str.split("\r\n").join("\n");
}
