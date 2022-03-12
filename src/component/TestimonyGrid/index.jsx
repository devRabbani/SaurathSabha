import React from 'react'
import bg from '../../assets/bg-abstract.svg'
import male from '../../assets/male.png'
import './testimonyGrid.style.css'
const data = [
  {
    img: bg,
    name: 'Daniel Clifford',
    quoteTitle:
      'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
    quote:
      'I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people whom had an amazing experience here. I signed up for the free intro course and found it incredibly fun!  at a VR startup.',
  },
  {
    img: bg,
    name: 'Jonathan Walters',
    quoteTitle: 'The team was very supportive and kept me motivated',
    quote:
      'I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of I’ve made in myself.',
  },
  {
    img: bg,
    name: 'Jeanette Harmon',
    quoteTitle: 'An overall wonderful and rewarding experience',
    quote:
      'Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.',
  },
  {
    img: bg,
    name: 'Patrick Abrams',
    quoteTitle:
      'Awesome teaching support from TAs who did the bootcamp themselves.Getting guidance from them and learning from their experiences was easy.',
    quote:
      'The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out You will get the personal attention you need from an incredible community of smart and amazing people.',
  },
  {
    img: bg,
    name: 'Kira Whittle',
    quoteTitle: 'Such a life-changing experience. Highly recommended!',
    quote:
      'Before joining the bootcamp, I’ve never written a line of code.I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and developer after receiving multiple offers.100% recommend!',
  },
]

const TestimonyGrid = () => {
  return (
    <section style={{ backgroundImage: `url(${bg})` }} className='testimony'>
      <div className='container testimonyContainer'>
        <h3 className='sectionHeading'>Testimony</h3>
        <p className='testimonyHeader'>What do people feel about us??</p>
        <div className='testimonial-grid'>
          {data.map((item) => (
            <article className='testimonial flow'>
              <div className='nameImgDiv'>
                <img src={male} alt='Kira Whittle' />
                <h2 className='name'>{item.name}</h2>
              </div>
              <p>“ {item.quote} ”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonyGrid
