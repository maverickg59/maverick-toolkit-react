"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));

var _react = _interopRequireWildcard(require("react"));

var _maverickToolkitUtils = require("maverick-toolkit-utils");

var _ = require("./");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Paginator = function Paginator(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      children = _ref.children,
      records = _ref.records,
      rows = _ref.rows,
      _ref$adjacents = _ref.adjacents,
      adjacents = _ref$adjacents === void 0 ? 0 : _ref$adjacents,
      _ref$blockColor = _ref.blockColor,
      blockColor = _ref$blockColor === void 0 ? '' : _ref$blockColor;
  var pages = data.length ? data.length : Math.ceil(records.length / rows);
  var blockRefs = (0, _react.useRef)([]);
  var initialState = {
    chunkedPages: data.length ? data : (0, _maverickToolkitUtils.chunk)(records, rows),
    pagesArray: (0, _toConsumableArray2.default)(Array(pages).keys()),
    adjacentPages: adjacents,
    adjacentEdgeCase: (0, _.isAdjacentEdgeCase)(pages, adjacents),
    rangeLength: 2 + adjacents * 2,
    prevClick: '',
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
        var _adjacentPages = payload.adjacentPages,
            _rangeLength = payload.rangeLength;
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, state), {}, {
          adjacentPages: _adjacentPages,
          rangeLength: _rangeLength
        });

      case 'SET_PREV_CLICK':
        var _prevClick = payload.prevClick,
            page = payload.page;
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, state), {}, {
          prevClick: _prevClick,
          page: page
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
      adjacentEdgeCase = state.adjacentEdgeCase,
      rangeLength = state.rangeLength,
      prevClick = state.prevClick,
      _state$indexValues = state.indexValues,
      currentPage = _state$indexValues.currentPage,
      principalIndex = _state$indexValues.principalIndex;
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, chunkedPages[currentPage].map(function (props) {
    return children(props);
  }), /*#__PURE__*/_react.default.createElement("nav", null, /*#__PURE__*/_react.default.createElement("ul", {
    className: "o-row o-row--gutters",
    role: "navigation",
    "aria-label": "Pagination Navigation, pages 1 through ".concat(pages)
  }, [/*#__PURE__*/_react.default.createElement(_.ArrowBlock, {
    key: "arrow-left",
    dispatch: dispatch,
    content: "<",
    pages: pages,
    currentPage: currentPage,
    blockType: "leftArrow",
    adjacentPages: adjacentPages,
    blockColor: blockColor
  }), /*#__PURE__*/_react.default.createElement(_.LimitBlock, {
    key: "limit-left",
    dispatch: dispatch,
    content: "1",
    currentPage: currentPage,
    blockType: "first",
    isAdjacentEdgeCase: adjacentEdgeCase,
    adjacentPages: adjacentPages,
    pages: pages,
    blockColor: blockColor
  }), /*#__PURE__*/_react.default.createElement(_.Ellipsis, {
    key: "ellipsis-left",
    position: "left",
    pages: pages,
    currentPage: currentPage,
    adjacents: adjacents,
    isAdjacentEdgeCase: adjacentEdgeCase,
    prevClick: prevClick
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
      adjacents: adjacents,
      rangeLength: rangeLength,
      blockColor: blockColor
    });
  }), /*#__PURE__*/_react.default.createElement(_.Ellipsis, {
    key: "ellipsis-right",
    position: "right",
    pages: pages,
    currentPage: currentPage,
    adjacents: adjacents,
    isAdjacentEdgeCase: adjacentEdgeCase,
    prevClick: prevClick,
    rangeLength: rangeLength
  }), /*#__PURE__*/_react.default.createElement(_.LimitBlock, {
    key: "limit-right",
    dispatch: dispatch,
    content: pages,
    currentPage: currentPage,
    blockType: "last",
    pages: pages,
    isAdjacentEdgeCase: adjacentEdgeCase,
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