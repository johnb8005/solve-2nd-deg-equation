import React from "react";

import { Solution, SolutionWCoefficients } from "./type";
import { formatNumber } from "./utils";

import * as Chart from "../chart";
import * as ChartDataHelper from "../lib/chart-data";

const Solution = ({
  solutionWCoeff: { solution, coefficients },
}: {
  solutionWCoeff: SolutionWCoefficients;
}) => {
  const { start, end } = ChartDataHelper.getStartAndEndFromSolution(solution);
  const xs = ChartDataHelper.getXInterval(start, end, 30);
  const fx = ChartDataHelper.getQuadraticFxByCoefficients(
    coefficients.a,
    coefficients.b,
    coefficients.c
  );
  const ys = ChartDataHelper.getFunctionValues(xs, fx);

  const label = `${coefficients.a}*x^2 + ${coefficients.b}*x + ${coefficients.c}`;

  return (
    <>
      <h3>Solution</h3>
      <code>
        x1={formatNumber(solution[0])}, x2={formatNumber(solution[1])}
      </code>

      <Chart.LineChart label={label} xs={xs} ys={ys} />
    </>
  );
};

export default Solution;
