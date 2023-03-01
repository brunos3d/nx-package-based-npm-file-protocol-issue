import { print } from '@package-based/core-lib';

export function printWithPrefix(message: string, prefix: string) {
  print(message, { prefix });
}
