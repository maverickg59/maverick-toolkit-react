import React from 'react'
import cn from 'classnames'
import { kebabToCamel } from 'maverick-toolkit-utils'

const Button = ({
  color,
  className,
  href,
  onClick,
  children,
  buttonAsLink,
}) => {
  const colorMap = {
    normal: 'c-btn-normal',
    default: 'c-btn-default',
    primary: 'c-btn-primary',
    success: 'c-btn-success',
    info: 'c-btn-info',
    warning: 'c-btn-warning',
    danger: 'c-btn-danger',
    linkDark: 'c-btn-link-dark',
    linkLight: 'c-btn-link-light',
  }

  const classes = cn(className, colorMap[kebabToCamel(color)], {
    'c-btn': buttonAsLink,
  })
  const link = (
    <a className={classes} href={href}>
      {children}
    </a>
  )
  const button = (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
  return href ? link : button
}

export default Button
