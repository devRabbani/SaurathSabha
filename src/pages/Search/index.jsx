import React, { useContext, useEffect, useState } from 'react'
import SearchCardList from '../../component/SearchCardList'
import FirebaseContext from '../../context/firebase'
import UserContext from '../../context/user'
import { fetchAllUsers, fetchFilterData } from '../../utils/firebase'
import './search.style.css'

const Search = ({ location }) => {
  const { firebaseApp } = useContext(FirebaseContext)
  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState([])
  const [searchName, setSearchName] = useState('')
  const [isBtnLoading, setIsBtnLoading] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const [filters, setFilters] = useState({
    age: '',
    employement: '',
    profileFor: '',
    city: '',
    gender: '',
  })

  const { age, employement, profileFor, city, gender } = filters

  const { user } = useContext(UserContext)
  // const searchString = location.state

  const handleChange = (e) => {
    const { name, value } = e.target
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const searchByName = () => {
    if (searchName !== '') {
      const newData = data.filter((item) =>
        item.name.toLowerCase().includes(searchName.toLowerCase())
      )
      setFilterData(newData)
    } else {
      setFilterData(data)
    }
  }

  const handleFilter = async () => {
    setIsBtnLoading(true)
    try {
      const result = await fetchFilterData(
        age,
        city,
        employement,
        profileFor,
        gender,
        user?.uid
      )
      setData(result)
    } catch (error) {
      console.log('Something went wrong', error)
    }

    setIsBtnLoading(false)
  }
  const handleSearch = async () => {
    setIsBtnLoading(true)
    await searchByName()
    setIsBtnLoading(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAllUsers(user?.uid)
      setIsLoading(false)
      setData(result)
    }
    try {
      fetchData()
    } catch (error) {
      console.log('Something Went Wrong', error)
    }
  }, [])

  return (
    <div className='pageBody container'>
      <h1 className='pageHeading'>Search</h1>
      <div className='searchWrapper'>
        <div className='filterWrapper'>
          <select onChange={handleChange} value={gender} name='gender'>
            <option value=''>Select Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
          <select onChange={handleChange} value={age} name='age'>
            <option value=''>Select Age Group</option>
            <option value='20-30'>20-30</option>
            <option value='30-40'>30-40</option>
            <option value='40-50'>40-50</option>
          </select>
          <select onChange={handleChange} value={city} name='city'>
            <option value=''>Select City</option>
            <option value='bangalore'>Bangalore</option>
            <option value='patna'>Patna</option>
            <option value='dhubri'>Dhubri</option>
          </select>
          <select onChange={handleChange} value={profileFor} name='profileFor'>
            <option value=''>Select Profile</option>
            <option value='myself'>Self</option>
            <option value='other'>Others</option>
          </select>
          <select
            onChange={handleChange}
            value={employement}
            name='employement'
          >
            <option value=''>Employement Type</option>
            <option value='govt'>Govt Employee</option>
            <option value='selfemployeed'>Self Employed</option>
            <option value='privatejobs'>Private Jobs</option>
          </select>
          <button
            onClick={handleFilter}
            disabled={isBtnLoading}
            className='btnSearch'
          >
            {isBtnLoading ? 'Loading' : 'Filter'}
          </button>
        </div>
        <div className='searchDiv'>
          <input
            type='text'
            value={searchName}
            placeholder='Search By Name'
            onChange={(e) => setSearchName(e.target.value)}
          />
          <button
            onClick={handleSearch}
            disabled={isBtnLoading}
            className='btnSearch'
          >
            {isBtnLoading ? 'Loading' : 'Search'}
          </button>
        </div>
        {isLoading ? (
          <p className='loading'>Loading...</p>
        ) : data.length > 0 ? (
          <SearchCardList data={searchName.length < 1 ? data : filterData} />
        ) : (
          <p className='noUsers'>No Users Found</p>
        )}
      </div>
    </div>
  )
}

export default Search
