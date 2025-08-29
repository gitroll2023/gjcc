'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import HeroSection from '@/app/components/common/HeroSection';
import styles from './page.module.css';

interface Notice {
  id: number;
  title: string;
  date: string;
  views: number;
  category: string;
  department: string;
  content: string;
  attachments: string[];
}

// 공지사항 데이터 (실제로는 API나 데이터베이스에서 가져와야 함)
const notices: Record<string, Notice> = {
  '1': {
    id: 1,
    title: '[중요] 2025년 하반기 문화프로그램 운영 안내',
    date: '2025-08-25',
    views: 542,
    category: '공지',
    department: '문화사업팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

2025년 하반기 문화프로그램 운영에 대해 안내드립니다.

■ 프로그램 운영 기간
- 2025년 9월 1일(월) ~ 2025년 12월 31일(수)

■ 주요 프로그램
1. 인문학 강좌
   - 매주 화요일, 목요일 19:00~21:00
   - 한국사, 철학, 문학 등 다양한 주제

2. 원데이클래스
   - 매주 토요일 10:00~12:00, 14:00~16:00
   - 공예, 요리, 미술 등 체험 프로그램

3. 문화공연
   - 매월 셋째 주 금요일 19:30
   - 클래식, 국악, 연극 등 다양한 공연

■ 수강 신청 방법
- 온라인: 센터 홈페이지를 통한 신청
- 오프라인: 센터  안내데스크 방문 신청

■ 문의사항
- 전화: 070-462-7934
- 이메일: program@gjcc.or.kr

많은 관심과 참여 부탁드립니다.

감사합니다.`,
    attachments: []
  },
  '2': {
    id: 2,
    title: '센터 이용 시간 변경 안내 (9월 1일부터 적용)',
    date: '2025-08-23',
    views: 321,
    category: '공지',
    department: '운영지원팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

9월 1일부터 센터 이용 시간이 변경됨을 안내드립니다.

■ 변경 전
- 평일: 09:00 ~ 21:00
- 주말: 09:00 ~ 18:00

■ 변경 후 (9월 1일부터)
- 평일: 09:00 ~ 22:00
- 토요일: 09:00 ~ 20:00
- 일요일: 10:00 ~ 18:00

■ 휴관일
- 매주 월요일
- 법정 공휴일

이용에 참고하시기 바랍니다.
감사합니다.`,
    attachments: []
  },
  '3': {
    id: 3,
    title: '2025 여름 음악 페스티벌 개최 결과 안내',
    date: '2025-08-21',
    views: 425,
    category: '공지',
    department: '공연기획팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

지난 8월 15일부터 20일까지 성황리에 개최된 '2025 여름 음악 페스티벌' 결과를 안내드립니다.

■ 행사 개요
- 일시: 2025년 8월 15일(목) ~ 8월 20일(화)
- 장소: 광주문화진흥센터 대공연장 및 야외무대
- 참가인원: 총 343명

■ 프로그램 내용
1. 클래식 콘서트 (8/15)
   - 광주시립교향악단 협연
   - 관객 수: 280명

2. 재즈 페스티벌 (8/16-17)
   - 국내외 재즈 아티스트 참여
   - 관객 수: 520명

3. K-POP 콘서트 (8/18)
   - 지역 청소년 댄스팀 참여
   - 관객 수: 350명

4. 국악 한마당 (8/19)
   - 전통 국악 공연
   - 관객 수: 180명

5. 피날레 갈라쇼 (8/20)
   - 모든 장르 아티스트 합동 공연
   - 관객 수: 320명

■ 총평
이번 페스티벌은 다양한 장르의 음악을 한자리에서 즐길 수 있는 기회를 제공하여 
시민 여러분들께 큰 호응을 얻었습니다.

앞으로도 더 나은 문화 행사로 찾아뵙겠습니다.

감사합니다.`,
    attachments: ['2025_summer_festival_poster.jpg']
  },
  '4': {
    id: 4,
    title: '청소년 진로 체험 캠프 종료 및 우수 참가자 발표',
    date: '2025-08-19',
    views: 287,
    category: '공지',
    department: '교육사업팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

8월 10일부터 14일까지 진행된 '청소년 진로 체험 캠프'가 성황리에 종료되었습니다.

■ 캠프 개요
- 참가인원: 중고등학생 40명
- 프로그램: 문화예술 분야 진로 체험

■ 우수 참가자 발표
- 최우수상(1명): 김민지(광주고 2학년)
- 우수상(2명): 박준혁(서구중 3학년), 이서연(동구여고 1학년)
- 장려상(3명): 최현우(남구중 3학년), 정유진(북구고 1학년), 한지민(광산고 2학년)

수상자에게는 별도 연락드릴 예정입니다.
참가해주신 모든 학생들께 감사드립니다.`,
    attachments: []
  }
};

