import { firebaseApp, FieldValue } from '../lib/firebase'

export const isUserExist = async (email) => {
  const result = await firebaseApp
    .firestore()
    .collection('users')
    .where('email', '==', email)
    .get()
  return result.docs.length !== 0
}
