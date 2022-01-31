import React, { useState } from 'react'
import './additional.style.css'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { getAddionalData } from '../../utils/firebase'

const EditAdditional = () => {
  const [additionalData, setAdditionalData] = useState({
    bio: '',
    highestQual: '',
    yearComplete: '',
    currentJob: '',
    income: '',
    department: '',
    fatherName: '',
    fatherProfession: '',
    siblings: '',
    grandFather: '',
    gautra: '',
    maul: '',
    hobbies: '',
    isSmoker: '',
    isAlcoholic: '',
  })

  const {
    bio,
    highestQual,
    yearComplete,
    currentJob,
    income,
    department,
    fatherName,
    fatherProfession,
    siblings,
    grandFather,
    gautra,
    maul,
    hobbies,
    isSmoker,
    isAlcoholic,
  } = additionalData
  const uid = useLocation().state
  const history = useHistory()

  const fetchData = async () => {
    const [result] = await getAddionalData(uid)
    setAdditionalData(result)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setAdditionalData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  useEffect(() => {
    if (uid) {
      fetchData()
    } else {
      history.push('/')
    }
  }, [uid])

  return (
    <div className='container pageBody profile'>
      <h1 className='pageHeading'>Edit Additional Details</h1>
      {additionalData && (
        <div className='editAddBody'>
          <form>
            <div className='formCardBox'>
              <h2>Bio :</h2>
              <textarea
                name='bio'
                rows='5'
                value={bio}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className='formCardBox'>
              <h2>Education and Career :</h2>
              <div className='form-group'>
                <label className='text-muted'>Qualification :</label>
                <input
                  type='text'
                  placeholder='Highest Qualification'
                  onChange={handleChange}
                  value={highestQual}
                  name='highestQual'
                />
              </div>
              <div className='form-group'>
                <label className='text-muted'>Completion Year :</label>
                <input
                  onChange={handleChange}
                  type='text'
                  name='yearComplete'
                  value={yearComplete}
                  placeholder='Enter Year of Completion'
                  className='form-control'
                />
              </div>
              <div className='form-group'>
                <label className='text-muted'>Current Job :</label>
                <input
                  onChange={handleChange}
                  type='text'
                  name='currentJob'
                  value={currentJob}
                  placeholder='Enter your Current Job'
                  className='form-control'
                />
              </div>
              <div className='form-group'>
                <label className='text-muted'>Depertment of Job :</label>
                <input
                  onChange={handleChange}
                  type='text'
                  name='department'
                  value={department}
                  placeholder='Enter Depertment of  your Job'
                  className='form-control'
                />
              </div>
              <div className='form-group'>
                <label className='text-muted'>Estimated Annual Income :</label>
                <input
                  onChange={handleChange}
                  type='text'
                  name='income'
                  value={income}
                  placeholder='Enter your annual estimated income'
                  className='form-control'
                />
              </div>
              {/* <select onChange={handleChange} name='pfor'>
                <option value=''>All</option>
                <option value='own'>Own</option>
                <option value='family'>Family</option>
              </select> */}

              {/* <div className='form-group'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Enter Your Name'
                    required
                    className='form-control'
                    value={name}
                    onChange={handleChange}
                  />
                </div> */}
            </div>
            <div className='formCardBox'>
              <h2>Family Background</h2>
              <div className='form-group'>
                <label className='text-muted'>Father Name :</label>
                <input
                  onChange={handleChange}
                  type='text'
                  name='fatherName'
                  value={fatherName}
                  placeholder='Enter your Father Name'
                  className='form-control'
                />
              </div>
              <div className='form-group'>
                <label className='text-muted'>Father Profession :</label>
                <input
                  onChange={handleChange}
                  type='text'
                  name='fatherProfession'
                  value={fatherProfession}
                  placeholder='Enter Your Father Profession'
                  className='form-control'
                />
              </div>
              <div className='form-group'>
                <label className='text-muted'>Grandfather Name :</label>
                <input
                  onChange={handleChange}
                  type='text'
                  name='grandFather'
                  value={grandFather}
                  placeholder='Enter Your Grandfather Name'
                  className='form-control'
                />
              </div>
              <div className='formHorizontal'>
                <div className='form-group'>
                  <label className='text-muted'>Gautra :</label>
                  <input
                    onChange={handleChange}
                    type='text'
                    name='gautra'
                    value={gautra}
                    placeholder='Enter your Gautra'
                    className='form-control'
                  />
                </div>
                <div className='form-group'>
                  <label className='text-muted'>Maul :</label>
                  <input
                    onChange={handleChange}
                    type='text'
                    name='maul'
                    value={maul}
                    placeholder='Enter Your Maul'
                    className='form-control'
                  />
                </div>
              </div>
              <div className='form-group'>
                <label className='text-muted'>How many sibblings :</label>
                <select onChange={handleChange} name='siblings'>
                  <option value='0'>Only me</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6+</option>
                </select>
              </div>
              {siblings > 0 &&
                [...Array(parseInt(siblings))].map((item, i) => (
                  <div key={i} className='form-group siblingGroup'>
                    <label className='text-muted'>Sibbling {i + 1} :</label>
                    <div className='formHorizontal triple'>
                      <select onChange={handleChange} name='older'>
                        <option value=''>Age</option>
                        <option value='elder'>Elder</option>
                        <option value='older'>Older</option>
                      </select>
                      <select onChange={handleChange} name='relation'>
                        <option value=''>Relation</option>
                        <option value='sister'>Sister</option>
                        <option value='brother'>Brother</option>
                      </select>
                      <select onChange={handleChange} name='currently'>
                        <option value=''>Current Status</option>
                        <option value='sister'>Studying</option>
                        <option value='married'>Married</option>
                        <option value='not-married'>Not-Married</option>
                        <option value='salaried-and-married'>
                          Salaried and Married
                        </option>
                        <option value='salaried-and-not-married'>
                          Salaried and Not Married
                        </option>
                      </select>
                    </div>
                  </div>
                ))}
            </div>
            <div className='formCardBox'>
              <h2>Hobbies and Other</h2>
              <div className='form-group'>
                <label className='text-muted'>Your Hobbies :</label>
                <textarea
                  onChange={handleChange}
                  name='hobbies'
                  value={hobbies}
                  placeholder='singing , watching movie , dancing ...'
                  className='form-control'
                />
              </div>
              <div className='formHorizontal'>
                <div className='form-group'>
                  <label className='text-muted'>Do you smoke ? :</label>
                  <select onChange={handleChange} name='isSmoker'>
                    <option value='no'>No</option>
                    <option value='yes'>Yes</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label className='text-muted'>Are you Alcoholic ? :</label>
                  <select onChange={handleChange} name='isAlcoholic'>
                    <option value='no'>No</option>
                    <option value='yes'>Yes</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='formCardBox'>
              <h2>Expectation</h2>
              <div className='form-group'>
                <label className='text-muted'>
                  Would you like to promote dowry free marriage ? :
                </label>
                <select onChange={handleChange} name='isSmoker'>
                  <option value='no'>No</option>
                  <option value='yes'>Yes</option>
                </select>
              </div>
              <div className='form-group'>
                <label className='text-muted'>
                  Would you support widow / widower marriage? :
                </label>
                <select onChange={handleChange} name='isSmoker'>
                  <option value='no'>No</option>
                  <option value='yes'>Yes</option>
                </select>
              </div>
              <div className='form-group'>
                <label className='text-muted'>
                  Would you like to be part of dowry-free marriage ? :
                </label>
                <select onChange={handleChange} name='isSmoker'>
                  <option value='no'>No</option>
                  <option value='yes'>Yes</option>
                </select>
              </div>
              <div className='form-group'>
                <label className='text-muted'>
                  Do you subscribe the idea of grand marriage ? :
                </label>
                <select onChange={handleChange} name='isSmoker'>
                  <option value='no'>No</option>
                  <option value='yes'>Yes</option>
                </select>
              </div>
              <div className='form-group'>
                <label className='text-muted'>
                  Any other opinion you have on maithil marriage system ? :
                </label>
                <textarea name='opinion' placeholder='optional' />
              </div>
            </div>
            <button className='signInBtn' type='submit'>
              Save and Continue
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default EditAdditional
