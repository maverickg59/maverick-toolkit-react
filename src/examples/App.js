import React, { Fragment } from 'react'
import { Button, Icon, iconLibrary, Input, Copyright } from '../lib'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './App.scss'

const App = () => {
  iconLibrary([faHeart])
  return (
    <Fragment>
      <h1>Test your components here:</h1>
      <Icon icon='heart' />
      <Input placeholder='put some data here' />
      <Button color='danger' onClick={() => console.log('hi')}>
        hello
      </Button>
      <Copyright
        entity='Maverick Enterprises'
        established={2010}
        msg="and it's subsidiaries"
      />
    </Fragment>
  )
}

export default App
