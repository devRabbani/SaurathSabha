import React, { useContext, useEffect, useState } from 'react'
import SearchCardList from '../../component/SearchCardList'
import FirebaseContext from '../../context/firebase'
import './search.style.css'

const Search = ({ location }) => {
  const { firebaseApp } = useContext(FirebaseContext)
  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState([])
  const [searchName, setSearchName] = useState('')
  const searchString = location.state

  const fetchSearch = () => {
    firebaseApp
      .firestore()
      .collection('users')
      .get()
      .then((querySnapshot) => {
        let list = []
        querySnapshot.forEach((doc) => {
          list.push(doc.data())
        })
        setData(list)
      })
      .catch((error) => {
        console.log('Error getting documents: ', error)
      })
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

  useEffect(() => {
    fetchSearch()
  }, [])
  useEffect(() => {
    searchByName()
  }, [searchName])

  return (
    <div className='pageBody container'>
      <h1 className='pageHeading'>Search</h1>
      <div className='searchWrapper'>
        <div className='filterDiv'>
          <input
            type='text'
            value={searchName}
            placeholder='Search Name'
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>
        <SearchCardList data={searchName.length < 1 ? data : filterData} />
      </div>
    </div>
  )
}

export default Search
