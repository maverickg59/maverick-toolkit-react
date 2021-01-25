import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../Button'

const ArrowBlock = ({
  dispatch,
  content,
  pages,
  currentPage,
  blockType,
  adjacentPages,
  blockColor,
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

  return pages >= 2 ? (
    <li>
      <Button
        ariaLabel={`${
          blockType === 'leftArrow'
            ? 'Navigate one page left'
            : 'Navigate one page right'
        }`}
        className='c-paginator__arrow-block'
        color={blockColor}
        onClick={() => handlePageChange()}>
        {content}
      </Button>
    </li>
  ) : null
}

ArrowBlock.propTypes = {
  dispatch: PropTypes.func.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  currentPage: PropTypes.number.isRequired,
  blockType: PropTypes.string.isRequired,
  pages: PropTypes.number.isRequired,
  adjacentPages: PropTypes.number,
  blockColor: PropTypes.string,
}

ArrowBlock.defaultProps = {
  adjacentPages: 0,
  blockColor: '',
}

export default ArrowBlock
