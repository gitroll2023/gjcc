'use client';

import React from 'react';
import Link from 'next/link';
import { FaPalette, FaMusic, FaArrowRight } from 'react-icons/fa';
import HeroSection from '@/app/components/common/HeroSection';
import OnedayGallery from '@/app/components/OnedayGallery';
import styles from './page.module.css';

const ProgramPage = () => {
  const programs = [
    {
      title: '원데이 클래스',
      description: '하루만에 완성하는 특별한 취미 생활',
      icon: <FaPalette />,
      href: '/program/oneday',
      image: '/images/oneday.jpg',
      features: ['도자기 만들기', '캘리그라피', '커피 브루잉'],
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      special: true
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
            예술과 공연까지 여러분의 관심사에 맞는 프로그램을 찾아보세요.
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
                  {program.special && (
                    <span className={styles.specialBadge}>🔴 공지사항 확인</span>
                  )}
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

        <OnedayGallery />

        <section className={styles.infoSection}>
          <h2>프로그램 안내</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>신청 방법</h3>
              <ul>
                <li>온라인: 홈페이지에서 신청</li>
                <li>오프라인: 센터 안내데스크</li>
              </ul>
            </div>
            <div className={styles.infoCard}>
              <h3>수강료 안내</h3>
              <ul>
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