import React, { Fragment } from 'react'
import { iconLibrary, Paginator, Button } from '../lib'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './App.scss'

import { mockData } from './mockData'
import Card from './Card'

const App = () => {
  iconLibrary([faHeart])
  return (
    <Fragment>
      <h1>Test your components here:</h1>
      <Paginator blockColor='primary' records={mockData} rows={5} adjacents={1}>
        {({ title, value }) => <Card key={title} title={title} value={value} />}
      </Paginator>
      <div className='o-row o-row--gutters'>
        <Button href='/' color='link-dark'>
          Link
        </Button>
        <Button href='/' color='primary' linkAsButton>
          Link as button
        </Button>
        <Button onClick={() => console.log('hello')} color='primary'>
          Click me
        </Button>
      </div>
    </Fragment>
  )
}

export default App
