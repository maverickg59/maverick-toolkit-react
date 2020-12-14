import React from 'react'
import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Icon({ className, iconClassName, size, color, icon }) {
  const classes = cn(className, 'c-icon')
  return (
    <span className={classes}>
      <FontAwesomeIcon
        className={iconClassName}
        size={size}
        color={color}
        icon={icon}
      />
    </span>
  )
}
