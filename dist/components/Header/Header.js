"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = require("../Button");

var Header = function Header(_ref) {
  var links = _ref.links;
  return links.map(function (_ref2) {
    var url = _ref2.url,
        title = _ref2.title,
        ariaLabel = _ref2.ariaLabel;
    return /*#__PURE__*/_react.default.createElement(_Button.Button, {
      key: title,
      color: "link-dark",
      href: url,
      ariaLabel: ariaLabel
    }, title);
  });
};

var _default = Header;
exports.default = _default;