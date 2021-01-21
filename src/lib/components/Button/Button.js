import React, { Fragment, forwardRef } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { kebabToCamel } from 'maverick-toolkit-utils'

const Button = forwardRef(
  (
    {
      color = '',
      className = '',
      href = '',
      onClick = () => {},
      children = <Fragment />,
    },
    ref
  ) => {
    const colorMap = {
      normal: 'c-btn--normal',
      default: 'c-btn--default',
      primary: 'c-btn--primary',
      success: 'c-btn--success',
      info: 'c-btn--info',
      warning: 'c-btn--warning',
      danger: 'c-btn--danger',
      linkDark: 'c-btn--link-dark',
      linkLight: 'c-btn--link-light',
    }

    const classes = cn(className, colorMap[kebabToCamel(color)])
    const link = (
      <a className={classes} href={href}>
        {children}
      </a>
    )
    const button = (
      <button ref={ref} className={classes} onClick={onClick}>
        {typeof children === 'function' ? props => children(props) : children}
      </button>
    )
    return href ? link : button
  }
)

Button.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  linkAsButton: PropTypes.bool,
}

export default Button
