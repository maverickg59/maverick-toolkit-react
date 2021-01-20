import React, { Fragment } from 'react'
import { iconLibrary, Paginator } from '../lib'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './App.scss'

import { mockData } from './mockData'
import Card from './Card'

const App = () => {
  iconLibrary([faHeart])
  return (
    <Fragment>
      <h1>Test your components here:</h1>
      <Paginator records={mockData} rows={5} adjacents={2}>
        {({ title, value }) => <Card key={title} title={title} value={value} />}
      </Paginator>
    </Fragment>
  )
}

export default App
