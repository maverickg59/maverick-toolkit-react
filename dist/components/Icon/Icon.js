"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Icon;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

function Icon(_ref) {
  var className = _ref.className,
      size = _ref.size,
      color = _ref.color,
      icon = _ref.icon;
  return /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    className: (0, _classnames.default)(className, 'c-icon'),
    size: size,
    color: color,
    icon: icon
  }));
}