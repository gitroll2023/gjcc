'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPalette, FaCoffee, FaHeart, FaStar, FaChevronLeft, FaChevronRight, FaTools, FaCertificate } from 'react-icons/fa';
import HeroSection from '@/app/components/common/HeroSection';
import styles from '../program.module.css';

const OnedayPage = () => {
  const [currentWorkshopImageIndex, setCurrentWorkshopImageIndex] = useState(0);
  const [currentCookingImageIndex, setCurrentCookingImageIndex] = useState(0);

  const workshopImages = [
    { src: '/photo/ONE/공방1.png', alt: '' },
    { src: '/photo/ONE/공방2.png', alt: '' },
    { src: '/photo/ONE/공방20.png', alt: '' },
    { src: '/photo/ONE/공방10.png', alt: '' },
    { src: '/photo/ONE/공방15.png', alt: '' },
    { src: '/photo/ONE/공방6.jpg', alt: '' },
  ];

  const cookingImages = [
    { src: '/photo/ONE/쿠킹1.png', alt: '' },
    { src: '/photo/ONE/쿠킹2.png', alt: '' },
    { src: '/photo/ONE/쿠킹3.png', alt: '' },
    { src: '/photo/ONE/쿠킹4.png', alt: '' },
    { src: '/photo/ONE/쿠킹5.png', alt: '' },
    { src: '/photo/ONE/쿠킹6.png', alt: '' },
  ];

  const instructors = [
    {
      name: '김O현',
      specialty: '캘리그라피, 서예',
      experience: '8년',
      certification: '캘리그라피 지도사 1급',
      description: '한글의 아름다움을 현대적으로 재해석하는 캘리그라피 전문가입니다.',
    },
    {
      name: '이O영',
      specialty: '디퓨저, 방향제',
      experience: '10년',
      certification: '아로마테라피스트 자격증',
      description: '천연 향료를 활용한 친환경 방향제 제작을 전문으로 합니다.',
    },
    {
      name: '박O정',
      specialty: '한식, 베이킹',
      experience: '15년',
      certification: '조리기능사, 제빵기능사',
      description: '전통 한식과 현대적 베이킹을 접목한 쿠킹을 선보입니다.',
    },
    {
      name: '최O수',
      specialty: '디저트, 과자',
      experience: '12년',
      certification: '제과기능사 1급',
      description: '건강한 재료로 만드는 수제 디저트와 전통 과자를 가르칩니다.',
    },
  ];

  const pastEvents = [
    {
      title: '가을 도자기 축제',
      date: '2024년 11월 20일',
      description: '수강생들의 도자기 작품 전시회',
      participants: 25,
      type: '전시회',
    },
    {
      title: '한국 과자 만들기',
      date: '2024년 10월 15일',
      description: '추석 맞이 과자 만들기 특강',
      participants: 30,
      type: '특강',
    },
    {
      title: '나만의 가죽가방 만들기',
      date: '2024년 9월 28일',
      description: '가죽공예 집중 워크샵',
      participants: 12,
      type: '워크샵',
    },
    {
      title: '크리스마스 케이크 데코레이션',
      date: '2024년 12월 10일',
      description: '연말 특별 베이킹 클래스',
      participants: 18,
      type: '특별수업',
    },
  ];

  const classes = [
    {
      title: '캘리그라피 입문',
      description: '아름다운 손글씨로 마음을 전하기',
      date: '매주 토요일',
      time: '10:00-12:00',
      price: '30,000원',
      capacity: '10명',
      instructor: '김O현',
      materials: '붓, 먹, 한지 등 모든 재료 제공',
      isFull: true,
    },
    {
      title: '디퓨저 만들기',
      description: '나만의 향기로 채우는 공간',
      date: '매주 일요일',
      time: '14:00-16:00',
      price: '35,000원',
      capacity: '8명',
      instructor: '이O영',
      materials: '용기, 스틱, 천연 오일 포함',
      isFull: true,
    },
    {
      title: '천연 방향제 클래스',
      description: '친환경 재료로 만드는 건강한 방향제',
      date: '매주 수요일',
      time: '19:00-21:00',
      price: '32,000원',
      capacity: '8명',
      instructor: '이O영',
      materials: '천연 재료, 용기 모두 제공',
      isFull: true,
    },
    {
      title: '캘리그라피 심화',
      description: '작품 제작과 다양한 기법 익히기',
      date: '매주 금요일',
      time: '15:00-17:00',
      price: '40,000원',
      capacity: '6명',
      instructor: '김O현',
      materials: '고급 붓, 특수 한지 제공',
      isFull: true,
    },
    {
      title: '과자 만들기',
      description: '우리나라 전통 과자를 직접 만들어보기',
      date: '매월 둘째 토요일',
      time: '10:00-14:00',
      price: '38,000원',
      capacity: '12명',
      instructor: '최O수',
      materials: '쌀, 팥, 견과류 등 재료비 포함',
      isFull: true,
    },
    {
      title: '수제 디저트 클래스',
      description: '카페에서 먹던 디저트 직접 만들기',
      date: '매주 화요일',
      time: '18:30-21:00',
      price: '42,000원',
      capacity: '8명',
      instructor: '박O정',
      materials: '베이킹 재료 모두 제공',
      isFull: true,
    },
  ];

  const nextWorkshopImage = () => {
    setCurrentWorkshopImageIndex((prev) => (prev + 1) % workshopImages.length);
  };

  const prevWorkshopImage = () => {
    setCurrentWorkshopImageIndex((prev) => (prev - 1 + workshopImages.length) % workshopImages.length);
  };

  const nextCookingImage = () => {
    setCurrentCookingImageIndex((prev) => (prev + 1) % cookingImages.length);
  };

  const prevCookingImage = () => {
    setCurrentCookingImageIndex((prev) => (prev - 1 + cookingImages.length) % cookingImages.length);
  };

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
              <p>공예, 쿠킹, 예술 등 다양한 분야</p>
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

        <section className={styles.gallerySection}>
          <h3>공방 클래스 현장</h3>
          <div className={styles.galleryContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src={workshopImages[currentWorkshopImageIndex].src}
                alt={workshopImages[currentWorkshopImageIndex].alt}
                width={800}
                height={500}
                className={styles.galleryImage}
              />
              <button className={styles.galleryButton} onClick={prevWorkshopImage}>
                <FaChevronLeft />
              </button>
              <button className={`${styles.galleryButton} ${styles.galleryButtonRight}`} onClick={nextWorkshopImage}>
                <FaChevronRight />
              </button>
            </div>
            <div className={styles.galleryThumbnails}>
              {workshopImages.map((image, index) => (
                <button
                  key={index}
                  className={`${styles.thumbnailButton} ${index === currentWorkshopImageIndex ? styles.active : ''}`}
                  onClick={() => setCurrentWorkshopImageIndex(index)}
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
            <p className={styles.imageCaption}>{workshopImages[currentWorkshopImageIndex].alt}</p>
          </div>
        </section>

        <section className={styles.gallerySection}>
          <h3>쿠킹 클래스 현장</h3>
          <div className={styles.galleryContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src={cookingImages[currentCookingImageIndex].src}
                alt={cookingImages[currentCookingImageIndex].alt}
                width={800}
                height={500}
                className={styles.galleryImage}
              />
              <button className={styles.galleryButton} onClick={prevCookingImage}>
                <FaChevronLeft />
              </button>
              <button className={`${styles.galleryButton} ${styles.galleryButtonRight}`} onClick={nextCookingImage}>
                <FaChevronRight />
              </button>
            </div>
            <div className={styles.galleryThumbnails}>
              {cookingImages.map((image, index) => (
                <button
                  key={index}
                  className={`${styles.thumbnailButton} ${index === currentCookingImageIndex ? styles.active : ''}`}
                  onClick={() => setCurrentCookingImageIndex(index)}
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
            <p className={styles.imageCaption}>{cookingImages[currentCookingImageIndex].alt}</p>
          </div>
        </section>

        <section className={styles.instructorsSection}>
          <h3>전문 강사진</h3>
          <div className={styles.instructorsGrid}>
            {instructors.map((instructor, index) => (
              <div key={index} className={styles.instructorCard}>
                <div className={styles.instructorHeader}>
                  <h4>{instructor.name}</h4>
                  <span className={styles.instructorSpecialty}>{instructor.specialty}</span>
                </div>
                <div className={styles.instructorDetails}>
                  <div className={styles.detailItem}>
                    <FaTools />
                    <span>경력 {instructor.experience}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <FaCertificate />
                    <span>{instructor.certification}</span>
                  </div>
                </div>
                <p className={styles.instructorDescription}>{instructor.description}</p>
              </div>
            ))}
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
                  <div className={styles.infoItem}>
                    <span className={styles.label}>강사:</span>
                    <span>{cls.instructor}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.label}>재료:</span>
                    <span>{cls.materials}</span>
                  </div>
                </div>
                <button className={`${styles.applyButton} ${cls.isFull ? styles.fullButton : ''}`} disabled={cls.isFull}>
                  {cls.isFull ? '정원 초과' : '신청하기'}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.pastEventsSection}>
          <h3>지난 특별 행사</h3>
          <div className={styles.eventsGrid}>
            {pastEvents.map((event, index) => (
              <div key={index} className={styles.eventCard}>
                <div className={styles.eventHeader}>
                  <h4>{event.title}</h4>
                  <span className={styles.eventType}>{event.type}</span>
                </div>
                <p className={styles.eventDescription}>{event.description}</p>
                <div className={styles.eventInfo}>
                  <div className={styles.infoItem}>
                    <span>📅 {event.date}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span>👥 참가자 {event.participants}명</span>
                  </div>
                </div>
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