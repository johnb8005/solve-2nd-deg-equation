import React from "../_snowpack/pkg/react.js";
import {formatNumber} from "./utils.js";
const Solution = ({solution}) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", null, "Solution"), /* @__PURE__ */ React.createElement("code", null, "x1=", formatNumber(solution[0]), ", x2=", formatNumber(solution[1])));
export default Solution;
