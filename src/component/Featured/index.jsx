import React from 'react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import data from './data'
import './featured.style.css'
import featureBg from '../../assets/untitled.svg'
SwiperCore.use([Navigation, Pagination, Autoplay])
const Featured = () => {
  return (
    <section
      style={{ backgroundImage: `url(${featureBg})` }}
      className='featured'
    >
      <div className='container'>
        <h3 className='sectionHeading'>Featured</h3>
        <p className='featuredPara'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          voluptatem optio laboriosam. Quod, cumque
        </p>
        <div className='slider'>
          <Swiper
            spaceBetween={18}
            slidesPerView={5}
            navigation
            autoplay
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
          >
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <div className='slideCard'>
                  <img src={item.url} alt='face' />
                  <p className='legend'>{item.name}</p>
                </div>
              </SwiperSlide>
            ))}
            ...
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Featured
