import React from "react";
import { Line } from "react-chartjs-2";

import { Data } from "./type";

const getData = ({
  xs,
  ys,
  label,
  backgroundColor = "rgb(255, 99, 132)",
  borderColor = "rgba(255, 99, 132, 0.2)",
}: {
  xs: number[];
  ys: number[];
  label: string;
  backgroundColor?: string;
  borderColor?: string;
}): Data => {
  const labels: string[] = xs.map((x) => x.toFixed(2));

  return {
    labels,
    datasets: [
      {
        label,
        data: ys,
        fill: false,
        backgroundColor,
        borderColor,
      },
    ],
  };
};

const options: any = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

export const LineChart = ({
  xs,
  ys,
  label,
}: {
  xs: number[];
  ys: number[];
  label: string;
}) => {
  const data = getData({ xs, ys, label });
  return <Line data={data} options={options} />;
};

export default () => <LineChart label={"test"} xs={[1, 2, 3]} ys={[2, 4, 6]} />;
