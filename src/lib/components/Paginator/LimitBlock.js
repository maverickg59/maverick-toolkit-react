import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Button } from '../Button'

const LimitBlock = ({
  dispatch,
  content,
  currentPage,
  blockType,
  isAdjacentEdgeCase,
  pages,
  adjacentPages = 0,
  blockColor = '',
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
  const isActive = content - 1 === currentPage
  return pages <= 5 || isAdjacentEdgeCase ? null : (
    <li>
      <Button
        ariaCurrent={isActive}
        ariaLabel={`${
          blockType === 'first'
            ? `Goto Page 1${isActive ? ', current page' : ''}`
            : `Goto Page ${pages}${isActive ? ', current page' : ''}`
        }`}
        color={blockColor}
        className={cn('c-paginator__block', {
          'c-paginator__block--active': isActive,
        })}
        onClick={() => handlePageChange()}>
        {content}
      </Button>
    </li>
  )
}

LimitBlock.propTypes = {
  dispatch: PropTypes.func.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  blockType: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  isAdjacentEdgeCase: PropTypes.bool.isRequired,
  pages: PropTypes.number.isRequired,
  adjacentPages: PropTypes.number,
  blockColor: PropTypes.string,
}

export default LimitBlock
