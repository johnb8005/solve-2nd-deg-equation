import React from "../_snowpack/pkg/react.js";
import Input from "../_snowpack/pkg/@nexys/react-bootstrap/dist/form/input/number.js";
import Wrapper from "../_snowpack/pkg/@nexys/react-bootstrap/dist/form/wrapper.js";
import * as S from "../lib/solve.js";
import * as U from "./utils.js";
const Form = ({
  onSuccess
}) => {
  const [state, setState] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors2 = {};
    if (U.isNotPartial2ndDeg(state)) {
      try {
        const solution = S.solve2ndDegEquation(state.a, state.b, state.c);
        const s = {solution, coefficients: state};
        onSuccess(s);
      } catch (err) {
        alert(err);
      }
      setErrors(errors2);
      return;
    }
    U.keys.forEach((k) => {
      if (state[k] === void 0) {
        errors2[k] = ["this field must be defined"];
      }
    });
    setErrors(errors2);
  };
  return /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement(Wrapper, {
    label: "Coefficient a",
    errors: errors["a"],
    info: 'if this field is set to 0, an equation of the 1st degree of the type "bx +c=0" will be solved instead'
  }, /* @__PURE__ */ React.createElement(Input, {
    placeholder: "a",
    value: state.a,
    onChange: (a) => setState({...state, a}),
    errors: errors["a"]
  })), /* @__PURE__ */ React.createElement(Wrapper, {
    label: "Coefficient b",
    errors: errors["b"]
  }, /* @__PURE__ */ React.createElement(Input, {
    placeholder: "b",
    value: state.b,
    onChange: (b) => setState({...state, b}),
    errors: errors["b"]
  })), /* @__PURE__ */ React.createElement(Wrapper, {
    label: "Coefficient c",
    errors: errors["c"]
  }, /* @__PURE__ */ React.createElement(Input, {
    placeholder: "c",
    value: state.c,
    onChange: (c) => setState({...state, c}),
    errors: errors["c"]
  })), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-primary",
    type: "submit"
  }, "Submit"));
};
export default Form;
