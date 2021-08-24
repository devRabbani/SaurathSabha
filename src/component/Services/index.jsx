import React from 'react'
import './services.style.css'
import Button from '../Button'
import serviceImg from '../../assets/wedding.svg'
const Services = () => {
  return (
    <section className='service'>
      <div className='container serviceContainer'>
        <div className='leftService'>
          <div className='imageCard'>
            <img className='aboutImg' src={serviceImg} alt='about' />
          </div>
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
          <Button>Register Now</Button>
        </div>
      </div>
    </section>
  )
}

export default Services
