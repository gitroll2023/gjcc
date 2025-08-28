'use client';

import React from 'react';
import Link from 'next/link';
import { FaPalette, FaCoffee, FaHeart, FaStar } from 'react-icons/fa';
import HeroSection from '@/app/components/common/HeroSection';
import styles from '../program.module.css';

const OnedayPage = () => {
  const classes = [
    {
      title: '도자기 만들기',
      description: '나만의 도자기를 만들어보는 특별한 경험',
      date: '매주 토요일',
      time: '14:00-17:00',
      price: '40,000원',
      capacity: '8명',
    },
    {
      title: '캘리그라피 입문',
      description: '아름다운 손글씨로 마음을 전하기',
      date: '매주 일요일',
      time: '10:00-12:00',
      price: '30,000원',
      capacity: '10명',
    },
    {
      title: '커피 브루잉 클래스',
      description: '집에서 즐기는 핸드드립 커피',
      date: '매주 수요일',
      time: '19:00-21:00',
      price: '35,000원',
      capacity: '6명',
    },
  ];

  return (
    <>
      <HeroSection 
        title="원데이 클래스"
        description="하루만에 완성하는 특별한 취미 생활"
        breadcrumbs={[
          { label: '홈', href: '/' },
          { label: '프로그램', href: '/program' },
          { label: '원데이클래스' }
        ]}
        backgroundGradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
      />

      <div className={styles.container}>
        <section className={styles.introSection}>
          <h2>특별한 하루를 만들어보세요</h2>
          <p>
            바쁜 일상 속에서도 쉽게 참여할 수 있는 원데이 클래스입니다.
            전문가와 함께 새로운 취미를 발견하고, 
            완성된 작품과 함께 특별한 추억을 만들어보세요.
          </p>
        </section>

        <section className={styles.featuresSection}>
          <h3>원데이 클래스 장점</h3>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <FaPalette className={styles.featureIcon} />
              <h4>다양한 체험</h4>
              <p>공예, 요리, 예술 등 다양한 분야</p>
            </div>
            <div className={styles.featureCard}>
              <FaCoffee className={styles.featureIcon} />
              <h4>부담 없는 참여</h4>
              <p>하루만 투자하는 가벼운 취미활동</p>
            </div>
            <div className={styles.featureCard}>
              <FaHeart className={styles.featureIcon} />
              <h4>소규모 정원</h4>
              <p>최대 10명 이내의 친밀한 수업</p>
            </div>
            <div className={styles.featureCard}>
              <FaStar className={styles.featureIcon} />
              <h4>전문 강사진</h4>
              <p>각 분야 전문가의 세심한 지도</p>
            </div>
          </div>
        </section>

        <section className={styles.programsSection}>
          <h3>이번 달 클래스</h3>
          <div className={styles.programsGrid}>
            {classes.map((cls, index) => (
              <div key={index} className={styles.programCard}>
                <div className={styles.programHeader}>
                  <h4>{cls.title}</h4>
                  <span className={styles.priceBadge}>{cls.price}</span>
                </div>
                <p className={styles.programDescription}>{cls.description}</p>
                <div className={styles.programInfo}>
                  <div className={styles.infoItem}>
                    <span className={styles.label}>일시:</span>
                    <span>{cls.date} {cls.time}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.label}>정원:</span>
                    <span>{cls.capacity}</span>
                  </div>
                </div>
                <button className={styles.applyButton}>신청하기</button>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.noticeSection}>
          <h3>수강 안내</h3>
          <ul>
            <li>모든 재료는 센터에서 제공됩니다</li>
            <li>앞치마와 개인 용품은 지참해주세요</li>
            <li>수강료는 현장 납부 가능합니다</li>
            <li>취소는 3일 전까지 가능합니다</li>
          </ul>
        </section>

        <section className={styles.ctaSection}>
          <h3>원데이 클래스로 새로운 취미를 시작하세요</h3>
          <p>매달 새로운 클래스가 열립니다</p>
          <Link href="/contact" className={styles.ctaButton}>
            수강 문의
          </Link>
        </section>
      </div>
    </>
  );
};

export default OnedayPage;