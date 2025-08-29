'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import HeroSection from '@/app/components/common/HeroSection';
import { formatDateStable } from '@/app/utils/dateFormat';
import styles from './page.module.css';

interface Notice {
  id: number;
  title: string;
  date: string;
  views: number;
  category: '공지' | '안내' | '채용' | '입찰';
  isImportant?: boolean;
  department?: string;
}

const mockNotices: Notice[] = [
  // 중요 공지
  {
    id: 1,
    title: '[중요] 2025년 하반기 문화프로그램 운영 안내',
    date: '2025-08-25',
    views: 542,
    category: '공지',
    isImportant: true,
    department: '문화사업팀'
  },
  {
    id: 2,
    title: '[중요] 센터 이용 시간 변경 안내 (9월 1일부터 적용)',
    date: '2025-08-20',
    views: 386,
    category: '안내',
    isImportant: true,
    department: '운영지원팀'
  },
  // 2025년 8월
  {
    id: 3,
    title: '2025 여름 음악 페스티벌 개최 결과 안내',
    date: '2025-08-21',
    views: 425,
    category: '공지',
    department: '공연기획팀'
  },
  {
    id: 4,
    title: '청소년 진로 체험 캠프 종료 및 우수 참가자 발표',
    date: '2025-08-13',
    views: 298,
    category: '공지',
    department: '교육운영팀'
  },
  {
    id: 5,
    title: '전통 공예 워크숍 수료증 발급 안내',
    date: '2025-08-08',
    views: 157,
    category: '안내',
    department: '교육운영팀'
  },
  // 2025년 7월
  {
    id: 6,
    title: '광주 현대미술 전시회 전시 기간 연장 안내',
    date: '2025-07-25',
    views: 203,
    category: '안내',
    department: '전시기획팀'
  },
  {
    id: 7,
    title: '시민 문화 강좌 수강생 추가 모집',
    date: '2025-07-10',
    views: 512,
    category: '공지',
    department: '교육운영팀'
  },
  // 2025년 6월
  {
    id: 8,
    title: '여름방학 특별 프로그램 운영 계획',
    date: '2025-06-15',
    views: 628,
    category: '공지',
    department: '문화사업팀'
  },
  {
    id: 9,
    title: '시민 문화 강좌 개강 안내',
    date: '2025-06-10',
    views: 342,
    category: '안내',
    department: '교육운영팀'
  },
  // 2025년 5월
  {
    id: 10,
    title: '어린이날 특별 공연 성황리 종료',
    date: '2025-05-06',
    views: 445,
    category: '공지',
    department: '공연기획팀'
  },
  {
    id: 11,
    title: '5월 가정의 달 특별 프로그램 안내',
    date: '2025-05-01',
    views: 389,
    category: '안내',
    department: '문화사업팀'
  },
  // 2025년 4월
  {
    id: 12,
    title: '봄맞이 문화예술 프로그램 참가자 모집',
    date: '2025-04-10',
    views: 467,
    category: '공지',
    department: '문화사업팀'
  },
  {
    id: 13,
    title: '센터 시설 정기 점검 일정 안내',
    date: '2025-04-05',
    views: 234,
    category: '안내',
    department: '시설관리팀'
  },
  // 2025년 3월
  {
    id: 14,
    title: '봄맞이 플라워 클래스 마감 안내',
    date: '2025-03-17',
    views: 356,
    category: '안내',
    department: '교육운영팀'
  },
  {
    id: 15,
    title: '2025년 상반기 프로그램 일정표',
    date: '2025-03-02',
    views: 789,
    category: '공지',
    department: '기획조정팀'
  },
  // 2025년 2월
  {
    id: 16,
    title: '설 연휴 센터 운영 안내',
    date: '2025-02-25',
    views: 412,
    category: '안내',
    department: '운영지원팀'
  },
  {
    id: 17,
    title: '2025년 문화센터 운영 계획 발표',
    date: '2025-02-10',
    views: 567,
    category: '공지',
    department: '기획조정팀'
  },
  // 2025년 1월
  {
    id: 18,
    title: '신년 인사 및 센터 운영 방향',
    date: '2025-01-02',
    views: 623,
    category: '공지',
    department: '센터장'
  },
  // 2024년 12월
  {
    id: 19,
    title: '2024 송년 음악회 성황리 종료',
    date: '2024-12-29',
    views: 445,
    category: '공지',
    department: '공연기획팀'
  },
  {
    id: 20,
    title: '연말연시 센터 운영 일정 안내',
    date: '2024-12-20',
    views: 398,
    category: '안내',
    department: '운영지원팀'
  },
  // 2024년 11월
  {
    id: 21,
    title: '2025년 상반기 프로그램 사전 안내',
    date: '2024-11-15',
    views: 512,
    category: '공지',
    department: '기획조정팀'
  },
  // 2024년 10월
  {
    id: 22,
    title: '가을 독서 문화제 종료 및 수상자 발표',
    date: '2024-10-21',
    views: 387,
    category: '공지',
    department: '문화사업팀'
  },
  {
    id: 23,
    title: '가을 독서 문화제 작가와의 만남 일정',
    date: '2024-10-05',
    views: 456,
    category: '안내',
    department: '문화사업팀'
  },
  // 2024년 9월
  {
    id: 24,
    title: '추석맞이 전통문화 체험 행사 안내',
    date: '2024-09-10',
    views: 523,
    category: '공지',
    department: '문화사업팀'
  },
  {
    id: 25,
    title: '추석 연휴 센터 운영 안내',
    date: '2024-09-05',
    views: 412,
    category: '안내',
    department: '운영지원팀'
  },
  // 2024년 8월
  {
    id: 26,
    title: '여름방학 어린이 미술교실 수료식',
    date: '2024-08-17',
    views: 334,
    category: '공지',
    department: '교육운영팀'
  },
  {
    id: 27,
    title: '여름방학 특별 프로그램 참가자 모집',
    date: '2024-08-01',
    views: 612,
    category: '공지',
    department: '교육운영팀'
  },
  // 2024년 7월
  {
    id: 28,
    title: '하반기 문화프로그램 일정 안내',
    date: '2024-07-15',
    views: 478,
    category: '공지',
    department: '기획조정팀'
  },
  // 2024년 6월
  {
    id: 29,
    title: '광주 사진 공모전 전시회 개최',
    date: '2024-06-01',
    views: 389,
    category: '공지',
    department: '전시기획팀'
  },
  // 2024년 5월
  {
    id: 30,
    title: '어린이날 행사 준비 안내',
    date: '2024-05-01',
    views: 456,
    category: '안내',
    department: '문화사업팀'
  },
  // 2024년 4월
  {
    id: 31,
    title: '봄맞이 클래식 콘서트 예매 안내',
    date: '2024-04-10',
    views: 523,
    category: '공지',
    department: '공연기획팀'
  },
  // 2024년 3월
  {
    id: 32,
    title: '2024년 상반기 프로그램 시작 안내',
    date: '2024-03-02',
    views: 678,
    category: '공지',
    department: '기획조정팀'
  },
  // 2024년 2월
  {
    id: 33,
    title: '설날 특별 행사 종료 및 감사 인사',
    date: '2024-02-12',
    views: 412,
    category: '공지',
    department: '문화사업팀'
  },
  {
    id: 34,
    title: '설날 특별 행사 일정 안내',
    date: '2024-02-05',
    views: 489,
    category: '안내',
    department: '문화사업팀'
  },
  // 2024년 1월
  {
    id: 35,
    title: '신년 서예 전시회 개막',
    date: '2024-01-15',
    views: 367,
    category: '공지',
    department: '전시기획팀'
  },
  {
    id: 36,
    title: '2024년 문화센터 운영 계획',
    date: '2024-01-02',
    views: 712,
    category: '공지',
    department: '센터장'
  }
];

