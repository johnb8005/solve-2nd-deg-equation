import React from "react";

import { Solution } from "./type";

const Solution = ({ solution }: { solution: Solution }) => (
  <code>
    x1={solution[0]}, x2={solution[1]}
  </code>
);

export default Solution;
