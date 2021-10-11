import React, { forwardRef } from 'react'
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
    },
    ref
  ) => {
    const classes = cn('c-input', className)

    return (
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
      />
    )
  }
)

Input.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
}

export default Input
