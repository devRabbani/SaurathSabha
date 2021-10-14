import React, { useContext, useEffect } from 'react'
import FirebaseContext from '../../context/firebase'
import UserContext from '../../context/user'

const Profile = () => {
  const { firebaseApp } = useContext(FirebaseContext)
  const { user } = useContext(UserContext)
  const handleStart = async () => {
    const data = await firebaseApp
      .firestore()
      .collection('users')
      .where('userId', '==', user.uid)
      .get()

    data.docs.map((item) => console.log(item))
  }
  useEffect(() => {
    handleStart()
  }, [])

  return (
    <div>
      <h1 className='pageHeading'>My Profile</h1>
    </div>
  )
}

export default Profile
