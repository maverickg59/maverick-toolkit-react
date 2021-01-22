import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { kebabToCamel } from 'maverick-toolkit-utils'
import { icons } from './Icons'

export default function Icon({
  className = '',
  iconClassName = '',
  size = 'sm',
  color = '',
  customColor = '',
  icon,
}) {
  const classes = cn(className, 'c-icon')
  const colorMap = {
    white: 'c-icon--white',
    grayDark: 'c-icon--gray-dark',
    graySoft: 'c-icon--gray-soft',
    grayLight: 'c-icon--gray-light',
    gray: 'c-icon--gray',
  }
  library.add(icons)
  return (
    <span className={classes}>
      <FontAwesomeIcon
        className={cn(iconClassName, colorMap[kebabToCamel(color)])}
        size={size}
        color={customColor}
        icon={icon}
      />
    </span>
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  customColor: PropTypes.string,
  icon: PropTypes.string.isRequired,
}
