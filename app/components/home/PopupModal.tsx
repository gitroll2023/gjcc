'use client';

import React, { useState, useEffect } from 'react';
import { FaTimes, FaCalendarAlt, FaClock } from 'react-icons/fa';
import Cookies from 'js-cookie';
import styles from './PopupModal.module.css';

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <h4 className={styles.modalTitle}>👠 12월 원앤온 클래스</h4>
          <button
            className={styles.closeButton}
            onClick={handleClose}
            aria-label="닫기"
          >
            <FaTimes />
          </button>
        </div>

        <div className={styles.programInfo}>
          <div className={styles.infoSection}>
            <div className={styles.infoRow}>
              <FaCalendarAlt className={styles.icon} />
              <div className={styles.infoContent}>
                <strong>진행일</strong>
                <p>12월 8일(월), 11일(목), 15일(월), 18일(목)</p>
              </div>
            </div>

            <div className={styles.infoRow}>
              <FaClock className={styles.icon} />
              <div className={styles.infoContent}>
                <strong>시간</strong>
                <p>오후 2시, 저녁 7시 30분</p>
              </div>
            </div>
          </div>

          <div className={styles.curriculum}>
            <h5 className={styles.sectionTitle}>📚 프로그램</h5>

            <div className={styles.classSection}>
              <strong className={styles.classTitle}>1교시 - 원데이 클래스</strong>
              <ul className={styles.classList}>
                <li>8일(월): 쿠킹 클래스</li>
                <li>11일(목): 핸드메이드</li>
                <li>15일(월): 핸드메이드</li>
                <li>16일(화): 쿠킹 클래스</li>
              </ul>
            </div>

            <div className={styles.classSection}>
              <strong className={styles.classTitle}>2교시 - 온클래스: 초청 강의</strong>
            </div>
          </div>
        </div>

        <div className={styles.modalFooter}>
          <a href="/apply" className={styles.detailButton}>
            신청하기 →
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