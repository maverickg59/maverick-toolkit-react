"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Button = function Button(_ref) {
  var color = _ref.color,
      className = _ref.className,
      href = _ref.href,
      onClick = _ref.onClick,
      children = _ref.children,
      buttonAsLink = _ref.buttonAsLink;

  var snakeToCamel = function snakeToCamel(str) {
    var reducer = function reducer(acc, value) {
      return acc.concat(value);
    };

    if (typeof str !== 'string') return '';
    var casedArray = str.split('-').map(function (word, i) {
      return i === 0 ? word : word.charAt(0).toUpperCase().concat(word.slice(1));
    });
    return casedArray.reduce(reducer);
  };

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
  var classes = (0, _classnames.default)(className, colorMap[snakeToCamel(color)], {
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