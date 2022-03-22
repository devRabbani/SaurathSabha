import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import FirebaseContext from '../../context/firebase'
import UserContext from '../../context/user'
import useUser from '../../hooks/useUser'
import { fetchAdditionalData, getAddionalData } from '../../utils/firebase'
import './profile.style.css'

const Profile = () => {
  const [additionalData, setAdditionalData] = useState([])

  const uid = useParams().uid

  const { user } = useContext(UserContext)
  // const [profileData, setProfileData] = useState(null)
  const profileData = useUser()

  const fetchData = async () => {
    const result = await fetchAdditionalData(uid)
    setAdditionalData(result)
  }

  useEffect(() => {
    fetchData()
  }, [uid])

  return (
    <div className='profile'>
      {console.log(
        `Profile Data ${profileData},additional data ${additionalData}`
      )}
      <div className='container'>
        <h1 className='pageHeading'>
          {uid === user.uid ? 'My Profile' : 'Profile'}
        </h1>
        {profileData && (
          <div>
            <div className='profileWrapper'>
              <img src={profileData.profileUrl} alt='Profile img' />
              <div className='rightSide'>
                <p>
                  <strong>NAME : </strong> {profileData.name} ,
                  <br />
                  <strong>Age : </strong> {profileData.age} ,
                  <br />
                  <strong>Profile For : </strong> {profileData.profileFor} ,
                  <br />
                  <strong>City : </strong> {profileData.city} ,
                  <br />
                  <strong>Email : </strong> {profileData.email} ,
                  <br />
                  <strong>Employement : </strong> {profileData.employement} ,
                  <br />
                  <strong>Gender : </strong> {profileData.gender}
                  <br />
                </p>
              </div>
            </div>
            <div className='additionalInfo'>
              <h1 className='pageHeading'>Additional Info</h1>
              <div className='linksDiv'></div>
              {additionalData.length < 1 ? (
                <div className='noData'>
                  <p>There is No Data Found.</p>
                  <Link to='/additional'>Make Full Profile</Link>
                </div>
              ) : (
                <div>
                  <div>
                    <h2>Bio :</h2>
                    {console.log(additionalData)}
                    <p className='textCenter'>{additionalData.bio}</p>
                  </div>
                  <div>
                    <h2>Education and Career :</h2>
                    <p>
                      <strong>Qualification : </strong>{' '}
                      {additionalData.highestQual} ,
                      <br />
                      <strong>Completion Year : </strong>{' '}
                      {additionalData.yearComplete} ,
                      <br />
                      <strong>Current Job : </strong>{' '}
                      {additionalData.currentJob} ,
                      <br />
                      <strong>Estimated Annual Income : </strong>{' '}
                      {additionalData.income}/-
                    </p>
                  </div>
                  <div>
                    <h2>Family Background :</h2>
                    <p>
                      <strong>Father Name : </strong>{' '}
                      {additionalData.fatherName},
                      <br />
                      <strong>Father Profession : </strong>{' '}
                      {additionalData.fatherProfession},
                      <br />
                      <strong>Grandfather Name : </strong>{' '}
                      {additionalData.grandFather} ,
                      <br />
                      <strong>Gautra : </strong> {additionalData.gautra} ,
                      <br />
                      <strong>Maul : </strong> {additionalData.maul} ,
                      <br />
                      <strong>Employement : </strong> {profileData.employement}{' '}
                      ,
                      <br />
                      <strong>Gender : </strong> {profileData.gender}
                      <br />
                    </p>
                  </div>
                  <div>
                    <h2>Hobies and Others :</h2>
                    <p>
                      <strong>Hobbies :</strong>
                      {additionalData.hobbies},
                      <br />
                      <strong>Do you smoke ? : </strong>{' '}
                      {additionalData.isSmoker.toUpperCase()} ,
                      <br />
                      <strong>Are you alcoholic ? : </strong>{' '}
                      {additionalData.isAlcoholic.toUpperCase()} ,
                      <br />
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
