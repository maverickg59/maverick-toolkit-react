import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Page = ({ title, children }) => {
  return (
    <Fragment>
      <div className='c-docs__header o-row u-p-lg'>
        <h1 className='u-m-r-sm'>{title}</h1>
      </div>
      <div className='c-docs__content o-row u-p-lg'>{children}</div>
    </Fragment>
  )
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Page
