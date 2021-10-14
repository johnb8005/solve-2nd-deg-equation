import React from "../_snowpack/pkg/react.js";
import {Line} from "../_snowpack/pkg/react-chartjs-2.js";
const getData = ({
  xs,
  ys,
  label,
  backgroundColor = "rgb(255, 99, 132)",
  borderColor = "rgba(255, 99, 132, 0.2)"
}) => {
  const labels = xs.map((x) => x.toFixed(2));
  return {
    labels,
    datasets: [
      {
        label,
        data: ys,
        fill: false,
        backgroundColor,
        borderColor
      }
    ]
  };
};
const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};
export const LineChart = ({
  xs,
  ys,
  label
}) => {
  const data = getData({xs, ys, label});
  return /* @__PURE__ */ React.createElement(Line, {
    data,
    options
  });
};
export default () => /* @__PURE__ */ React.createElement(LineChart, {
  label: "test",
  xs: [1, 2, 3],
  ys: [2, 4, 6]
});
