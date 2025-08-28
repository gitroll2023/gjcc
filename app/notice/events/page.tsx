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
  location: string;
  category: '공연' | '전시' | '교육' | '체험' | '기타';
  status: '모집중' | '진행중' | '종료' | '예정';
  maxParticipants?: number;
  currentParticipants?: number;
  fee: string;
  contact: string;
  image?: string;
}

const mockEvents: Event[] = [
  {
    id: 1,
    title: '2024 신년 음악회',
    description: '새해를 맞이하여 광주시립교향악단과 함께하는 특별한 음악회입니다. 클래식부터 대중음악까지 다양한 장르의 음악을 선사합니다.',
    startDate: '2024-02-15',
    endDate: '2024-02-15',
    location: '문화진흥센터 대공연장',
    category: '공연',
    status: '모집중',
    maxParticipants: 500,
    currentParticipants: 342,
    fee: '성인 15,000원 / 청소년 10,000원',
    contact: '062-123-4567'
  },
  {
    id: 2,
    title: '전통문화 체험교실',
    description: '우리나라 전통문화를 직접 체험할 수 있는 프로그램입니다. 한복 입기, 전통차 마시기, 전통놀이 등을 경험해보세요.',
    startDate: '2024-02-20',
    endDate: '2024-02-22',
    location: '문화진흥센터 체험실',
    category: '체험',
    status: '모집중',
    maxParticipants: 30,
    currentParticipants: 18,
    fee: '무료',
    contact: '062-123-4568'
  },
  {
    id: 3,
    title: '광주 역사 사진전',
    description: '광주의 과거와 현재를 담은 귀중한 사진들을 전시합니다. 우리 지역의 변화와 발전상을 확인해보세요.',
    startDate: '2024-01-10',
    endDate: '2024-03-10',
    location: '문화진흥센터 전시관',
    category: '전시',
    status: '진행중',
    fee: '무료',
    contact: '062-123-4569'
  },
  {
    id: 4,
    title: '창작 도예 워크숍',
    description: '전문 도예가와 함께하는 창작 도예 프로그램입니다. 나만의 도자기를 만들어보는 특별한 경험을 제공합니다.',
    startDate: '2024-03-05',
    endDate: '2024-03-07',
    location: '문화진흥센터 공예실',
    category: '교육',
    status: '예정',
    maxParticipants: 20,
    currentParticipants: 0,
    fee: '재료비 30,000원',
    contact: '062-123-4570'
  },
  {
    id: 5,
    title: '어린이 뮤지컬 <꿈나라 여행>',
    description: '어린이들을 위한 재미있고 교육적인 뮤지컬 공연입니다. 가족과 함께 즐길 수 있는 따뜻한 이야기를 선사합니다.',
    startDate: '2024-02-25',
    endDate: '2024-02-25',
    location: '문화진흥센터 소공연장',
    category: '공연',
    status: '모집중',
    maxParticipants: 200,
    currentParticipants: 156,
    fee: '어린이 8,000원 / 성인 12,000원',
    contact: '062-123-4571'
  },
  {
    id: 6,
    title: '지역 작가 작품 전시회',
    description: '광주 지역 작가들의 회화, 조각, 설치작품 등을 한자리에서 만나볼 수 있는 기회입니다.',
    startDate: '2024-01-20',
    endDate: '2024-02-28',
    location: '문화진흥센터 갤러리',
    category: '전시',
    status: '진행중',
    fee: '무료',
    contact: '062-123-4572'
  }
];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [selectedStatus, setSelectedStatus] = useState<string>('전체');
  const [searchTerm, setSearchTerm] = useState('');

  const breadcrumbs = [
    { label: '홈', href: '/' },
    { label: '알림마당', href: '/notice' },
    { label: '행사안내' }
  ];

  const categories = ['전체', '공연', '전시', '교육', '체험', '기타'];
  const statuses = ['전체', '모집중', '진행중', '예정', '종료'];

  const filteredEvents = mockEvents.filter(event => {
    const matchesCategory = selectedCategory === '전체' || event.category === selectedCategory;
    const matchesStatus = selectedStatus === '전체' || event.status === selectedStatus;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesStatus && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case '모집중':
        return '#198754';
      case '진행중':
        return '#0d6efd';
      case '예정':
        return '#6f42c1';
      case '종료':
        return '#6c757d';
      default:
        return '#6c757d';
    }
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
          <div className={styles.filters}>
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
            
            <div className={styles.filterGroup}>
              <label>상태</label>
              <select 
                value={selectedStatus} 
                onChange={(e) => setSelectedStatus(e.target.value)}
                className={styles.filterSelect}
              >
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
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
                    style={{ backgroundColor: getStatusColor(event.status) }}
                  >
                    {event.status}
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
                      <span className={styles.detailIcon}>📍</span>
                      <span className={styles.detailText}>{event.location}</span>
                    </div>
                    
                    <div className={styles.detailItem}>
                      <span className={styles.detailIcon}>💰</span>
                      <span className={styles.detailText}>{event.fee}</span>
                    </div>
                    
                    <div className={styles.detailItem}>
                      <span className={styles.detailIcon}>📞</span>
                      <span className={styles.detailText}>{event.contact}</span>
                    </div>
                    
                    {event.maxParticipants && (
                      <div className={styles.participantInfo}>
                        <div className={styles.participantText}>
                          신청현황: {event.currentParticipants} / {event.maxParticipants}명
                        </div>
                        <div className={styles.participantBar}>
                          <div 
                            className={styles.participantProgress}
                            style={{ 
                              width: `${((event.currentParticipants || 0) / event.maxParticipants) * 100}%` 
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className={styles.eventActions}>
                  <Link href={`/notice/event/${event.id}`} className={styles.detailButton}>
                    자세히 보기
                  </Link>
                  {event.status === '모집중' && (
                    <button className={styles.applyButton}>
                      신청하기
                    </button>
                  )}
                </div>
              </div>
            ))}
            
            {filteredEvents.length === 0 && (
              <div className={styles.noResults}>
                <p>검색 조건에 맞는 행사가 없습니다.</p>
              </div>
            )}
          </div>
          
          <div className={styles.quickInfo}>
            <div className={styles.infoCard}>
              <h3>행사 신청 안내</h3>
              <ul>
                <li>온라인 신청은 행사 시작 3일 전까지 가능합니다.</li>
                <li>전화 신청도 가능하며, 평일 09:00~18:00에 접수됩니다.</li>
                <li>무료 행사도 사전 신청이 필요할 수 있습니다.</li>
                <li>취소는 행사 하루 전까지 가능합니다.</li>
              </ul>
            </div>
            
            <div className={styles.infoCard}>
              <h3>문의 및 상담</h3>
              <div className={styles.contactInfo}>
                <p><strong>전화:</strong> 062-123-4567</p>
                <p><strong>이메일:</strong> info@gjculture.or.kr</p>
                <p><strong>운영시간:</strong> 평일 09:00~18:00</p>
                <p><strong>주말:</strong> 10:00~17:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}