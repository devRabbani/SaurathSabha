import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../../component/Loader'
import UserContext from '../../context/user'
import { getFavList } from '../../utils/firebase'
import './favourite.style.css'
const Favourite = () => {
  const [userList, setUserLists] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const { user } = useContext(UserContext)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const result = await getFavList(user?.uid)
      setUserLists(result)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div className='container pageBody'>
      <h1 className='pageHeading'>Favourite List</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='favListWrapper'>
          {userList.map((item, i) => (
            <div key={i} className='favCard'>
              <img src='/male.png' alt='User Pic' />
              <div className='favInfo'>
                <h2>{item.name}</h2>
                <p>
                  Age : {item.age} | City : {item.city}
                  <br />
                  Employement : {item.employement}
                </p>
                <Link to={`/profile/${item.userId}`}>View Profile</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Favourite
