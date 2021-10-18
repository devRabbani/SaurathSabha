import React from 'react'
import { Link } from 'react-router-dom'
import './searchcardlist.style.css'

const SearchCardList = ({ data }) => {
  console.log(data)
  return (
    <div className='searchCardList'>
      {data.length > 0 &&
        data.map((item, i) => (
          <div key={i} className='searchUserCard'>
            <img src={item.profileUrl} alt='user pic' />
            <h2>{item.name}</h2>
            <p>
              Age : {item.age} | City : {item.city}
              <br />
              Employement : {item.employement}
            </p>

            <div className='btnDiv'>
              <button className='connectBtn'>Connect</button>
              <button>Add to Favorite</button>
            </div>
            <Link to={`/profile/${item.userId}`} className='viewBtn'>
              View Profile
            </Link>
          </div>
        ))}
    </div>
  )
}

export default SearchCardList
