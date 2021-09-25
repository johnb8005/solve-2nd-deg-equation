import { c as createCommonjsModule, r as react, a as commonjsGlobal, g as getDefaultExportFromCjs } from '../../../../../common/index-4b0af3e2.js';

var utils = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.acceptDecimalValue = void 0;
/**
 * accepted string when updating the value of an numeric input
 * @param b
 * @returns
 */
const acceptDecimalValue = (b) => {
    const r = b.match(/^-{0,1}\d*\.{0,1}\d*$/);
    return !(r === null);
};
exports.acceptDecimalValue = acceptDecimalValue;
});

var number$1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputNumberGeneric = void 0;
const react_1 = __importDefault(react);

/**
 *
 * @param UI
 * @param acceptNumericValue // by default accept decimal values, this function here can be replaced with amything
 * @returns
 */
const InputNumberGeneric = (UI, acceptNumericValue = utils.acceptDecimalValue) => (p) => {
    const [value, setValue] = react_1.default.useState(p.value ? p.value.toString() : "");
    const handleChange = (s) => {
        if (s === undefined || s === "") {
            p.onChange(undefined);
            return;
        }
        const v = Number(s);
        if (acceptNumericValue(s)) {
            setValue(s);
        }
        if (!isNaN(v)) {
            p.onChange(v);
        }
    };
    return (react_1.default.createElement(UI, { disabled: p.disabled, placeholder: p.placeholder, value: value, onChange: handleChange, errors: p.errors }));
};
exports.InputNumberGeneric = InputNumberGeneric;
});

var number = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(react);

const InputUI = ({ value, onChange, errors, disabled, placeholder } // here string because the conversion to `number` happens at the outer level (generic component)
) => (react_1.default.createElement("input", { className: "form-control" + (errors && errors.length > 0 ? "  is-invalid" : ""), disabled: disabled, placeholder: placeholder, type: "text" // do not use number because it has issues with decimal numbers
    , value: value, onChange: (v) => onChange(v.target.value) }));
const InputNumber = number$1.InputNumberGeneric(InputUI);
exports.default = InputNumber;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(number);

export default __pika_web_default_export_for_treeshaking__;
