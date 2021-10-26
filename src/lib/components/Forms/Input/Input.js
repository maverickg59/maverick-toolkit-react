import React, { Fragment, forwardRef } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Input = forwardRef(
  (
    {
      placeholder = '',
      className = '',
      onBlur,
      onKeyDown,
      onChange,
      onSelect,
      onPaste,
      name,
      value,
      label,
      type,
    },
    ref
  ) => {
    const classes = cn('c-input', className)

    return (
      <Fragment>
        <label htmlFor={name}>{label}</label>
        <input
          ref={ref}
          placeholder={placeholder}
          className={classes}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          onChange={onChange}
          onSelect={onSelect}
          onPaste={onPaste}
          name={name}
          value={value}
          type={type}
        />
      </Fragment>
    )
  }
)

Input.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
}

export default Input
