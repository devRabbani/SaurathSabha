import { useState } from 'react'

export default function WhyusColumn({ children, img, title }) {
  const [isFold, setIsFold] = useState(true)

  return (
    <>
      <div className='whycard'>
        <div className='imgcard'>
          <img src={img} alt='whyus' />
        </div>
        <h3>{title}</h3>
        {isFold ? (
          <>
            <p>{children.substring(0, 200)}....</p>
            <span onClick={() => setIsFold(false)}>read more</span>
          </>
        ) : (
          <>
            <p>{children}</p>
            <span onClick={() => setIsFold(true)}>Close</span>
          </>
        )}
      </div>
    </>
  )
}
