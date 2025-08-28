'use client';

import React from 'react';
import Link from 'next/link';
import { FaMusic, FaTheaterMasks, FaGuitar, FaMicrophone } from 'react-icons/fa';
import HeroSection from '@/app/components/common/HeroSection';
import styles from '../program.module.css';

const PerformancePage = () => {
  const performances = [
    {
      title: '봄날의 클래식',
      description: '지역 오케스트라와 함께하는 봄 음악회',
      date: '2025년 4월 15일',
      time: '19:30',
      venue: '대공연장',
      type: '클래식',
    },
    {
      title: '청춘 연극제',
      description: '젊은 극단들의 열정적인 무대',
      date: '2025년 5월 20일',
      time: '15:00',
      venue: '소극장',
      type: '연극',
    },
    {
      title: '재즈 나이트',
      description: '광주 재즈 뮤지션들의 특별한 밤',
      date: '2025년 6월 10일',
      time: '20:00',
      venue: '야외공연장',
      type: '재즈',
    },
  ];

  return (
    <>
      <HeroSection 
        title="문화공연"
        description="감동과 즐거움이 있는 무대"
        breadcrumbs={[
          { label: '홈', href: '/' },
          { label: '프로그램', href: '/program' },
          { label: '문화공연' }
        ]}
        backgroundGradient="linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
      />

      <div className={styles.container}>
        <section className={styles.introSection}>
          <h2>문화와 예술이 살아 숨쉬는 공간</h2>
          <p>
            다양한 장르의 공연을 통해 시민 여러분께 문화적 감동을 선사합니다.
            클래식부터 현대음악, 연극과 무용까지 
            풍성한 문화 공연을 만나보세요.
          </p>
        </section>

        <section className={styles.featuresSection}>
          <h3>공연 프로그램 특징</h3>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <FaMusic className={styles.featureIcon} />
              <h4>다양한 장르</h4>
              <p>클래식, 재즈, 국악 등 모든 음악</p>
            </div>
            <div className={styles.featureCard}>
              <FaTheaterMasks className={styles.featureIcon} />
              <h4>지역 예술가</h4>
              <p>광주 지역 예술가들의 무대</p>
            </div>
            <div className={styles.featureCard}>
              <FaGuitar className={styles.featureIcon} />
              <h4>시민 참여</h4>
              <p>시민이 함께 만드는 공연</p>
            </div>
            <div className={styles.featureCard}>
              <FaMicrophone className={styles.featureIcon} />
              <h4>정기 공연</h4>
              <p>매월 다양한 공연 프로그램</p>
            </div>
          </div>
        </section>

        <section className={styles.programsSection}>
          <h3>예정된 공연</h3>
          <div className={styles.programsGrid}>
            {performances.map((perf, index) => (
              <div key={index} className={styles.programCard}>
                <div className={styles.programHeader}>
                  <h4>{perf.title}</h4>
                  <span className={styles.typeBadge}>{perf.type}</span>
                </div>
                <p className={styles.programDescription}>{perf.description}</p>
                <div className={styles.programInfo}>
                  <div className={styles.infoItem}>
                    <span className={styles.label}>일시:</span>
                    <span>{perf.date} {perf.time}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.label}>장소:</span>
                    <span>{perf.venue}</span>
                  </div>
                </div>
                <button className={styles.applyButton}>예매하기</button>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.venueSection}>
          <h3>공연장 안내</h3>
          <div className={styles.venueGrid}>
            <div className={styles.venueCard}>
              <h4>대공연장</h4>
              <p>500석 규모의 메인 공연장</p>
              <p>클래식, 오케스트라 공연</p>
            </div>
            <div className={styles.venueCard}>
              <h4>소극장</h4>
              <p>150석 규모의 아담한 공간</p>
              <p>연극, 실내악 공연</p>
            </div>
            <div className={styles.venueCard}>
              <h4>야외공연장</h4>
              <p>300석 규모의 야외 무대</p>
              <p>재즈, 버스킹 공연</p>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h3>문화공연과 함께하는 특별한 시간</h3>
          <p>매달 새로운 공연이 여러분을 기다립니다</p>
          <Link href="/contact" className={styles.ctaButton}>
            공연 문의
          </Link>
        </section>
      </div>
    </>
  );
};

export default PerformancePage;