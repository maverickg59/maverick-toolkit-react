import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../Icon'

const Ellipsis = ({
  position,
  pages,
  isAdjacentEdgeCase,
  adjacents,
  currentPage,
  prevClick,
  rangeLength,
}) => {
  const showEllipsis = () => {
    if (pages <= 5 || isAdjacentEdgeCase) {
      return false
    }
    if (position === 'left' && currentPage > 1) {
      return prevClick === 'block' && currentPage === 2 ? false : true
    }
    if (position === 'right') {
      // range === 5
      // direction = right show when currentPage < 12
      // direction = left show when currentPage < 10

      // range === 7
      // direction = right show when currentPage < 13
      // direction = left show when currentPage < 11
      console.log(currentPage + rangeLength !== pages - 2)
      const arrow = 4 + adjacents * 2
      const block = 4 + adjacents
      //   return currentPage < pages - (prevClick === 'arrow' ? arrow : block)
      return currentPage + rangeLength !== pages - 2
    }
  }
  return showEllipsis() ? (
    <div className='o-row o-align__item--end' aria-hidden='true'>
      <Icon
        ariaLabel='Ellipsis replacing hidden pages'
        className='u-margin-right-small'
        icon='ellipsis-h'
        color='gray-dark'
      />
    </div>
  ) : null
}

Ellipsis.propTypes = {
  position: PropTypes.string.isRequired,
  pages: PropTypes.number.isRequired,
  isAdjacentEdgeCase: PropTypes.bool.isRequired,
  adjacents: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  prevClick: PropTypes.string.isRequired,
  rangeLength: PropTypes.number,
}

export default Ellipsis
