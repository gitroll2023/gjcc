'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './FacilitySection.module.css';

const FacilitySection = () => {
  const facilities = [
    {
      id: 1,
      name: '대공연장',
      description: '1,500석 규모의 대형 공연장',
      image: 'https://ccon.kr/data/file/fcl/thumb-1039998572_GBd1OJZE_5bb9dde7dd80ad7f313b24e07a681c72e4911d56_630x400.jpg',
    },
    {
      id: 2,
      name: '소공연장',
      description: '300석 규모의 다목적 공연장',
      image: 'https://ccon.kr/data/file/fcl/thumb-1039998572_HOdKysXN_558d723cd53e888fdaff4eb70c6a80d7970bce59_630x400.jpg',
    },
    {
      id: 3,
      name: '전시실',
      description: '다양한 전시가 가능한 공간',
      image: 'https://ccon.kr/data/file/fcl/thumb-1039998572_R06SY4Lk_584fbfe95cbf24a28bb45ec37f5b4be7d0447bfc_630x400.jpg',
    },
    {
      id: 4,
      name: '연습실',
      description: '예술가들을 위한 연습 공간',
      image: 'https://ccon.kr/data/file/fcl/thumb-1039998572_Xnsd67qe_53a7e5d1a288eced63c8835f7c2881e09ddfbbad_630x400.jpg',
    },
    {
      id: 5,
      name: '회의실',
      description: '세미나 및 회의 공간',
      image: 'https://ccon.kr/data/file/fcl/thumb-1039998572_4vlr6eyM_24b9a5b0d54b2126bafec5968e34a34bd929b53e_630x400.jpg',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h3 className={styles.sectionTitle}>시설안내</h3>
        
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
          {facilities.map((facility) => (
            <SwiperSlide key={facility.id}>
              <div className={styles.facilityItem}>
                <div className={styles.imageWrapper}>
                  <img src={facility.image} alt={facility.name} />
                  <div className={styles.overlay}>
                    <p className={styles.description}>{facility.description}</p>
                  </div>
                </div>
                <h4 className={styles.facilityName}>{facility.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FacilitySection;