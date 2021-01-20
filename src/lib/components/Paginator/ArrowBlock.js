import React from 'react'
import PropTypes from 'prop-types'

const ArrowBlock = ({
  dispatch,
  content,
  pages,
  currentPage,
  blockType,
  adjacentPages,
}) => {
  const handlePageChange = () => {
    if (blockType === 'leftArrow' && currentPage !== 0) {
      if (currentPage < 3) {
        dispatch({
          type: 'SET_INDEX_VALUES',
          payload: { currentPage: currentPage - 1, principalIndex: 1 },
        })
      } else if (currentPage > pages - (3 + adjacentPages * 2)) {
        dispatch({
          type: 'SET_INDEX_VALUES',
          payload: {
            currentPage: currentPage - 1,
            principalIndex: pages - (4 + adjacentPages * 2),
          },
        })
      } else {
        dispatch({
          type: 'SET_INDEX_VALUES',
          payload: {
            currentPage: currentPage - 1,
            principalIndex: currentPage - 1,
          },
        })
      }
    }
    if (blockType === 'rightArrow' && currentPage !== pages - 1) {
      if (currentPage < 2) {
        dispatch({
          type: 'SET_INDEX_VALUES',
          payload: {
            currentPage: currentPage + 1,
            principalIndex: currentPage + 1,
          },
        })
      } else if (currentPage >= pages - (4 + adjacentPages * 2)) {
        dispatch({
          type: 'SET_INDEX_VALUES',
          payload: {
            currentPage: currentPage + 1,
            principalIndex: pages - (4 + adjacentPages * 2),
          },
        })
      } else {
        dispatch({
          type: 'SET_INDEX_VALUES',
          payload: {
            currentPage: currentPage + 1,
            principalIndex: currentPage + 1,
          },
        })
      }
    }
  }

  return (
    <li>
      <button
        className='c-paginator__arrow-block'
        onClick={() => handlePageChange()}>
        {content}
      </button>
    </li>
  )
}

ArrowBlock.propTypes = {
  dispatch: PropTypes.func.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  currentPage: PropTypes.number.isRequired,
  blockType: PropTypes.string.isRequired,
  pages: PropTypes.number.isRequired,
  adjacentPages: PropTypes.number,
}

ArrowBlock.defaultProps = {
  adjacentPages: 0,
}

export default ArrowBlock
