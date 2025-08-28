'use client';

import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaQuestionCircle, FaArrowRight } from 'react-icons/fa';
import HeroSection from '@/app/components/common/HeroSection';
import styles from './page.module.css';

const ContactPage = () => {
  return (
    <>
      <HeroSection 
        title="문의하기"
        description="광주문화진흥센터에 문의하세요"
        breadcrumbs={[
          { label: '홈', href: '/' },
          { label: '문의하기' }
        ]}
      />

      <div className={styles.container}>
        {/* Quick Contact Info */}
        <section className={styles.quickContactSection}>
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <FaPhone />
              </div>
              <h3>전화문의</h3>
              <p className={styles.contactMain}>062-123-4567</p>
              <p className={styles.contactSub}>평일 09:00 - 18:00</p>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <FaEnvelope />
              </div>
              <h3>이메일</h3>
              <p className={styles.contactMain}>info@gjcc.kr</p>
              <p className={styles.contactSub}>24시간 접수 가능</p>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <FaClock />
              </div>
              <h3>운영시간</h3>
              <p className={styles.contactMain}>09:00 - 21:00</p>
              <p className={styles.contactSub}>월요일 휴관</p>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <FaMapMarkerAlt />
              </div>
              <h3>방문상담</h3>
              <p className={styles.contactMain}>1층 안내데스크</p>
              <p className={styles.contactSub}>평일 09:00 - 18:00</p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className={styles.optionsSection}>
          <h2>문의 방법을 선택하세요</h2>
          <div className={styles.optionsGrid}>
            <Link href="/contact/info" className={styles.optionCard}>
              <div className={styles.optionHeader}>
                <h3>온라인 문의</h3>
                <FaArrowRight className={styles.optionArrow} />
              </div>
              <p>온라인으로 편리하게 문의사항을 남겨주세요</p>
              <ul className={styles.optionFeatures}>
                <li>24시간 접수 가능</li>
                <li>빠른 답변 (1-2일 이내)</li>
                <li>문의 내역 확인 가능</li>
              </ul>
            </Link>
            <Link href="/contact/faq" className={styles.optionCard}>
              <div className={styles.optionHeader}>
                <h3>자주 묻는 질문</h3>
                <FaArrowRight className={styles.optionArrow} />
              </div>
              <p>자주 묻는 질문에서 빠르게 답변을 찾아보세요</p>
              <ul className={styles.optionFeatures}>
                <li>즉시 확인 가능</li>
                <li>카테고리별 정리</li>
                <li>검색 기능 제공</li>
              </ul>
            </Link>
          </div>
        </section>

        {/* Department Contacts */}
        <section className={styles.departmentSection}>
          <h2>부서별 연락처</h2>
          <div className={styles.departmentGrid}>
            <div className={styles.departmentCard}>
              <h4>기획운영팀</h4>
              <div className={styles.departmentInfo}>
                <p><strong>업무:</strong> 센터 운영 총괄, 시설 관리</p>
                <p><strong>전화:</strong> 062-123-4501</p>
                <p><strong>이메일:</strong> planning@gjcc.kr</p>
              </div>
            </div>
            <div className={styles.departmentCard}>
              <h4>문화사업팀</h4>
              <div className={styles.departmentInfo}>
                <p><strong>업무:</strong> 프로그램 기획 및 운영</p>
                <p><strong>전화:</strong> 062-123-4502</p>
                <p><strong>이메일:</strong> culture@gjcc.kr</p>
              </div>
            </div>
            <div className={styles.departmentCard}>
              <h4>공연기획팀</h4>
              <div className={styles.departmentInfo}>
                <p><strong>업무:</strong> 공연 기획 및 대관</p>
                <p><strong>전화:</strong> 062-123-4503</p>
                <p><strong>이메일:</strong> performance@gjcc.kr</p>
              </div>
            </div>
            <div className={styles.departmentCard}>
              <h4>홍보마케팅팀</h4>
              <div className={styles.departmentInfo}>
                <p><strong>업무:</strong> 홍보, 마케팅, 온라인 관리</p>
                <p><strong>전화:</strong> 062-123-4504</p>
                <p><strong>이메일:</strong> pr@gjcc.kr</p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className={styles.mapSection}>
          <h2>오시는 길</h2>
          <div className={styles.mapContainer}>
            <div className={styles.mapPlaceholder}>
              <p>지도 영역 (카카오맵 API 연동 예정)</p>
            </div>
            <div className={styles.mapInfo}>
              <h3>광주문화진흥센터</h3>
              <p className={styles.address}>
                광주광역시 동구 문화전당로 38
              </p>
              <div className={styles.transportInfo}>
                <div className={styles.transportItem}>
                  <h4>지하철</h4>
                  <p>문화전당역 5번 출구 도보 5분</p>
                </div>
                <div className={styles.transportItem}>
                  <h4>버스</h4>
                  <p>문화전당 정류장 하차</p>
                  <p>간선: 419, 518, 1187</p>
                </div>
                <div className={styles.transportItem}>
                  <h4>주차</h4>
                  <p>센터 지하 주차장 이용</p>
                  <p>2시간 무료 (프로그램 참여시 4시간)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <h2>도움이 필요하신가요?</h2>
          <p>친절하게 안내해드리겠습니다</p>
          <div className={styles.ctaButtons}>
            <a href="tel:062-123-4567" className={styles.ctaButton}>
              전화 문의
            </a>
            <Link href="/contact/info" className={styles.ctaButtonOutline}>
              온라인 문의
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;