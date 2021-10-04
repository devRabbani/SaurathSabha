import React, { useContext, useEffect, useState } from 'react'
import './signup.style.css'
import img from '../../assets/wedding.svg'
import { Link, useHistory } from 'react-router-dom'
import FirebaseContext from '../../context/firebase'

const Signup = () => {
  const history = useHistory()
  const { firebaseApp } = useContext(FirebaseContext)

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [age, setAge] = useState('')
  const [employement, setEmployement] = useState('Employement')
  const [profileFor, setProfileFor] = useState('Profile')

  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const isInvalid = password === '' || email === ''
  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const createdUser = await firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email, password)
      //Firestore user collection
      await firebaseApp.firestore().collection('users').add({
        userId: createdUser.user.uid,
        name,
        city,
        age,
        employement,
        profileFor,
        email: email.toLowerCase(),
        dateCreated: Date.now(),
      })

      history.push('/search')
    } catch (error) {
      setEmail('')
      setPassword('')
      setEmployement('')
      setProfileFor('')
      setAge('')
      setError(error.message)
    }
  }

  useEffect(() => {
    document.title = 'SignUp - SaurathSabha'
  }, [])

  return (
    <div className='signUp'>
      <div className='container loginContainer'>
        <h1 className='loginH1'>SignUp</h1>
        <div className='flexContainer'>
          <div>
            <form onSubmit={handleSignup}>
              {error && <p className='errorMsg'>{error}</p>}

              <div className='formHorizontal'>
                <div className='form-group'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Enter Your Name'
                    required
                    className='form-control'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    name='city'
                    placeholder='Enter City'
                    required
                    className='form-control'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
              <div className='formHorizontal triple'>
                <div className='form-group'>
                  <select
                    value={profileFor}
                    onChange={(e) => setProfileFor(e.target.value)}
                    required
                  >
                    <option>Profile for</option>
                    <option value='myself'>My Self</option>
                    <option value='other'>Other</option>
                  </select>
                </div>
                <div className='form-group'>
                  <select
                    value={employement}
                    onChange={(e) => setEmployement(e.target.value)}
                    required
                  >
                    <option>Employment Type</option>
                    <option value='selfemployed'>Self Employed</option>
                    <option value='govt'>Govt Jobs</option>
                    <option value='private'>Private Jobs</option>
                  </select>
                </div>
                <div className='form-group'>
                  <input
                    type='number'
                    name='age'
                    placeholder='Enter age'
                    required
                    className='form-control'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
              </div>

              <div className='form-group'>
                <input
                  type='email'
                  name='email'
                  placeholder='Enter Email'
                  required
                  className='form-control'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  name='password'
                  placeholder='Enter Password'
                  required
                  className='form-control'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                className={`signInBtn ${isInvalid && 'disabled'}`}
                disabled={isInvalid}
                type='submit'
              >
                Sign Up
              </button>
            </form>
            <div className='formBottom'>
              <p>
                Already have an account <Link to='/register'>SignIn</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
