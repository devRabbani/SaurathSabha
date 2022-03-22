import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Nav from './component/Nav'
import Footer from './component/Footer'
import Signup from './pages/Signup'
import Search from './pages/Search'
import Profile from './pages/Profile'
import UserContext from './context/user'
import useAuthListener from './hooks/useAuthListner'
import Connection from './pages/connection'
import ProtectedRoute from './utils/protected.route'
import EditProfile from './pages/editProfile'
import EditAdditional from './pages/editAddtional'
import Plans from './pages/plans'
import Modal from './component/Modal'
import LoginModal from './component/LoginModal'
import ModalPage from './pages/ModalPage'
import ModalContext from './context/modal'
import Additional from './pages/additional'

function App() {
  const { user } = useAuthListener()
  const [isModal, setIsModal] = useState(false)

  // useEffect(() => {
  //   if (isModal) {
  //     document.body.style.overflowY = 'hidden'
  //   } else {
  //     document.body.style.overflowY = 'unset'
  //   }
  // }, [isModal])

  return (
    <UserContext.Provider value={{ user }}>
      <ModalContext.Provider value={{ isModal, setIsModal }}>
        <Nav setIsModal={setIsModal} user={user} />
        <div className='pageBody'>
          <Switch>
            <Route exact path='/'>
              <HomePage isModal={isModal} setIsModal={setIsModal} />
            </Route>
            <Route exact path='/signup' component={Signup} />
            <ProtectedRoute user={user} path='/search' exact pathname='/search'>
              <Search />
            </ProtectedRoute>
            <ProtectedRoute
              user={user}
              exact
              path='/profile/:uid'
              pathname='/profile/:uid'
            >
              <Profile />
            </ProtectedRoute>
            <ProtectedRoute
              user={user}
              exact
              path='/edit/profile'
              pathname='/edit/profile'
            >
              <EditProfile />
            </ProtectedRoute>
            <ProtectedRoute
              user={user}
              exact
              path='/edit/additional'
              pathname='/edit/additional'
            >
              <EditAdditional />
            </ProtectedRoute>
            <ProtectedRoute
              exact
              user={user}
              path='/favourite'
              pathname='/favourite'
            >
              <Connection />
            </ProtectedRoute>
            <ProtectedRoute user={user} path='/plans' pathname='/plans'>
              <Plans />
            </ProtectedRoute>
            <ProtectedRoute
              user={user}
              path='/additional'
              pathname='/additional'
            >
              <Additional />
            </ProtectedRoute>
          </Switch>
        </div>
        <Footer />
        {/* {isModal && (
        <Modal setIsModal={setIsModal}>
          <LoginModal />
        </Modal>
      )} */}
      </ModalContext.Provider>
    </UserContext.Provider>
  )
}

export default App
