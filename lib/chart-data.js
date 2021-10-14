export const getXInterval = (start, end, n = 100) => {
  if (end <= start) {
    throw Error("end has to be bigger than start");
  }
  const delta = end - start;
  const increment = delta / (n - 1);
  return new Array(n).fill(0).map((_x, i) => start + i * increment);
};
export const getFunctionValues = (xs, fx) => xs.map((x) => fx(x));
export const polynomialFxByCoefficients = (coeffs) => (x) => coeffs.map((coeff, i) => coeff * x ** i).reduce((a, b) => a + b);
export const getQuadraticFxByCoefficients = (a, b, c) => polynomialFxByCoefficients([c, b, a]);
export const getSolutionDelta = (solution) => {
  const solutionDelta = Math.abs(solution[1] - solution[0]);
  if (isNaN(solutionDelta) || solutionDelta === 0) {
    return 3;
  }
  return solutionDelta;
};
export const getStartAndEndFromSolution = (solution) => {
  if (isNaN(solution[1])) {
    return {start: solution[0] - 5, end: solution[0] + 5};
  }
  const solutionDelta = getSolutionDelta(solution);
  const solutionMin = Math.min(solution[1], solution[0]);
  const solutionMax = Math.max(solution[1], solution[0]);
  const start = solutionMin - solutionDelta;
  const end = solutionMax + solutionDelta;
  return {end, start};
};
