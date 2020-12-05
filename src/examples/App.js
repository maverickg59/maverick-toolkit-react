import React, { Fragment } from 'react'
import { Button, Icon, iconLibrary } from '../lib'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  iconLibrary([faHeart])
  return (
    <Fragment>
      <h1>Test your components here:</h1>
    </Fragment>
  )
}

export default App