export default function NoticeDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const noticeId = params.id as string;
  const notice = notices[noticeId] || notices['1'];
  
  // 이전글/다음글 찾기
  const noticeIds = Object.keys(notices).map(Number).sort((a, b) => a - b);
  const currentIndex = noticeIds.indexOf(Number(noticeId));
  const prevId = currentIndex > 0 ? noticeIds[currentIndex - 1] : null;
  const nextId = currentIndex < noticeIds.length - 1 ? noticeIds[currentIndex + 1] : null;
  const prevNotice = prevId ? notices[prevId.toString()] : null;
  const nextNotice = nextId ? notices[nextId.toString()] : null;

  const breadcrumbs = [
    { label: '홈', href: '/' },
    { label: '알림마당', href: '/notice' },
    { label: '공지사항', href: '/notice/list' },
    { label: '상세보기' }
  ];

  const handleList = () => {
    router.push('/notice/list');
  };

  const handleDownload = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\. /g, '.');
  };

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
          <div className={styles.noticeDetail}>
            <div className={styles.noticeHeader}>
              <div className={styles.titleSection}>
                <span className={styles.categoryBadge}>{notice.category}</span>
                <h1 className={styles.title}>{notice.title}</h1>
              </div>
              <div className={styles.metaInfo}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>작성일</span>
                  <span className={styles.metaValue}>{formatDate(notice.date)}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>담당부서</span>
                  <span className={styles.metaValue}>{notice.department}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>조회수</span>
                  <span className={styles.metaValue}>{notice.views + 1}</span>
                </div>
              </div>
            </div>

            <div className={styles.noticeContent}>
              <pre className={styles.contentText}>{notice.content}</pre>
              
              {notice.attachments && notice.attachments.length > 0 && (
                <div className={styles.attachments}>
                  <h3 className={styles.attachmentTitle}>첨부파일</h3>
                  <div className={styles.attachmentList}>
                    {notice.attachments.map((file: string, index: number) => (
                      <div key={index} className={styles.attachmentItem}>
                        <span className={styles.fileIcon}>📎</span>
                        <span className={styles.fileName}>{file}</span>
                        <button className={styles.downloadBtn} onClick={handleDownload}>다운로드</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className={styles.noticeFooter}>
              <div className={styles.navigation}>
                {prevNotice && (
                  <div className={styles.navItem}>
                    <span className={styles.navLabel}>이전글</span>
                    <Link href={`/notice/${prevId}`} className={styles.navLink}>
                      {prevNotice.title}
                    </Link>
                  </div>
                )}
                {nextNotice && (
                  <div className={styles.navItem}>
                    <span className={styles.navLabel}>다음글</span>
                    <Link href={`/notice/${nextId}`} className={styles.navLink}>
                      {nextNotice.title}
                    </Link>
                  </div>
                )}
              </div>

              <div className={styles.buttonGroup}>
                <button onClick={handleList} className={styles.listButton}>
                  목록
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalContent}>
              <div className={styles.modalIcon}>🔒</div>
              <h3 className={styles.modalTitle}>접근 제한</h3>
              <p className={styles.modalText}>외부인 다운로드 불가 자료</p>
              <p className={styles.modalSubText}>해당 자료는 회원 전용 콘텐츠입니다.</p>
              <button className={styles.modalButton} onClick={closeModal}>
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}