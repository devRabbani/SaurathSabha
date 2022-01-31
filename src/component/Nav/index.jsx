import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './nav.style.css'
import logo from '../../assets/Asset 1@2x.png'
import UserContext from '../../context/user'
import FirebaseContext from '../../context/firebase'

const Nav = () => {
  const { user } = useContext(UserContext)
  const { firebaseApp } = useContext(FirebaseContext)

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
              to={`/profile/${user && user.uid}`}
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
              to='/favourite'
            >
              Favourite
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName='bottomBorder'
              className='nav-item'
              to='/plans'
            >
              Plans
            </NavLink>
          </li>
        </ul>
        {user ? (
          <button
            className='nav-item btnNav'
            onClick={() => firebaseApp.auth().signOut()}
          >
            Logout
          </button>
        ) : (
          <NavLink className='nav-item btnNav' to='/login'>
            Login
          </NavLink>
        )}
      </div>
    </nav>
  )
}

export default Nav
