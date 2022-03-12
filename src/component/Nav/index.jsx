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
  FaRupeeSign,
  FaSearch,
  FaHouseUser,
  FaHeart,
  FaHome,
  FaUserAlt,
  FaSignOutAlt,
  FaSignInAlt,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const Nav = ({ user, setIsModal }) => {
  const history = useHistory()
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
              <FaHome /> Home
            </NavLink>
          </li>

          <li>
            <NavLink
              exact
              activeClassName='bottomBorder'
              className='nav-item'
              to='/search'
            >
              <FaSearch /> Search
            </NavLink>
          </li>

          <li>
            <NavLink
              exact
              activeClassName='bottomBorder'
              className='nav-item'
              to='/plans'
            >
              <FaRupeeSign /> Plans
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
              {/* {isMenu ? <FaChevronUp /> : <FaChevronDown />} */}

              <FaChevronUp className={isMenu && 'tick'} />
            </div>
            {isMenu && (
              <div className='overlayMenu'>
                <NavLink
                  activeClassName='bgActive'
                  to={`/profile/${user && user.uid}`}
                >
                  <FaUserAlt /> My Profile
                </NavLink>

                <NavLink activeClassName='bgActive' to={`/notification`}>
                  <FaBell /> Notification
                </NavLink>

                <NavLink activeClassName='bgActive' to={`/favourite`}>
                  <FaHeart /> Favourite
                </NavLink>

                <div
                  className='btnLogout'
                  onClick={() => firebaseApp.auth().signOut()}
                >
                  <FaSignOutAlt /> Logout
                </div>
              </div>
            )}
          </div>
        ) : (
          <button onClick={() => setIsModal(true)} className='btnNav'>
            <FaSignInAlt /> Login
          </button>
        )}
      </div>
    </nav>
  )
}

export default Nav
