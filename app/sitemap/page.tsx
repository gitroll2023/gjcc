'use client';

import React from 'react';
import Link from 'next/link';
import { FaHome, FaInfoCircle, FaCalendarAlt, FaPodcast, FaBullhorn, FaPhone } from 'react-icons/fa';
import HeroSection from '@/app/components/common/HeroSection';
import styles from './page.module.css';

const SitemapPage = () => {
  const siteStructure = [
    {
      title: '홈',
      icon: <FaHome />,
      href: '/',
      subPages: []
    },
    {
      title: '센터소개',
      icon: <FaInfoCircle />,
      href: '/about',
      subPages: [
        { title: '인사말', href: '/about/greeting' },
        { title: '오시는길', href: '/about/location' }
      ]
    },
    {
      title: '프로그램',
      icon: <FaCalendarAlt />,
      href: '/program',
      subPages: [
        { title: '인문학', href: '/program/humanities' },
        { title: '원데이클래스', href: '/program/oneday' },
        { title: '문화공연', href: '/program/performance' }
      ]
    },
    {
      title: '팟캐스트',
      icon: <FaPodcast />,
      href: '/podcast',
      subPages: [
        { title: 'EP01 - 광주의 문화유산', href: '/podcast/EP01' },
        { title: 'EP02 - 청년 예술가', href: '/podcast/EP02' },
        { title: 'EP03 - 도시재생', href: '/podcast/EP03' }
      ]
    },
    {
      title: '알림마당',
      icon: <FaBullhorn />,
      href: '/notice',
      subPages: [
        { title: '공지사항', href: '/notice/list' },
        { title: '행사안내', href: '/notice/events' }
      ]
    },
    {
      title: '문의하기',
      icon: <FaPhone />,
      href: '/contact',
      subPages: [
        { title: '연락처', href: '/contact/info' },
        { title: 'FAQ', href: '/contact/faq' }
      ]
    },
    {
      title: '온라인접수',
      icon: <FaCalendarAlt />,
      href: '/apply',
      subPages: []
    }
  ];

  return (
    <>
      <HeroSection 
        title="사이트맵"
        description="광주문화진흥센터 웹사이트 전체 구조"
        breadcrumbs={[
          { label: '홈', href: '/' },
          { label: '사이트맵' }
        ]}
      />

      <div className={styles.container}>
        <section className={styles.sitemapSection}>
          <div className={styles.sitemapGrid}>
            {siteStructure.map((section, index) => (
              <div key={index} className={styles.sitemapCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon}>{section.icon}</span>
                  <Link href={section.href} className={styles.mainLink}>
                    <h2>{section.title}</h2>
                  </Link>
                </div>
                {section.subPages.length > 0 && (
                  <ul className={styles.subPageList}>
                    {section.subPages.map((subPage, subIndex) => (
                      <li key={subIndex}>
                        <Link href={subPage.href} className={styles.subLink}>
                          {subPage.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.infoSection}>
          <h2>사이트 이용 안내</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>웹 접근성</h3>
              <p>모든 사용자가 편리하게 이용할 수 있도록 웹 접근성을 준수하여 제작되었습니다.</p>
            </div>
            <div className={styles.infoCard}>
              <h3>개인정보처리방침</h3>
              <p>이용자의 개인정보를 소중히 보호하며, 관련 법령을 준수합니다.</p>
              <Link href="/privacy" className={styles.infoLink}>자세히 보기</Link>
            </div>
            <div className={styles.infoCard}>
              <h3>저작권 정책</h3>
              <p>본 웹사이트의 모든 콘텐츠는 광주문화진흥센터에 저작권이 있습니다.</p>
              <Link href="/copyright" className={styles.infoLink}>자세히 보기</Link>
            </div>
          </div>
        </section>

        <section className={styles.quickAccess}>
          <h2>자주 찾는 메뉴</h2>
          <div className={styles.quickLinks}>
            <Link href="/apply" className={styles.quickLink}>온라인 접수</Link>
            <Link href="/program" className={styles.quickLink}>프로그램 안내</Link>
            <Link href="/notice/list" className={styles.quickLink}>공지사항</Link>
            <Link href="/contact/info" className={styles.quickLink}>오시는 길</Link>
            <Link href="/contact/faq" className={styles.quickLink}>자주 묻는 질문</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default SitemapPage;