import React from 'react'
import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Icon({ className, size, color, icon }) {
  return (
    <span>
      <FontAwesomeIcon
        className={cn(className, 'c-icon')}
        size={size}
        color={color}
        icon={icon}
      />
    </span>
  )
}
