"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _maverickToolkitUtils = require("maverick-toolkit-utils");

var Button = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '' : _ref$color,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? '' : _ref$href,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? /*#__PURE__*/_react.default.createElement(_react.Fragment, null) : _ref$children,
      ariaLabel = _ref.ariaLabel,
      _ref$ariaCurrent = _ref.ariaCurrent,
      ariaCurrent = _ref$ariaCurrent === void 0 ? false : _ref$ariaCurrent;
  var colorMap = {
    normal: 'c-btn--normal',
    default: 'c-btn--default',
    primary: 'c-btn--primary',
    success: 'c-btn--success',
    info: 'c-btn--info',
    warning: 'c-btn--warning',
    danger: 'c-btn--danger',
    linkDark: 'c-btn--link-dark',
    linkLight: 'c-btn--link-light'
  };
  var classes = (0, _classnames.default)(className, colorMap[(0, _maverickToolkitUtils.kebabToCamel)(color)]);

  var link = /*#__PURE__*/_react.default.createElement("a", {
    "aria-current": ariaCurrent,
    "aria-label": ariaLabel,
    className: classes,
    href: href
  }, children);

  var button = /*#__PURE__*/_react.default.createElement("button", {
    "aria-current": ariaCurrent,
    "aria-label": ariaLabel,
    ref: ref,
    className: classes,
    onClick: onClick
  }, typeof children === 'function' ? function (props) {
    return children(props);
  } : children);

  return href ? link : button;
});
Button.propTypes = {
  color: _propTypes.default.string,
  className: _propTypes.default.string,
  href: _propTypes.default.string,
  onClick: _propTypes.default.func,
  children: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node]),
  linkAsButton: _propTypes.default.bool,
  ariaLabel: _propTypes.default.string.isRequired,
  ariaCurrent: _propTypes.default.bool
};
var _default = Button;
exports.default = _default;