import React from 'react'
import './heroSection.style.css'
import heroimage from '../../assets/herosvg.svg'
import Button from '../Button'
import bg from '../../assets/bg-abstract1.svg'

const HeroSection = () => {
  return (
    <section className='heroSection container'>
      <div className='leftSide'>
        <img src={heroimage} alt='heroImage' />
      </div>
      <div className='rightSide'>
        <p className='headerTag'>Some header tag goes here for tagline</p>
        <h3 className='formHeader'>Find Your Soulmate</h3>
        <form className='formCard'>
          <div className='form-group'>
            <label className='text-muted'>Name</label>
            <input
              type='text'
              name='name'
              placeholder='Enter Name'
              required
              className='form-control'
            />
          </div>
          <div className='formHorizontal'>
            <div className='form-group'>
              <label className='text-muted'>Employement</label>
              <select
              // value={employement}
              // onChange={(e) => setEmployement(e.target.value)}
              >
                <option value='selfemployed'>Self Employed</option>
                <option value='govt'>Govt Jobs</option>
                <option value='private'>Private Jobs</option>
              </select>
            </div>
            <div className='form-group'>
              <label className='text-muted'>Age</label>
              <select
              // value={employement}
              // onChange={(e) => setEmployement(e.target.value)}
              >
                <option value='20-30'>20-30</option>
                <option value='30-40'>30-40</option>
                <option value='40-50'>40-50</option>
              </select>
            </div>
          </div>
          <div className='form-group'>
            <label className='text-muted'>City</label>
            <input
              type='text'
              name='city'
              placeholder='Enter city'
              required
              className='form-control'
            />
          </div>

          <Button>Search</Button>
        </form>
      </div>
      <div style={{ backgroundImage: `url(${bg})` }} className='bgHero'></div>
    </section>
  )
}

export default HeroSection
