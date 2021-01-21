import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Button } from '../Button'

const LimitBlocks = ({
  dispatch,
  content,
  currentPage,
  blockType,
  pages,
  adjacentPages,
  blockColor,
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
      <Button
        color={blockColor}
        className={cn('c-paginator__block', {
          'c-paginator__block--active': content - 1 === currentPage,
        })}
        onClick={() => handlePageChange()}>
        {content}
      </Button>
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
  blockColor: PropTypes.string,
}

LimitBlocks.defaultProps = {
  pages: null,
  adjacentPages: 0,
  blockColor: '',
}

export default LimitBlocks
