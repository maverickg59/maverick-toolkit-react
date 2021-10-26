import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '..'

const PercentInput = ({ placeholder, onChange, name, label, value, type }) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      label={label}
      name={name}
      onChange={e => {
        onChange(e.target.value)
      }}
      value={value}
    />
  )
}

PercentInput.propTypes = {}

export default PercentInput
