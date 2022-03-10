import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './nav.style.css'
import logo from '../../assets/Asset 1@2x.png'
import UserContext from '../../context/user'
import FirebaseContext from '../../context/firebase'
import {
  FaAngleDown,
  FaBell,
  FaChevronDown,
  FaChevronUp,
  FaRegBell,
  FaUserCircle,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Nav = ({ username }) => {
  const { user } = useContext(UserContext)
  const { firebaseApp } = useContext(FirebaseContext)
  const [isMenu, setIsMenu] = useState(false)

  const handleMenu = () => {
    setIsMenu((prev) => !prev)
  }

  return (
    <nav>
      <div className='container navContainer'>
        <div className='logo'>
          <img src={logo} alt='Logo' />

          {/* <NavLink to='/'>SaurathSabha</NavLink> */}
        </div>
        <ul className='nav'>
          <li>
            <NavLink
              className='nav-item'
              exact
              activeClassName='bottomBorder'
              to='/'
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              exact
              activeClassName='bottomBorder'
              className='nav-item'
              to='/search'
            >
              Search
            </NavLink>
          </li>

          <li>
            <NavLink
              exact
              activeClassName='bottomBorder'
              className='nav-item'
              to='/plans'
            >
              Plans
            </NavLink>
          </li>
        </ul>

        {user ? (
          <div className='navUser'>
            <div className='navUserDiv' onClick={handleMenu}>
              <FaUserCircle />
              <p>
                {user.displayName.length > 0 ? user.displayName : 'User Name'}
              </p>
              {isMenu ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isMenu && (
              <div className='overlayMenu'>
                <NavLink
                  activeClassName='bgActive'
                  to={`/profile/${user && user.uid}`}
                >
                  My Profile
                </NavLink>

                <NavLink activeClassName='bgActive' to={`/notification`}>
                  Notification
                </NavLink>

                <NavLink activeClassName='bgActive' to={`/favourite`}>
                  Favourite
                </NavLink>

                <div
                  className='btnLogout'
                  onClick={() => firebaseApp.auth().signOut()}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
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
