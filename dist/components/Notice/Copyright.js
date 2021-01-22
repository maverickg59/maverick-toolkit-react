"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Copyright = function Copyright(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      established = _ref.established,
      entity = _ref.entity,
      _ref$msg = _ref.msg,
      msg = _ref$msg === void 0 ? '' : _ref$msg;
  var classes = (0, _classnames.default)(className, 'c-copyright__notice');
  var date = new Date();
  var year = date.getFullYear();
  var text = "\xA9 ".concat(established === parseInt(year) ? '' : established + ' - ').concat(year, " ").concat(entity).concat(msg ? ' ' + msg + '.' : '.', " All rights reserved.");
  return /*#__PURE__*/_react.default.createElement("p", {
    className: classes
  }, text);
};

var _default = Copyright;
exports.default = _default;