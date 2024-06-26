import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import './Properties.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/Common'
import styled from 'styled-components';



function Properties() {
  
  return (
    
      <section className='r-wrapper'>
        <div className='paddings innerWidth r-container'>
          <div className='r-head flexColStart'>
            <span className='orangeText'>Best choices</span>
            <span className='primaryText'>Popular Residencies</span>
          </div>
          
          <Swiper {...sliderSettings}>
            <SliderButtons/>
            {
              data.map((card,i)=>(
                <SwiperSlide key={i}>
                  
                  <div className=' flexColStart r-card'>
                   <img src={card.image} alt='home' style={{width:400,height:250}} />
                   <span className='secondaryText r-price'>
                   <span style={{color:'orange'}}>$</span>
                   <span>{card.price}</span>
                   </span>
                   <span className='primaryText'>{card.name}</span>
                   <span className='secondaryText'>{card.detail}</span>
                  </div>
                 
                </SwiperSlide>
              ))
            }
          </Swiper>
          </div>
        
       </section>

    
  )
}

export default Properties

const SliderButtons =()=>{
  const swiper = useSwiper();
  return(
    <div className='r-button'>
      <button onClick={()=>swiper.slidePrev()}>&lt;</button>
      <button onClick={()=>swiper.slidePrev()}>&gt;</button>
    </div>
  );
};



