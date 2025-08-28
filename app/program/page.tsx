'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBook, FaPalette, FaMusic, FaArrowRight } from 'react-icons/fa';
import HeroSection from '@/app/components/common/HeroSection';
import styles from './page.module.css';

const ProgramPage = () => {
  const programs = [
    {
      title: '인문학 프로그램',
      description: '철학, 역사, 문학을 통해 삶의 깊이를 더하는 인문학 강좌',
      icon: <FaBook />,
      href: '/program/humanities',
      image: '/images/humanities.jpg',
      features: ['철학 산책', '광주 역사 이야기', '시 창작 워크샵'],
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: '원데이 클래스',
      description: '하루만에 완성하는 특별한 취미 생활',
      icon: <FaPalette />,
      href: '/program/oneday',
      image: '/images/oneday.jpg',
      features: ['도자기 만들기', '캘리그라피', '커피 브루잉'],
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: '문화공연',
      description: '감동과 즐거움이 있는 다양한 문화 공연',
      icon: <FaMusic />,
      href: '/program/performance',
      image: '/images/performance.jpg',
      features: ['클래식 공연', '연극', '재즈 나이트'],
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
  ];

  return (
    <>
      <HeroSection 
        title="프로그램"
        description="광주문화진흥센터의 다양한 프로그램을 만나보세요"
        breadcrumbs={[
          { label: '홈', href: '/' },
          { label: '프로그램' }
        ]}
      />

      <div className={styles.container}>
        <section className={styles.introSection}>
          <h2>문화로 만나는 새로운 일상</h2>
          <p>
            광주문화진흥센터는 시민 여러분의 삶을 더욱 풍요롭게 만들기 위해
            다양한 문화 프로그램을 운영하고 있습니다. 
            인문학부터 예술, 공연까지 여러분의 관심사에 맞는 프로그램을 찾아보세요.
          </p>
        </section>

        <section className={styles.programsSection}>
          <div className={styles.programGrid}>
            {programs.map((program, index) => (
              <div key={index} className={styles.programCard}>
                <div 
                  className={styles.cardHeader}
                  style={{ background: program.color }}
                >
                  <div className={styles.iconWrapper}>
                    {program.icon}
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h3>{program.title}</h3>
                  <p className={styles.description}>{program.description}</p>
                  <div className={styles.features}>
                    <h4>주요 프로그램</h4>
                    <ul>
                      {program.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <Link href={program.href} className={styles.cardLink}>
                    자세히 보기
                    <FaArrowRight className={styles.arrow} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.scheduleSection}>
          <h2>이달의 프로그램 일정</h2>
          <div className={styles.calendar}>
            <div className={styles.calendarHeader}>
              <h3>2025년 1월</h3>
            </div>
            <div className={styles.scheduleList}>
              <div className={styles.scheduleItem}>
                <div className={styles.date}>
                  <span className={styles.day}>15</span>
                  <span className={styles.weekday}>화</span>
                </div>
                <div className={styles.scheduleInfo}>
                  <h4>철학 산책 - 일상에서 만나는 철학</h4>
                  <p>19:00 - 21:00 | 세미나실</p>
                </div>
              </div>
              <div className={styles.scheduleItem}>
                <div className={styles.date}>
                  <span className={styles.day}>18</span>
                  <span className={styles.weekday}>금</span>
                </div>
                <div className={styles.scheduleInfo}>
                  <h4>도자기 만들기 원데이 클래스</h4>
                  <p>14:00 - 17:00 | 공예실</p>
                </div>
              </div>
              <div className={styles.scheduleItem}>
                <div className={styles.date}>
                  <span className={styles.day}>22</span>
                  <span className={styles.weekday}>화</span>
                </div>
                <div className={styles.scheduleInfo}>
                  <h4>봄날의 클래식 콘서트</h4>
                  <p>19:30 - 21:30 | 대공연장</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.infoSection}>
          <h2>프로그램 안내</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>신청 방법</h3>
              <ul>
                <li>온라인: 홈페이지에서 신청</li>
                <li>오프라인: 센터 1층 안내데스크</li>
                <li>전화: 062-123-4567</li>
              </ul>
            </div>
            <div className={styles.infoCard}>
              <h3>수강료 안내</h3>
              <ul>
                <li>인문학 프로그램: 무료</li>
                <li>원데이 클래스: 30,000원~</li>
                <li>문화공연: 10,000원~</li>
              </ul>
            </div>
            <div className={styles.infoCard}>
              <h3>유의사항</h3>
              <ul>
                <li>취소는 3일 전까지 가능</li>
                <li>재료비는 별도 부담</li>
                <li>정원 초과시 대기 등록</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h2>프로그램 참여하기</h2>
          <p>광주문화진흥센터와 함께 문화가 있는 삶을 만들어가세요</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaButton}>
              프로그램 문의
            </Link>
            <Link href="/about" className={styles.ctaButtonOutline}>
              센터 소개
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProgramPage;