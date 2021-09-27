import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Nav from './component/Nav'
import Footer from './component/Footer'
import Login from './pages/Login'

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={Login} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
