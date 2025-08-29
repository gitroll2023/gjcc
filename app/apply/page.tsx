'use client';

import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaExclamationCircle } from 'react-icons/fa';
import HeroSection from '@/app/components/common/HeroSection';
import styles from './page.module.css';

const ApplyPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleApply = () => {
    setShowModal(true);
  };

  return (
    <>
      <HeroSection 
        title="온라인 접수"
        description="광주문화진흥센터 프로그램을 신청하세요"
        breadcrumbs={[
          { label: '홈', href: '/' },
          { label: '온라인 접수' }
        ]}
      />

      <div className={styles.container}>
        {/* One & On Class Section */}
        <section className={styles.oneOnSection}>
          <div className={styles.oneOnHeader}>
            <h1 className={styles.mainTitle}>🦢 원앤온 클래스</h1>
            <p className={styles.subtitle}>One & On 신청하기</p>
          </div>

          <div className={styles.oneOnCard}>
            <div className={styles.basicInfo}>
              <h2 className={styles.sectionTitle}>프로그램 정보</h2>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <FaCalendarAlt className={styles.icon} />
                  <div>
                    <strong>날짜</strong>
                    <p>9월 9일, 11일, 16일, 18일 (화, 목)</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <FaClock className={styles.icon} />
                  <div>
                    <strong>시간</strong>
                    <p>오후 2시 / 저녁 7시 반</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <FaMapMarkerAlt className={styles.icon} />
                  <div>
                    <strong>주최</strong>
                    <p>광주문화진흥센터</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.curriculum}>
              <h2 className={styles.sectionTitle}>커리큘럼</h2>
              
              <div className={styles.classSection}>
                <h3 className={styles.classTitle}>
                  <span className={styles.classNumber}>1교시</span>
                  원데이 클래스 (30분)
                </h3>
                <div className={styles.classContent}>
                  <div className={styles.classItem}>
                    <span className={styles.date}>9일, 16일 (화)</span>
                    <span className={styles.classType}>쿠킹 클래스</span>
                  </div>
                  <div className={styles.classItem}>
                    <span className={styles.date}>11일, 18일 (목)</span>
                    <span className={styles.classType}>핸드메이드 클래스</span>
                  </div>
                </div>
              </div>

              <div className={styles.classSection}>
                <h3 className={styles.classTitle}>
                  <span className={styles.classNumber}>2교시</span>
                  온클래스 (1시간)
                </h3>
                <div className={styles.classContent}>
                  <div className={styles.classItem}>
                    <span className={styles.classType}>인문학 강의</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.noticeSection}>
              <h2 className={styles.noticeTitle}>
                <FaExclamationCircle className={styles.noticeIcon} />
                공지사항
              </h2>
              <div className={styles.noticeContent}>
                <div className={styles.noticeItem}>
                  <span className={styles.noticeNumber}>1)</span>
                  <p>1교시 원데이 클래스는 <strong>의무 참석</strong>입니다.<br />
                  (강의실에서 전체 진행됨)</p>
                </div>
                <div className={styles.noticeItem}>
                  <span className={styles.noticeNumber}>2)</span>
                  <p>체험비: <strong>회당 5천원</strong><br />
                  (불참시 돌려드림)</p>
                </div>
              </div>
            </div>

            <div className={styles.applySection}>
              <button className={styles.applyBtn} onClick={handleApply}>
                신청하기
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Application Modal */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3 className={styles.modalTitle}>온라인 접수 시스템 점검 안내</h3>
            <p className={styles.modalText}>
              현재 온라인접수는 시스템점검으로 사용불가.<br />
              오프라인 신청부탁드립니다.
            </p>
            <p className={styles.modalInfo}>
              <strong>운영시간</strong><br />
              평일 09:00 - 18:00<br />
              주말 09:00 - 17:00
            </p>
            <button 
              className={styles.modalButton}
              onClick={() => setShowModal(false)}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ApplyPage;