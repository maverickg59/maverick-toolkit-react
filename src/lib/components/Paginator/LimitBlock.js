import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const LimitBlocks = ({
  dispatch,
  content,
  currentPage,
  blockType,
  pages,
  adjacentPages,
}) => {
  const handlePageChange = () => {
    if (blockType === 'first') {
      dispatch({
        type: 'SET_INDEX_VALUES',
        payload: { currentPage: 0, principalIndex: 1 },
      })
    }
    if (blockType === 'last') {
      dispatch({
        type: 'SET_INDEX_VALUES',
        payload: {
          currentPage: pages - 1,
          principalIndex: pages - (4 + adjacentPages * 2),
        },
      })
    }
  }
  return (
    <li>
      <button
        className={cn('c-paginator__block', {
          'c-paginator__block--active': content - 1 === currentPage,
        })}
        onClick={() => handlePageChange()}>
        {content}
      </button>
    </li>
  )
}

LimitBlocks.propTypes = {
  dispatch: PropTypes.func.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  blockType: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  pages: PropTypes.number,
  adjacentPages: PropTypes.number,
}

LimitBlocks.defaultProps = {
  pages: null,
  adjacentPages: 0,
}

export default LimitBlocks
