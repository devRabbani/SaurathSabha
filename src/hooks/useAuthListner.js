import { useState, useEffect, useContext } from 'react'
import FirebaseContext from '../context/firebase'

export default function useAuthListener() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')))
  const { firebaseApp } = useContext(FirebaseContext)
  useEffect(() => {
    const listner = firebaseApp.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        //have authUser and set localstorage

        if (!user) {
          firebaseApp
            .auth()
            .currentUser.updateProfile({ displayName: 'display check' })
            .then(() => {
              localStorage.setItem('authUser', JSON.stringify(authUser))
              setUser(authUser)
            })
            .catch((err) => console.log('Error on updating display name', err))
        }
      } else {
        //not have authuser remove from localstorage
        localStorage.removeItem('authUser')
        setUser(null)
      }
    })
    return () => listner()
  }, [firebaseApp])

  return { user }
}
