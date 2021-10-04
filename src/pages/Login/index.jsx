import React, { useContext, useEffect, useState } from 'react'
import './login.style.css'
import img from '../../assets/eating.svg'
import { Link, useHistory } from 'react-router-dom'
import FirebaseContext from '../../context/firebase'

const Login = () => {
  const history = useHistory()
  const { firebaseApp } = useContext(FirebaseContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const isInvalid = password === '' || email === ''
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await firebaseApp.auth().signInWithEmailAndPassword(email, password)
      history.push('/search')
    } catch (error) {
      setEmail('')
      setPassword('')
      setError(error.message)
    }
  }

  useEffect(() => {
    document.title = 'Login - SaurathSabha'
  }, [])

  return (
    <div className='login'>
      <div className='container loginContainer'>
        <h1 className='loginH1'>Login</h1>
        <div className='flexContainer'>
          <div className='loginLeft'>
            <form onSubmit={handleLogin}>
              {error && <p className='errorMsg'>{error}</p>}
              <div className='form-group'>
                <label className='text-muted'>Email</label>
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
                <label className='text-muted'>Password</label>
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
                Sign In
              </button>
            </form>
            <div className='formBottom'>
              <p>
                Dont have account <Link to='/signup'>SignUp</Link>
              </p>
            </div>
          </div>
          <div className='loginRight'>
            <img src={img} alt='LoginImg' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
