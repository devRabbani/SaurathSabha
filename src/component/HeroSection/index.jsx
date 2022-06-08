import React, { useState, useEffect } from 'react'
import './heroSection.style.css'
import heroimage from '../../assets/1.jpg'
import bg from '../../assets/herobg.webp'
import bgwave from '../../assets/wave-bottom.svg'
import slugify from 'slugify'
import { Link } from 'react-router-dom'
import Profile from '../../pages/Profile'
import Select from 'react-select'

const HeroSection = () => {
  const [searchData, setSearchData] = useState({
    name: '',
    pfor: '',
    age: '',
    gender: '',
    city: '',
    emp: '',
  })
  const { name, pfor, age, gender, city, emp } = searchData
  const handleChange = (e) => {
    e.preventDefault()

    const { name, value } = e.target
    setSearchData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const option = [
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'assam', label: 'Assam' },
    { value: 'patna', label: 'Patna' },
  ]

  return (
    <section className='heroSectionWrapper'>
      <div
        className='bgHero'
        style={{
          backgroundImage: `linear-gradient(to right,rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),url(${bg})`,
        }}
      />
      <div className='heroSection container'>
        {/* <div className='leftSide'>
          <img src={heroimage} alt='heroImage' />
        </div> */}
        <div className='rightSide'>
          <p className='headerTag'>
            We find the best match for your future mate
          </p>
          <h3 className='formHeader'>
            Find Your <span>Soulmate</span>
          </h3>
          <form className='formCard'>
            <div className='formHorizontal nameAgeForm'>
              <div className='form-group'>
                <label className='text-muted'>Age</label>
                <select name='age' value={age} onChange={handleChange}>
                  <option value=''>Any</option>
                  <option value='20-30'>20-30</option>
                  <option value='30-40'>30-40</option>
                  <option value='40-50'>40-50</option>
                </select>
              </div>

              <div className='form-group'>
                <label className='text-muted'>
                  City <span>*</span>
                </label>
                {/* <input
                onChange={handleChange}
                type='text'
                name='city'
                placeholder='Enter city'
                value={city}
                className='form-control'
              /> */}
                <Select
                  options={option}
                  onChange={(e) => console.log(e)}
                  placeholder='Select location'
                  isSearchable
                  isClearable
                />
              </div>
            </div>
            <div className='formHorizontal threeCol'>
              <div className='form-group'>
                <label className='text-muted'>ProfileFor</label>
                <select onChange={handleChange} name='pfor' value={pfor}>
                  <option value=''>All</option>
                  <option value='own'>Own</option>
                  <option value='family'>Family</option>
                </select>
              </div>
              <div className='form-group'>
                <label className='text-muted'>Gender</label>
                <select onChange={handleChange} name='gender' value={gender}>
                  <option value='all'>All</option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
              </div>
              <div className='form-group'>
                <label className='text-muted'>Employement</label>
                <select onChange={handleChange} name='emp' value={emp}>
                  <option value='all'>All</option>
                  <option value='selfemployed'>Self Employed</option>
                  <option value='govt'>Govt Jobs</option>
                  <option value='private'>Private Jobs</option>
                </select>
              </div>
            </div>
            <div className='form-group'>
              <label className='text-muted'>
                Name <span>*</span>
              </label>
              <input
                onChange={handleChange}
                type='text'
                name='name'
                placeholder='Enter Name'
                value={name}
                className='form-control'
              />
            </div>
            <p></p>
            <Link
              to={{ pathname: '/search', state: searchData }}
              className='btn btnGetstarted'
            >
              Search
            </Link>
          </form>
        </div>
        <div
          style={{ backgroundImage: `url(${bgwave})` }}
          className='bgWave'
        ></div>
      </div>
    </section>
  )
}

export default HeroSection
