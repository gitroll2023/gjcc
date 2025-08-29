'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBook, FaUsers, FaClock, FaCalendar, FaChevronLeft, FaChevronRight, FaGraduationCap, FaAward } from 'react-icons/fa';
import HeroSection from '@/app/components/common/HeroSection';
import styles from '../program.module.css';

const HumanitiesPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const galleryImages = [
    { src: '/photo/ON/1.png', alt: '인문학 토론 수업 현장' },
    { src: '/photo/ON/2.png', alt: '철학 세미나 진행 모습' },
    { src: '/photo/ON/3.png', alt: '문학 창작 워크샵' },
  ];

  const instructors = [
    {
      name: '김O현',
      title: '인문학박사',
      specialty: '철학, 문학, 역사 통합',
      experience: '20년',
      education: '인문학 박사',
      description: 'One & On 인문학 프로그램을 기획하고 진행하는 대표 강사입니다.',
    },
    {
      name: '이O준',
      title: '철학박사',
      specialty: '서양철학, 윤리학',
      experience: '15년',
      education: '철학 박사',
      description: '일상 속 철학적 사유를 쉽게 풀어내는 것이 특기입니다.',
    },
    {
      name: '박O영',
      title: '사학박사',
      specialty: '한국사, 지역사',
      experience: '12년',
      education: '역사학 박사',
      description: '광주와 전남 지역의 역사 전문가로 활동하고 있습니다.',
    },
    {
      name: '최O수',
      title: '문학박사',
      specialty: '현대문학, 창작론',
      experience: '10년',
      education: '국문학 박사',
      description: '문학 창작과 비평 분야에서 다수의 작품 활동을 하고 있습니다.',
    },
  ];

  const pastEvents = [
    {
      title: '2024 가을 철학 포럼',
      date: '2024년 11월 15일',
      description: '현대 사회와 철학적 성찰',
      participants: 45,
    },
    {
      title: '광주 근현대사 특강',
      date: '2024년 10월 28일',
      description: '5.18 민주화운동의 의미와 가치',
      participants: 80,
    },
    {
      title: '시민 창작 발표회',
      date: '2024년 9월 22일',
      description: '시민들이 직접 쓴 시와 산문 발표',
      participants: 35,
    },
  ];

  const programs = [
    {
      title: 'One & On 클래스',
      description: '원데이(30분) + 인문학(1시간)',
      schedule: '9월 9, 11, 16, 18일- 오후 2시, 저녁 7시 30분',
      duration: '화요일: 쿠킹, 목요일: 핸드메이드',
      level: '모든 수준',
      instructor: '김O현 박사',
      isFull: false,
      fee: '체험비: 회당 5,000원',
      notice: '1교시 원데이클래스 의무 참석',
    },
    {
      title: '철학 산책',
      description: '일상에서 만나는 철학적 사유',
      schedule: '매주 화요일 19:00',
      duration: '8주 과정',
      level: '입문',
      instructor: '이O준 박사',
      isFull: true,
    },
    {
      title: '광주 역사 이야기',
      description: '우리 지역의 역사와 문화 탐방',
      schedule: '매주 목요일 14:00',
      duration: '6주 과정',
      level: '모든 수준',
      instructor: '박O영 박사',
      isFull: true,
    },
    {
      title: '시 창작 워크샵',
      description: '나만의 시를 쓰는 창작 교실',
      schedule: '매주 토요일 10:00',
      duration: '10주 과정',
      level: '중급',
      instructor: '최O수 박사',
      isFull: true,
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

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

        <section className={styles.gallerySection}>
          <h3>인문학 프로그램 현장</h3>
          <div className={styles.galleryContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                width={800}
                height={500}
                className={styles.galleryImage}
              />
              <button className={styles.galleryButton} onClick={prevImage}>
                <FaChevronLeft />
              </button>
              <button className={`${styles.galleryButton} ${styles.galleryButtonRight}`} onClick={nextImage}>
                <FaChevronRight />
              </button>
            </div>
            <div className={styles.galleryThumbnails}>
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  className={`${styles.thumbnailButton} ${index === currentImageIndex ? styles.active : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={80}
                    height={60}
                    className={styles.thumbnailImage}
                  />
                </button>
              ))}
            </div>
            <p className={styles.imageCaption}>{galleryImages[currentImageIndex].alt}</p>
          </div>
        </section>

        <section className={styles.instructorsSection}>
          <h3>전문 강사진</h3>
          <div className={styles.instructorsGrid}>
            {instructors.map((instructor, index) => (
              <div key={index} className={styles.instructorCard}>
                <div className={styles.instructorHeader}>
                  <h4>{instructor.name}</h4>
                  <span className={styles.instructorTitle}>{instructor.title}</span>
                </div>
                <div className={styles.instructorDetails}>
                  <div className={styles.detailItem}>
                    <FaGraduationCap />
                    <span>{instructor.education}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <FaAward />
                    <span>경력 {instructor.experience}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <FaBook />
                    <span>{instructor.specialty}</span>
                  </div>
                </div>
                <p className={styles.instructorDescription}>{instructor.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.programsSection}>
          <h3>현재 진행 중인 프로그램</h3>
          <div className={styles.programsGrid}>
            {programs.map((program, index) => (
              <div key={index} className={styles.programCard}>
                <div className={styles.programHeader}>
                  <h4>{program.title}</h4>
                  <span className={styles.levelBadge} suppressHydrationWarning>{program.level}</span>
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
                  <div className={styles.infoItem}>
                    <FaUsers />
                    <span>강사: {program.instructor}</span>
                  </div>
                  {program.fee && (
                    <div className={styles.infoItem}>
                      <span>💰 {program.fee}</span>
                    </div>
                  )}
                  {program.notice && (
                    <div className={styles.infoItem} style={{gridColumn: '1 / -1'}}>
                      <span>🔴 {program.notice}</span>
                    </div>
                  )}
                </div>
                <button 
                  className={`${styles.applyButton} ${program.isFull ? styles.fullButton : ''}`} 
                  disabled={program.isFull}
                  onClick={() => !program.isFull && setShowModal(true)}
                >
                  {program.isFull ? '정원 초과' : '신청하기'}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.pastEventsSection}>
          <h3>지난 행사</h3>
          <div className={styles.eventsGrid}>
            {pastEvents.map((event, index) => (
              <div key={index} className={styles.eventCard}>
                <div className={styles.eventHeader}>
                  <h4>{event.title}</h4>
                  <span className={styles.eventDate}>{event.date}</span>
                </div>
                <p className={styles.eventDescription}>{event.description}</p>
                <div className={styles.eventInfo}>
                  <FaUsers />
                  <span>참가자 {event.participants}명</span>
                </div>
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

      {/* 모달 */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}>
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '12px',
            textAlign: 'center',
            maxWidth: '400px',
            width: '90%'
          }}>
            <h3 style={{ marginBottom: '20px', color: '#222' }}>신청 안내</h3>
            <p style={{ marginBottom: '30px', color: '#666', lineHeight: 1.6 }}>
              오프라인 신청서로만 신청 가능합니다.<br />
              행사에서 수기 작성부탁드립니다.
            </p>
            <button 
              onClick={() => setShowModal(false)}
              style={{
                padding: '12px 30px',
                background: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HumanitiesPage;