"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Icon;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");

var _maverickToolkitUtils = require("maverick-toolkit-utils");

var _Icons = require("./Icons");

function Icon(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$iconClassName = _ref.iconClassName,
      iconClassName = _ref$iconClassName === void 0 ? '' : _ref$iconClassName,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'sm' : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '' : _ref$color,
      _ref$customColor = _ref.customColor,
      customColor = _ref$customColor === void 0 ? '' : _ref$customColor,
      icon = _ref.icon;
  var classes = (0, _classnames.default)(className, 'c-icon');
  var colorMap = {
    white: 'c-icon--white',
    grayDark: 'c-icon--gray-dark',
    graySoft: 'c-icon--gray-soft',
    grayLight: 'c-icon--gray-light',
    gray: 'c-icon--gray'
  };

  _fontawesomeSvgCore.library.add(_Icons.icons);

  return /*#__PURE__*/_react.default.createElement("span", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    className: (0, _classnames.default)(iconClassName, colorMap[(0, _maverickToolkitUtils.kebabToCamel)(color)]),
    size: size,
    color: customColor,
    icon: icon
  }));
}