'use client';

import React from 'react';
import HeroSection from '@/app/components/common/HeroSection';
import styles from './page.module.css';

export default function PrivacyPage() {
  const breadcrumbs = [
    { label: '홈', href: '/' },
    { label: '개인정보처리방침' }
  ];

  return (
    <div className={styles.container}>
      <HeroSection 
        title="개인정보처리방침"
        description="광주문화진흥센터는 개인정보를 안전하게 보호합니다"
        breadcrumbs={breadcrumbs}
        backgroundGradient="linear-gradient(135deg, #2c3e50 0%, #34495e 100%)"
      />
      
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.policyContent}>
            <div className={styles.updateInfo}>
              <p>시행일: 2024년 1월 1일</p>
            </div>

            <section className={styles.section}>
              <h2>제1조 (개인정보의 처리목적)</h2>
              <p>광주문화진흥센터는 다음의 목적을 위하여 개인정보를 처리합니다.</p>
              <ol>
                <li>홈페이지 회원가입 및 관리</li>
                <li>문화 프로그램 신청 및 운영</li>
                <li>민원사무 처리</li>
                <li>각종 고지사항 전달</li>
                <li>마케팅 및 광고 활용</li>
              </ol>
            </section>

            <section className={styles.section}>
              <h2>제2조 (개인정보의 처리 및 보유기간)</h2>
              <p>광주문화진흥센터는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
              <ul>
                <li>회원정보: 회원 탈퇴시까지</li>
                <li>프로그램 신청정보: 3년</li>
                <li>민원처리: 3년</li>
                <li>전자상거래: 5년</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>제3조 (개인정보의 제3자 제공)</h2>
              <p>광주문화진흥센터는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보보호법 제17조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.</p>
            </section>

            <section className={styles.section}>
              <h2>제4조 (개인정보처리의 위탁)</h2>
              <p>광주문화진흥센터는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.</p>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>위탁받는 자</th>
                    <th>위탁하는 업무</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>(주)전산시스템</td>
                    <td>홈페이지 유지보수</td>
                  </tr>
                  <tr>
                    <td>(주)결제시스템</td>
                    <td>온라인 결제 처리</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className={styles.section}>
              <h2>제5조 (정보주체의 권리·의무 및 행사방법)</h2>
              <p>정보주체는 광주문화진흥센터에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
              <ol>
                <li>개인정보 열람요구</li>
                <li>오류 등이 있을 경우 정정 요구</li>
                <li>삭제요구</li>
                <li>처리정지 요구</li>
              </ol>
            </section>

            <section className={styles.section}>
              <h2>제6조 (처리하는 개인정보 항목)</h2>
              <p>광주문화진흥센터는 다음의 개인정보 항목을 처리하고 있습니다.</p>
              <ul>
                <li>필수항목: 성명, 생년월일, 연락처, 이메일</li>
                <li>선택항목: 주소, 성별, 관심분야</li>
                <li>자동수집항목: IP주소, 쿠키, 방문일시, 서비스 이용기록</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>제7조 (개인정보의 파기)</h2>
              <p>광주문화진흥센터는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</p>
              <ul>
                <li>파기절차: 파기 사유가 발생한 개인정보를 선정하고, 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.</li>
                <li>파기방법: 전자적 파일 형태로 기록·저장된 개인정보는 기록을 재생할 수 없도록 파기하며, 종이 문서에 기록·저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>제8조 (개인정보의 안전성 확보조치)</h2>
              <p>광주문화진흥센터는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
              <ol>
                <li>관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육</li>
                <li>기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 보안프로그램 설치</li>
                <li>물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
              </ol>
            </section>

            <section className={styles.section}>
              <h2>제9조 (개인정보 보호책임자)</h2>
              <p>광주문화진흥센터는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
              <div className={styles.contactBox}>
                <h3>개인정보 보호책임자</h3>
                <ul>
                  <li>성명: 홍성민</li>
                  <li>직책: 기획운영팀장</li>
                  <li>이메일: privacy@gjcc.or.kr</li>
                </ul>
              </div>
            </section>

            <section className={styles.section}>
              <h2>제10조 (권익침해 구제방법)</h2>
              <p>정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다.</p>
              <ul>
                <li>개인정보 침해신고센터: (국번없이) 118</li>
                <li>개인정보 분쟁조정위원회: 1833-6972</li>
                <li>대검찰청 사이버수사과: (국번없이) 1301</li>
                <li>경찰청 사이버안전국: (국번없이) 182</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>제11조 (개인정보 처리방침 변경)</h2>
              <p>이 개인정보 처리방침은 2024년 1월 1일부터 적용됩니다.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}