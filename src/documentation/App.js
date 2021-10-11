import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Sandbox, Typography, headerLinks } from './'
import { Sidebar, iconLibrary } from '../lib'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const App = () => {
  iconLibrary([faHeart])
  return (
    <div className='o-col o-col--standard'>
      <div className='c-docs__main o-row'>
        <div className='o-row__item o-row__item--shrink'>
          <Sidebar color='link-light' links={headerLinks} />
        </div>
        <div className='o-row__item'>
          <div className='o-row'>
            <div className='o-row__item u-1/1'>
              <Router>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/sandbox' component={Sandbox} />
                  <Route exact path='/typography' component={Typography} />
                </Switch>
              </Router>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
