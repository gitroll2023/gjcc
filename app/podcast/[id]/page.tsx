'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaPlay, FaPause, FaFileAlt } from 'react-icons/fa';
import HeroSection from '@/app/components/common/HeroSection';
import styles from './page.module.css';

interface Transcript {
  speaker: string;
  text: string;
}

interface PodcastData {
  id: string;
  title: string;
  description: string;
  audioFile: string;
  transcript: Transcript[];
  thumbnail: string;
  date: string;
}

const PodcastPlayer = () => {
  const params = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [podcastData, setPodcastData] = useState<PodcastData | null>(null);
  const [fontSize, setFontSize] = useState(16);
  const [mounted, setMounted] = useState(false);

  const speakerNames: { [key: string]: string } = {
    'SPEAKER1': '김예술',
    'SPEAKER2': '이문화'
  };

  const parseTranscript = (text: string): Transcript[] => {
    const lines = text.split('\n');
    const transcript: Transcript[] = [];
    
    lines.forEach(line => {
      if (line.trim()) {
        const match = line.match(/^(SPEAKER\d+):\s*(.+)/);
        if (match) {
          // Replace SPEAKER references within the text content
          let processedText = match[2].trim();
          processedText = processedText.replace(/SPEAKER1/g, '김예술');
          processedText = processedText.replace(/SPEAKER2/g, '이문화');
          
          transcript.push({
            speaker: speakerNames[match[1]] || match[1],
            text: processedText
          });
        }
      }
    });
    
    return transcript;
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const loadPodcastData = async () => {
      const id = params.id as string;
      
      const podcastInfo: { [key: string]: { title: string; description: string; folder: string; audioFile: string; transcriptFile: string; thumbnail: string; date: string } } = {
        'EP01': {
          title: '인문학과 함께하는 광주',
          description: '철학, 역사, 문학으로 읽는 우리 지역 이야기',
          folder: 'Ep01 인문학',
          audioFile: 'Ep01. 인문학__평생의_동반자,_삶을_보는_눈을_바꾸다_-_연령별_맞춤_활용법부터_일상_속_실천까지.wav',
          transcriptFile: 'Ep01. 대본.txt',
          thumbnail: '/podcast/Ep01 인문학/image.png',
          date: '2025.03.02'
        },
        'EP02': {
          title: '원데이클래스 체험기',
          description: '도자기, 캘리그라피와 함께하는 특별한 하루',
          folder: 'Ep02 원데이클래스',
          audioFile: 'Ep02. 딱_하루의_기적__원데이클래스로_찾은_성취감과_새로운_일상.mp3',
          transcriptFile: 'Ep02. 대본.txt',
          thumbnail: '/podcast/Ep02 원데이클래스/image.png',
          date: '2025.06.02'
        },
        'EP03': {
          title: '문화공연 이야기',
          description: '무대 위에서 펼쳐지는 예술의 향연',
          folder: 'Ep03 문화예술공연',
          audioFile: 'Ep03. 문화예술공연을 하는 이유.wav',
          transcriptFile: 'Ep03. 대본.txt',
          thumbnail: '/podcast/Ep03 문화예술공연/image.png',
          date: '2025.08.04'
        }
      };

      if (podcastInfo[id]) {
        const info = podcastInfo[id];
        
        // Load transcript
        try {
          const response = await fetch(`/podcast/${info.folder}/${info.transcriptFile}`);
          const transcriptText = await response.text();
          const transcript = parseTranscript(transcriptText);
          
          setPodcastData({
            id,
            title: info.title,
            description: info.description,
            audioFile: `/podcast/${info.folder}/${info.audioFile}`,
            transcript,
            thumbnail: info.thumbnail,
            date: info.date
          });
        } catch (error) {
          console.error('Failed to load podcast data:', error);
        }
      }
    };

    loadPodcastData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id, mounted]);

  const togglePlay = () => {
    const audio = document.getElementById('podcastAudio') as HTMLAudioElement;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!mounted || !podcastData) {
    return (
      <>
        <HeroSection 
          title="문화 팟캐스트"
          description="광주의 문화 이야기를 들려드립니다"
          breadcrumbs={[
            { label: '홈', href: '/' },
            { label: '팟캐스트', href: '/podcast' },
            { label: '로딩 중...' }
          ]}
        />
        <div className={styles.loading}>팟캐스트를 불러오는 중...</div>
      </>
    );
  }

  return (
    <>
      <HeroSection 
        title="문화 팟캐스트"
        description="광주의 문화 이야기를 들려드립니다"
        breadcrumbs={[
          { label: '홈', href: '/' },
          { label: '팟캐스트', href: '/podcast' },
          { label: podcastData.id }
        ]}
      />

      <div className={styles.container}>
        <div className={styles.playerSection}>
          {/* 1x1 상단 영역 - 에피소드 정보 */}
          <div className={styles.episodeHeader}>
          <div className={styles.episodeNumber}>
            <span className={styles.podcastLabel}>PODCAST</span>
            <span className={styles.episodeId}>{podcastData.id}</span>
          </div>
          <div className={styles.episodeInfo}>
            <h1 className={styles.title}>{podcastData.title}</h1>
            <p className={styles.description}>{podcastData.description}</p>
            <div className={styles.metaInfo}>
              <span className={styles.date}>{podcastData.date}</span>
              <span className={styles.separator}>•</span>
              <span className={styles.hosts}>진행: 김예술, 이문화</span>
            </div>
          </div>
        </div>

        {/* 1x2 하단 영역 - 썸네일과 플레이어 */}
        <div className={styles.playerContent}>
          <div className={styles.thumbnailWrapper}>
            <img 
              src={podcastData.thumbnail} 
              alt={podcastData.title}
              className={styles.podcastThumbnail}
            />
          </div>
          
          <div className={styles.playerMain}>
            <div className={styles.audioPlayer}>
              <audio 
                id="podcastAudio" 
                src={podcastData.audioFile}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                controls
                className={styles.audioElement}
              />
              
              <div className={styles.playerControls}>
                <button onClick={togglePlay} className={styles.playButton}>
                  {isPlaying ? <FaPause /> : <FaPlay />}
                  <span>{isPlaying ? '일시정지' : '재생'}</span>
                </button>
                
                <button 
                  onClick={() => setShowTranscript(!showTranscript)} 
                  className={styles.transcriptButton}
                >
                  <FaFileAlt />
                  <span>대본 {showTranscript ? '숨기기' : '보기'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>

        {showTranscript && (
          <div className={styles.transcriptSection}>
          <div className={styles.transcriptHeader}>
            <h2 className={styles.transcriptTitle}>
              <FaFileAlt /> 팟캐스트 대본
            </h2>
            <div className={styles.fontControls}>
              <button 
                className={styles.fontButton}
                onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                disabled={fontSize <= 12}
              >
                -
              </button>
              <span className={styles.fontSize}>{fontSize}px</span>
              <button 
                className={styles.fontButton}
                onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                disabled={fontSize >= 24}
              >
                +
              </button>
            </div>
          </div>
          
          <div className={styles.transcriptContent}>
            {podcastData.transcript.map((item, index) => (
              <div key={index} className={styles.transcriptItem}>
                <span className={`${styles.speaker} ${item.speaker === '김예술' ? styles.speaker1 : styles.speaker2}`}>
                  {item.speaker}
                </span>
                <p className={styles.dialogue} style={{ fontSize: `${fontSize}px` }}>{item.text}</p>
              </div>
            ))}
          </div>
          </div>
        )}

        <div className={styles.otherEpisodes}>
          <h3>다른 에피소드</h3>
          <div className={styles.episodeList}>
            {['EP01', 'EP02', 'EP03'].filter(ep => ep !== params.id).map(ep => {
              const titles: { [key: string]: string } = {
                'EP01': '인문학과 함께하는 광주',
                'EP02': '원데이클래스 체험기',
                'EP03': '문화공연 이야기'
              };
              
              return (
                <Link key={ep} href={`/podcast/${ep}`} className={styles.episodeLink}>
                  <span className={styles.episodeNumber}>{ep}</span>
                  <span className={styles.episodeTitle}>{titles[ep]}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PodcastPlayer;