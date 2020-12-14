"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Input = function Input(_ref) {
  var placeholder = _ref.placeholder,
      className = _ref.className;
  var classes = (0, _classnames.default)(className, 'c-input');

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var onChange = function onChange(e) {
    setData(e.target.value);
  };

  return /*#__PURE__*/_react.default.createElement("input", {
    className: classes,
    value: data,
    onChange: onChange,
    placeholder: placeholder
  });
};

var _default = Input;
exports.default = _default;