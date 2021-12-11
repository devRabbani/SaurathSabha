import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import Connected from '../../component/Connected'
import Favourite from '../../component/Favourite'
import './connection.style.css'

const Connection = () => {
  return (
    <div className='container pageBody'>
      <h1 className='pageHeading'>Your Connection</h1>
      <div>
        <div className='requested'>
          <p>Requested</p>
        </div>
        <div className='connectionBtnDiv'>
          <NavLink to='/connection/connected' activeClassName='connectActive'>
            Connected
          </NavLink>
          <NavLink to='/connection/favourite' activeClassName='connectActive'>
            My Favourite
          </NavLink>
        </div>
        <Switch>
          <Route path='/connection/favourite' component={Favourite} />
          <Route path='/connection/connected' component={Connected} />
        </Switch>
      </div>
    </div>
  )
}

export default Connection
