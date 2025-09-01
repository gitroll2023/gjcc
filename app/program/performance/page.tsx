'use client';

import React from 'react';
import Link from 'next/link';
import { FaMusic, FaTheaterMasks, FaGuitar, FaMicrophone, FaCalendarAlt, FaStar, FaUsers } from 'react-icons/fa';
import HeroSection from '@/app/components/common/HeroSection';
import styles from '../program.module.css';

const PerformancePage = () => {
  const performers = [
    {
      name: '김O현',
      specialty: '성악, 오페라',
      experience: '국립오페라단 주역가수',
      achievements: '제15회 대한민국 성악콩쿠르 대상',
      description: '깊이 있는 성악과 오페라 공연으로 관객들에게 감동을 전합니다.',
    },
    {
      name: '박O준',
      specialty: '연극, 뮤지컬',
      experience: '광주 시립극단 주연배우',
      achievements: '2023년 광주연극제 연기상 수상',
      description: '다양한 캐릭터를 통해 관객과 소통하는 것이 특기입니다.',
    },
    {
      name: '이O수',
      specialty: '재즈, 피아노',
      experience: '광주 재즈클럽 상주연주자',
      achievements: '서울재즈페스티벌 우수상',
      description: '즉흥연주와 관객과의 교감을 중시하는 재즈 연주자입니다.',
    },
    {
      name: '정O희',
      specialty: '국악, 가야금',
      experience: '전남국악원 수석연주자',
      achievements: '전국국악경연대회 대통령상',
      description: '전통 국악의 아름다움을 현대적 감각으로 재해석합니다.',
    },
    {
      name: '최O민',
      specialty: '바이올린, 첼로',
      experience: '광주시립교향악단 수석',
      achievements: '국제 콩쿠르 입상',
      description: '클래식의 정수를 전달하는 현악 연주자입니다.',
    },
    {
      name: '김O민',
      specialty: '플루트, 관악',
      experience: '광주 윈드오케스트라 단원',
      achievements: '전국 관악 경연대회 금상',
      description: '맑고 아름다운 선율로 관객을 매료시킵니다.',
    },
  ];

  const pastPerformances = [
    {
      title: '여름 재즈 페스티벌',
      date: '2025년 8월 10일',
      description: '한여름 밤의 재즈 향연',
      performer: '이O수 퀄텟',
      audience: 480,
      rating: 4.8,
      type: '재즈',
    },
    {
      title: '광복절 기념 음악회',
      date: '2025년 8월 15일',
      description: '광복의 기쁨을 함께 나누는 특별 공연',
      performer: '김O현, 정O희',
      audience: 520,
      rating: 4.9,
      type: '기념공연',
    },
    {
      title: '청소년 오케스트라 정기공연',
      date: '2025년 7월 25일',
      description: '광주 청소년 오케스트라의 여름 공연',
      performer: '최O민 지휘',
      audience: 380,
      rating: 4.7,
      type: '클래식',
    },
    {
      title: '국악과 재즈의 만남',
      date: '2025년 6월 20일',
      description: '전통과 현대의 조화로운 퓨전 공연',
      performer: '정O희, 이O수',
      audience: 350,
      rating: 4.8,
      type: '퓨전',
    },
    {
      title: '봄의 소리 콘서트',
      date: '2025년 5월 15일',
      description: '봄을 맞이하는 클래식 향연',
      performer: '김O민, 최O민',
      audience: 420,
      rating: 4.9,
      type: '클래식',
    },
    {
      title: '어린이날 특별 공연',
      date: '2025년 5월 5일',
      description: '온 가족이 함께 즐기는 뮤지컬',
      performer: '박O준 극단',
      audience: 500,
      rating: 4.8,
      type: '뮤지컬',
    },
    {
      title: '2025 봄 음악제',
      date: '2025년 4월 18일',
      description: '봄의 정취를 담은 다채로운 공연',
      performer: '김O현, 김O민',
      audience: 460,
      rating: 4.9,
      type: '음악축제',
    },
    {
      title: '삼일절 기념 음악회',
      date: '2025년 3월 1일',
      description: '독립의 정신을 기리는 특별 공연',
      performer: '정O희 국악단',
      audience: 400,
      rating: 4.9,
      type: '기념공연',
    },
    {
      title: '2024 송년 음악회',
      date: '2024년 12월 28일',
      description: '한 해를 마무리하는 특별한 클래식 공연',
      performer: '김O현, 최O민',
      audience: 450,
      rating: 4.9,
      type: '클래식',
    },
    {
      title: '2024 가을 음악축제',
      date: '2024년 11월 25일',
      description: '클래식부터 재즈까지, 다양한 장르의 음악 축제',
      performer: '이O수 재즈 밴드',
      audience: 350,
      rating: 4.8,
      type: '음악축제',
    },
    {
      title: '광주 전통예술의 밤',
      date: '2024년 10월 18일',
      description: '우리나라 전통 국악과 무용 공연',
      performer: '정O희 외 국악인',
      audience: 280,
      rating: 4.9,
      type: '전통공연',
    },
    {
      title: '시민 참여 뮤지컬 갈라쇼',
      date: '2024년 9월 30일',
      description: '시민들이 직접 참여한 뮤지컬 공연',
      performer: '박O준 극단',
      audience: 420,
      rating: 4.7,
      type: '뮤지컬',
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
          <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
            이 외에도 특별 게스트들을 종종 섭외하여 
            시민 여러분께 더욱 다채로운 공연을 선보이고 있습니다.
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

        <section className={styles.instructorsSection}>
          <h3>출연진 소개</h3>
          <div className={styles.instructorsGrid}>
            {performers.map((performer, index) => (
              <div key={index} className={styles.instructorCard}>
                <div className={styles.instructorHeader}>
                  <h4>{performer.name}</h4>
                  <span className={styles.instructorSpecialty}>{performer.specialty}</span>
                </div>
                <div className={styles.instructorDetails}>
                  <div className={styles.detailItem}>
                    <FaMusic />
                    <span>{performer.experience}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <FaStar />
                    <span>{performer.achievements}</span>
                  </div>
                </div>
                <p className={styles.instructorDescription}>{performer.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.pastEventsSection}>
          <h3>지난 공연</h3>
          <div className={styles.eventsGrid}>
            {pastPerformances.map((performance, index) => (
              <div key={index} className={styles.eventCard}>
                <div className={styles.eventHeader}>
                  <h4>{performance.title}</h4>
                  <span className={styles.eventType}>{performance.type}</span>
                </div>
                <p className={styles.eventDescription}>{performance.description}</p>
                <div className={styles.eventInfo}>
                  <div className={styles.infoItem}>
                    <FaCalendarAlt />
                    <span>{performance.date}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <FaMicrophone />
                    <span>출연: {performance.performer}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <FaUsers />
                    <span>관객 {performance.audience}명</span>
                  </div>
                  <div className={styles.infoItem}>
                    <FaStar />
                    <span>만족도 {performance.rating}/5.0</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section className={styles.ctaSection}>
          <h3>문화공연과 함께하는<br />특별한 시간</h3>
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