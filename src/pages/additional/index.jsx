import { useEffect, useState } from 'react'
import EducationInfo from '../../component/EducationInfo'
import ExpectationInfo from '../../component/ExpectationInfo'
import FamilyInfo from '../../component/FamilyInfo'
import MyselfInfo from '../../component/MyselfInfo'
import ProfilePhotoUpload from '../../component/ProfilePhotoUpload'
import './additional.style.css'

const headingdata = [
  'Information About Your Education and Career',
  'Some Information About Your Family',
  'Some More Question About Yourself',
  'Question About Expectation From You',
]

const Additional = () => {
  // States
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
    isSmoker: 'no',
    isAlcoholic: 'no',
    isDowryFree: 'no',
    isLikeGrand: 'no',
    isPartDowry: 'no',
    isSupportWidower: 'no',
    opinion: '',
  })
  const [page, setPage] = useState(0)
  const [photoUpld, setPhotoUpld] = useState(false)
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
    isDowryFree,
    isLikeGrand,
    isPartDowry,
    isSupportWidower,
    opinion,
  } = additionalData

  const handleChange = (e) => {
    const { name, value } = e.target
    setAdditionalData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePage = () => {
    if (page === 0) {
      return (
        <EducationInfo
          highestQual={highestQual}
          yearComplete={yearComplete}
          currentJob={currentJob}
          income={income}
          department={department}
          handleChange={handleChange}
          setPage={setPage}
        />
      )
    } else if (page === 1) {
      return (
        <FamilyInfo
          fatherName={fatherName}
          fatherProfession={fatherProfession}
          siblings={siblings}
          grandFather={grandFather}
          gautra={gautra}
          maul={maul}
          handleChange={handleChange}
          setPage={setPage}
        />
      )
    } else if (page === 2) {
      return (
        <MyselfInfo
          handleChange={handleChange}
          setPage={setPage}
          bio={bio}
          hobbies={hobbies}
          isSmoker={isSmoker}
          isAlcoholic={isAlcoholic}
        />
      )
    } else {
      return (
        <ExpectationInfo
          isDowryFree={isDowryFree}
          isLikeGrand={isLikeGrand}
          isPartDowry={isPartDowry}
          isSupportWidower={isSupportWidower}
          opinion={opinion}
          handleChange={handleChange}
          setPage={setPage}
          setPhotoUpld={setPhotoUpld}
        />
      )
    }
  }

  return (
    <div className='additional'>
      <div className='container additionalWrapper'>
        <h1 className='additionalH1'>
          {photoUpld
            ? 'For Strong Account Upload Your Profile Picture'
            : headingdata[page]}
        </h1>

        {!photoUpld ? (
          <>
            <div className='progress'>
              <p>Step {page + 1} of 4</p>
            </div>
            <form>{handlePage()}</form>
          </>
        ) : (
          <ProfilePhotoUpload data={additionalData} />
        )}
      </div>
    </div>
  )
}

export default Additional
