import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.style.css'
import logo from '../../assets/Asset 1@2x.png'

const Nav = () => {
  return (
    <nav>
      <div className='container navContainer'>
        <div className='logo'>
          <img src={logo} alt='Logo' />

          {/* <NavLink to='/'>SaurathSabha</NavLink> */}
        </div>
        <ul className='nav'>
          <li>
            <NavLink className='nav-item' activeClassName='bottomBorder' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName='bottomBorder'
              className='nav-item'
              to='/profile'
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName='bottomBorder'
              className='nav-item'
              to='/search'
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName='bottomBorder'
              className='nav-item'
              to='/dashboard'
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
        <NavLink
          activeClassName='bottomBorder'
          className='nav-item btnNav'
          to='/login'
        >
          Login
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav
