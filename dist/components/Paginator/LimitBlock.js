"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = require("../Button");

var LimitBlock = function LimitBlock(_ref) {
  var dispatch = _ref.dispatch,
      content = _ref.content,
      currentPage = _ref.currentPage,
      blockType = _ref.blockType,
      isAdjacentEdgeCase = _ref.isAdjacentEdgeCase,
      pages = _ref.pages,
      _ref$adjacentPages = _ref.adjacentPages,
      adjacentPages = _ref$adjacentPages === void 0 ? 0 : _ref$adjacentPages,
      _ref$blockColor = _ref.blockColor,
      blockColor = _ref$blockColor === void 0 ? '' : _ref$blockColor;

  var handlePageChange = function handlePageChange() {
    if (blockType === 'first') {
      dispatch({
        type: 'SET_INDEX_VALUES',
        payload: {
          currentPage: 0,
          principalIndex: 1
        }
      });
    }

    if (blockType === 'last') {
      dispatch({
        type: 'SET_INDEX_VALUES',
        payload: {
          currentPage: pages - 1,
          principalIndex: pages - (4 + adjacentPages * 2)
        }
      });
    }
  };

  var isActive = content - 1 === currentPage;
  return pages <= 5 || isAdjacentEdgeCase ? null : /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ariaCurrent: isActive,
    ariaLabel: "".concat(blockType === 'first' ? "Goto Page 1".concat(isActive ? ', current page' : '') : "Goto Page ".concat(pages).concat(isActive ? ', current page' : '')),
    color: blockColor,
    className: (0, _classnames.default)('c-paginator__block', {
      'c-paginator__block--active': isActive
    }),
    onClick: function onClick() {
      return handlePageChange();
    }
  }, content));
};

var _default = LimitBlock;
exports.default = _default;