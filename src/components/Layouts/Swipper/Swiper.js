import React, { useState } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react'
import {Navigation, EffectFade} from "swiper"
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import styles from './Home.module.scss'

export default function Home(){
  return(
    <div className={style.container}>
      <Swiper
      module={[Navigation, EffectFade]}
      navigation
      effect
      speed={800}
      slidesPerView={1}
      loop
      clasName={styles.myswiper}>
        <SwiperSlide className={style.SwiperSlide}>
          <img src="" alt=""/>
        </SwiperSlide>
                <SwiperSlide className={style.SwiperSlide}>
          <img src="" alt=""/>
        </SwiperSlide>
        <SwiperSlide className={style.SwiperSlide}>
          <img src="" alt=""/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}