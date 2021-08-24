import React from 'react'
import About from '../../component/About'
import Featured from '../../component/Featured'
import HeroSection from '../../component/HeroSection'
import Services from '../../component/Services'
import Testimony from '../../component/Testimony'
import WhyUs from '../../component/WhyUs'

const HomePage = () => {
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
