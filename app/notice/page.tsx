'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBullhorn, FaCalendarAlt, FaExclamationCircle, FaSearch, FaArrowRight } from 'react-icons/fa';
import HeroSection from '@/app/components/common/HeroSection';
import styles from './page.module.css';

const NoticePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  const notices = [
    {
      id: 1,
      category: 'notice',
      title: '[중요] 2025년 하반기 문화프로그램 운영 안내',
      date: '2025-08-25',
      isImportant: true,
      views: 542
    },
    {
      id: 3,
      category: 'notice',
      title: '2025 여름 음악 페스티벌 개최 결과 안내',
      date: '2025-08-21',
      isImportant: false,
      views: 425
    },
    {
      id: 2,
      category: 'notice',
      title: '[중요] 센터 이용 시간 변경 안내 (9월 1일부터 적용)',
      date: '2025-08-20',
      isImportant: true,
      views: 386
    },
    {
      id: 4,
      category: 'notice',
      title: '청소년 진로 체험 캠프 종료 및 우수 참가자 발표',
      date: '2025-08-13',
      isImportant: false,
      views: 298
    },
    {
      id: 5,
      category: 'notice',
      title: '전통 공예 워크숍 수료증 발급 안내',
      date: '2025-08-08',
      isImportant: false,
      views: 157
    }
  ];

  const events = [
    {
      id: 1,
      title: '2025 여름 음악 페스티벌',
      date: '2025-08-15',
      status: '종료',
      category: '공연'
    },
    {
      id: 2,
      title: '청소년 진로 체험 캠프',
      date: '2025-08-10',
      status: '종료',
      category: '캠프'
    },
    {
      id: 3,
      title: '전통 공예 워크숍',
      date: '2025-08-01',
      status: '종료',
      category: '체험'
    }
  ];

  const filteredNotices = selectedCategory === 'all' 
    ? notices 
    : notices.filter(notice => notice.category === selectedCategory);

  const getCategoryLabel = (category: string) => {
    switch(category) {
      case 'notice': return '공지';
      case 'event': return '행사';
      default: return category;
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case '모집중': return styles.recruiting;
      case '예정': return styles.upcoming;
      case '진행중': return styles.ongoing;
      default: return '';
    }
  };

  return (
    <>
      <HeroSection 
        title="알림마당"
        description="광주문화진흥센터의 새로운 소식을 전해드립니다"
        breadcrumbs={[
          { label: '홈', href: '/' },
          { label: '알림마당' }
        ]}
      />

      <div className={styles.container}>
        {/* Important Notice Banner */}
        <section className={styles.bannerSection}>
          <div className={styles.importantBanner}>
            <FaExclamationCircle className={styles.bannerIcon} />
            <div className={styles.bannerContent}>
              <h3>중요 공지</h3>
              <p>2025년 하반기 문화프로그램 운영 안내입니다.<br />9월부터 다양한 프로그램이 시작됩니다.</p>
            </div>
            <Link href="/notice/list" className={styles.bannerLink}>
              자세히 보기 <FaArrowRight />
            </Link>
          </div>
        </section>

        {/* Quick Stats */}
        <section className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3>이번달 공지</h3>
              <p className={styles.statNumber}>5</p>
              <p className={styles.statLabel}>새로운 소식</p>
            </div>
            <div className={styles.statCard}>
              <h3>종료된 행사</h3>
              <p className={styles.statNumber}>16</p>
              <p className={styles.statLabel}>2025년 진행</p>
            </div>
            <div className={styles.statCard}>
              <h3>예정 프로그램</h3>
              <p className={styles.statNumber}>0</p>
              <p className={styles.statLabel}>현재 없음</p>
            </div>
          </div>
        </section>

        {/* Recent Notices */}
        <section className={styles.noticesSection}>
          <div className={styles.sectionHeader}>
            <h2>최근 공지사항</h2>
            <Link href="/notice/list" className={styles.viewAllLink}>
              전체보기 <FaArrowRight />
            </Link>
          </div>

          {/* Category Filter */}
          <div className={styles.filterButtons}>
            <button 
              className={`${styles.filterBtn} ${selectedCategory === 'all' ? styles.active : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              전체
            </button>
            <button 
              className={`${styles.filterBtn} ${selectedCategory === 'notice' ? styles.active : ''}`}
              onClick={() => setSelectedCategory('notice')}
            >
              공지사항
            </button>
            <button 
              className={`${styles.filterBtn} ${selectedCategory === 'event' ? styles.active : ''}`}
              onClick={() => setSelectedCategory('event')}
            >
              행사안내
            </button>
          </div>

          <div className={styles.noticesList}>
            {filteredNotices.map(notice => (
              <Link href={`/notice/${notice.id}`} key={notice.id} className={styles.noticeItem}>
                <div className={styles.noticeLeft}>
                  <span className={`${styles.noticeCategory} ${notice.category === 'event' ? styles.eventCategory : ''}`}>
                    {getCategoryLabel(notice.category)}
                  </span>
                  {notice.isImportant && (
                    <span className={styles.importantBadge}>중요</span>
                  )}
                  <h3 className={styles.noticeTitle}>{notice.title}</h3>
                </div>
                <div className={styles.noticeRight}>
                  <span className={styles.noticeDate}>{notice.date}</span>
                  <span className={styles.noticeViews}>조회 {notice.views}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className={styles.eventsSection}>
          <div className={styles.sectionHeader}>
            <h2>최근 종료된 행사</h2>
            <Link href="/notice/events" className={styles.viewAllLink}>
              전체보기 <FaArrowRight />
            </Link>
          </div>

          <div className={styles.eventsGrid}>
            {events.map(event => (
              <div key={event.id} className={styles.eventCard}>
                <div className={styles.eventHeader}>
                  <span className={styles.eventCategory}>{event.category}</span>
                  <span className={`${styles.eventStatus} ${getStatusColor(event.status)}`}>
                    {event.status}
                  </span>
                </div>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <div className={styles.eventDate}>
                  <FaCalendarAlt />
                  <span>{event.date}</span>
                </div>
                <Link href={`/notice/events/${event.id}`} className={styles.eventLink}>
                  상세정보 <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className={styles.linksSection}>
          <h2>바로가기</h2>
          <div className={styles.linksGrid}>
            <Link href="/notice/list" className={styles.linkCard}>
              <FaBullhorn className={styles.linkIcon} />
              <h3>공지사항</h3>
              <p>센터의 중요한 공지사항을 확인하세요</p>
            </Link>
            <Link href="/notice/events" className={styles.linkCard}>
              <FaCalendarAlt className={styles.linkIcon} />
              <h3>행사안내</h3>
              <p>다양한 문화행사 일정을 확인하세요</p>
            </Link>
            <Link href="/contact/faq" className={styles.linkCard}>
              <FaSearch className={styles.linkIcon} />
              <h3>자주 묻는 질문</h3>
              <p>궁금한 사항을 빠르게 찾아보세요</p>
            </Link>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className={styles.newsletterSection}>
          <h2>뉴스레터 구독</h2>
          <p>광주문화진흥센터의 소식을 이메일로 받아보세요</p>
          <form className={styles.newsletterForm} onSubmit={(e) => {
            e.preventDefault();
            if (email && email.includes('@')) {
              setShowModal(true);
              setEmail('');
              setTimeout(() => setShowModal(false), 3000);
            }
          }}>
            <input 
              type="email" 
              placeholder="이메일 주소를 입력하세요"
              className={styles.newsletterInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className={styles.newsletterButton}>
              구독하기
            </button>
          </form>
        </section>
      </div>

      {/* Subscription Success Modal */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalIcon}>✉️</div>
            <h3 className={styles.modalTitle}>구독 완료!</h3>
            <p className={styles.modalText}>
              뉴스레터 구독이 완료되었습니다.<br /><br />
              광주문화진흥센터의 최신 소식을<br />
              이메일로 전달드리겠습니다.
            </p>
            <button 
              className={styles.modalButton}
              onClick={() => setShowModal(false)}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NoticePage;