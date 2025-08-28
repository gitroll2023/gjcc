'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from './MainVisual.module.css';

const MainVisual = () => {
  const slides = [
    { id: 1, image: '/downloads/banner1.jpg', bg: '#1e3a5f' },
    { id: 2, image: '/downloads/banner2.jpg', bg: '#2a4a6f' },
    { id: 3, image: '/downloads/banner3.jpg', bg: '#3a5a7f' },
    { id: 4, image: '/downloads/banner4.jpg', bg: '#4a6a8f' },
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
        <h4 className={styles.subTitle}>문화로 행복한 광주를 만드는</h4>
        <h3 className={styles.mainTitle}>광주문화진흥센터</h3>
        <p className={styles.description}>
          광주문화진흥센터는 광주의 문화예술 발전과 시민의 문화 향유 기회 확대를 위해 기여하고 있습니다.
        </p>
      </div>
    </section>
  );
};

export default MainVisual;