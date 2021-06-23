import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Input = ({ placeholder = '', className = '', onChange, value }) => {
  const classes = cn(className, 'c-input')
  // const [data, setData] = useState('')
  // const onChange = e => {
  //   setData(e.target.value)
  // }
  return (
    <input
      className={classes}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
}

export default Input
