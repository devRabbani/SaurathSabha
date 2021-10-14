import React, { useContext, useEffect, useState } from 'react'
import FirebaseContext from '../../context/firebase'
import UserContext from '../../context/user'
import './profile.style.css'

const Profile = () => {
  const { firebaseApp } = useContext(FirebaseContext)
  const { user } = useContext(UserContext)
  const [profileData, setProfileData] = useState([])
  const handleStart = () => {
    firebaseApp
      .firestore()
      .collection('users')
      .where('userId', '==', user.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setProfileData(doc.data())
        })
      })
      .catch((error) => {
        console.log('Error getting documents: ', error)
      })
  }
  useEffect(() => {
    handleStart()
  }, [])

  return (
    <div className='wrapper pageBody'>
      <h1 className='pageHeading'>My Profile</h1>

      {profileData.length !== 0 && (
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
      )}
    </div>
  )
}

export default Profile
