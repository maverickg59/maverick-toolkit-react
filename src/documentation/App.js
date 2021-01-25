import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, SandBox, Typography, headerLinks } from './'
import { Header, iconLibrary } from '../lib'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const App = () => {
  iconLibrary([faHeart])
  return (
    <Fragment>
      <Header links={headerLinks}></Header>
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
