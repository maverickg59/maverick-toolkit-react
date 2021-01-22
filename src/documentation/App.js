import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, SandBox, Typography, paginatorData, headerLinks } from './'
import { Header, iconLibrary, Paginator } from '../lib'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './App.scss'

import Card from './components/Card'

const App = () => {
  iconLibrary([faHeart])
  return (
    <Fragment>
      <Header links={headerLinks}></Header>
      <Paginator
        blockColor='primary'
        records={paginatorData}
        rows={10}
        adjacents={1}>
        {({ title, value }) => <Card key={title} title={title} value={value} />}
      </Paginator>
      <Router>
        <section>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/sandbox' component={SandBox} />
            <Route exact path='/typography' component={Typography} />
          </Switch>
        </section>
      </Router>
    </Fragment>
  )
}

export default App
