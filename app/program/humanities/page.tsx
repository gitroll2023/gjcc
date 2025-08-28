'use client';

import React from 'react';
import Link from 'next/link';
import { FaBook, FaUsers, FaClock, FaCalendar } from 'react-icons/fa';
import HeroSection from '@/app/components/common/HeroSection';
import styles from '../program.module.css';

const HumanitiesPage = () => {
  const programs = [
    {
      title: '철학 산책',
      description: '일상에서 만나는 철학적 사유',
      schedule: '매주 화요일 19:00',
      duration: '8주 과정',
      level: '입문',
    },
    {
      title: '광주 역사 이야기',
      description: '우리 지역의 역사와 문화 탐방',
      schedule: '매주 목요일 14:00',
      duration: '6주 과정',
      level: '모든 수준',
    },
    {
      title: '시 창작 워크샵',
      description: '나만의 시를 쓰는 창작 교실',
      schedule: '매주 토요일 10:00',
      duration: '10주 과정',
      level: '중급',
    },
  ];

  return (
    <>
      <HeroSection 
        title="인문학 프로그램"
        description="삶을 풍요롭게 만드는 인문학의 세계"
        breadcrumbs={[
          { label: '홈', href: '/' },
          { label: '프로그램', href: '/program' },
          { label: '인문학' }
        ]}
        backgroundGradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      />

      <div className={styles.container}>
        <section className={styles.introSection}>
          <h2>인문학과 함께하는 삶</h2>
          <p>
            인문학은 우리의 삶을 더욱 깊이 있고 의미 있게 만들어줍니다. 
            철학, 역사, 문학을 통해 인간과 사회를 이해하고, 
            더 나은 삶의 방향을 찾아가는 여정에 함께하세요.
          </p>
        </section>

        <section className={styles.featuresSection}>
          <h3>프로그램 특징</h3>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <FaBook className={styles.featureIcon} />
              <h4>깊이 있는 학습</h4>
              <p>전문 강사진과 함께하는 체계적인 커리큘럼</p>
            </div>
            <div className={styles.featureCard}>
              <FaUsers className={styles.featureIcon} />
              <h4>토론과 대화</h4>
              <p>함께 생각하고 나누는 참여형 수업</p>
            </div>
            <div className={styles.featureCard}>
              <FaClock className={styles.featureIcon} />
              <h4>유연한 시간</h4>
              <p>직장인을 위한 저녁 시간대 운영</p>
            </div>
            <div className={styles.featureCard}>
              <FaCalendar className={styles.featureIcon} />
              <h4>정기 프로그램</h4>
              <p>매 분기 새로운 주제로 진행</p>
            </div>
          </div>
        </section>

        <section className={styles.programsSection}>
          <h3>현재 진행 중인 프로그램</h3>
          <div className={styles.programsGrid}>
            {programs.map((program, index) => (
              <div key={index} className={styles.programCard}>
                <div className={styles.programHeader}>
                  <h4>{program.title}</h4>
                  <span className={styles.levelBadge}>{program.level}</span>
                </div>
                <p className={styles.programDescription}>{program.description}</p>
                <div className={styles.programInfo}>
                  <div className={styles.infoItem}>
                    <FaCalendar />
                    <span>{program.schedule}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <FaClock />
                    <span>{program.duration}</span>
                  </div>
                </div>
                <button className={styles.applyButton}>신청하기</button>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h3>인문학 프로그램에 참여하세요</h3>
          <p>삶의 깊이를 더하는 인문학 여정이 여러분을 기다립니다</p>
          <Link href="/contact" className={styles.ctaButton}>
            문의하기
          </Link>
        </section>
      </div>
    </>
  );
};

export default HumanitiesPage;