import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FirebaseContext from '../../context/firebase'
import UserContext from '../../context/user'
import useUser from '../../hooks/useUser'
import './profile.style.css'

const Profile = () => {
  const uid = useParams().uid
  console.log(uid)
  const { user } = useContext(UserContext)
  // const [profileData, setProfileData] = useState(null)
  const profileData = useUser(uid)
  //   useEffect(()=>{

  // setProfileData(x)
  //   },[uid])

  return (
    <div className='container pageBody profile'>
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
            <div>
              <div>
                <h2>Bio :</h2>
                <p className='textCenter'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                  numquam delectus ex voluptates quos similique aspernatur
                  necessitatibus dignissimos hic, laudantium cupiditate sed amet
                  qui, voluptatum architecto? Voluptatibus tempora praesentium
                  reiciendis. Dicta suscipit, totam consectetur esse explicabo
                  sint mollitia facilis ullam.
                </p>
              </div>
              <div>
                <h2>Education and Career :</h2>
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
              <div>
                <h2>Family Background :</h2>
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
              <div>
                <h2>Hobies and Others :</h2>
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
              <div>
                <h2>Expectation :</h2>
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
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
