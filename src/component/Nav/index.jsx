import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.style.css'
import logo from '../../assets/logo.png'

const Nav = () => {
  return (
    <nav>
      <div className='container navContainer'>
        <div className='logo'>
          {/* <a href='/'>
            <img src={logo} alt='Logo' />
          </a> */}
          <NavLink to='/'>SaurathSabha</NavLink>
        </div>
        <ul className='nav'>
          <li>
            <NavLink
              className='nav-item'
              activeClassName='bottomBorder'
              to='/create'
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName='bottomBorder'
              className='nav-item'
              to='/about'
            >
              Featured
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName='bottomBorder'
              className='nav-item'
              to='/contact'
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName='bottomBorder'
              className='nav-item'
              to='/contact'
            >
              Services
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
