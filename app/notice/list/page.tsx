'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import HeroSection from '@/app/components/common/HeroSection';
import styles from './page.module.css';

interface Notice {
  id: number;
  title: string;
  date: string;
  views: number;
  category: '공지' | '안내' | '행사';
  isImportant?: boolean;
}

const mockNotices: Notice[] = [
  {
    id: 1,
    title: '2024년 상반기 문화예술 프로그램 안내',
    date: '2024-01-15',
    views: 342,
    category: '공지',
    isImportant: true
  },
  {
    id: 2,
    title: '센터 시설 이용 시간 변경 안내',
    date: '2024-01-10',
    views: 186,
    category: '안내',
    isImportant: true
  },
  {
    id: 3,
    title: '인문학 강좌 수강생 모집',
    date: '2024-01-08',
    views: 425,
    category: '행사'
  },
  {
    id: 4,
    title: '신년 문화행사 개최 안내',
    date: '2024-01-05',
    views: 298,
    category: '행사'
  },
  {
    id: 5,
    title: '센터 주차장 이용 안내',
    date: '2024-01-03',
    views: 157,
    category: '안내'
  },
  {
    id: 6,
    title: '원데이클래스 운영 변경 사항',
    date: '2024-01-01',
    views: 203,
    category: '공지'
  },
  {
    id: 7,
    title: '문화센터 휴관일 안내',
    date: '2023-12-28',
    views: 128,
    category: '안내'
  },
  {
    id: 8,
    title: '2023년 연말 감사 인사',
    date: '2023-12-25',
    views: 312,
    category: '공지'
  }
];

export default function NoticeListPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const breadcrumbs = [
    { label: '홈', href: '/' },
    { label: '알림마당', href: '/notice' },
    { label: '공지사항' }
  ];

  const categories = ['전체', '공지', '안내', '행사'];

  const filteredNotices = mockNotices.filter(notice => {
    const matchesCategory = selectedCategory === '전체' || notice.category === selectedCategory;
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedNotices = filteredNotices.slice(startIndex, startIndex + itemsPerPage);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case '공지':
        return '#dc3545';
      case '안내':
        return '#0d6efd';
      case '행사':
        return '#198754';
      default:
        return '#6c757d';
    }
  };

  return (
    <div className={styles.container}>
      <HeroSection 
        title="공지사항"
        description="광주문화진흥센터의 새로운 소식과 공지사항을 확인하세요"
        breadcrumbs={breadcrumbs}
        backgroundGradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
      />
      
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.noticeSection}>
            <div className={styles.controls}>
              <div className={styles.categories}>
                {categories.map(category => (
                  <button
                    key={category}
                    className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className={styles.searchBox}>
                <input
                  type="text"
                  placeholder="공지사항 검색..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className={styles.searchInput}
                />
                <button className={styles.searchButton}>🔍</button>
              </div>
            </div>
            
            <div className={styles.noticeList}>
              <div className={styles.listHeader}>
                <div className={styles.headerItem}>번호</div>
                <div className={styles.headerItem}>분류</div>
                <div className={styles.headerTitle}>제목</div>
                <div className={styles.headerItem}>등록일</div>
                <div className={styles.headerItem}>조회수</div>
              </div>
              
              {paginatedNotices.map((notice, index) => (
                <Link 
                  key={notice.id}
                  href={`/notice/${notice.id}`}
                  className={styles.noticeItem}
                >
                  <div className={styles.itemNumber}>
                    {notice.isImportant ? (
                      <span className={styles.importantBadge}>중요</span>
                    ) : (
                      startIndex + index + 1
                    )}
                  </div>
                  <div className={styles.itemCategory}>
                    <span 
                      className={styles.categoryTag}
                      style={{ backgroundColor: getCategoryColor(notice.category) }}
                    >
                      {notice.category}
                    </span>
                  </div>
                  <div className={styles.itemTitle}>
                    {notice.isImportant && (
                      <span className={styles.importantIcon}>📌</span>
                    )}
                    {notice.title}
                  </div>
                  <div className={styles.itemDate}>{formatDate(notice.date)}</div>
                  <div className={styles.itemViews}>{notice.views}</div>
                </Link>
              ))}
              
              {paginatedNotices.length === 0 && (
                <div className={styles.noResults}>
                  <p>검색 결과가 없습니다.</p>
                </div>
              )}
            </div>
            
            {totalPages > 1 && (
              <div className={styles.pagination}>
                <button
                  className={styles.pageButton}
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                >
                  ≪
                </button>
                <button
                  className={styles.pageButton}
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  ‹
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    className={`${styles.pageButton} ${currentPage === page ? styles.activePage : ''}`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  className={styles.pageButton}
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  ›
                </button>
                <button
                  className={styles.pageButton}
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                >
                  ≫
                </button>
              </div>
            )}
          </div>
          
          <div className={styles.sideInfo}>
            <div className={styles.quickLinks}>
              <h3>빠른 메뉴</h3>
              <Link href="/notice/events" className={styles.quickLink}>
                행사 안내
              </Link>
              <Link href="/contact/info" className={styles.quickLink}>
                문의하기
              </Link>
              <Link href="/program" className={styles.quickLink}>
                프로그램 안내
              </Link>
            </div>
            
            <div className={styles.popularNotices}>
              <h3>인기 공지사항</h3>
              {mockNotices
                .sort((a, b) => b.views - a.views)
                .slice(0, 5)
                .map(notice => (
                  <Link 
                    key={notice.id}
                    href={`/notice/${notice.id}`}
                    className={styles.popularItem}
                  >
                    <span className={styles.popularTitle}>{notice.title}</span>
                    <span className={styles.popularViews}>{notice.views}</span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}