'use client';

import React from 'react';
import Link from 'next/link';
import { FaHandshake, FaHistory, FaAward, FaArrowRight } from 'react-icons/fa';
import HeroSection from '@/app/components/common/HeroSection';
import styles from './page.module.css';

const AboutPage = () => {
  return (
    <>
      <HeroSection 
        title="센터소개"
        description="광주문화진흥센터를 소개합니다"
        breadcrumbs={[
          { label: '홈', href: '/' },
          { label: '센터소개' }
        ]}
      />

      <div className={styles.container}>
        {/* Introduction Section */}
        <section className={styles.introSection}>
          <h2>광주문화진흥센터</h2>
          <p className={styles.introText}>
            광주문화진흥센터는 시민 여러분과 함께 문화예술의 가치를 나누고,
            지역 문화 발전을 선도하는 문화 플랫폼입니다.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className={styles.missionSection}>
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <h3>미션</h3>
              <p>
                모든 시민이 문화를 향유하고 창조할 수 있는
                열린 문화 공간을 만들어갑니다.
              </p>
            </div>
            <div className={styles.visionCard}>
              <h3>비전</h3>
              <p>
                문화와 예술로 하나되는 광주,
                세계로 뻗어나가는 문화도시 광주
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className={styles.valuesSection}>
          <h2>핵심가치</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FaHandshake />
              </div>
              <h3>소통</h3>
              <p>시민과 함께 만들어가는 열린 문화공간</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FaHistory />
              </div>
              <h3>전통</h3>
              <p>지역 문화유산의 계승과 발전</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FaAward />
              </div>
              <h3>혁신</h3>
              <p>창의적인 문화콘텐츠 개발과 보급</p>
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className={styles.historySection}>
          <h2>연혁</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2024</div>
              <div className={styles.timelineContent}>
                <h4>문화예술 교육 확대</h4>
                <p>시민 참여형 문화프로그램 100개 운영</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2023</div>
              <div className={styles.timelineContent}>
                <h4>디지털 문화 플랫폼 구축</h4>
                <p>온라인 문화콘텐츠 서비스 시작</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2022</div>
              <div className={styles.timelineContent}>
                <h4>광주문화진흥센터 재개관</h4>
                <p>리모델링 완료 및 시설 현대화</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2020</div>
              <div className={styles.timelineContent}>
                <h4>광주문화진흥센터 설립</h4>
                <p>광주광역시 문화예술 발전을 위한 센터 개관</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className={styles.linksSection}>
          <h2>더 알아보기</h2>
          <div className={styles.linksGrid}>
            <Link href="/about/greeting" className={styles.linkCard}>
              <div className={styles.linkContent}>
                <h3>인사말</h3>
                <p>센터장 인사말을 확인하세요</p>
              </div>
              <FaArrowRight className={styles.linkArrow} />
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <h2>함께 만들어가는 문화도시 광주</h2>
          <p>광주문화진흥센터가 여러분과 함께합니다</p>
          <Link href="/program" className={styles.ctaButton}>
            프로그램 둘러보기
          </Link>
        </section>
      </div>
    </>
  );
};

export default AboutPage;