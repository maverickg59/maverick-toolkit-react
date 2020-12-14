import React from 'react'
import cn from 'classnames'

const Button = ({
  color,
  className,
  href,
  onClick,
  children,
  buttonAsLink,
}) => {
  const snakeToCamel = str => {
    const reducer = (acc, value) => acc.concat(value)
    if (typeof str !== 'string') return ''
    const casedArray = str.split('-').map((word, i) => {
      return i === 0 ? word : word.charAt(0).toUpperCase().concat(word.slice(1))
    })
    return casedArray.reduce(reducer)
  }

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

  const classes = cn(className, colorMap[snakeToCamel(color)], {
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
