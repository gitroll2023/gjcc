'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import HeroSection from '@/app/components/common/HeroSection';
import styles from './page.module.css';

interface Event {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  category: '공연' | '전시' | '교육' | '체험' | '기타';
  status: '종료';
  maxParticipants?: number;
  currentParticipants?: number;
  fee: string;
}

const mockEvents: Event[] = [
  // 2025년 행사
  {
    id: 1,
    title: '2025 여름 음악 페스티벌',
    description: '다양한 장르의 음악을 한자리에서 즐길 수 있는 여름 음악 축제입니다.',
    startDate: '2025-08-15',
    endDate: '2025-08-20',
    category: '공연',
    status: '종료',
    maxParticipants: 350,
    currentParticipants: 343,
    fee: '무료'
  },
  {
    id: 2,
    title: '청소년 진로 체험 캠프',
    description: '청소년들을 위한 다양한 직업 체험과 진로 탐색 프로그램입니다.',
    startDate: '2025-08-10',
    endDate: '2025-08-12',
    category: '체험',
    status: '종료',
    maxParticipants: 50,
    currentParticipants: 50,
    fee: '참가비 20,000원'
  },
  {
    id: 3,
    title: '광주 현대미술 전시회',
    description: '지역 현대미술 작가들의 작품을 만나볼 수 있는 특별 전시입니다.',
    startDate: '2025-07-01',
    endDate: '2025-08-15',
    category: '전시',
    status: '종료',
    fee: '무료'
  },
  {
    id: 4,
    title: '전통 공예 워크숍',
    description: '한국 전통 공예 기법을 배우고 직접 작품을 만들어보는 워크숍입니다.',
    startDate: '2025-08-05',
    endDate: '2025-08-07',
    category: '교육',
    status: '종료',
    maxParticipants: 20,
    currentParticipants: 19,
    fee: '재료비 15,000원'
  },
  {
    id: 5,
    title: '가족 뮤지컬 <여름이야기>',
    description: '온 가족이 함께 즐길 수 있는 창작 뮤지컬 공연입니다.',
    startDate: '2025-08-18',
    endDate: '2025-08-20',
    category: '공연',
    status: '종료',
    maxParticipants: 250,
    currentParticipants: 245,
    fee: '성인 20,000원 / 어린이 10,000원'
  },
  {
    id: 6,
    title: '봄맞이 플라워 클래스',
    description: '봄꽃을 이용한 꽃꽂이와 화분 만들기 체험 프로그램입니다.',
    startDate: '2025-03-15',
    endDate: '2025-03-16',
    category: '체험',
    status: '종료',
    maxParticipants: 30,
    currentParticipants: 30,
    fee: '재료비 25,000원'
  },
  {
    id: 7,
    title: '어린이날 특별 공연',
    description: '어린이날을 맞아 준비한 특별한 마술쇼와 인형극 공연입니다.',
    startDate: '2025-05-05',
    endDate: '2025-05-05',
    category: '공연',
    status: '종료',
    maxParticipants: 200,
    currentParticipants: 196,
    fee: '어린이 무료 / 성인 5,000원'
  },
  {
    id: 8,
    title: '시민 문화 강좌',
    description: '문학, 역사, 철학 등 다양한 인문학 강좌 프로그램입니다.',
    startDate: '2025-06-20',
    endDate: '2025-07-20',
    category: '교육',
    status: '종료',
    maxParticipants: 100,
    currentParticipants: 98,
    fee: '무료'
  },
  // 2024년 행사
  {
    id: 9,
    title: '2024 송년 음악회',
    description: '한 해를 마무리하며 감동의 선율을 선사하는 송년 음악회입니다.',
    startDate: '2024-12-28',
    endDate: '2024-12-28',
    category: '공연',
    status: '종료',
    maxParticipants: 300,
    currentParticipants: 294,
    fee: '전 좌석 10,000원'
  },
  {
    id: 10,
    title: '가을 독서 문화제',
    description: '작가와의 만남, 북토크, 독서 체험 등 다양한 독서 문화 행사입니다.',
    startDate: '2024-10-15',
    endDate: '2024-10-20',
    category: '교육',
    status: '종료',
    maxParticipants: 150,
    currentParticipants: 147,
    fee: '무료'
  },
  {
    id: 11,
    title: '추석맞이 전통문화 체험',
    description: '송편 만들기, 전통놀이 등 추석 문화를 체험하는 프로그램입니다.',
    startDate: '2024-09-14',
    endDate: '2024-09-15',
    category: '체험',
    status: '종료',
    maxParticipants: 60,
    currentParticipants: 59,
    fee: '체험비 10,000원'
  },
  {
    id: 12,
    title: '여름방학 어린이 미술교실',
    description: '어린이들의 창의력을 키우는 여름방학 특별 미술 프로그램입니다.',
    startDate: '2024-08-05',
    endDate: '2024-08-16',
    category: '교육',
    status: '종료',
    maxParticipants: 40,
    currentParticipants: 40,
    fee: '재료비 30,000원'
  },
  {
    id: 13,
    title: '광주 사진 공모전 전시회',
    description: '광주의 아름다운 모습을 담은 사진 공모전 수상작 전시회입니다.',
    startDate: '2024-06-01',
    endDate: '2024-06-30',
    category: '전시',
    status: '종료',
    fee: '무료'
  },
  {
    id: 14,
    title: '봄맞이 클래식 콘서트',
    description: '봄의 정취를 느낄 수 있는 클래식 음악 콘서트입니다.',
    startDate: '2024-04-20',
    endDate: '2024-04-20',
    category: '공연',
    status: '종료',
    maxParticipants: 280,
    currentParticipants: 274,
    fee: '일반 15,000원 / 학생 8,000원'
  },
  {
    id: 15,
    title: '설날 특별 행사',
    description: '전통 세배, 윷놀이, 떡국 나눔 등 설날 특별 프로그램입니다.',
    startDate: '2024-02-10',
    endDate: '2024-02-11',
    category: '체험',
    status: '종료',
    maxParticipants: 100,
    currentParticipants: 99,
    fee: '무료'
  },
  {
    id: 16,
    title: '신년 서예 전시회',
    description: '지역 서예가들의 신년 작품을 감상할 수 있는 전시회입니다.',
    startDate: '2024-01-15',
    endDate: '2024-02-15',
    category: '전시',
    status: '종료',
    fee: '무료'
  }
];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [selectedYear, setSelectedYear] = useState<string>('전체');
  const [searchTerm, setSearchTerm] = useState('');

  const breadcrumbs = [
    { label: '홈', href: '/' },
    { label: '알림마당', href: '/notice' },
    { label: '행사안내' }
  ];

  const categories = ['전체', '공연', '전시', '교육', '체험', '기타'];
  const years = ['전체', '2025', '2024'];

  const filteredEvents = mockEvents.filter(event => {
    const matchesCategory = selectedCategory === '전체' || event.category === selectedCategory;
    const eventYear = new Date(event.startDate).getFullYear().toString();
    const matchesYear = selectedYear === '전체' || eventYear === selectedYear;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesYear && matchesSearch;
  }).sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case '공연':
        return '🎭';
      case '전시':
        return '🖼️';
      case '교육':
        return '📚';
      case '체험':
        return '🎨';
      default:
        return '📅';
    }
  };

  return (
    <div className={styles.container}>
      <HeroSection 
        title="행사안내"
        description="광주문화진흥센터의 다양한 문화행사와 프로그램을 만나보세요"
        breadcrumbs={breadcrumbs}
        backgroundGradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      />
      
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.currentNotice}>
            <div className={styles.noticeIcon}>📢</div>
            <p>현재 신청 가능한 행사가 없습니다. 새로운 행사는 공지사항을 통해 안내드립니다.</p>
          </div>

          <div className={styles.filters}>
            <div className={styles.filterGroup}>
              <label>연도</label>
              <select 
                value={selectedYear} 
                onChange={(e) => setSelectedYear(e.target.value)}
                className={styles.filterSelect}
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}년</option>
                ))}
              </select>
            </div>

            <div className={styles.filterGroup}>
              <label>분류</label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={styles.filterSelect}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div className={styles.searchGroup}>
              <input
                type="text"
                placeholder="행사 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
              <button className={styles.searchButton}>🔍</button>
            </div>
          </div>

          <h2 className={styles.sectionTitle}>지난 행사</h2>
          
          <div className={styles.eventsGrid}>
            {filteredEvents.map(event => (
              <div key={event.id} className={styles.eventCard}>
                <div className={styles.eventHeader}>
                  <div className={styles.eventMeta}>
                    <span className={styles.categoryIcon}>{getCategoryIcon(event.category)}</span>
                    <span className={styles.categoryText}>{event.category}</span>
                  </div>
                  <span 
                    className={styles.statusBadge}
                    style={{ backgroundColor: '#6c757d' }}
                  >
                    종료
                  </span>
                </div>
                
                <div className={styles.eventContent}>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <p className={styles.eventDescription}>{event.description}</p>
                  
                  <div className={styles.eventDetails}>
                    <div className={styles.detailItem}>
                      <span className={styles.detailIcon}>📅</span>
                      <span className={styles.detailText}>
                        {formatDate(event.startDate)}
                        {event.startDate !== event.endDate && ` ~ ${formatDate(event.endDate)}`}
                      </span>
                    </div>
                    
                    <div className={styles.detailItem}>
                      <span className={styles.detailIcon}>💰</span>
                      <span className={styles.detailText}>{event.fee}</span>
                    </div>
                    
                    {event.maxParticipants && (
                      <div className={styles.participantInfo}>
                        <div className={styles.participantText}>
                          참가인원: {event.currentParticipants} / {event.maxParticipants}명
                        </div>
                        <div className={styles.participantBar}>
                          <div 
                            className={styles.participantProgress}
                            style={{ 
                              width: `${((event.currentParticipants || 0) / event.maxParticipants) * 100}%`,
                              backgroundColor: '#6c757d'
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {filteredEvents.length === 0 && (
              <div className={styles.noResults}>
                <p>검색 조건에 맞는 행사가 없습니다.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}