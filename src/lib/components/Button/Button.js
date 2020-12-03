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
  const link = (
    <a className={cn(className, colorMap[color])} href={href}>
      {children}
    </a>
  )
  const button = (
    <button
      className={cn(className, colorMap[color], 'c-btn')}
      onClick={onClick}>
      {children}
    </button>
  )
  return href ? link : button
}

export default Button
