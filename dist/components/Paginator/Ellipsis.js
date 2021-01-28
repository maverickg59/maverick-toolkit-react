"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = require("../Icon");

var Ellipsis = function Ellipsis(_ref) {
  var position = _ref.position,
      pages = _ref.pages,
      isAdjacentEdgeCase = _ref.isAdjacentEdgeCase,
      adjacents = _ref.adjacents,
      currentPage = _ref.currentPage,
      prevClick = _ref.prevClick,
      rangeLength = _ref.rangeLength;

  var showEllipsis = function showEllipsis() {
    if (pages <= 5 || isAdjacentEdgeCase) {
      return false;
    }

    if (position === 'left' && currentPage > 1) {
      return prevClick === 'block' && currentPage === 2 ? false : true;
    }

    if (position === 'right') {
      // range === 5
      // direction = right show when currentPage < 12
      // direction = left show when currentPage < 10
      // range === 7
      // direction = right show when currentPage < 13
      // direction = left show when currentPage < 11
      console.log(currentPage + rangeLength !== pages - 2);
      var arrow = 4 + adjacents * 2;
      var block = 4 + adjacents; //   return currentPage < pages - (prevClick === 'arrow' ? arrow : block)

      return currentPage + rangeLength !== pages - 2;
    }
  };

  return showEllipsis() ? /*#__PURE__*/_react.default.createElement("div", {
    className: "o-row o-align__item--end",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    ariaLabel: "Ellipsis replacing hidden pages",
    className: "u-margin-right-small",
    icon: "ellipsis-h",
    color: "gray-dark"
  })) : null;
};

var _default = Ellipsis;
exports.default = _default;