export default function NoticeListPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const breadcrumbs = [
    { label: '홈', href: '/' },
    { label: '알림마당', href: '/notice' },
    { label: '공지사항' }
  ];

  const categories = ['전체', '공지', '안내', '채용', '입찰'];

  const filteredNotices = mockNotices.filter(notice => {
    const matchesCategory = selectedCategory === '전체' || notice.category === selectedCategory;
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedNotices = filteredNotices.slice(startIndex, startIndex + itemsPerPage);


  return (
    <div className={styles.container}>
      <HeroSection 
        title="공지사항"
        description="광주문화진흥센터의 새로운 소식과 공지사항을 확인하세요"
        breadcrumbs={breadcrumbs}
        backgroundGradient="linear-gradient(135deg, #2c3e50 0%, #34495e 100%)"
      />
      
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.searchSection}>
            <div className={styles.totalCount}>
              총 <strong>{filteredNotices.length}</strong>건
            </div>
            <div className={styles.searchBox}>
              <select 
                className={styles.categorySelect}
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className={styles.searchInput}
              />
              <button className={styles.searchButton}>검색</button>
            </div>
          </div>
          
          <div className={styles.noticeTable}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.thNumber}>번호</th>
                  <th className={styles.thCategory}>구분</th>
                  <th className={styles.thTitle}>제목</th>
                  <th className={styles.thDepartment}>담당부서</th>
                  <th className={styles.thDate}>등록일</th>
                  <th className={styles.thViews}>조회</th>
                </tr>
              </thead>
              <tbody>
                {paginatedNotices.map((notice, index) => (
                  <tr key={notice.id}>
                    <td className={styles.tdNumber}>
                      {notice.isImportant ? (
                        <span className={styles.importantBadge}>공지</span>
                      ) : (
                        filteredNotices.length - startIndex - index
                      )}
                    </td>
                    <td className={styles.tdCategory}>
                      <span className={styles.categoryBadge}>{notice.category}</span>
                    </td>
                    <td className={styles.tdTitle}>
                      <Link href={`/notice/${notice.id}`} className={styles.titleLink}>
                        {notice.title}
                        {new Date(notice.date) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) && (
                          <span className={styles.newBadge}>NEW</span>
                        )}
                      </Link>
                    </td>
                    <td className={styles.tdDepartment}>{notice.department || '-'}</td>
                    <td className={styles.tdDate}>{formatDateStable(notice.date)}</td>
                    <td className={styles.tdViews}>{notice.views}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {paginatedNotices.length === 0 && (
              <div className={styles.noResults}>
                검색 결과가 없습니다.
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
                처음
              </button>
              <button
                className={styles.pageButton}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                이전
              </button>
              
              <div className={styles.pageNumbers}>
                {Array.from({ length: Math.min(10, totalPages) }, (_, i) => {
                  const startPage = Math.max(1, currentPage - 5);
                  const page = startPage + i;
                  if (page <= totalPages) {
                    return (
                      <button
                        key={page}
                        className={`${styles.pageNumber} ${currentPage === page ? styles.active : ''}`}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    );
                  }
                  return null;
                })}
              </div>
              
              <button
                className={styles.pageButton}
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                다음
              </button>
              <button
                className={styles.pageButton}
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
              >
                마지막
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}