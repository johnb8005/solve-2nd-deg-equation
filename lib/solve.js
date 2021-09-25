export const solve1stDegEquation = (a, b) => -b / a;
export const solve2ndDegEquation = (a, b, c) => {
  if (a == 0) {
    const x = solve1stDegEquation(b, c);
    return [x, NaN];
  }
  const delta = b ** 2 - 4 * a * c;
  if (delta < 0) {
    throw Error("solution is not in R");
  }
  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);
  return [x1, x2];
};
