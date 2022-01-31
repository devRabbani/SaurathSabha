import React, { useContext, useEffect } from 'react'
import About from '../../component/About'
import Featured from '../../component/Featured'
import HeroSection from '../../component/HeroSection'
import Services from '../../component/Services'
import Testimony from '../../component/Testimony'
import WhyUs from '../../component/WhyUs'
import UserContext from '../../context/user'
import { getUserByUid } from '../../utils/firebase'

const HomePage = () => {
  const { user } = useContext(UserContext)

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
    </>
  )
}

export default HomePage
