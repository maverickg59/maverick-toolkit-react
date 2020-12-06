import React from 'react'
import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Icon({ className, size, color, icon }) {
  const classes = cn(className, 'c-icon')
  return (
    <span>
      <FontAwesomeIcon
        className={classes}
        size={size}
        color={color}
        icon={icon}
      />
    </span>
  )
}
