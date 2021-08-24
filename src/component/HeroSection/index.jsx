import React from 'react'
import './heroSection.style.css'
import heroimage from '../../assets/herosvg.svg'
import Button from '../Button'
import bg from '../../assets/bg-abstract.svg'

const HeroSection = () => {
  return (
    <section className='heroSection container'>
      <div className='leftSide'>
        <img src={heroimage} alt='heroImage' />
      </div>
      <div className='rightSide'>
        <p className='headerTag'>Some header tag goes here</p>
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
          <div className='twoCol'>
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
          </div>
          <div className='form-group'>
            <label className='text-muted'>Password</label>
            <input
              type='password'
              name='password'
              placeholder='Enter password'
              required
              className='form-control'
            />
          </div>

          <Button>Register</Button>
        </form>
      </div>
      <div style={{ backgroundImage: `url(${bg})` }} className='bgHero'></div>
    </section>
  )
}

export default HeroSection
