import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Page = ({ title, children }) => {
  return (
    <Fragment>
      <div className='o-row u-border-b u-p-lg'>
        <h1 className='u-m-r-sm'>{title}</h1>
      </div>
      {children}
    </Fragment>
  )
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Page
