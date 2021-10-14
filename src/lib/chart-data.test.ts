import * as C from "./chart-data";

test("getXInterval", () => {
  expect(C.getXInterval(-3, 3, 7)).toEqual([-3, -2, -1, 0, 1, 2, 3]);
  expect(C.getXInterval(-1, 1, 5)).toEqual([-1, -1 / 2, 0, 1 / 2, 1]);
});

test("getFunctionValues", () => {
  const xs = [1, 2, 3, 4, 5];
  const fx = (x: number): number => x + 2;

  expect(C.getFunctionValues(xs, fx)).toEqual([3, 4, 5, 6, 7]);
});
