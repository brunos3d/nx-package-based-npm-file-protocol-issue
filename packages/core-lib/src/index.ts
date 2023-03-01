export function print(
  message: string,
  options?: { prefix?: string; suffix?: string }
) {
  console.log(`${options?.prefix || ''} ${message} ${options?.suffix || ''}`);
}
