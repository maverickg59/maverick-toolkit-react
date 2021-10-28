import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Input } from '../'

const Toggle = ({ onChange, checked, name, label, toggleLabels }) => {
  return (
    <Fragment>
      <label htmlFor={name}>{label}</label>
      <span>{checked ? toggleLabels[0] : toggleLabels[1]}</span>
      <Input
        name={name}
        type='checkbox'
        checked={checked}
        onChange={e => onChange(e)(!checked)}
      />
    </Fragment>
  )
}

Toggle.propTypes = {}

export default Toggle
