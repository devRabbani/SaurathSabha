import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import About from '../../component/About'
import Featured from '../../component/Featured'
import HeroSection from '../../component/HeroSection'
import LoginModal from '../../component/LoginModal'
import Modal from '../../component/Modal'
import Services from '../../component/Services'
import Testimony from '../../component/Testimony'
import WhyUs from '../../component/WhyUs'
import UserContext from '../../context/user'
import { getUserByUid } from '../../utils/firebase'

const HomePage = ({ isModal, setIsModal }) => {
  const { user } = useContext(UserContext)
  const location = useLocation()
  useEffect(() => {
    if (isModal) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'unset'
    }
  }, [isModal])
  useEffect(() => {
    if (location?.state) {
      setIsModal(location.state)
    }
  }, [location])

  console.log(`isModal : ${isModal}, Location : ${location?.state}`)
  // useEffect(() => {
  //   const result = getUserByUid(user.uid)
  //   console.log(result)
  // }, [])

  return (
    <>
      <HeroSection />
      <Featured />
      <About />
      <Services />
      <WhyUs />
      <Testimony />
      {isModal && (
        <Modal setIsModal={setIsModal}>
          <LoginModal />
        </Modal>
      )}
    </>
  )
}

export default HomePage
