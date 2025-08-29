'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import styles from './MainMenu.module.css';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  author: string;
  category: string;
}

const MainMenu = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { id: 0, name: '보도자료' },
    { id: 1, name: '공지사항' },
    { id: 2, name: '사업공고' },
    { id: 3, name: '입찰공고' },
    { id: 4, name: '채용공고' },
  ];

  const newsData: NewsItem[] = [
    {
      id: 1,
      title: '[소식] 광주문화진흥센터, 2025년 문화예술 지원사업 공모',
      date: '2025-08-27',
      author: '광주문화진흥센터',
      category: '보도자료'
    },
    {
      id: 2,
      title: '[안내] 광주문화진흥센터 특별 전시회 개최',
      date: '2025-08-26',
      author: '광주문화진흥센터',
      category: '보도자료'
    },
    {
      id: 3,
      title: '[공고] 2025년도 신진예술가 육성 프로그램 참가자 모집',
      date: '2025-08-25',
      author: '광주문화진흥센터',
      category: '보도자료'
    },
    {
      id: 4,
      title: '[행사] 광주비엔날레 연계 프로그램 안내',
      date: '2025-08-24',
      author: '광주문화진흥센터',
      category: '보도자료'
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h3 className={styles.sectionTitle}>주요 메뉴</h3>
        
        <div className={styles.tabContainer}>
          <ul className={styles.tabs}>
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>
          
          <div className={styles.tabContent}>
            <ul className={styles.newsList}>
              {newsData.map((item) => (
                <li key={item.id}>
                  <Link href="#" className={styles.newsItem}>
                    <h4 className={styles.newsTitle}>{item.title}</h4>
                    <div className={styles.newsMeta}>
                      <span className={styles.newsDate}>
                        <FaClock /> {item.date}
                      </span>
                      <span className={styles.newsAuthor}>{item.author}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className={styles.moreLink}>
              <Link href="#">전체보기</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainMenu;