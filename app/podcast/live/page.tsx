'use client';

import React from 'react';
import HeroSection from '@/app/components/common/HeroSection';
import styles from './page.module.css';

export default function LivePage() {
  const breadcrumbs = [
    { label: '홈', href: '/' },
    { label: '팟캐스트', href: '/podcast' },
    { label: '라이브 방송' }
  ];

  return (
    <div className={styles.container}>
      <HeroSection 
        title="라이브 방송"
        description="실시간으로 진행되는 생방송을 시청하세요"
        breadcrumbs={breadcrumbs}
        backgroundGradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      />
      
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>📺</div>
            <h2 className={styles.emptyTitle}>현재 진행중인 라이브가 없습니다</h2>
            <p className={styles.emptyDescription}>
              라이브 방송 일정은 공지사항을 통해 안내드립니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}