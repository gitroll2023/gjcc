'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './FacilitySection.module.css';

const FacilitySection = () => {
  const activities = [
    // {
    //   id: 1,
    //   name: 'One & On 클래스',
    //   description: '원데이클래스 + 문화예술 통합 프로그램',
    //   image: '/one&on.jpg',
    // },
    {
      id: 2,
      name: '공방 클래스',
      description: '창의적인 작품 만들기',
      image: '/photo/ONE/공방9.jpg',
    },
    {
      id: 3,
      name: '공방 클래스',
      description: '다양한 공예 체험',
      image: '/photo/ONE/공방21.jpg',
    },
    {
      id: 4,
      name: '쿠킹 클래스',
      description: '맛있는 요리와 베이킹',
      image: '/photo/ONE/쿠킹3.png',
    },
    {
      id: 5,
      name: '쿠킹 클래스',
      description: '달콤한 과자 만들기',
      image: '/photo/ONE/쿠킹17.png',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h3 className={styles.sectionTitle}>활동갤러리</h3>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className={styles.swiper}
        >
          {activities.map((activity) => (
            <SwiperSlide key={activity.id}>
              <div className={styles.facilityItem}>
                <div className={styles.imageWrapper}>
                  <img src={activity.image} alt={activity.name} />
                  <div className={styles.overlay}>
                    <p className={styles.description}>{activity.description}</p>
                  </div>
                </div>
                <h4 className={styles.facilityName}>{activity.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FacilitySection;