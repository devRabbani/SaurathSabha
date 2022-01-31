import './plans.style.css'

const plansList = [
  {
    name: 'Free',
    price: '0₹',
    duration: 'Unlimited',
    features: ['Free Profile Making'],
  },
  {
    name: 'Silver',
    price: '2100₹',
    duration: '3 Months',
    features: ['Free Match Making'],
  },
  {
    name: 'Gold',
    price: '3100₹',
    duration: '6 Months',
    features: ['Free Tips', 'Free Panchang'],
  },
  {
    name: 'Diamond',
    price: '4100₹',
    duration: '12 Months',
    features: ['Online Chatting', 'Video Profile'],
  },
  {
    name: 'Platinum',
    price: '11000₹',
    duration: 'Life Membership',
    features: [
      'Auto Match Making',
      'Data Brust',
      'Background Fact Check',
      'Honeymoon Planning',
    ],
  },
  {
    name: 'Personalised',
    price: '51000₹',
    duration: 'Personalised Family Membership',
    features: ['Personalized Sidhhant'],
  },
  // {
  //   name: 'Platinum',
  //   price: '11000₹',
  //   duration: 'Life Membership',
  //   features: [
  //     'Free Profile Making',
  //     'Free Match Making',
  //     'Free Tips',
  //     'Free Panchang',
  //     'Online Chatting',
  //     'Video Profile',
  //     'Auto Match Making',
  //     'Data Brust',
  //     'Background Fact Check',
  //     'Honeymoon Planning',
  //     'Personalized Sidhhant',
  //   ],
  // },
]

const Plans = () => {
  return (
    <div className='container pageBody'>
      <h1 className='pageHeading'>Plans</h1>
      <div className='planWrapper'>
        {plansList.map((item, i) => (
          <div key={i} className='planCard'>
            <p className='planName'>{item.name}</p>
            <p className='planPrice'>{item.price}</p>

            <ul>
              {item.features.map((data) => (
                <li>{data}</li>
              ))}
            </ul>

            <p className='planDuration'>{item.duration}</p>
            <div className='planBtn'>Select Plan</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans
