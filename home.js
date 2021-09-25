import React from "./_snowpack/pkg/react.js";
import {title} from "./config.js";
import UI from "./ui/index.js";
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, title), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-md-6"
  }, /* @__PURE__ */ React.createElement(UI, null))));
};
