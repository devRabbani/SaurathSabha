import React from 'react'
import './services.style.css'
import Button from '../Button'
import serviceImg from '../../assets/services.webp'
import bg from '../../assets/aboutpattern.png'
import { Link } from 'react-router-dom'
const Services = () => {
  return (
    <section
      className='service'
      style={{
        backgroundImage: `linear-gradient(to right,#431757ad,#ff6347c7),url(${bg})`,
      }}
    >
      <div className='container serviceContainer'>
        <div className='leftService'>
          <img className='aboutImg' src={serviceImg} alt='about' />
        </div>
        <div className='rightService'>
          <h3 className='divHeader'>Services</h3>
          <h2 className='serviceHeader'>Something goes here second header</h2>
          <p className='servicePara'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, hic
            voluptatem. Aspernatur molestiae eaque dolorum nesciunt consequuntur
            aperiam laboriosam dolores, sed asperiores in, quae expedita eius
            veniam facilis incidunt saepe?
          </p>
          <Link className='btn btnRing' to='/service/register'>
            Register Now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services
