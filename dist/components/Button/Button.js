"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _maverickToolkitUtils = require("maverick-toolkit-utils");

var Button = function Button(_ref) {
  var color = _ref.color,
      className = _ref.className,
      href = _ref.href,
      onClick = _ref.onClick,
      children = _ref.children,
      buttonAsLink = _ref.buttonAsLink;
  var colorMap = {
    normal: 'c-btn-normal',
    default: 'c-btn-default',
    primary: 'c-btn-primary',
    success: 'c-btn-success',
    info: 'c-btn-info',
    warning: 'c-btn-warning',
    danger: 'c-btn-danger',
    linkDark: 'c-btn-link-dark',
    linkLight: 'c-btn-link-light'
  };
  var classes = (0, _classnames.default)(className, colorMap[(0, _maverickToolkitUtils.kebabToCamel)(color)], {
    'c-btn': buttonAsLink
  });

  var link = /*#__PURE__*/_react.default.createElement("a", {
    className: classes,
    href: href
  }, children);

  var button = /*#__PURE__*/_react.default.createElement("button", {
    className: classes,
    onClick: onClick
  }, children);

  return href ? link : button;
};

var _default = Button;
exports.default = _default;