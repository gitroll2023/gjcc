'use client';

import React from 'react';
import HeroSection from '@/app/components/common/HeroSection';
import styles from './page.module.css';

export default function EmailRefusalPage() {
  const breadcrumbs = [
    { label: '홈', href: '/' },
    { label: '이메일무단수집거부' }
  ];

  return (
    <div className={styles.container}>
      <HeroSection 
        title="이메일무단수집거부"
        description="이메일 주소 무단수집을 거부합니다"
        breadcrumbs={breadcrumbs}
        backgroundGradient="linear-gradient(135deg, #2c3e50 0%, #34495e 100%)"
      />
      
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.refusalContent}>
            <div className={styles.warningBox}>
              <div className={styles.warningIcon}>⚠️</div>
              <h2>이메일 무단수집 거부</h2>
            </div>

            <section className={styles.section}>
              <p className={styles.mainText}>
                본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 
                무단으로 수집되는 것을 거부하며, 이를 위반시 <strong>「정보통신망 이용촉진 및 정보보호 등에 관한 법률」</strong>에 
                의해 형사처벌됨을 유념하시기 바랍니다.
              </p>
            </section>

            <section className={styles.section}>
              <h3>관련 법령</h3>
              <div className={styles.lawBox}>
                <h4>정보통신망 이용촉진 및 정보보호 등에 관한 법률</h4>
                
                <div className={styles.article}>
                  <h5>제50조의2(전자우편주소의 무단 수집행위 등 금지)</h5>
                  <ol>
                    <li>누구든지 인터넷 홈페이지 운영자 또는 관리자의 사전 동의 없이 인터넷 홈페이지에서 자동으로 전자우편주소를 수집하는 프로그램이나 그 밖의 기술적 장치를 이용하여 전자우편주소를 수집하여서는 아니 된다.</li>
                    <li>누구든지 제1항을 위반하여 수집된 전자우편주소를 판매·유통하여서는 아니 된다.</li>
                    <li>누구든지 제1항과 제2항에 따라 수집·판매 및 유통이 금지된 전자우편주소임을 알면서 이를 정보전송에 이용하여서는 아니 된다.</li>
                  </ol>
                </div>

                <div className={styles.article}>
                  <h5>제74조(벌칙)</h5>
                  <p>다음 각 호의 어느 하나에 해당하는 자는 1년 이하의 징역 또는 1천만원 이하의 벌금에 처한다.</p>
                  <ol start={4}>
                    <li>제50조의2를 위반하여 전자우편주소를 수집·판매·유통 또는 정보전송에 이용한 자</li>
                  </ol>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h3>이메일 수집 거부 안내</h3>
              <div className={styles.infoBox}>
                <p>
                  광주문화진흥센터는 회원님들의 개인정보를 소중히 보호하고 있으며, 
                  스팸메일 발송 등의 불법적인 행위를 방지하기 위해 최선을 다하고 있습니다.
                </p>
                <p>
                  본 웹사이트의 모든 이메일 주소는 해당 소유자의 동의 없이 수집 및 사용될 수 없으며, 
                  무단 수집 시 법적 제재를 받을 수 있습니다.
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <h3>불법 스팸 신고</h3>
              <div className={styles.reportBox}>
                <p>불법 스팸메일로 인한 피해를 입으신 경우 아래 기관에 신고하실 수 있습니다.</p>
                <ul>
                  <li>
                    <strong>한국인터넷진흥원 스팸신고센터</strong>
                    <span>전화: (국번없이) 118</span>
                    <span>홈페이지: www.kisa.or.kr</span>
                  </li>
                  <li>
                    <strong>경찰청 사이버수사대</strong>
                    <span>전화: (국번없이) 182</span>
                    <span>홈페이지: ecrm.police.go.kr</span>
                  </li>
                  <li>
                    <strong>대검찰청 인터넷범죄수사센터</strong>
                    <span>전화: (국번없이) 1301</span>
                    <span>홈페이지: www.spo.go.kr</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className={styles.section}>
              <h3>정당한 이메일 수집</h3>
              <div className={styles.legitimateBox}>
                <p>광주문화진흥센터와의 정당한 업무 협의 및 문의를 위한 연락처는 다음과 같습니다.</p>
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <strong>대표 이메일</strong>
                    <p>contact@gjcc.or.kr</p>
                  </div>
                </div>
              </div>
            </section>

            <div className={styles.notice}>
              <p>
                <strong>※ 주의사항</strong><br />
                본 웹사이트에서 이메일 주소 수집 프로그램 등을 이용한 무단 수집이 확인될 경우, 
                관련 법령에 따라 형사 고발 조치될 수 있음을 알려드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}