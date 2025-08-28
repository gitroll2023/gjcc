'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaPlay, FaPause } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './VideoSection.module.css';

const VideoSection = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const podcasts = [
    {
      id: 'EP01',
      title: '[EP.01] 인문학과 함께하는 광주',
      description: '철학, 역사, 문학으로 읽는 우리 지역 이야기',
      thumbnail: '/podcast/Ep01 인문학/image.png',
      audioFile: '/podcast/Ep01 인문학/Ep01. 인문학__평생의_동반자,_삶을_보는_눈을_바꾸다_-_연령별_맞춤_활용법부터_일상_속_실천까지.wav',
      duration: '08:21',
      date: '2025.03.02',
    },
    {
      id: 'EP02',
      title: '[EP.02] 원데이클래스 체험기',
      description: '도자기, 캘리그라피와 함께하는 특별한 하루',
      thumbnail: '/podcast/Ep02 원데이클래스/image.png',
      audioFile: '/podcast/Ep02 원데이클래스/Ep02. 딱_하루의_기적__원데이클래스로_찾은_성취감과_새로운_일상.mp3',
      duration: '06:12',
      date: '2025.06.02',
    },
    {
      id: 'EP03',
      title: '[EP.03] 문화공연 이야기',
      description: '무대 위에서 펼쳐지는 예술의 향연',
      thumbnail: '/podcast/Ep03 문화예술공연/image.png',
      audioFile: '/podcast/Ep03 문화예술공연/Ep03. 문화예술공연을 하는 이유.wav',
      duration: '05:22',
      date: '2025.08.04',
    },
  ];

  useEffect(() => {
    const playNextPodcast = () => {
      const nextIndex = (currentIndex + 1) % podcasts.length;
      setCurrentIndex(nextIndex);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      handlePreviewToggle(podcasts[nextIndex].id);
    };

    // 오디오 재생 시간 체크 및 1분 제한
    const interval = setInterval(() => {
      if (audioRef.current && !audioRef.current.paused) {
        const time = audioRef.current.currentTime;
        setCurrentTime(time);
        
        // 1분(60초) 되면 다음 팟캐스트로
        if (time >= 60) {
          playNextPodcast();
        }
      }
    }, 100);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, playingId]);

  const handlePreviewToggle = (podcastId: string) => {
    if (playingId === podcastId) {
      // 일시정지
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setPlayingId(null);
    } else {
      // 재생
      if (audioRef.current) {
        audioRef.current.pause();
      }
      
      const podcast = podcasts.find(p => p.id === podcastId);
      if (podcast) {
        audioRef.current = new Audio(podcast.audioFile);
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        setPlayingId(podcastId);
        setCurrentTime(0);
        
        // 자동으로 다음 팟캐스트로 넘어가기 위해 인덱스 업데이트
        const index = podcasts.findIndex(p => p.id === podcastId);
        setCurrentIndex(index);
      }
    }
  };

  const handlePodcastClick = (podcastId: string) => {
    // 재생 중지하고 상세 페이지로 이동
    if (audioRef.current) {
      audioRef.current.pause();
    }
    window.location.href = `/podcast/${podcastId}`;
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h3 className={styles.sectionTitle}>문화 팟캐스트</h3>
        <p className={styles.sectionDesc}>광주의 문화 이야기를 들려드립니다</p>
        
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          centeredSlides={false}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
              centeredSlides: false,
            },
          }}
          className={styles.swiper}
        >
          {podcasts.map((podcast) => (
            <SwiperSlide key={podcast.id}>
              <div className={styles.podcastItem}>
                <div 
                  className={styles.thumbnail}
                  onClick={() => handlePreviewToggle(podcast.id)}
                >
                  <img src={podcast.thumbnail} alt={podcast.title} />
                  <div className={styles.playButton}>
                    {playingId === podcast.id ? <FaPause /> : <FaPlay />}
                  </div>
                  <span className={styles.duration}>
                    {playingId === podcast.id 
                      ? `미리듣기 ${Math.floor(60 - currentTime)}초` 
                      : '1분 미리듣기'}
                  </span>
                </div>
                <div className={styles.podcastInfo}>
                  <span className={styles.date}>{podcast.date}</span>
                  <h4 className={styles.podcastTitle}>{podcast.title}</h4>
                  <p className={styles.podcastDesc}>{podcast.description}</p>
                  <button 
                    className={styles.detailButton}
                    onClick={() => handlePodcastClick(podcast.id)}
                  >
                    자세히 듣기 →
                  </button>
                  {playingId === podcast.id && (
                    <div className={styles.progressBar}>
                      <div 
                        className={styles.progressFill} 
                        style={{ width: `${(currentTime / 60) * 100}%` }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VideoSection;