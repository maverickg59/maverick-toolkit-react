import React, { useState } from 'react'
import cn from 'classnames'

const Input = ({ placeholder, className }) => {
  const classes = cn(className, 'c-input')
  const [data, setData] = useState('')
  const onChange = e => {
    setData(e.target.value)
  }
  return (
    <input
      className={classes}
      value={data}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default Input
