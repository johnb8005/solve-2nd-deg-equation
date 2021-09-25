import React from "./_snowpack/pkg/react.js";
import {title} from "./config.js";
import Input from "./_snowpack/pkg/@nexys/react-bootstrap/dist/form/input/number.js";
import * as S from "./lib/solve.js";
const Solution = ({solution}) => {
  return /* @__PURE__ */ React.createElement("code", null, "x1=", solution[0], ", x2 =", solution[1]);
};
const isNotPartial2ndDeg = (s) => typeof s.a === "number" && typeof s.b === "number" && typeof s.c === "number";
export default () => {
  const [state, setState] = React.useState({});
  const [solution, setSolution] = React.useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNotPartial2ndDeg(state)) {
      try {
        const [x1, x2] = S.solve2ndDegEquation(state.a, state.b, state.c);
        setSolution([x1, x2]);
      } catch (err) {
        alert(err);
      }
    }
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, title), solution && /* @__PURE__ */ React.createElement(Solution, {
    solution
  }), /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement(Input, {
    value: state.a,
    onChange: (a) => setState({...state, a})
  }), /* @__PURE__ */ React.createElement(Input, {
    value: state.b,
    onChange: (b) => setState({...state, b})
  }), /* @__PURE__ */ React.createElement(Input, {
    value: state.c,
    onChange: (c) => setState({...state, c})
  }), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-primary",
    type: "submit"
  }, "Submit")));
};
