import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Copyright = ({ className = '', established, entity, msg = '' }) => {
  const classes = cn(className, 'c-copyright__notice')
  const date = new Date()
  const year = date.getFullYear()
  const text = `${'\u00A9 '}${
    established === parseInt(year) ? '' : established + ' - '
  }${year} ${entity}${msg ? ' ' + msg + '.' : '.'} All rights reserved.`
  return <p className={classes}>{text}</p>
}

Copyright.propTypes = {
  className: PropTypes.string,
  established: PropTypes.number.isRequired,
  entity: PropTypes.string.isRequired,
  msg: PropTypes.string,
}

export default Copyright
