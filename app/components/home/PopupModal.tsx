'use client';

import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import Cookies from 'js-cookie';
import styles from './PopupModal.module.css';

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const popupSlides = [
    { id: 1, image: '/popup.jpg', link: '/apply' },
  ];

  useEffect(() => {
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

        <div className={styles.imageContainer}>
          <img src={popupSlides[0].image} alt="원앤온 클래스 안내" />
        </div>

        <div className={styles.modalFooter}>
          <a href={popupSlides[0].link} className={styles.detailButton}>
            자세히보기 →
          </a>
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