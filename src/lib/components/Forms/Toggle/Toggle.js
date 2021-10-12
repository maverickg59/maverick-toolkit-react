import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { toggle } from '../../..'

const Toggle = ({ onChange, checked, name, label }) => {
  return (
    <Fragment>
      <label htmlFor={name}>{label}</label>
      <span>{checked ? toggle.TOGGLE_ON : toggle.TOGGLE_OFF}</span>
      <input
        name={name}
        type='checkbox'
        checked={checked}
        onChange={() => onChange(!checked)}
      />
    </Fragment>
  )
}

Toggle.propTypes = {}

export default Toggle
