'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './NoticeSection.module.css';

interface Notice {
  id: number;
  title: string;
  date: string;
  category: '공지' | '안내' | '채용' | '입찰';
  isImportant?: boolean;
}

const NoticeSection = () => {
  const [activeTab, setActiveTab] = useState<'notice' | 'recruit'>('notice');

  // 최신 공지사항 데이터 (notice/list 페이지와 동일)
  const notices: Notice[] = [
    {
      id: 1,
      title: '[중요] 2025년 하반기 문화프로그램 운영 안내',
      date: '2025-08-25',
      category: '공지',
      isImportant: true
    },
    {
      id: 2,
      title: '[중요] 센터 이용 시간 변경 안내 (9월 1일부터 적용)',
      date: '2025-08-20',
      category: '안내',
      isImportant: true
    },
    {
      id: 3,
      title: '2025 여름 음악 페스티벌 개최 결과 안내',
      date: '2025-08-21',
      category: '공지'
    },
    {
      id: 4,
      title: '청소년 진로 체험 캠프 종료 및 우수 참가자 발표',
      date: '2025-08-13',
      category: '공지'
    },
    {
      id: 5,
      title: '전통 공예 워크숍 수료증 발급 안내',
      date: '2025-08-08',
      category: '안내'
    }
  ];

  // 채용 공고 데이터
  const recruits: Notice[] = [
    {
      id: 101,
      title: '2025년 하반기 문화예술 강사 모집',
      date: '2025-08-15',
      category: '채용'
    },
    {
      id: 102,
      title: '시설관리 계약직 채용 공고',
      date: '2025-08-10',
      category: '채용'
    },
    {
      id: 103,
      title: '공연기획팀 정규직 채용 안내',
      date: '2025-07-28',
      category: '채용'
    }
  ];

  const displayData = activeTab === 'notice' ? notices : recruits;

  return (
    <section className={styles.noticeSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>공지사항</h2>
          <Link href="/notice/list" className={styles.moreBtn}>
            더보기 +
          </Link>
        </div>

        <div className={styles.tabContainer}>
          <button
            className={`${styles.tab} ${activeTab === 'notice' ? styles.active : ''}`}
            onClick={() => setActiveTab('notice')}
          >
            공지/안내
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'recruit' ? styles.active : ''}`}
            onClick={() => setActiveTab('recruit')}
          >
            채용/입찰
          </button>
        </div>

        <div className={styles.noticeList}>
          {displayData.map((notice) => (
            <Link
              key={notice.id}
              href={`/notice/${notice.id}`}
              className={styles.noticeItem}
            >
              <div className={styles.noticeContent}>
                <span className={`${styles.category} ${styles[notice.category]}`}>
                  {notice.category}
                </span>
                {notice.isImportant && (
                  <span className={styles.important}>중요</span>
                )}
                <span className={styles.noticeTitle}>{notice.title}</span>
              </div>
              <span className={styles.date}>
                {new Date(notice.date).toLocaleDateString('ko-KR')}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoticeSection;