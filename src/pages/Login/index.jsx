import React, { useContext, useEffect, useState } from 'react'
import './login.style.css'
import img from '../../assets/eating.svg'
import { Link, useHistory } from 'react-router-dom'
import FirebaseContext from '../../context/firebase'
import firebase from 'firebase/compat/app'
import { isUserExist } from '../../utils/firebase.js'
import UserContext from '../../context/user'

const Login = () => {
  const history = useHistory()
  const { firebaseApp } = useContext(FirebaseContext)

  const [number, setNumber] = useState('')
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const [show, setshow] = useState(false)
  const [final, setfinal] = useState('')
  const [isNew, setIsNew] = useState(false)

  const { user } = useContext(UserContext)

  const isInvalid = number === ''
  // const isInvalid = number === ''
  // const handleLogin = async (e) => {
  //   e.preventDefault()
  //   try {
  //     await firebaseApp.auth().signInWithEmailAndPassword(email, password)
  //     history.push('/profile')
  //   } catch (error) {
  //     setEmail('')
  //     setPassword('')
  //     setError(error.message)
  //   }
  // }

  // const setUpRecaptcha = () => {
  //   window.recaptchaVerifier = new firebaseApp.auth.RecaptchaVerifier(
  //     'recaptcha',
  //     {
  //       size: 'invisible',
  //       callback: (response) => {
  //         // reCAPTCHA solved, allow signInWithPhoneNumber.
  //         onSignInSubmit()
  //       },
  //     }
  //   )
  // }

  const signin = async (e) => {
    e.preventDefault()
    const duplicate = await isUserExist(number)
    if (number === '' || number.length < 10 || !Number(number)) {
      setError('Not a valid Number,Try again')
      return
    }
    let verify = new firebase.auth.RecaptchaVerifier('recaptcha', {
      size: 'invisible',
    })
    console.log(duplicate)
    if (duplicate) {
      console.log('Not New User')
      console.log(isNew)
      firebaseApp
        .auth()
        .signInWithPhoneNumber('+91' + number, verify)
        .then((result) => {
          alert('SMS Sent')
          setfinal(result)
          setshow(true)
        })
        .catch((err) => {
          console.log(err)
          setError(err)
          window.location.reload()
        })
    } else {
      setError('No user Found in this Number')
      setIsNew(true)
      firebaseApp
        .auth()
        .signInWithPhoneNumber('+91' + number, verify)
        .then((result) => {
          alert('SMS Sent')
          setfinal(result)
          setshow(true)
        })
        .catch((err) => {
          console.log(err)
          setError(err)
          window.location.reload()
        })
      console.log('New user')
    }
  }

  const validateOtp = (e) => {
    e.preventDefault()
    if (otp === null || final === null) return
    final
      .confirm(otp)
      .then((result) => {
        //SUcces
        alert('Succes')
        if (isNew) {
          history.push({
            pathname: '/signup',
            state: { phoneNo: number, uid: result.user.uid },
          })
          console.log(result.user)
          console.log('history push')
        } else {
          console.log(result.user)
          history.push(`/profile/${result.user.uid}`)
          console.log('generela')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    document.title = 'Login - SaurathSabha'
    if (user) history.push('/')
  }, [])

  return (
    <div className='login'>
      <div className='container loginContainer pageBody'>
        <h1 className='loginH1'>Login</h1>
        <div className='flexContainer'>
          <div className='loginLeft'>
            <div className='authCard'>
              {error && <p className='errorMsg'>{error}</p>}
              <div className='form-group'>
                <label className='text-muted'>Enter Phone No</label>
                <input
                  type='text'
                  maxLength='10'
                  minLength='10'
                  name='phone'
                  placeholder='Enter Phone Number'
                  required
                  className='form-control'
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>

              {/* <div className='form-group'>
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
              </div> */}
              <div id='recaptcha'></div>
              <div
                style={{ display: show ? 'flex' : 'none' }}
                className='form-group'
              >
                <label className='text-muted'>Enter OTP</label>
                <input
                  type='text'
                  name='otp'
                  placeholder='Enter OTP'
                  className='form-control'
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              {!show ? (
                <button
                  className={`signInBtn ${isInvalid && 'disabled'}`}
                  disabled={isInvalid}
                  onClick={signin}
                >
                  Send OTP
                </button>
              ) : (
                <button className='signInBtn' onClick={validateOtp}>
                  {isNew ? 'Create New Account' : 'Continue'}
                </button>
              )}
            </div>
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
