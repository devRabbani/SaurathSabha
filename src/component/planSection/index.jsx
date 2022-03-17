import { Link } from 'react-router-dom'
import { FaCheck, FaTimes } from 'react-icons/fa'
import './planSection.style.css'
const PlanSection = () => {
  return (
    <section className='planSection'>
      <h3 className='sectionHeading'>Plans</h3>
      <div className='planCardWrapper'>
        <div className='planSectionCard'>
          <h3>Basic</h3>
          <ul>
            <li className='include'>
              <FaCheck /> User Profile Making
            </li>
            <li>
              <FaTimes /> View Profile
            </li>
            <li>
              <FaTimes />
              Send Connection
            </li>
            <li>
              <FaTimes />
              Match Making
            </li>
            <li>
              <FaTimes />
              Background Check
            </li>
          </ul>
          <p className='planPrice'>₹ 0</p>
          <button>Select Plan</button>
        </div>
        <div className='planSectionCard big'>
          <h3>Gold</h3>
          <ul className='frontUl'>
            <li className='include'>
              <FaCheck /> User Profile Making
            </li>
            <li className='include'>
              <FaCheck />
              View Profile
            </li>
            <li className='include'>
              <FaCheck />
              Send Connection
            </li>
            <li>
              <FaTimes />
              Match Making
            </li>
            <li>
              <FaTimes />
              Background Check
            </li>
          </ul>
          <p className='planPrice'>₹ 3100</p>
          <button>Select Plan</button>
        </div>
        <div className='planSectionCard'>
          <h3>Platinum</h3>
          <ul className='frontUl'>
            <li className='include'>
              <FaCheck />
              User Profile Making
            </li>
            <li className='include'>
              <FaCheck />
              View Profile
            </li>
            <li className='include'>
              <FaCheck />
              Send Connection
            </li>
            <li className='include'>
              <FaCheck />
              Match Making
            </li>
            <li>
              <FaTimes />
              Background Check
            </li>
          </ul>
          <p className='planPrice'>₹ 11000</p>
          <button>Select Plan</button>
        </div>
      </div>
      <Link className='planReferBtn' to='/plans'>
        See Full Plan List
      </Link>
    </section>
  )
}

export default PlanSection