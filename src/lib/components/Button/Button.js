import React from 'react'
import cn from 'classnames'

const Button = ({ color, className, href, onClick, children }) => {
  const colorMap = {
    normal: 'c-btn-normal',
    default: 'c-btn-default',
    primary: 'c-btn-primary',
    success: 'c-btn-success',
    info: 'c-btn-info',
    warning: 'c-btn-warning',
    danger: 'c-btn-danger',
    link: 'c-btn-link',
  }
  const classes = cn(className, colorMap[color], href ? null : 'c-btn')
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
