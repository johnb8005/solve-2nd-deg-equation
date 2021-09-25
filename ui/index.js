import React from "../_snowpack/pkg/react.js";
import Solution from "./solution.js";
import Form from "./form.js";
const Intro = () => /* @__PURE__ */ React.createElement("p", null, "Solving ", /* @__PURE__ */ React.createElement("code", null, "ax^2 + bx + c = 0"), " in R.", " ", /* @__PURE__ */ React.createElement("small", null, "See ", /* @__PURE__ */ React.createElement("a", {
  href: "https://en.wikipedia.org/wiki/Quadratic_equation"
}, "Wiki"), " ", "for more information"));
export default () => {
  const [solution, setSolution] = React.useState();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, solution && /* @__PURE__ */ React.createElement(Solution, {
    solution
  }), /* @__PURE__ */ React.createElement(Intro, null), /* @__PURE__ */ React.createElement(Form, {
    onSuccess: setSolution
  }));
};
