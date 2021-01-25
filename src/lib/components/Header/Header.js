import React from 'react'
import { Button } from '../Button'
import PropTypes from 'prop-types'

const Header = ({ links }) => {
  return links.map(({ url, title, ariaLabel }) => {
    return (
      <Button key={title} color='link-dark' href={url} ariaLabel={ariaLabel}>
        {title}
      </Button>
    )
  })
}

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default Header
