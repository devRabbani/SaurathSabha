import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDVjqiQFDpX-JtKp2IJEkY1hm4uUKGgBg8',
  authDomain: 'saurathsabhaapp.firebaseapp.com',
  projectId: 'saurathsabhaapp',
  storageBucket: 'saurathsabhaapp.appspot.com',
  messagingSenderId: '192070348940',
  appId: '1:192070348940:web:bd9d32955f23998a900ba9',
  measurementId: '${config.measurementId}',
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const { FieldValue } = firebase.firestore
export const storage = firebase.storage()
