import React from 'react'
import './whyus.style.css'
import whyusimg1 from '../../assets/herosvg.svg'
import whyusimg2 from '../../assets/wedding.svg'
import whyusimg3 from '../../assets/eating.svg'

const WhyUs = () => {
  return (
    <section className='whyus container'>
      <h3 className='sectionHeading whyusheading'>Why Us?</h3>
      <div className='whyusContainer'>
        <div className='whycard'>
          <div className='imgcard'>
            <img src={whyusimg1} alt='whyus' />
          </div>

          <h3>Some point here</h3>
          <p>
            Ea voluptatum hic animi illum similique eius maxime non corporis
            eligendi, rem doloribus nam harum voluptatem
          </p>
        </div>
        <div className='whycard'>
          <div className='imgcard'>
            <img src={whyusimg2} alt='whyus' />
          </div>
          <h3>Some point here</h3>
          <p>
            Ea voluptatum hic animi illum similique eius maxime non corporis
            eligendi, rem doloribus nam harum voluptatem
          </p>
        </div>
        <div className='whycard'>
          <div className='imgcard'>
            <img src={whyusimg3} alt='whyus' />
          </div>
          <h3>Some point here</h3>
          <p>
            Ea voluptatum hic animi illum similique eius maxime non corporis
            eligendi, rem doloribus nam harum
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
