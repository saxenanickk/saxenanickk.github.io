import React from 'react'
import "./index.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Mark Zuckerburg",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsam reiciendis error delectus doloribus sequi iusto inventore, saepe possimus, ex incidunt aliquid! Culpa facilis sequi possimus adipisci nulla aliquam recusandae?"
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "Mark Zuckerburg",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsam reiciendis error delectus doloribus sequi iusto inventore, saepe possimus, ex incidunt aliquid! Culpa facilis sequi possimus adipisci nulla aliquam recusandae?"
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "Mark Zuckerburg",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsam reiciendis error delectus doloribus sequi iusto inventore, saepe possimus, ex incidunt aliquid! Culpa facilis sequi possimus adipisci nulla aliquam recusandae?"
  },
  {
    id: 4,
    avatar: AVTR4,
    name: "Mark Zuckerburg",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsam reiciendis error delectus doloribus sequi iusto inventore, saepe possimus, ex incidunt aliquid! Culpa facilis sequi possimus adipisci nulla aliquam recusandae?"
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className='container testimonials_container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {data.map(({id, name, review, avatar}) => (
          <SwiperSlide key={id} className='testimonial'>
            <div className='client_avatar'>
              <img src={avatar} alt="Avatar One" />
            </div>
            <h5 className='client_name'>{name}</h5>
            <small className='client_review'>{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials