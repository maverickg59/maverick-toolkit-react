import React from 'react'
import { Button } from '../Button'
import PropTypes from 'prop-types'

const Header = ({ links }) => {
  return links.map(({ url, title }) => {
    return (
      <Button key={title} color='link-dark' href={url}>
        {title}
      </Button>
    )
  })
}

Header.propTypes = {}

export default Header
