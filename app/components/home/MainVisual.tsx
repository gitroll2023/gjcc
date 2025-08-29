'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from './MainVisual.module.css';

const MainVisual = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const slides = [
    { 
      id: 1, 
      image: '/downloads/banner1.jpg', 
      bg: '#1e3a5f',
      subTitle: '문화로 행복한 광주를 만드는',
      mainTitle: '광주문화진흥센터',
      description: '시민과 함께 만들어가는\n문화예술의 중심, 광주문화진흥센터입니다.'
    },
    { 
      id: 2, 
      image: '/downloads/banner2.jpg', 
      bg: '#2a4a6f',
      subTitle: '다양한 문화프로그램과 함께하는',
      mainTitle: '풍요로운 일상',
      description: '인문학 강좌부터 예술 체험까지\n당신의 삶을 더욱 풍성하게 만들어드립니다.'
    },
    { 
      id: 3, 
      image: '/downloads/banner3.jpg', 
      bg: '#3a5a7f',
      subTitle: '전통과 현대가 조화를 이루는',
      mainTitle: '문화예술 공간',
      description: '광주의 문화적 가치를 보존하고\n새로운 문화 창조의 장을 열어갑니다.'
    },
    { 
      id: 4, 
      image: '/downloads/banner4.jpg', 
      bg: '#4a6a8f',
      subTitle: '시민 여러분을 위한',
      mainTitle: '열린 문화센터',
      description: '누구나 참여하고 즐길 수 있는\n모두를 위한 문화공간입니다.'
    }
  ];

  return (
    <section className={styles.mainVisual}>
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}">0${index + 1}</span>`;
          },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className={styles.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className={styles.slide}
              style={{ 
                backgroundImage: `url(${slide.image})`,
                backgroundColor: slide.bg 
              }}
            >
              <div className={styles.overlay} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className={styles.textWrap}>
        <h4 className={styles.subTitle}>{mounted ? slides[activeIndex].subTitle : slides[0].subTitle}</h4>
        <h3 className={styles.mainTitle}>{mounted ? slides[activeIndex].mainTitle : slides[0].mainTitle}</h3>
        <p className={styles.description}>
          {(mounted ? slides[activeIndex].description : slides[0].description).split('\n').map((line, index, arr) => (
            <React.Fragment key={index}>
              {line}
              {index < arr.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </div>
    </section>
  );
};

export default MainVisual;