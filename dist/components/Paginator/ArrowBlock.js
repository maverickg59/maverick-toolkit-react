"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = require("../Button");

var ArrowBlock = function ArrowBlock(_ref) {
  var dispatch = _ref.dispatch,
      content = _ref.content,
      pages = _ref.pages,
      currentPage = _ref.currentPage,
      blockType = _ref.blockType,
      _ref$adjacentPages = _ref.adjacentPages,
      adjacentPages = _ref$adjacentPages === void 0 ? 0 : _ref$adjacentPages,
      _ref$blockColor = _ref.blockColor,
      blockColor = _ref$blockColor === void 0 ? '' : _ref$blockColor;

  var handlePageChange = function handlePageChange() {
    dispatch({
      type: 'SET_PREV_CLICK',
      payload: {
        prevClick: 'arrow'
      }
    });

    if (blockType === 'leftArrow' && currentPage !== 0) {
      if (currentPage < 3) {
        dispatch({
          type: 'SET_INDEX_VALUES',
          payload: {
            currentPage: currentPage - 1,
            principalIndex: 1
          }
        });
      } else if (currentPage > pages - (3 + adjacentPages * 2)) {
        dispatch({
          type: 'SET_INDEX_VALUES',
          payload: {
            currentPage: currentPage - 1,
            principalIndex: pages - (4 + adjacentPages * 2)
          }
        });
      } else {
        dispatch({
          type: 'SET_INDEX_VALUES',
          payload: {
            currentPage: currentPage - 1,
            principalIndex: currentPage - 1
          }
        });
      }
    }

    if (blockType === 'rightArrow' && currentPage !== pages - 1) {
      if (currentPage < 2) {
        dispatch({
          type: 'SET_INDEX_VALUES',
          payload: {
            currentPage: currentPage + 1,
            principalIndex: currentPage + 1
          }
        });
      } else if (currentPage >= pages - (4 + adjacentPages * 2)) {
        dispatch({
          type: 'SET_INDEX_VALUES',
          payload: {
            currentPage: currentPage + 1,
            principalIndex: pages - (4 + adjacentPages * 2)
          }
        });
      } else {
        dispatch({
          type: 'SET_INDEX_VALUES',
          payload: {
            currentPage: currentPage + 1,
            principalIndex: currentPage + 1
          }
        });
      }
    }
  };

  return pages >= 2 ? /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ariaLabel: "".concat(blockType === 'leftArrow' ? 'Navigate one page left' : 'Navigate one page right'),
    className: "c-paginator__arrow-block",
    color: blockColor,
    onClick: function onClick() {
      return handlePageChange();
    }
  }, content)) : null;
};

var _default = ArrowBlock;
exports.default = _default;