// helper functions for line charts
import { Solution } from "../ui/type";

export const getXInterval = (
  start: number,
  end: number,
  n: number = 100
): number[] => {
  if (end <= start) {
    throw Error("end has to be bigger than start");
  }

  // delta is always positive
  const delta: number = end - start;
  const increment = delta / (n - 1);

  return new Array(n).fill(0).map((_x, i) => start + i * increment);
};

export const getFunctionValues = (
  xs: number[],
  fx: (x: number) => number
): number[] => xs.map((x) => fx(x));

export const polynomialFxByCoefficients =
  (coeffs: number[]) =>
  (x: number): number =>
    coeffs.map((coeff, i) => coeff * x ** i).reduce((a, b) => a + b);

export const getQuadraticFxByCoefficients = (a: number, b: number, c: number) =>
  polynomialFxByCoefficients([c, b, a]);
//   // a * x ** 2 + b * x + c;

export const getSolutionDelta = (solution: Solution) => {
  const solutionDelta = Math.abs(solution[1] - solution[0]);

  if (solutionDelta === 0) {
    return 3;
  }

  return solutionDelta;
};

export const getStartAndEndFromSolution = (
  solution: Solution
): { end: number; start: number } => {
  const solutionDelta = getSolutionDelta(solution);
  const solutionMin = Math.min(solution[1], solution[0]);
  const solutionMax = Math.max(solution[1], solution[0]);
  const start = solutionMin - solutionDelta;
  const end = solutionMax + solutionDelta;

  return { end, start };
};
