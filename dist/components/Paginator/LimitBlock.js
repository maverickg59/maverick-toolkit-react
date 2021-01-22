"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = require("../Button");

var LimitBlocks = function LimitBlocks(_ref) {
  var dispatch = _ref.dispatch,
      content = _ref.content,
      currentPage = _ref.currentPage,
      blockType = _ref.blockType,
      pages = _ref.pages,
      adjacentPages = _ref.adjacentPages,
      blockColor = _ref.blockColor;

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

  return /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    color: blockColor,
    className: (0, _classnames.default)('c-paginator__block', {
      'c-paginator__block--active': content - 1 === currentPage
    }),
    onClick: function onClick() {
      return handlePageChange();
    }
  }, content));
};

LimitBlocks.defaultProps = {
  pages: null,
  adjacentPages: 0,
  blockColor: ''
};
var _default = LimitBlocks;
exports.default = _default;