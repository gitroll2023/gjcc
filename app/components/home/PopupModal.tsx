'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaTimes } from 'react-icons/fa';
import Cookies from 'js-cookie';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './PopupModal.module.css';

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const popupSlides = [
    { id: 1, image: '/downloads/banner1.jpg', link: '#' },
    { id: 2, image: '/downloads/banner2.jpg', link: '#' },
    { id: 3, image: '/downloads/banner3.jpg', link: '#' },
  ];

  useEffect(() => {
    // 쿠키 확인 - 24시간 동안 보지 않기
    const hidePopup = Cookies.get('hidePopup');
    if (!hidePopup) {
      setTimeout(() => {
        setIsOpen(true);
      }, 1000);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCloseForDay = () => {
    Cookies.set('hidePopup', 'true', { expires: 1 });
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h4 className={styles.modalTitle}>주요 알림</h4>
          <button 
            className={styles.closeButton}
            onClick={handleClose}
            aria-label="닫기"
          >
            <FaTimes />
          </button>
        </div>

        <div className={styles.swiperContainer}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className={styles.swiper}
          >
            {popupSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <a href={slide.link}>
                  <img src={slide.image} alt={`공지사항 ${slide.id}`} />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.modalFooter}>
          <p className={styles.totalCount}>
            총 <strong>{popupSlides.length}</strong>건
          </p>
          <div className={styles.footerButtons}>
            <button 
              className={styles.todayCloseButton}
              onClick={handleCloseForDay}
            >
              24시간 동안 다시 열람하지 않습니다.
            </button>
            <button 
              className={styles.confirmButton}
              onClick={handleClose}
            >
              알림닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;