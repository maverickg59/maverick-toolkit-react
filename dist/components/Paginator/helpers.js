"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refIndex = exports.range = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));

var blockIndices = function blockIndices(principalIndex, depth) {
  var range = [];

  for (var i = principalIndex; i < principalIndex + depth; i++) {
    range.push(i);
  }

  return range;
};

var handleInsufficientRange = function handleInsufficientRange(pages, minPages, defaultRange, range, adjacents, dispatch) {
  if (pages < minPages) {
    dispatch({
      type: 'SET_ADJACENT_PAGES',
      payload: {
        adjacentPages: adjacents
      }
    });
  }

  return pages < minPages ? defaultRange : range;
};

var range = function range(pages, principalIndex, adjacentPages, pagesArray, dispatch) {
  if (pages <= 5) {
    return pagesArray;
  }

  if (pages >= 6) {
    return pagesArray.slice(1, pages - 1).reduce(function (results, page) {
      switch (true) {
        case adjacentPages === 2:
          {
            if (page === principalIndex) {
              results.push.apply(results, (0, _toConsumableArray2.default)(blockIndices(principalIndex, handleInsufficientRange(pages, 9, 5, 7, 1, dispatch))));
            }

            break;
          }

        case adjacentPages === 1:
          {
            if (page === principalIndex) {
              results.push.apply(results, (0, _toConsumableArray2.default)(blockIndices(principalIndex, handleInsufficientRange(pages, 7, 3, 5, 0, dispatch))));
            }

            break;
          }

        default:
          {
            if (page === principalIndex) {
              results.push.apply(results, (0, _toConsumableArray2.default)(blockIndices(principalIndex, 3)));
            }

            break;
          }
      }

      return results;
    }, []);
  }
};

exports.range = range;

var refIndex = function refIndex(blockIndex, pages, currentPage, rangeLength) {
  switch (true) {
    case blockIndex === 0:
      {
        if (currentPage === 0 || currentPage === 1 || currentPage === 2) {
          return blockIndex;
        }

        return blockIndex + 1;
      }

    case blockIndex === rangeLength:
      {
        if (currentPage === pages - 1 || currentPage === pages - 2 || currentPage === pages - 3) {
          return blockIndex;
        }

        return blockIndex - 1;
      }

    default:
      {
        return blockIndex;
      }
  }
};

exports.refIndex = refIndex;