import React, { Fragment } from 'react'
import { Button, Icon, iconLibrary, Input } from '../lib'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  iconLibrary([faHeart])
  return (
    <Fragment>
      <h1>Test your components here:</h1>
      <Input placeholder='put some data here' />
    </Fragment>
  )
}

export default App
