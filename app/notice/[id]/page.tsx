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
1. 원데이클래스
   - 매주 토요일 10:00~12:00, 14:00~16:00
   - 공예, 요리, 미술 등 체험 프로그램

2. 문화공연
   - 매월 셋째 주 금요일 19:30
   - 클래식, 국악, 연극 등 다양한 공연

■ 수강 신청 방법
- 온라인: 센터 홈페이지를 통한 신청
- 오프라인: 센터  안내데스크 방문 신청

■ 문의사항
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
    date: '2025-08-13',
    views: 298,
    category: '공지',
    department: '교육운영팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

8월 10일부터 14일까지 진행된 '청소년 진로 체험 캠프'가 성황리에 종료되었습니다.

■ 캠프 개요
- 참가인원: 중고등학생 40명
- 프로그램: 문화예술 분야 진로 체험

■ 우수 참가자 발표
- 최우수상(1명): 김O지(고등학교 2학년)
- 우수상(2명): 박O혁(중학교 3학년), 이O연(고등학교 1학년)
- 장려상(3명): 최O우(중학교 3학년), 정O진(고등학교 1학년), 한O민(고등학교 2학년)

수상자에게는 별도 연락드릴 예정입니다.
참가해주신 모든 학생들께 감사드립니다.`,
    attachments: []
  },
  '5': {
    id: 5,
    title: '전통 공예 워크숍 수료증 발급 안내',
    date: '2025-08-08',
    views: 157,
    category: '안내',
    department: '교육운영팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

7월 전통 공예 워크숍을 수료하신 분들께 수료증 발급을 안내드립니다.

■ 수료증 발급 대상
- 7월 전통 공예 워크숍 80% 이상 출석자

■ 발급 방법
- 온라인: 홈페이지 마이페이지에서 출력
- 오프라인: 안내데스크 방문 수령

■ 발급 기간
- 2025년 8월 8일 ~ 8월 31일

문의사항은 교육운영팀으로 연락 주시기 바랍니다.
감사합니다.`,
    attachments: []
  },
  '6': {
    id: 6,
    title: '현대미술 전시회 전시 기간 연장 안내',
    date: '2025-07-25',
    views: 203,
    category: '안내',
    department: '전시기획팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

많은 관심을 받고 있는 현대미술 전시회의 전시 기간이 연장됨을 안내드립니다.

■ 기존 전시 기간
- 2025년 7월 1일 ~ 7월 31일

■ 연장 전시 기간
- 2025년 7월 1일 ~ 8월 15일

■ 관람 시간
- 평일: 10:00 ~ 18:00
- 주말: 10:00 ~ 17:00

■ 휴관일
- 매주 월요일

많은 관람 부탁드립니다.
감사합니다.`,
    attachments: []
  },
  '7': {
    id: 7,
    title: '시민 문화 강좌 수강생 추가 모집',
    date: '2025-07-10',
    views: 512,
    category: '공지',
    department: '교육운영팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

시민 문화 강좌 수강생을 추가 모집합니다.

■ 모집 강좌
1. 서예 교실 - 5명
2. 도자기 공예 - 3명
3. 전통 춤 - 7명
4. 민요 교실 - 4명

■ 신청 기간
- 2025년 7월 10일 ~ 7월 20일

■ 신청 방법
- 온라인: 센터 홈페이지
- 오프라인: 안내데스크

■ 수강료
- 각 강좌별 월 5만원

선착순 마감이니 서둘러 신청해주세요.
감사합니다.`,
    attachments: []
  },
  '8': {
    id: 8,
    title: '여름방학 특별 프로그램 운영 계획',
    date: '2025-06-15',
    views: 628,
    category: '공지',
    department: '문화사업팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

2025년 여름방학 특별 프로그램 운영 계획을 안내드립니다.

■ 프로그램 운영 기간
- 2025년 7월 20일 ~ 8월 25일

■ 대상
- 초등학생, 중학생, 고등학생

■ 프로그램 내용
1. 여름 예술 캠프
2. 과학 실험 교실
3. 코딩 교육
4. 스포츠 클래스

■ 신청 방법
- 6월 20일부터 홈페이지에서 신청 가능

자세한 내용은 추후 공지될 예정입니다.
감사합니다.`,
    attachments: []
  },
  '9': {
    id: 9,
    title: '시민 문화 강좌 개강 안내',
    date: '2025-06-10',
    views: 342,
    category: '안내',
    department: '교육운영팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

7월 시민 문화 강좌 개강을 안내드립니다.

■ 개강일
- 2025년 7월 1일(월)

■ 강좌 목록
1. 서예 교실
2. 도자기 공예
3. 전통 춤
4. 민요 교실
5. 사진 촬영

■ 수업 시간
- 각 강좌별 상이 (홈페이지 참조)

■ 준비물
- 강좌별 준비물은 개별 안내 예정

많은 참여 부탁드립니다.
감사합니다.`,
    attachments: []
  },
  '10': {
    id: 10,
    title: '어린이날 특별 공연 성황리 종료',
    date: '2025-05-06',
    views: 445,
    category: '공지',
    department: '공연기획팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

5월 5일 어린이날 특별 공연이 성황리에 종료되었습니다.

■ 공연 개요
- 일시: 2025년 5월 5일 14:00 ~ 17:00
- 관람 인원: 약 500명

■ 공연 내용
1. 어린이 뮤지컬
2. 마술쇼
3. 버블쇼
4. 캐릭터 공연

참여해주신 모든 가족분들께 감사드립니다.
앞으로도 좋은 공연으로 찾아뵙겠습니다.`,
    attachments: []
  },
  '11': {
    id: 11,
    title: '5월 가정의 달 특별 프로그램 안내',
    date: '2025-05-01',
    views: 389,
    category: '안내',
    department: '문화사업팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

5월 가정의 달을 맞아 특별 프로그램을 안내드립니다.

■ 프로그램 일정
1. 5/5 어린이날 특별 공연
2. 5/8 어버이날 기념 음악회
3. 5/11~12 가족 체험 프로그램
4. 5/15 부부의 날 영화 상영

■ 참가 방법
- 사전 예약 필수
- 홈페이지 또는 전화 예약

■ 참가비
- 프로그램별 상이

가족과 함께 특별한 5월 보내세요.
감사합니다.`,
    attachments: []
  },
  '12': {
    id: 12,
    title: '봄맞이 문화예술 프로그램 참가자 모집',
    date: '2025-04-10',
    views: 467,
    category: '공지',
    department: '문화사업팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

봄맞이 문화예술 프로그램 참가자를 모집합니다.

■ 프로그램 내용
1. 플라워 클래스
2. 봄 풍경 그리기
3. 시 창작 교실
4. 봄 음악 감상

■ 모집 기간
- 2025년 4월 10일 ~ 4월 20일

■ 프로그램 기간
- 2025년 5월 1일 ~ 5월 31일

■ 신청 방법
- 온라인 신청 (홈페이지)

많은 참여 부탁드립니다.
감사합니다.`,
    attachments: []
  },
  '13': {
    id: 13,
    title: '센터 시설 정기 점검 일정 안내',
    date: '2025-04-05',
    views: 234,
    category: '안내',
    department: '시설관리팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

센터 시설 정기 점검 일정을 안내드립니다.

■ 점검 일시
- 2025년 4월 15일(월) 09:00 ~ 18:00

■ 점검 내용
- 전기 시설 점검
- 소방 시설 점검
- 냉난방 시설 점검

■ 이용 제한
- 점검 당일 센터 이용 불가

이용에 불편을 드려 죄송합니다.
감사합니다.`,
    attachments: []
  },
  '14': {
    id: 14,
    title: '봄맞이 플라워 클래스 마감 안내',
    date: '2025-03-17',
    views: 356,
    category: '안내',
    department: '교육운영팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

봄맞이 플라워 클래스가 조기 마감되었습니다.

■ 마감된 클래스
- 초급반 (월/수)
- 중급반 (화/목)

■ 추가 모집 예정
- 4월 중 추가 클래스 개설 예정

■ 대기자 등록
- 홈페이지에서 대기자 등록 가능

많은 관심에 감사드립니다.`,
    attachments: []
  },
  '15': {
    id: 15,
    title: '2025년 상반기 프로그램 일정표',
    date: '2025-03-02',
    views: 789,
    category: '공지',
    department: '기획조정팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

2025년 상반기 프로그램 일정을 안내드립니다.

■ 주요 프로그램
- 3월: 봄맞이 문화제
- 4월: 시민 예술제
- 5월: 가정의 달 행사
- 6월: 여름 문화 축제

■ 정기 프로그램
- 매월 문화 강좌
- 매주 원데이 클래스

■ 신청 방법
- 프로그램별 별도 공지

자세한 일정은 홈페이지를 참고해주세요.
감사합니다.`,
    attachments: ['2025_상반기_프로그램_일정표.pdf']
  },
  '16': {
    id: 16,
    title: '설 연휴 센터 운영 안내',
    date: '2025-02-25',
    views: 412,
    category: '안내',
    department: '운영지원팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

설 연휴 센터 운영을 안내드립니다.

■ 휴관일
- 2025년 1월 28일 ~ 1월 30일

■ 정상 운영
- 1월 31일(금)부터 정상 운영

■ 긴급 문의
- 홈페이지 게시판 이용

새해 복 많이 받으세요.
감사합니다.`,
    attachments: []
  },
  '17': {
    id: 17,
    title: '2025년 문화센터 운영 계획 발표',
    date: '2025-02-10',
    views: 567,
    category: '공지',
    department: '기획조정팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

2025년 문화센터 운영 계획을 발표합니다.

■ 운영 목표
- 시민 문화 향유 기회 확대
- 지역 예술가 지원 강화
- 문화 교육 프로그램 다양화

■ 신규 사업
1. 청년 예술가 지원 사업
2. 어르신 문화 프로그램
3. 장애인 문화 예술 교육

■ 시설 개선
- 전시장 리모델링
- 음향 시설 업그레이드

자세한 내용은 홈페이지를 참고해주세요.
감사합니다.`,
    attachments: []
  },
  '18': {
    id: 18,
    title: '신년 인사 및 센터 운영 방향',
    date: '2025-01-02',
    views: 623,
    category: '공지',
    department: '센터장',
    content: `안녕하세요, 문화진흥센터장입니다.

2025년 새해를 맞아 시민 여러분께 인사드립니다.

올해도 문화진흥센터는 시민 여러분의 문화 생활 향상을 위해
최선을 다하겠습니다.

■ 2025년 운영 방향
- 시민 중심의 문화 프로그램 운영
- 지역 문화 발전에 기여
- 모두가 함께하는 문화 공간 조성

시민 여러분의 많은 관심과 참여 부탁드립니다.

새해 복 많이 받으세요.
감사합니다.`,
    attachments: []
  },
  '19': {
    id: 19,
    title: '2024 송년 음악회 성황리 종료',
    date: '2024-12-29',
    views: 445,
    category: '공지',
    department: '공연기획팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

2024 송년 음악회가 성황리에 종료되었습니다.

■ 공연 개요
- 일시: 2024년 12월 28일 19:00
- 출연: 시립교향악단
- 관람 인원: 450명

■ 프로그램
- 베토벤 교향곡
- 한국 가곡
- 캐롤 메들리

참석해주신 모든 분들께 감사드립니다.
2025년에도 좋은 공연으로 찾아뵙겠습니다.`,
    attachments: []
  },
  '20': {
    id: 20,
    title: '연말연시 센터 운영 일정 안내',
    date: '2024-12-20',
    views: 398,
    category: '안내',
    department: '운영지원팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

연말연시 센터 운영 일정을 안내드립니다.

■ 휴관일
- 12월 31일(화) 
- 1월 1일(수)

■ 단축 운영
- 12월 30일: 09:00 ~ 17:00

■ 정상 운영
- 1월 2일부터 정상 운영

행복한 연말연시 보내세요.
감사합니다.`,
    attachments: []
  },
  '21': {
    id: 21,
    title: '2025년 상반기 프로그램 사전 안내',
    date: '2024-11-15',
    views: 512,
    category: '공지',
    department: '기획조정팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

2025년 상반기 프로그램을 사전 안내드립니다.

■ 주요 프로그램
1. 신년 음악회 (1월)
2. 봄 문화제 (3월)
3. 시민 예술제 (4월)
4. 가정의 달 행사 (5월)
5. 여름 페스티벌 (6월)

■ 신규 프로그램
- AI 예술 교실
- 메타버스 전시회
- 친환경 공예 교실

자세한 일정은 추후 공지 예정입니다.
감사합니다.`,
    attachments: []
  },
  '22': {
    id: 22,
    title: '가을 독서 문화제 종료 및 수상자 발표',
    date: '2024-10-21',
    views: 387,
    category: '공지',
    department: '문화사업팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

가을 독서 문화제가 성공적으로 종료되었습니다.

■ 행사 개요
- 기간: 10월 1일 ~ 20일
- 참가 인원: 약 1,200명

■ 수상자 발표
[독후감 부문]
- 대상: 이O영
- 최우수상: 김O수, 박O진

[시 창작 부문]
- 대상: 최O희
- 최우수상: 정O민, 한O준

수상자에게는 개별 연락드립니다.
참여해주신 모든 분들께 감사드립니다.`,
    attachments: []
  },
  '23': {
    id: 23,
    title: '가을 독서 문화제 작가와의 만남 일정',
    date: '2024-10-05',
    views: 456,
    category: '안내',
    department: '문화사업팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

가을 독서 문화제 '작가와의 만남' 일정을 안내드립니다.

■ 일정
- 10월 10일: 소설가 김O영
- 10월 12일: 시인 이O수
- 10월 15일: 에세이스트 박O희

■ 시간
- 각 19:00 ~ 20:30

■ 참가 방법
- 사전 신청 필수 (선착순 50명)

많은 참여 부탁드립니다.
감사합니다.`,
    attachments: []
  },
  '24': {
    id: 24,
    title: '추석맞이 전통문화 체험 행사 안내',
    date: '2024-09-10',
    views: 523,
    category: '공지',
    department: '문화사업팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

추석맞이 전통문화 체험 행사를 안내드립니다.

■ 행사 일시
- 2024년 9월 14일(토) 10:00 ~ 17:00

■ 체험 프로그램
1. 송편 만들기
2. 전통 놀이 체험
3. 한복 입기 체험
4. 전통 공예 체험

■ 참가비
- 무료

가족과 함께 즐거운 추석 보내세요.
감사합니다.`,
    attachments: []
  },
  '25': {
    id: 25,
    title: '추석 연휴 센터 운영 안내',
    date: '2024-09-05',
    views: 412,
    category: '안내',
    department: '운영지원팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

추석 연휴 센터 운영을 안내드립니다.

■ 휴관일
- 9월 16일(월) ~ 9월 18일(수)

■ 정상 운영
- 9월 19일(목)부터

풍성한 한가위 보내세요.
감사합니다.`,
    attachments: []
  },
  '26': {
    id: 26,
    title: '여름방학 어린이 미술교실 수료식',
    date: '2024-08-17',
    views: 334,
    category: '공지',
    department: '교육운영팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

여름방학 어린이 미술교실 수료식이 진행되었습니다.

■ 수료 인원
- 총 35명

■ 우수 작품상
- 대상: 김O민(초5)
- 최우수상: 이O준(초4), 박O서(초6)

■ 작품 전시
- 8월 20일 ~ 31일

수료를 축하드립니다.
감사합니다.`,
    attachments: []
  },
  '27': {
    id: 27,
    title: '여름방학 특별 프로그램 참가자 모집',
    date: '2024-08-01',
    views: 612,
    category: '공지',
    department: '교육운영팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

여름방학 특별 프로그램 참가자를 모집합니다.

■ 프로그램
1. 어린이 미술교실
2. 청소년 음악교실
3. 과학 실험교실
4. 코딩 교육

■ 모집 기간
- 8월 1일 ~ 8월 5일

■ 대상
- 초등학생, 중학생

선착순 마감입니다.
감사합니다.`,
    attachments: []
  },
  '28': {
    id: 28,
    title: '하반기 문화프로그램 일정 안내',
    date: '2024-07-15',
    views: 478,
    category: '공지',
    department: '기획조정팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

2024년 하반기 문화프로그램 일정을 안내드립니다.

■ 주요 일정
- 8월: 여름 페스티벌
- 9월: 추석 행사
- 10월: 가을 문화제
- 11월: 독서의 달
- 12월: 송년 행사

자세한 내용은 홈페이지를 참고해주세요.
감사합니다.`,
    attachments: []
  },
  '29': {
    id: 29,
    title: '사진 공모전 전시회 개최',
    date: '2024-06-01',
    views: 389,
    category: '공지',
    department: '전시기획팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

사진 공모전 수상작 전시회를 개최합니다.

■ 전시 기간
- 6월 1일 ~ 6월 30일

■ 전시 작품
- 공모전 수상작 30점

■ 관람 시간
- 10:00 ~ 18:00

많은 관람 부탁드립니다.
감사합니다.`,
    attachments: []
  },
  '30': {
    id: 30,
    title: '어린이날 행사 준비 안내',
    date: '2024-05-01',
    views: 456,
    category: '안내',
    department: '문화사업팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

어린이날 행사 준비 사항을 안내드립니다.

■ 행사 일시
- 5월 5일 10:00 ~ 17:00

■ 프로그램
- 매직쇼
- 페이스 페인팅
- 풍선 아트
- 어린이 공연

참가비는 무료입니다.
감사합니다.`,
    attachments: []
  },
  '31': {
    id: 31,
    title: '봄맞이 클래식 콘서트 예매 안내',
    date: '2024-04-10',
    views: 523,
    category: '공지',
    department: '공연기획팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

봄맞이 클래식 콘서트 예매를 안내드립니다.

■ 공연 일시
- 4월 25일(목) 19:30

■ 출연
- 시립교향악단

■ 예매 방법
- 온라인: 홈페이지
- 오프라인: 현장 예매

■ 티켓 가격
- 일반 2만원, 학생 1만원

많은 관심 부탁드립니다.
감사합니다.`,
    attachments: []
  },
  '32': {
    id: 32,
    title: '2024년 상반기 프로그램 시작 안내',
    date: '2024-03-02',
    views: 678,
    category: '공지',
    department: '기획조정팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

2024년 상반기 프로그램이 시작됩니다.

■ 시작일
- 2024년 3월 4일(월)

■ 프로그램
- 정기 문화강좌
- 원데이 클래스
- 어린이 프로그램

■ 신청 방법
- 홈페이지 또는 방문 신청

많은 참여 부탁드립니다.
감사합니다.`,
    attachments: []
  },
  '33': {
    id: 33,
    title: '설날 특별 행사 종료 및 감사 인사',
    date: '2024-02-12',
    views: 412,
    category: '공지',
    department: '문화사업팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

설날 특별 행사가 성황리에 종료되었습니다.

■ 행사 참여 인원
- 약 800명

■ 프로그램
- 전통 놀이 체험
- 떡국 나눔
- 복주머니 만들기

참여해주신 모든 분들께 감사드립니다.
새해 복 많이 받으세요.`,
    attachments: []
  },
  '34': {
    id: 34,
    title: '설날 특별 행사 일정 안내',
    date: '2024-02-05',
    views: 489,
    category: '안내',
    department: '문화사업팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

설날 특별 행사 일정을 안내드립니다.

■ 일시
- 2월 10일(토) 10:00 ~ 16:00

■ 프로그램
- 윷놀이 대회
- 제기차기
- 투호 놀이
- 한복 체험

무료로 진행됩니다.
많은 참여 부탁드립니다.`,
    attachments: []
  },
  '35': {
    id: 35,
    title: '신년 서예 전시회 개막',
    date: '2024-01-15',
    views: 367,
    category: '공지',
    department: '전시기획팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

신년 서예 전시회가 개막했습니다.

■ 전시 기간
- 1월 15일 ~ 2월 15일

■ 전시 작품
- 지역 서예가 작품 50점

■ 개막식
- 1월 15일 15:00

많은 관람 부탁드립니다.
감사합니다.`,
    attachments: []
  },
  '36': {
    id: 36,
    title: '2024년 문화센터 운영 계획',
    date: '2024-01-02',
    views: 712,
    category: '공지',
    department: '센터장',
    content: `안녕하세요, 문화진흥센터장입니다.

2024년 문화센터 운영 계획을 말씀드립니다.

■ 운영 목표
- 시민 문화 향유 기회 확대
- 지역 예술가 지원
- 문화 교육 강화

■ 중점 사업
1. 시민 참여 프로그램 확대
2. 온라인 문화 콘텐츠 개발
3. 문화 소외계층 지원

시민 여러분의 많은 관심 부탁드립니다.
감사합니다.`,
    attachments: []
  },
  '37': {
    id: 37,
    title: '2025년 하반기 문화예술 강사 모집',
    date: '2025-08-15',
    views: 234,
    category: '채용',
    department: '인사관리팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

2025년 하반기 문화예술 강사를 모집합니다.

■ 모집 분야
1. 미술 강사 (2명)
   - 회화, 조소, 공예 등
2. 음악 강사 (3명)
   - 피아노, 성악, 기악 등
3. 무용 강사 (1명)
   - 현대무용, 한국무용
4. 연극 강사 (1명)

■ 지원 자격
- 해당 분야 학사 이상 또는 동등 경력
- 문화예술교육사 자격증 소지자 우대
- 교육 경력 2년 이상

■ 제출 서류
1. 이력서 및 자기소개서
2. 졸업증명서
3. 경력증명서
4. 자격증 사본

■ 접수 기간
- 2025년 8월 15일 ~ 8월 31일

■ 접수 방법
- 이메일: recruit@gjcc.or.kr
- 방문 접수: 행정실

■ 근무 조건
- 계약 기간: 2025년 9월 ~ 2026년 2월
- 근무 시간: 주 15시간 내외
- 급여: 시간당 50,000원
감사합니다.`,
    attachments: ['2025_하반기_강사모집_공고.pdf']
  },
  '38': {
    id: 38,
    title: '시설관리 계약직 채용 공고',
    date: '2025-08-10',
    views: 189,
    category: '채용',
    department: '인사관리팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

시설관리 계약직 직원을 채용합니다.

■ 채용 인원
- 시설관리직 2명

■ 담당 업무
- 센터 시설 관리 및 유지보수
- 공연장 및 전시장 관리
- 시설물 안전 점검
- 기타 시설 관련 업무

■ 지원 자격
- 관련 자격증 소지자 우대
  (전기, 소방, 기계 등)
- 시설관리 경력자 우대
- 운전면허 소지자

■ 제출 서류
1. 이력서 및 자기소개서
2. 자격증 사본
3. 경력증명서

■ 접수 기간
- 2025년 8월 10일 ~ 8월 25일

■ 전형 절차
1. 서류 전형
2. 면접 전형
3. 최종 합격자 발표

■ 근무 조건
- 계약 기간: 1년 (연장 가능)
- 근무 시간: 주 40시간
- 급여: 연봉 3,000만원
감사합니다.`,
    attachments: []
  },
  '39': {
    id: 39,
    title: '공연기획팀 정규직 채용 안내',
    date: '2025-07-28',
    views: 412,
    category: '채용',
    department: '인사관리팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

공연기획팀 정규직 직원을 채용합니다.

■ 채용 인원
- 공연기획 담당자 1명

■ 담당 업무
- 공연 기획 및 제작
- 아티스트 섭외 및 계약
- 공연 홍보 및 마케팅
- 예산 관리

■ 지원 자격
- 관련 학과 졸업자
- 공연기획 경력 3년 이상
- 영어 가능자 우대

■ 우대 사항
- 문화예술 관련 자격증
- 해외 공연 기획 경험
- 마케팅 경력

■ 제출 서류
1. 이력서 및 자기소개서
2. 졸업증명서
3. 경력증명서
4. 포트폴리오

■ 접수 기간
- 2025년 7월 28일 ~ 8월 15일

■ 전형 절차
1. 서류 전형
2. 실무 면접
3. 임원 면접
4. 최종 합격

■ 근무 조건
- 정규직
- 급여: 협의
- 4대 보험 가입
감사합니다.`,
    attachments: ['공연기획팀_채용공고.pdf']
  },
  '40': {
    id: 40,
    title: '2025년 센터 청소용역 입찰 공고',
    date: '2025-08-12',
    views: 156,
    category: '입찰',
    department: '시설관리팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

2025년 센터 청소용역 입찰을 공고합니다.

■ 입찰 개요
- 사업명: 2025년 광주문화진흥센터 청소용역
- 용역 기간: 2025년 10월 1일 ~ 2026년 9월 30일
- 예산: 1억 2천만원

■ 용역 범위
- 센터 전 구역 일반 청소
- 공연장 특별 청소
- 화장실 및 로비 청소
- 쓰레기 수거 및 처리

■ 입찰 자격
- 청소용역업 등록 업체
- 최근 3년간 공공기관 용역 실적
- 지역 업체 가점 부여

■ 제출 서류
1. 입찰참가신청서
2. 사업자등록증
3. 용역실적증명서
4. 제안서

■ 입찰 일정
- 공고: 2025년 8월 12일
- 접수: 2025년 8월 12일 ~ 8월 26일
- 개찰: 2025년 8월 28일

■ 제출 방법
- 전자입찰 또는 방문 접수
감사합니다.`,
    attachments: ['청소용역_입찰공고서.hwp']
  },
  '41': {
    id: 41,
    title: '무대음향장비 구매 입찰 안내',
    date: '2025-08-05',
    views: 178,
    category: '입찰',
    department: '공연기획팀',
    content: `안녕하세요, 광주문화진흥센터입니다.

무대음향장비 구매 입찰을 안내드립니다.

■ 입찰 개요
- 사업명: 무대음향장비 구매
- 예산: 8천만원
- 납품 기한: 계약 후 30일 이내

■ 구매 품목
1. 디지털 믹싱 콘솔 (1대)
2. 파워 앰프 (4대)
3. 스피커 시스템 (1세트)
4. 무선 마이크 시스템 (10채널)
5. 기타 음향 부속품

■ 입찰 자격
- 음향장비 납품 전문업체
- 제조사 공식 대리점
- A/S 보증 가능 업체

■ 제출 서류
1. 입찰참가신청서
2. 사업자등록증
3. 납품실적증명서
4. 제품 카탈로그
5. 견적서

■ 입찰 일정
- 공고: 2025년 8월 5일
- 접수: 2025년 8월 5일 ~ 8월 20일
- 개찰: 2025년 8월 22일

■ 평가 기준
- 가격 (40%)
- 품질 (30%)
- 납품실적 (20%)
- A/S (10%)
감사합니다.`,
    attachments: ['음향장비_규격서.pdf']
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