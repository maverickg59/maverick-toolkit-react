import React from 'react'
import PropTypes from 'prop-types'

const Copyright = ({ established, entity, msg }) => {
  const date = new Date()
  const year = date.getFullYear()
  const text = `${'\u00A9 '}${
    established === parseInt(year) ? '' : established + ' - '
  }${year} ${entity}${msg ? ' ' + msg + '.' : '.'} All rights reserved.`
  return <p>{text}</p>
}

Copyright.propTypes = {
  established: PropTypes.number.isRequired,
  entity: PropTypes.string.isRequired,
}

export default Copyright
