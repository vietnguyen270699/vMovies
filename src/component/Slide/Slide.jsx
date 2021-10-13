import React from 'react'

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slide.scss'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { useHistory } from "react-router-dom";

const Slide = ({ type, filmData, number, getId }) => {

  const history = useHistory();
   
    SwiperCore.use([Autoplay]);

    filmData.splice(
        number,
        filmData.length - number
      ); /*define how many poster render*/
     
    return (
        <Swiper 
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides
        autoplay={{delay: 3000}}
     
      >
            {
                    filmData.map((item, i) => (
                        <SwiperSlide key={i} 
                          className='slide'
                          style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path ? item.backdrop_path : item.poster_path})`  }}>
                          <div className='slide-content'>
                           <h1>
                           {item.title || item.name}
                           </h1>
                           <p>
                           {item.overview}
                           </p>
                           <button 
                            className='btn-watch'
                            onClick={() => {
                              history.push(`/${type}/${item.id}`);
                              getId(item.id, type);
                            }
                          }
                           >Xem ngay</button>
                          </div>
                          <div className='slide-poster'>
                              <img className='slide-poster-img' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}alt="" />
                          </div>
                        </SwiperSlide>
                    ))
                }
       
      
      </Swiper>
    )
}

export default Slide
