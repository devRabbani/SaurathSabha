import React from 'react'
import aboutImg from '../../assets/2.jpg'
import rangoliImg from '../../assets/rangoli.png'
import './about.style.css'

const About = () => {
  return (
    <section className='about'>
      <div className='container aboutContainer'>
        <img src={rangoliImg} alt='rangoli' className='rangoliBg' />
        <div className='leftAbout'>
          <h3 className='divHeader'>About</h3>
          <h2 className='aboutHeader'>Something goes here second header</h2>
          <p className='aboutPara'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, hic
            voluptatem. Aspernatur molestiae eaque dolorum nesciunt consequuntur
            aperiam laboriosam dolores, sed asperiores in, quae expedita eius
            veniam facilis incidunt saepe?
          </p>
        </div>
        <div className='rightAbout'>
          <img className='aboutImg' src={aboutImg} alt='about' />
        </div>
      </div>
    </section>
  )
}

export default About
