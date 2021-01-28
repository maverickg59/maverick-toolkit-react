"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = require("../Button");

var _ = require("./");

var Block = function Block(_ref) {
  var dispatch = _ref.dispatch,
      content = _ref.content,
      currentPage = _ref.currentPage,
      page = _ref.page,
      pages = _ref.pages,
      principalIndex = _ref.principalIndex,
      blockIndex = _ref.blockIndex,
      adjacentPages = _ref.adjacentPages,
      adjacents = _ref.adjacents,
      rangeLength = _ref.rangeLength,
      _ref$blockColor = _ref.blockColor,
      blockColor = _ref$blockColor === void 0 ? '' : _ref$blockColor,
      blockRefs = _ref.blockRefs;

  var handlePageChange = function handlePageChange() {
    dispatch({
      type: 'SET_PREV_CLICK',
      payload: {
        prevClick: 'block'
      }
    });
    blockRefs.current[(0, _.refIndex)(blockIndex, pages, currentPage, rangeLength, adjacents)].focus();
    var adjacent = adjacentPages * 2;

    if (blockIndex === 0) {
      var minPage = page <= 1 ? principalIndex : page - 1;
      dispatch({
        type: 'SET_INDEX_VALUES',
        payload: {
          currentPage: page,
          principalIndex: minPage,
          blockIndex: blockIndex
        }
      });
    } else if (blockIndex === rangeLength) {
      var maxPage = page >= pages - 2 ? principalIndex : page - (1 + adjacent);
      dispatch({
        type: 'SET_INDEX_VALUES',
        payload: {
          currentPage: page,
          principalIndex: maxPage,
          blockIndex: blockIndex
        }
      });
    } else {
      dispatch({
        type: 'SET_INDEX_VALUES',
        payload: {
          currentPage: page,
          principalIndex: principalIndex,
          blockIndex: blockIndex
        }
      });
    }
  };

  var isActive = content - 1 === currentPage;
  return /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    ariaCurrent: isActive,
    ariaLabel: "Goto Page ".concat(page + 1).concat(isActive ? ', current page' : ''),
    color: blockColor,
    ref: function ref(refValue) {
      return blockRefs.current[blockIndex] = refValue;
    },
    className: (0, _classnames.default)('c-paginator__block', {
      'c-paginator__block--active': isActive
    }),
    onClick: function onClick() {
      return handlePageChange();
    }
  }, content));
};

var _default = Block;
exports.default = _default;