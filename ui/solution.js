import React from "../_snowpack/pkg/react.js";
import {formatNumber} from "./utils.js";
import * as Chart from "../chart/index.js";
import * as ChartDataHelper from "../lib/chart-data.js";
const Solution = ({
  solutionWCoeff: {solution, coefficients}
}) => {
  const {start, end} = ChartDataHelper.getStartAndEndFromSolution(solution);
  const xs = ChartDataHelper.getXInterval(start, end, 30);
  const fx = ChartDataHelper.getQuadraticFxByCoefficients(coefficients.a, coefficients.b, coefficients.c);
  const ys = ChartDataHelper.getFunctionValues(xs, fx);
  const label = `${coefficients.a}*x^2 + ${coefficients.b}*x + ${coefficients.c}`;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", null, "Solution"), /* @__PURE__ */ React.createElement("code", null, "x1=", formatNumber(solution[0]), ", x2=", formatNumber(solution[1])), /* @__PURE__ */ React.createElement("p", null, "here insert graph"), /* @__PURE__ */ React.createElement(Chart.LineChart, {
    label,
    xs,
    ys
  }));
};
export default Solution;
