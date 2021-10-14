import React from "react";
import { Line } from "react-chartjs-2";

import { Data } from "./type";

const getData = ({
  xs,
  ys,
  backgroundColor = "rgb(255, 99, 132)",
  borderColor = "rgba(255, 99, 132, 0.2)",
}: {
  xs: number[];
  ys: number[];
  backgroundColor?: string;
  borderColor?: string;
}): Data => {
  const labels: string[] = xs.map((x) => String(x));

  return {
    labels,
    datasets: [
      {
        label: "# of Votes",
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

export const LineChart = ({ xs, ys }: { xs: number[]; ys: number[] }) => {
  const data = getData({ xs, ys });
  return <Line data={data} options={options} />;
};

export default () => <LineChart xs={[1, 2, 3]} ys={[2, 4, 6]} />;
