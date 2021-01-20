import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { refIndex } from './'

const Block = ({
  dispatch,
  content,
  currentPage,
  page,
  pages,
  principalIndex,
  blockIndex,
  adjacentPages,
  rangeLength,
  blockRefs,
}) => {
  const handlePageChange = () => {
    blockRefs.current[
      refIndex(blockIndex, pages, currentPage, rangeLength)
    ].focus()
    const adjacents = adjacentPages * 2
    if (blockIndex === 0) {
      const minPage = page <= 1 ? principalIndex : page - 1
      dispatch({
        type: 'SET_INDEX_VALUES',
        payload: { currentPage: page, principalIndex: minPage },
      })
    } else if (blockIndex === rangeLength) {
      const maxPage =
        page >= pages - 2 ? principalIndex : page - (1 + adjacents)
      dispatch({
        type: 'SET_INDEX_VALUES',
        payload: { currentPage: page, principalIndex: maxPage },
      })
    } else {
      dispatch({
        type: 'SET_INDEX_VALUES',
        payload: { currentPage: page, principalIndex },
      })
    }
  }
  return (
    <li>
      <button
        ref={ref => {
          blockRefs.current[blockIndex] = ref
        }}
        className={cn('c-paginator__block', {
          'c-paginator__block--active': content - 1 === currentPage,
        })}
        onClick={() => handlePageChange()}>
        {content}
      </button>
    </li>
  )
}

Block.propTypes = {
  dispatch: PropTypes.func.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  currentPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  principalIndex: PropTypes.number.isRequired,
  blockIndex: PropTypes.number.isRequired,
  adjacentPages: PropTypes.number.isRequired,
  rangeLength: PropTypes.number.isRequired,
  blockRefs: PropTypes.shape({}).isRequired,
}

export default Block
