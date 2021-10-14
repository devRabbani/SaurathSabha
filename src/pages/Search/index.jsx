import React from 'react'

const Search = ({ location }) => {
  const searchString = location.state
  console.log(searchString)
  return (
    <div className='pageBody'>
      <h1 className='pageHeading'>Search</h1>
    </div>
  )
}

export default Search
