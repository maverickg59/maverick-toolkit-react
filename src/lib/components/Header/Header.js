import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Button } from '../Button'

const Header = ({ links = [], color, className, logoText }) => {
  const classes = cn('c-header u-p-s-md', className)
  return (
    <header className={classes}>
      <nav className='c-header__nav o-row o-align--center'>
        {logoText && (
          <div className='c-header__logo--text-only o-row__item u-1/3'>
            <Button href='/' color={color} ariaLabel='Link to home page'>
              {logoText}
            </Button>
          </div>
        )}
        {links && (
          <div className='o-row__item u-2/3'>
            <ul className='o-row o-row--gutters o-justify--end o-align--center'>
              {links.map(({ url, title, ariaLabel }) => {
                return (
                  <li>
                    <Button
                      key={title}
                      color={color}
                      href={url}
                      ariaLabel={ariaLabel}>
                      {title}
                    </Button>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({})),
}

export default Header
