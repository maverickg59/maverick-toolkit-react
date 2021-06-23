import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Button } from '../Button'

const Sidebar = ({
  links,
  color,
  className = '',
  listClassName = '',
  itemClassName = '',
}) => {
  const sideBarClasses = cn('c-sidebar o-col o-col--standard', className)
  const sideBarListClasses = cn('c-sidebar__list o-col__item', listClassName)
  const sideBarItemClasses = cn('c-sidebar__item', itemClassName)
  return (
    <nav className={sideBarClasses}>
      <ul className={sideBarListClasses}>
        {links.map(({ url, title, ariaLabel }) => {
          return (
            <li key={title} className={sideBarItemClasses}>
              <Button color={color} href={url} ariaLabel={ariaLabel}>
                {title}
              </Button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

Sidebar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
  listClassName: PropTypes.string,
  itemClassName: PropTypes.string,
}

export default Sidebar
