import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import FirebaseContext from '../../context/firebase'
import UserContext from '../../context/user'
import useUser from '../../hooks/useUser'
import { fetchAdditionalData, getAddionalData } from '../../utils/firebase'
import './profile.style.css'

const Profile = () => {
  const [additionalData, setAdditionalData] = useState()
  const [menuPage, setMenuPage] = useState(0)

  const menuTitles = ['Education and Carrer', 'Family Background', 'About Me']

  const uid = useParams().uid

  const { user } = useContext(UserContext)
  // const [profileData, setProfileData] = useState(null)
  const profileData = useUser()
  const isOwn = uid === user?.uid

  const fetchData = async () => {
    const result = await fetchAdditionalData(uid)
    setAdditionalData(result)
  }

  const renderInfoPage = () => {
    if (menuPage === 0) {
      return (
        <p>
          <strong>Qualification : </strong> {additionalData.highestQual} ,
          <br />
          <strong>Completion Year : </strong> {additionalData.yearComplete} ,
          <br />
          <strong>Current Job : </strong> {additionalData.currentJob} ,
          <br />
          <strong>Estimated Annual Income : </strong> {additionalData.income}
          /-
        </p>
      )
    } else if (menuPage === 1) {
      return (
        <p>
          <strong>Father Name : </strong> {additionalData.fatherName},
          <br />
          <strong>Father Profession : </strong>{' '}
          {additionalData.fatherProfession},
          <br />
          <strong>Grandfather Name : </strong> {additionalData.grandFather} ,
          <br />
          <strong>Gautra : </strong> {additionalData.gautra} ,
          <br />
          <strong>Maul : </strong> {additionalData.maul} ,
          <br />
          <strong>Employement : </strong> {profileData.employement} ,
          <br />
          <strong>Gender : </strong> {profileData.gender}
          <br />
        </p>
      )
    } else {
      return (
        <>
          <p className='myBio'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, dolor
            voluptate. Esse voluptatum a doloremque consequuntur vel rerum
            itaque. Eligendi ipsam asperiores consequatur placeat esse itaque
            aliquid qui tempore ea.
          </p>
          <h2>Hobies and Others :</h2>
          <p>
            <strong>Hobbies : </strong>
            {additionalData.hobbies},
            <br />
            <strong>Do you smoke ? : </strong>{' '}
            {additionalData.isSmoker?.toUpperCase()} ,
            <br />
            <strong>Are you alcoholic ? : </strong>{' '}
            {additionalData.isAlcoholic?.toUpperCase()} ,
            <br />
          </p>
        </>
      )
    }
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
        <h1 className='pageHeading'>{isOwn ? 'My Profile' : 'Profile'}</h1>
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

              {!additionalData ? (
                <div className='noData'>
                  <p>
                    Please make your full profile, Additional Information Not
                    Found!
                  </p>
                  <Link to='/additional'>Create Full Profile</Link>
                </div>
              ) : (
                <div>
                  <div className='linksDiv'>
                    {menuTitles.map((item, i) => (
                      <div
                        key={i}
                        onClick={() => setMenuPage(i)}
                        className={`menu ${menuPage === i && 'active'}`}
                      >
                        {item}
                      </div>
                    ))}
                    {isOwn && (
                      <Link className='menu' to='/additional'>
                        Edit Profile
                      </Link>
                    )}

                    {/* <div className='menu active'>Education and Career</div>
                    <div className='menu'>Family Background</div>
                    <div className='menu'>About Me</div> */}
                  </div>
                  <div className='linkDetails'>
                    <h2>{menuTitles[menuPage]}</h2>
                    {renderInfoPage()}
                  </div>
                  {/* <div className='linkDetails'>
                    <h2>Education and Carrer</h2>
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
                  </div> */}
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
