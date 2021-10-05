import React, { useContext, useEffect } from 'react'
import FirebaseContext from '../../context/firebase'

const Profile = () => {
  const { firebaseApp } = useContext(FirebaseContext)
  const handleStart = async () => {
    const user = firebaseApp.auth().currentUser
    const data = await firebaseApp
      .firestore()
      .collection('users')
      .where('userId', '==', user.uid)
      .get()

    data.map((item) => console.log(item))
  }
  useEffect(() => {
    handleStart()
  }, [])
  return (
    <div>
      <h1>My Profile</h1>
    </div>
  )
}

export default Profile
