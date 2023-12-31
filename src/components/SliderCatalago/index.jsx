import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/effect-coverflow';

import 'swiper/css/pagination';

import 'swiper/css/navigation';

import prod1 from '../../assets/Catalogo/catalogo-masculino.png';

import prod2 from '../../assets/Catalogo/catalogo-feminino.png';

import prod3 from '../../assets/Catalogo/catalogo-infantil.png';

import prod4 from '../../assets/Catalogo/catalogo-pu.png';

import prod5 from '../../assets/Catalogo/catalogo-texanas.png';

// import catalogo from '../../assets/hanfer2022.pdf'

import './styles.scss';

export function SliderCatalogo () {
  return (
    <div className='wrapper-catalogo container'>  
      <Swiper
        effect={'coverflow'}
        grabCurs={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={
          {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5
          }
        }
        pagination={{el:'.swiper-pagination', clickable: true}}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='swiper_container'
      >
        <SwiperSlide >
          <a href='#' download>
            <img src={prod1} alt="Primeiro produto" />
          </a>
        </SwiperSlide>
        <SwiperSlide >
          <a href='#' download>
            <img src={prod2} alt="Primeiro produto" />
          </a>
        </SwiperSlide>
        <SwiperSlide >
          <a href='#' download>
            <img src={prod3} alt="Primeiro produto" />
          </a>
        </SwiperSlide>
        <SwiperSlide >
          <a href='#' download>
            <img src={prod4} alt="Primeiro produto" />
          </a>
        </SwiperSlide>
        <SwiperSlide >
          <a href='#' download>
            <img src={prod5} alt="Primeiro produto" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}