import React from 'react'
import aboutImg from '../../assets/eating.svg'
import './about.style.css'

const About = () => {
  return (
    <section className='about'>
      <div className='container aboutContainer'>
        <div className='leftAbout'>
          <h3 className='divHeader'>About</h3>
          <h2 className='aboutHeader'>Something goes here second header</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, hic
            voluptatem. Aspernatur molestiae eaque dolorum nesciunt consequuntur
            aperiam laboriosam dolores, sed asperiores in, quae expedita eius
            veniam facilis incidunt saepe?
          </p>
        </div>
        <div className='rightAbout'>
          <img src={aboutImg} alt='about' />
        </div>
      </div>
    </section>
  )
}

export default About
