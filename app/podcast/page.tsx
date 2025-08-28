'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPlay, FaCalendar, FaClock } from 'react-icons/fa';
import HeroSection from '@/app/components/common/HeroSection';
import styles from './page.module.css';

const PodcastListPage = () => {
  const podcasts = [
    {
      id: 'EP01',
      title: '인문학과 함께하는 광주',
      description: '철학, 역사, 문학으로 읽는 우리 지역 이야기',
      thumbnail: '/podcast/Ep01 인문학/image.png',
      duration: '08:21',
      date: '2025.03.02',
    },
    {
      id: 'EP02',
      title: '원데이클래스 체험기',
      description: '도자기, 캘리그라피와 함께하는 특별한 하루',
      thumbnail: '/podcast/Ep02 원데이클래스/image.png',
      duration: '06:12',
      date: '2025.06.02',
    },
    {
      id: 'EP03',
      title: '문화공연 이야기',
      description: '무대 위에서 펼쳐지는 예술의 향연',
      thumbnail: '/podcast/Ep03 문화예술공연/image.png',
      duration: '05:22',
      date: '2025.08.04',
    },
  ];

  return (
    <>
      <HeroSection 
        title="문화 팟캐스트"
        description="광주의 문화 이야기를 들려드립니다"
        breadcrumbs={[
          { label: '홈', href: '/' },
          { label: '팟캐스트' }
        ]}
      />

      <div className={styles.container}>
        <div className={styles.podcastGrid}>
          {podcasts.map((podcast) => (
            <Link 
              key={podcast.id} 
              href={`/podcast/${podcast.id}`}
              className={styles.podcastCard}
            >
              <div className={styles.thumbnailWrapper}>
                <img 
                  src={podcast.thumbnail} 
                  alt={podcast.title}
                  className={styles.thumbnail}
                />
                <div className={styles.playOverlay}>
                  <div className={styles.playButton}>
                    <FaPlay />
                  </div>
                </div>
                <div className={styles.episodeTag}>{podcast.id}</div>
              </div>
              
              <div className={styles.podcastInfo}>
                <div className={styles.metaInfo}>
                  <span className={styles.date}>
                    <FaCalendar /> {podcast.date}
                  </span>
                  <span className={styles.duration}>
                    <FaClock /> {podcast.duration}
                  </span>
                </div>
                
                <h3 className={styles.podcastTitle}>{podcast.title}</h3>
                <p className={styles.podcastDescription}>{podcast.description}</p>
                
                <div className={styles.listenButton}>
                  듣기 <span className={styles.arrow}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.infoSection}>
          <h2>광주문화진흥센터 팟캐스트</h2>
          <p>
            우리 지역의 문화와 예술 이야기를 담은 팟캐스트입니다. 
            인문학부터 원데이클래스, 문화공연까지 다양한 주제로 여러분을 찾아갑니다.
          </p>
          <p>
            매월 새로운 에피소드가 업데이트되니 많은 관심 부탁드립니다.
          </p>
        </div>
      </div>
    </>
  );
};

export default PodcastListPage;