import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Nav from './component/Nav'
import Footer from './component/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Search from './pages/Search'
import Profile from './pages/Profile'

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/profile' component={Profile} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
