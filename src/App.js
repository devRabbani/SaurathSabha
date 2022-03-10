import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Nav from './component/Nav'
import Footer from './component/Footer'
import Login from './pages/Login'
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
      <Nav setIsModal={setIsModal} user={user} />
      <Switch>
        <Route exact path='/'>
          <HomePage isModal={isModal} setIsModal={setIsModal} />
        </Route>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <ProtectedRoute setIsModal={null} user={user} path='/search' exact>
          <Search />
        </ProtectedRoute>
        <ProtectedRoute
          setIsModal={null}
          user={user}
          exact
          path='/profile/:uid'
        >
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute
          setIsModal={null}
          user={user}
          exact
          path='/edit/profile'
        >
          <EditProfile />
        </ProtectedRoute>
        <ProtectedRoute
          setIsModal={null}
          user={user}
          exact
          path='/edit/additional'
        >
          <EditAdditional />
        </ProtectedRoute>
        <ProtectedRoute exact setIsModal={null} user={user} path='/favourite'>
          <Connection />
        </ProtectedRoute>
        <ProtectedRoute setIsModal={null} user={user} path='/plans'>
          <Plans />
        </ProtectedRoute>
      </Switch>
      <Footer />
      {/* {isModal && (
        <Modal setIsModal={setIsModal}>
          <LoginModal />
        </Modal>
      )} */}
    </UserContext.Provider>
  )
}

export default App
