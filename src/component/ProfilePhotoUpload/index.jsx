import { useContext, useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import UserContext from '../../context/user'
import { storage } from '../../lib/firebase'
import {
  addAdditionalData,
  updateProfilePic,
  uploadProfile,
} from '../../utils/firebase'

const ProfilePhotoUpload = ({ data }) => {
  const [photoUrl, setPhotoUrl] = useState('male.png')
  const [photo, setPhoto] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isImgLoading, setIsImgLoading] = useState(false)
  const [error, setError] = useState('')
  const [progress, setProgress] = useState(0)

  const uploadRef = useRef()

  const { user } = useContext(UserContext)
  const history = useHistory()

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    uploadRef.current.click()
  }

  const handleUpload = () => {
    setError('')
    setIsLoading(true)
    const uploadTask = storage
      .ref(`profile/${user?.uid}/${photo.name}`)
      .put(photo)
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        let progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
        setProgress(progress)
        console.log('Upload is ' + progress + '% done')
      },
      (err) => {
        setIsLoading(false)
        setError('Something went wrong , Try Again !')
        console.log(err)
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(async (downloadURL) => {
          console.log('File available at', downloadURL)
          await updateProfilePic(user?.uid, downloadURL)
          await addAdditionalData(user?.uid, data)
          setIsLoading(false)
          history.push('profile/' + user?.uid)
        })
      }
    )
  }

  // const handleUpload = async () => {
  //   setError('')
  //   setIsLoading(true)

  //   uploadProfile(user?.uid, photo)
  //     .then((url) => {
  //       console.log('url from handleupload', url)
  //       // setPhotoUrl(url)
  //       // await addAdditionalData(user?.uid, data)
  //       setIsLoading(false)
  //       // history.push('profile/' + user?.uid)
  //     })
  //     .catch((error) => {
  //       setIsLoading(false)
  //       setError('Something went wrong , Try Again !')
  //       console.log(error)
  //     })
  // }

  const handleOnSkip = async () => {
    setError('')
    setIsLoading(true)
    try {
      await addAdditionalData(user?.uid, data)
      setIsLoading(false)
      history.push('profile/' + user?.uid)
    } catch (error) {
      setIsLoading(false)
      setError('Something went wrong , Try Again !')
      console.log(error)
    }
  }

  const testClick = async () => {}

  //Side effect
  useEffect(() => {
    if (!photo) {
      return
    }
    setIsImgLoading(true)
    const fileReader = new FileReader()
    fileReader.onload = () => {
      setPhotoUrl(fileReader.result)
      setIsImgLoading(false)
    }
    fileReader.readAsDataURL(photo)
  }, [photo])

  return (
    <div className='photoUploadWrapper'>
      <img src={photoUrl} alt='avatar' className='avatar' />

      {/* <button onClick={handleUpload}>Upload</button> */}
      {isLoading ? (
        <p className='loading'>
          {progress > 0 && progress + '%'} Please wait while loading...
        </p>
      ) : (
        <>
          <input
            type='file'
            name='image'
            ref={uploadRef}
            onChange={handleChange}
            accept='image/*'
            placeholder='Choose a profile pic'
            hidden='hidden'
          />
          <button className='changeImg' onClick={handleClick}>
            {isImgLoading ? 'Loading...' : 'Choose Picture'}
          </button>

          {/* <input
            type='file'
            onChange={handleChange}
            className='profilePicUpload'
            placeholder='Select Your Photo'
            accept='image/*'
          /> */}

          <div className='btnDiv'>
            <button
              disabled={isLoading}
              onClick={handleOnSkip}
              className='btn skip'
            >
              Skip
            </button>
            <button
              disabled={isLoading}
              onClick={handleUpload}
              className='btn finish'
            >
              Finish
            </button>
          </div>
        </>
      )}
      {error && <p className='errorAdditional'>{error}</p>}
    </div>
  )
}

export default ProfilePhotoUpload
