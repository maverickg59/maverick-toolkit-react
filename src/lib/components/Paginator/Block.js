import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Button } from '../Button'
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
  adjacents,
  rangeLength,
  blockColor = '',
  blockRefs,
}) => {
  const handlePageChange = () => {
    dispatch({
      type: 'SET_PREV_CLICK',
      payload: { prevClick: 'block' },
    })
    blockRefs.current[
      refIndex(blockIndex, pages, currentPage, rangeLength, adjacents)
    ].focus()
    const adjacent = adjacentPages * 2
    if (blockIndex === 0) {
      const minPage = page <= 1 ? principalIndex : page - 1
      dispatch({
        type: 'SET_INDEX_VALUES',
        payload: { currentPage: page, principalIndex: minPage, blockIndex },
      })
    } else if (blockIndex === rangeLength) {
      const maxPage = page >= pages - 2 ? principalIndex : page - (1 + adjacent)
      dispatch({
        type: 'SET_INDEX_VALUES',
        payload: { currentPage: page, principalIndex: maxPage, blockIndex },
      })
    } else {
      dispatch({
        type: 'SET_INDEX_VALUES',
        payload: { currentPage: page, principalIndex, blockIndex },
      })
    }
  }
  const isActive = content - 1 === currentPage
  return (
    <li>
      <Button
        ariaCurrent={isActive}
        ariaLabel={`Goto Page ${page + 1}${isActive ? ', current page' : ''}`}
        color={blockColor}
        ref={refValue => (blockRefs.current[blockIndex] = refValue)}
        className={cn('c-paginator__block', {
          'c-paginator__block--active': isActive,
        })}
        onClick={() => handlePageChange()}>
        {content}
      </Button>
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
  blockRefs: PropTypes.shape({}).isRequired,
  adjacentPages: PropTypes.number.isRequired,
  adjacents: PropTypes.number.isRequired,
  rangeLength: PropTypes.number.isRequired,
  blockColor: PropTypes.string,
}

export default Block
