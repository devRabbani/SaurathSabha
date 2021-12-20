import React, { useState } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { getAddionalData } from '../../utils/firebase'

const EditAdditional = () => {
  const [additionalData, setAdditionalData] = useState({
    bio: '',
  })

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
            <div>
              <h2>Bio :</h2>
              <textarea
                name='bio'
                rows='10'
                value={additionalData.bio}
                onChange={handleChange}
              ></textarea>
            </div>
            <div>
              <h2>Education and Career :</h2>
              <input type='text' />
            </div>
            <div>
              <h2>Family Background :</h2>
            </div>
            <div>
              <h2>Hobies and Others :</h2>
            </div>
            <div>
              <h2>Expectation :</h2>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default EditAdditional
