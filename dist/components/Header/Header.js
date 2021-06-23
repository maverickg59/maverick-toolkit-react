"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = require("../Button");

var Header = function Header(_ref) {
  var _ref$links = _ref.links,
      links = _ref$links === void 0 ? [] : _ref$links,
      color = _ref.color,
      className = _ref.className,
      logoText = _ref.logoText;
  var classes = (0, _classnames.default)('c-header u-p-s-md', className);
  return /*#__PURE__*/_react.default.createElement("header", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("nav", {
    className: "c-header__nav o-row o-align--center"
  }, logoText && /*#__PURE__*/_react.default.createElement("div", {
    className: "c-header__logo--text-only o-row__item u-1/3"
  }, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    href: "/",
    color: color,
    ariaLabel: "Link to home page"
  }, logoText)), links && /*#__PURE__*/_react.default.createElement("div", {
    className: "o-row__item u-2/3"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "o-row o-row--gutters o-justify--end o-align--center"
  }, links.map(function (_ref2) {
    var url = _ref2.url,
        title = _ref2.title,
        ariaLabel = _ref2.ariaLabel;
    return /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_Button.Button, {
      key: title,
      color: color,
      href: url,
      ariaLabel: ariaLabel
    }, title));
  })))));
};

var _default = Header;
exports.default = _default;