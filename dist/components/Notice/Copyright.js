"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var Copyright = function Copyright(_ref) {
  var established = _ref.established,
      entity = _ref.entity,
      msg = _ref.msg;
  var date = new Date();
  var year = date.getFullYear();
  var text = "\xA9 ".concat(established === parseInt(year) ? '' : established + ' - ').concat(year, " ").concat(entity).concat(msg ? ' ' + msg + '.' : '.', " All rights reserved.");
  return /*#__PURE__*/_react.default.createElement("p", null, text);
};

var _default = Copyright;
exports.default = _default;