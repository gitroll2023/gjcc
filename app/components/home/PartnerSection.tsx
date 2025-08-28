'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './PartnerSection.module.css';

const PartnerSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const partners = [
    {
      id: 1,
      name: '광주광역시',
      logo: '/related organization/광주광역시.jpg',
      url: 'https://www.gwangju.go.kr',
    },
    {
      id: 2,
      name: '광주광역시의회',
      logo: '/related organization/광주광역시의회.webp',
      url: 'https://council.gwangju.kr',
    },
    {
      id: 3,
      name: '문화체육관광부',
      logo: '/related organization/문화체육관광부.webp',
      url: 'https://www.mcst.go.kr',
    },
    {
      id: 4,
      name: '한국문화예술위원회',
      logo: '/related organization/한국문화예술위원회.jpg',
      url: 'https://www.arko.or.kr',
    },
  ];

  if (!mounted) {
    return (
      <section className={styles.section}>
        <div className={styles.inner}>
          <div style={{ height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ color: '#999' }}>Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className={styles.swiper}
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <a 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.partnerItem}
              >
                <img src={partner.logo} alt={partner.name} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnerSection;