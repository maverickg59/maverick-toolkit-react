"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = require("../Icon");

var _maverickToolkitUtils = require("maverick-toolkit-utils");

var _ = require("./");

var Paginator = function Paginator(_ref) {
  var data = _ref.data,
      children = _ref.children,
      records = _ref.records,
      rows = _ref.rows,
      adjacents = _ref.adjacents,
      blockColor = _ref.blockColor;
  var pages = data.length ? data.length : Math.ceil(records.length / rows);
  var blockRefs = (0, _react.useRef)([]);
  var initialState = {
    chunkedPages: data.length ? data : (0, _maverickToolkitUtils.chunk)(records, rows),
    pagesArray: (0, _toConsumableArray2.default)(Array(pages).keys()),
    adjacentPages: adjacents ? adjacents : 0,
    rangeLength: 2 + adjacents * 2,
    indexValues: {
      currentPage: 0,
      principalIndex: 1
    }
  };

  function reducer(state, _ref2) {
    var type = _ref2.type,
        payload = _ref2.payload;

    switch (type) {
      case 'SET_INDEX_VALUES':
        var _currentPage = payload.currentPage,
            _principalIndex = payload.principalIndex;
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, state), {}, {
          indexValues: {
            currentPage: _currentPage,
            principalIndex: _principalIndex
          }
        });

      case 'SET_ADJACENT_PAGES':
        var _adjacentPages = payload.adjacentPages;
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, state), {}, {
          adjacentPages: _adjacentPages
        });

      default:
        throw new Error();
    }
  }

  var _useReducer = (0, _react.useReducer)(reducer, initialState),
      _useReducer2 = (0, _slicedToArray2.default)(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var chunkedPages = state.chunkedPages,
      pagesArray = state.pagesArray,
      adjacentPages = state.adjacentPages,
      rangeLength = state.rangeLength,
      _state$indexValues = state.indexValues,
      currentPage = _state$indexValues.currentPage,
      principalIndex = _state$indexValues.principalIndex;
  console.log("currentPage ".concat(currentPage));
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, chunkedPages[currentPage].map(function (props) {
    return children(props);
  }), /*#__PURE__*/_react.default.createElement("nav", null, /*#__PURE__*/_react.default.createElement("ul", {
    className: "o-row o-row--gutters"
  }, [/*#__PURE__*/_react.default.createElement(_.ArrowBlock, {
    key: "arrow-left",
    dispatch: dispatch,
    content: "<",
    pages: pages,
    currentPage: currentPage,
    blockType: "leftArrow",
    adjacentPages: adjacentPages,
    blockColor: blockColor
  }), pages > 5 && /*#__PURE__*/_react.default.createElement(_.LimitBlock, {
    key: "limit-left",
    dispatch: dispatch,
    content: "1",
    currentPage: currentPage,
    blockType: "first",
    adjacentPages: adjacentPages,
    blockColor: blockColor
  }), /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    key: "ellipsis-left",
    className: "u-margin-right-small",
    icon: "ellipsis-h",
    color: "gray-dark"
  }), (0, _.range)(pages, principalIndex, adjacentPages, pagesArray, dispatch).map(function (page, blockIndex) {
    return /*#__PURE__*/_react.default.createElement(_.Block, {
      key: blockIndex,
      blockRefs: blockRefs,
      dispatch: dispatch,
      content: page + 1,
      currentPage: currentPage,
      page: page,
      pages: pages,
      principalIndex: principalIndex,
      blockIndex: blockIndex,
      adjacentPages: adjacentPages,
      rangeLength: rangeLength,
      blockColor: blockColor
    });
  }), /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    key: "ellipsis-right",
    className: "u-margin-right-small",
    icon: "ellipsis-h",
    color: "gray-dark"
  }), pages >= 6 && /*#__PURE__*/_react.default.createElement(_.LimitBlock, {
    key: "limit-right",
    dispatch: dispatch,
    content: pages,
    currentPage: currentPage,
    blockType: "last",
    pages: pages,
    adjacentPages: adjacentPages,
    blockColor: blockColor
  }), /*#__PURE__*/_react.default.createElement(_.ArrowBlock, {
    key: "arrow-right",
    dispatch: dispatch,
    content: ">",
    pages: pages,
    blockType: "rightArrow",
    currentPage: currentPage,
    adjacentPages: adjacentPages,
    blockColor: blockColor
  })])));
};

var _default = Paginator;
exports.default = _default;
Paginator.defaultProps = {
  adjacents: 0,
  data: [],
  blockColor: ''
};