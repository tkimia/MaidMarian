
export function averageWithoutZeros(...numbers) {
  numbers = numbers.filter(num => num !== 0);

  return numbers.reduce((acc, n) => acc + n, 0) / numbers.length;
}