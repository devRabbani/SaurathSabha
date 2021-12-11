import React, { useContext, useEffect, useState } from 'react'
import FirebaseContext from '../../context/firebase'
import UserContext from '../../context/user'
import useUser from '../../hooks/useUser'
import './profile.style.css'

const Profile = ({
  match: {
    params: { uid },
  },
}) => {
  const { user } = useContext(UserContext)
  // const [profileData, setProfileData] = useState(null)
  const profileData = useUser(uid)
  //   useEffect(()=>{

  // setProfileData(x)
  //   },[uid])

  return (
    <div className='container pageBody'>
      <h1 className='pageHeading'>
        {uid === user.uid ? 'My Profile' : 'Profile'}
      </h1>
      {profileData && (
        <div>
          <div className='profileWrapper'>
            <img src={profileData.profileUrl} alt='Profile img' />
            <div className='rightSide'>
              <h2>
                NAME : {profileData.name} ,
                <br />
                Age : {profileData.age} ,
                <br />
                Profile For : {profileData.profileFor} ,
                <br />
                City : {profileData.city} ,
                <br />
                Email : {profileData.email} ,
                <br />
                Employement : {profileData.employement} ,
                <br />
                Gender : {profileData.gender}
                <br />
              </h2>
            </div>
          </div>
          <h2>Additional Information</h2>
        </div>
      )}
    </div>
  )
}

export default Profile
