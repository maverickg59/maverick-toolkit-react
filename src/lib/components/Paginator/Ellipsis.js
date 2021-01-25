import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../Icon'

const Ellipsis = ({
  position,
  pages,
  isAdjacentEdgeCase,
  adjacents,
  currentPage,
}) => {
  const showEllipsis = () => {
    const leftEdgeCase = currentPage === 2
    if (pages <= 5 || isAdjacentEdgeCase) {
      return false
    }
    if (position === 'left') {
      return currentPage > 1
    }
    if (position === 'right') {
      return true
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
}

export default Ellipsis
