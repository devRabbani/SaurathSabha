import { firebaseApp, FieldValue } from '../lib/firebase'

export const isUserExist = async (number) => {
  const result = await firebaseApp
    .firestore()
    .collection('users')
    .where('number', '==', number)
    .get()
  return result.docs.length !== 0
}

export const getUserByUid = async (uid) => {
  const result = await firebaseApp
    .firestore()
    .collection('users')
    .where('userId', '==', uid)
    .get()

  const user = result.docs.map((item) => item.data())

  return user
}

export const addToFav = async (uid, favUid) => {
  await firebaseApp
    .firestore()
    .collection('connection')
    .where('userId', '==', uid)
}
