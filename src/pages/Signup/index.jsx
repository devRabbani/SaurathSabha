import React, { useContext, useEffect, useRef, useState } from 'react'
import './signup.style.css'
import img from '../../assets/wedding.svg'
import { Link, useHistory } from 'react-router-dom'
import FirebaseContext from '../../context/firebase'
import { MdModeEdit } from 'react-icons/md'
import { isUserExist } from '../../utils/firebase'

const Signup = () => {
  const history = useHistory()
  const { firebaseApp, storage } = useContext(FirebaseContext)
  const uploadRef = useRef()

  const [data, setData] = useState({
    name: '',
    email: '',
    city: '',
    age: '',
    employement: '',
    profileFor: '',
    gender: '',
    password: '',
  })
  const { name, email, city, age, employement, profileFor, gender, password } =
    data

  const [previewUrl, setPreviewUrl] = useState('male.png')
  const [file, setFile] = useState(null)
  const [error, setError] = useState('')
  const isInvalid = password === '' || email === ''

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    const duplicate = await isUserExist(email)
    if (!duplicate) {
      try {
        const createdUser = await firebaseApp
          .auth()
          .createUserWithEmailAndPassword(email, password)
        //image upload
        if (file) {
          const uploadTask = storage
            .ref(`${createdUser.user.uid}/${file.name}`)
            .put(file)
          uploadTask.on(
            'state_changed',
            (snapshot) => {
              let progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              console.log('Upload is ' + progress + '% done')
            },
            (error) => {
              console.log(error)
            },
            () => {
              uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                firebaseApp.firestore().collection('users').add({
                  userId: createdUser.user.uid,
                  name,
                  city,
                  age,
                  employement,
                  profileFor,
                  profileUrl: downloadURL,
                  email: email.toLowerCase(),
                  dateCreated: Date.now(),
                  connection: [],
                  favourite: [],
                })
              })
            }
          )
        }

        //Firestore user collection
        if (!file) {
          await firebaseApp
            .firestore()
            .collection('users')
            .add({
              userId: createdUser.user.uid,
              name,
              city: city.toLowerCase(),
              age,
              gender,
              employement,
              profileFor,
              profileUrl: `/${gender}.png`,
              email: email.toLowerCase(),
              dateCreated: Date.now(),
              connection: [],
              favourite: [],
            })
        }

        history.push(`/profile/${createdUser.user.uid}`)
      } catch (error) {
        console.log(error.name)
        setData({
          name: '',
          email: '',
          city: '',
          age: '',
          employement: '',
          profileFor: '',
          gender: '',
          password: '',
        })
        setPreviewUrl('male.png')
        setFile(null)
        setError(error.message)
      }
    } else {
      setError('The username already registered , please try other.')
    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    uploadRef.current.click()
  }
  const handleFile = async (e) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  useEffect(() => {
    document.title = 'SignUp - SaurathSabha'
  }, [])

  useEffect(() => {
    if (!file) {
      return
    }
    const fileReader = new FileReader()
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result)
    }
    fileReader.readAsDataURL(file)
  }, [file])

  return (
    <div className='signUp'>
      <div className='container loginContainer'>
        <h1 className='loginH1'>SignUp</h1>
        <div className='flexContainer'>
          <div>
            <form onSubmit={handleSignup}>
              {error && <p className='errorMsg'>{error}</p>}
              <div className='profilePic'>
                <img src={previewUrl} alt='profile pic' />
                <input
                  type='file'
                  name='image'
                  ref={uploadRef}
                  onChange={handleFile}
                  accept='image/*'
                  placeholder='Choose a profile pic'
                  hidden='hidden'
                />
                <button onClick={handleClick}>Change Image</button>
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  name='name'
                  placeholder='Enter Your Name'
                  required
                  className='form-control'
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <div className='formHorizontal'>
                <div className='form-group'>
                  <select
                    value={employement}
                    onChange={handleChange}
                    name='employement'
                    required
                  >
                    <option label='Employment Type' value=''></option>
                    <option value='selfemployed'>Self Employed</option>
                    <option value='govt'>Govt Jobs</option>
                    <option value='private'>Private Jobs</option>
                  </select>
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    name='city'
                    placeholder='Enter City'
                    required
                    className='form-control'
                    value={city}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='formHorizontal triple'>
                <div className='form-group'>
                  <select
                    value={profileFor}
                    onChange={handleChange}
                    name='profileFor'
                    required
                  >
                    <option label='Profile For' value=''></option>
                    <option value='myself'>My Self</option>
                    <option value='other'>Other</option>
                  </select>
                </div>
                <div className='form-group'>
                  <select
                    value={gender}
                    onChange={handleChange}
                    name='gender'
                    required
                  >
                    <option label='Gender' value=''></option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
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
                    onChange={handleChange}
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
                  onChange={handleChange}
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
                  minLength='6'
                  onChange={handleChange}
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
