import { g as getDefaultExportFromCjs, c as createCommonjsModule, r as react, a as commonjsGlobal } from '../../../../../common/index-4b0af3e2.js';

var number = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputNumber = void 0;
const react_1 = __importDefault(react);
const InputNumber = ({ value, onChange, errors, disabled, }) => (react_1.default.createElement("input", { className: "form-control" + (errors && errors.length > 0 ? "  is-invalid" : ""), disabled: disabled, type: "number", value: value || "", onChange: (v) => v.target.value === ""
        ? onChange(undefined)
        : onChange(Number(v.target.value)) }));
exports.InputNumber = InputNumber;
exports.default = exports.InputNumber;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(number);

export default __pika_web_default_export_for_treeshaking__;
