'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaUserGraduate, FaPalette, FaMusic, FaBook, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import HeroSection from '@/app/components/common/HeroSection';
import styles from './page.module.css';

const ApplyPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const programs = [
    {
      id: 1,
      category: 'humanities',
      title: '철학 산책 - 일상에서 만나는 철학',
      instructor: '김철학 교수',
      period: '2025.03.01 - 2025.05.31',
      time: '매주 화요일 19:00-21:00',
      location: '3층 세미나실',
      capacity: '20명',
      enrolled: 15,
      fee: '무료',
      status: 'recruiting'
    },
    {
      id: 2,
      category: 'oneday',
      title: '도자기 만들기 원데이 클래스',
      instructor: '이도예 작가',
      period: '2025.02.15',
      time: '14:00-17:00',
      location: '지하 1층 공예실',
      capacity: '8명',
      enrolled: 6,
      fee: '40,000원',
      status: 'recruiting'
    },
    {
      id: 3,
      category: 'performance',
      title: '봄날의 클래식 콘서트',
      instructor: '광주시립교향악단',
      period: '2025.04.15',
      time: '19:30-21:30',
      location: '대공연장',
      capacity: '500명',
      enrolled: 342,
      fee: '20,000원',
      status: 'recruiting'
    },
    {
      id: 4,
      category: 'humanities',
      title: '광주 역사 이야기',
      instructor: '박역사 연구원',
      period: '2025.03.05 - 2025.04.23',
      time: '매주 목요일 14:00-16:00',
      location: '2층 강의실',
      capacity: '30명',
      enrolled: 30,
      fee: '무료',
      status: 'closed'
    }
  ];

  const filteredPrograms = selectedCategory === 'all' 
    ? programs 
    : programs.filter(program => program.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'humanities': return <FaBook />;
      case 'oneday': return <FaPalette />;
      case 'performance': return <FaMusic />;
      default: return <FaUserGraduate />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch(category) {
      case 'humanities': return '인문학';
      case 'oneday': return '원데이';
      case 'performance': return '공연';
      default: return category;
    }
  };

  const getStatusLabel = (status: string) => {
    switch(status) {
      case 'recruiting': return '모집중';
      case 'closed': return '마감';
      case 'completed': return '종료';
      default: return status;
    }
  };

  const getStatusClass = (status: string) => {
    switch(status) {
      case 'recruiting': return styles.recruiting;
      case 'closed': return styles.closed;
      case 'completed': return styles.completed;
      default: return '';
    }
  };

  return (
    <>
      <HeroSection 
        title="온라인 접수"
        description="광주문화진흥센터 프로그램을 온라인으로 신청하세요"
        breadcrumbs={[
          { label: '홈', href: '/' },
          { label: '온라인 접수' }
        ]}
      />

      <div className={styles.container}>
        {/* Notice Section */}
        <section className={styles.noticeSection}>
          <div className={styles.notice}>
            <h3>📢 접수 안내</h3>
            <ul>
              <li>프로그램 접수는 선착순으로 진행됩니다.</li>
              <li>수강료가 있는 프로그램은 접수 후 3일 이내 납부해주세요.</li>
              <li>최소 인원 미달 시 프로그램이 취소될 수 있습니다.</li>
              <li>문의: 062-123-4567</li>
            </ul>
          </div>
        </section>

        {/* Filter Section */}
        <section className={styles.filterSection}>
          <div className={styles.filterButtons}>
            <button 
              className={`${styles.filterBtn} ${selectedCategory === 'all' ? styles.active : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              전체
            </button>
            <button 
              className={`${styles.filterBtn} ${selectedCategory === 'humanities' ? styles.active : ''}`}
              onClick={() => setSelectedCategory('humanities')}
            >
              인문학
            </button>
            <button 
              className={`${styles.filterBtn} ${selectedCategory === 'oneday' ? styles.active : ''}`}
              onClick={() => setSelectedCategory('oneday')}
            >
              원데이클래스
            </button>
            <button 
              className={`${styles.filterBtn} ${selectedCategory === 'performance' ? styles.active : ''}`}
              onClick={() => setSelectedCategory('performance')}
            >
              공연/전시
            </button>
          </div>
        </section>

        {/* Programs List */}
        <section className={styles.programsSection}>
          <div className={styles.programsList}>
            {filteredPrograms.map(program => (
              <div key={program.id} className={styles.programCard}>
                <div className={styles.programHeader}>
                  <div className={styles.categoryBadge}>
                    {getCategoryIcon(program.category)}
                    <span>{getCategoryLabel(program.category)}</span>
                  </div>
                  <span className={`${styles.statusBadge} ${getStatusClass(program.status)}`}>
                    {getStatusLabel(program.status)}
                  </span>
                </div>

                <h3 className={styles.programTitle}>{program.title}</h3>
                <p className={styles.instructor}>강사: {program.instructor}</p>

                <div className={styles.programInfo}>
                  <div className={styles.infoItem}>
                    <FaCalendarAlt />
                    <span>{program.period}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <FaClock />
                    <span>{program.time}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <FaMapMarkerAlt />
                    <span>{program.location}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <FaUsers />
                    <span>{program.enrolled}/{program.capacity}</span>
                  </div>
                </div>

                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill}
                    style={{ width: `${(program.enrolled / parseInt(program.capacity)) * 100}%` }}
                  />
                </div>

                <div className={styles.programFooter}>
                  <span className={styles.fee}>{program.fee}</span>
                  {program.status === 'recruiting' ? (
                    <button className={styles.applyButton}>
                      신청하기
                    </button>
                  ) : (
                    <button className={styles.applyButton} disabled>
                      {getStatusLabel(program.status)}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Help Section */}
        <section className={styles.helpSection}>
          <h2>도움이 필요하신가요?</h2>
          <div className={styles.helpGrid}>
            <Link href="/contact/faq" className={styles.helpCard}>
              <h3>자주 묻는 질문</h3>
              <p>프로그램 신청에 대한 자주 묻는 질문을 확인하세요</p>
            </Link>
            <Link href="/contact/info" className={styles.helpCard}>
              <h3>문의하기</h3>
              <p>궁금한 사항은 언제든지 문의해주세요</p>
            </Link>
            <Link href="/program" className={styles.helpCard}>
              <h3>프로그램 안내</h3>
              <p>다양한 프로그램에 대해 자세히 알아보세요</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ApplyPage;