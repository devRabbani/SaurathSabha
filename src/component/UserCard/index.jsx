import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({ item }) => {
  return (
    <div className='searchUserCard'>
      <img src={item.profileUrl} alt='user pic' />
      <h2>{item.name}</h2>
      <p>
        Age : {item.age} | City : {item.city}
        <br />
        Employement : {item.employement}
      </p>

      <div className='btnDiv'>
        <button className='connectBtn'>Connect</button>
        <button onClick={() => console.log('Adding To Fav')}>
          Add to Favorite
        </button>
      </div>
      <Link to={`/profile/${item.userId}`} className='viewBtn'>
        View Profile
      </Link>
    </div>
  )
}

export default UserCard
