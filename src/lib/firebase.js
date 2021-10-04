import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBs9KGqgDTeEkkR47xzTxik5OZDYn_TS4w',
  authDomain: 'saurathshabha.firebaseapp.com',
  projectId: 'saurathshabha',
  storageBucket: 'saurathshabha.appspot.com',
  messagingSenderId: '250460257995',
  appId: '1:250460257995:web:e2ff8d254407d0ef1c654e',
  measurementId: 'G-1DV87YZJVC',
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const { FieldValue } = firebase.firestore
