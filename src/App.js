import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Nav from './component/Nav'
import Footer from './component/Footer'

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
