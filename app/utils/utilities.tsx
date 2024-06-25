export function add(a: number, b: number): number {
  return a + b;
}
export function subtract(a: number, b: number): number {
  return a - b;
}
export function multiply(a: number, b: number): number {
  return a * b;
}
export function divide(a: number, b: number): number {
  return a / b;
}
export function power(a: number, b: number): number {
  return a ** b;
}

export function repeat(x: number | string, repeatTimes: number): string {
  let result = "";
  if (typeof x === "string") x = x.toString();
  while (1 <= repeatTimes--) {
    result += x;
  }
  return result;
}
