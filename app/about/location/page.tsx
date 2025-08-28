import React from 'react';
import HeroSection from '@/app/components/common/HeroSection';
import styles from './page.module.css';

export default function LocationPage() {
  const breadcrumbs = [
    { label: '홈', href: '/' },
    { label: '센터소개', href: '/about' },
    { label: '오시는길' }
  ];

  return (
    <div className={styles.container}>
      <HeroSection 
        title="오시는길"
        description="광주문화진흥센터 위치 안내 및 교통편"
        breadcrumbs={breadcrumbs}
        backgroundGradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
      />
      
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.locationInfo}>
            <div className={styles.addressSection}>
              <h2 className={styles.sectionTitle}>센터 정보</h2>
              <div className={styles.infoCard}>
                <div className={styles.infoItem}>
                  <span className={styles.label}>주소</span>
                  <span className={styles.value}>광주광역시 동구 문화로 123 (문화동)</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>우편번호</span>
                  <span className={styles.value}>61466</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>대표전화</span>
                  <span className={styles.value}>062-123-4567</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>팩스</span>
                  <span className={styles.value}>062-123-4568</span>
                </div>
              </div>
            </div>
            
            <div className={styles.mapSection}>
              <h3 className={styles.sectionTitle}>지도</h3>
              <div className={styles.mapContainer}>
                <div className={styles.mapPlaceholder}>
                  <p>지도가 여기에 표시됩니다</p>
                  <p>실제 구현 시 Google Maps 또는 카카오맵 API 연동</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.transportSection}>
            <h3 className={styles.sectionTitle}>대중교통 이용안내</h3>
            
            <div className={styles.transportGrid}>
              <div className={styles.transportCard}>
                <div className={styles.transportIcon}>🚌</div>
                <h4>버스 이용시</h4>
                <div className={styles.transportInfo}>
                  <div className={styles.busInfo}>
                    <strong>일반버스</strong>
                    <p>15번, 27번, 36번, 48번, 59번</p>
                  </div>
                  <div className={styles.busInfo}>
                    <strong>급행버스</strong>
                    <p>101번, 201번</p>
                  </div>
                  <p className={styles.stopInfo}>
                    <strong>하차정류장:</strong> 문화센터앞 정류장
                  </p>
                </div>
              </div>
              
              <div className={styles.transportCard}>
                <div className={styles.transportIcon}>🚇</div>
                <h4>지하철 이용시</h4>
                <div className={styles.transportInfo}>
                  <p><strong>1호선 문화역</strong></p>
                  <p>3번 출구 → 도보 5분</p>
                  <p>2번 출구 → 도보 7분</p>
                  <div className={styles.walkInfo}>
                    <p>문화역 3번 출구로 나와서 문화로를 따라 직진하시면 됩니다.</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.transportCard}>
                <div className={styles.transportIcon}>🚗</div>
                <h4>자가용 이용시</h4>
                <div className={styles.transportInfo}>
                  <div className={styles.directions}>
                    <p><strong>광주IC에서:</strong></p>
                    <p>광주IC → 문화로 → 센터 도착 (약 15분)</p>
                  </div>
                  <div className={styles.directions}>
                    <p><strong>시내에서:</strong></p>
                    <p>충장로 → 문화로 → 센터 도착 (약 10분)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.parkingSection}>
            <h3 className={styles.sectionTitle}>주차 안내</h3>
            <div className={styles.parkingGrid}>
              <div className={styles.parkingCard}>
                <h4>센터 주차장</h4>
                <div className={styles.parkingInfo}>
                  <p><strong>주차대수:</strong> 100대</p>
                  <p><strong>이용시간:</strong> 09:00 - 22:00</p>
                  <p><strong>요금:</strong> 최초 2시간 무료, 이후 시간당 1,000원</p>
                </div>
              </div>
              
              <div className={styles.parkingCard}>
                <h4>인근 공영주차장</h4>
                <div className={styles.parkingInfo}>
                  <p><strong>문화공원 주차장:</strong> 도보 3분</p>
                  <p><strong>시립도서관 주차장:</strong> 도보 5분</p>
                  <p><strong>문화의거리 공영주차장:</strong> 도보 7분</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.facilitiesSection}>
            <h3 className={styles.sectionTitle}>편의시설</h3>
            <div className={styles.facilitiesGrid}>
              <div className={styles.facilityItem}>
                <div className={styles.facilityIcon}>♿</div>
                <span>장애인 편의시설</span>
              </div>
              <div className={styles.facilityItem}>
                <div className={styles.facilityIcon}>🚻</div>
                <span>화장실</span>
              </div>
              <div className={styles.facilityItem}>
                <div className={styles.facilityIcon}>☕</div>
                <span>카페테리아</span>
              </div>
              <div className={styles.facilityItem}>
                <div className={styles.facilityIcon}>🏪</div>
                <span>편의점</span>
              </div>
              <div className={styles.facilityItem}>
                <div className={styles.facilityIcon}>💰</div>
                <span>ATM</span>
              </div>
              <div className={styles.facilityItem}>
                <div className={styles.facilityIcon}>📶</div>
                <span>무료 WiFi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}