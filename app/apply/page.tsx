'use client';

import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaExclamationCircle } from 'react-icons/fa';
import HeroSection from '@/app/components/common/HeroSection';
import styles from './page.module.css';

const ApplyPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    time: '오후 2시',
    participants: '1',
    message: ''
  });

  const handleApply = () => {
    setShowModal(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // 숫자만 추출
      const numbers = value.replace(/[^\d]/g, '');
      
      // 최대 8자리만 허용 (010 제외)
      if (numbers.length > 8) {
        return;
      }
      
      // 하이픈 자동 추가
      let formattedNumber = numbers;
      if (numbers.length > 4) {
        formattedNumber = numbers.slice(0, 4) + '-' + numbers.slice(4);
      }
      
      setFormData(prev => ({
        ...prev,
        phone: formattedNumber
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 실제 제출 로직 추가
    setShowModal(false);
    setShowSuccessModal(true);
    // 폼 초기화
    setFormData({
      name: '',
      phone: '',
      time: '오후 2시',
      participants: '1',
      message: ''
    });
  };

  return (
    <>
      <HeroSection 
        title="One & On"
        description="광주문화진흥센터 프로그램"
        breadcrumbs={[
          { label: '홈', href: '/' },
          { label: 'One & On' }
        ]}
      />

      <div className={styles.container}>
        {/* One & On Class Section */}
        <section className={styles.oneOnSection}>
          <div className={styles.oneOnHeader}>
            <h1 className={styles.mainTitle}>🦢 원앤온 클래스</h1>
            <p className={styles.subtitle}>One & On 살펴보기</p>
          </div>

          <div className={styles.oneOnCard}>
            <div className={styles.basicInfo}>
              <h2 className={styles.sectionTitle}>프로그램 정보</h2>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <FaCalendarAlt className={styles.icon} />
                  <div>
                    <strong>날짜</strong>
                    <p>9월 9일, 11일, 16일, 18일 (화, 목)</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <FaClock className={styles.icon} />
                  <div>
                    <strong>시간</strong>
                    <p>오후 2시 / 저녁 7시 반</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <FaMapMarkerAlt className={styles.icon} />
                  <div>
                    <strong>주최</strong>
                    <p>광주문화진흥센터</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.curriculum}>
              <h2 className={styles.sectionTitle}>커리큘럼</h2>
              
              <div className={styles.classSection}>
                <h3 className={styles.classTitle}>
                  <span className={styles.classNumber}>1교시</span>
                  원데이 클래스
                </h3>
                <div className={styles.classContent}>
                  <div className={styles.classItem}>
                    <span className={styles.date}>9일, 16일 (화)</span>
                    <span className={styles.classType}>쿠킹 클래스</span>
                  </div>
                  <div className={styles.classItem}>
                    <span className={styles.date}>11일, 18일 (목)</span>
                    <span className={styles.classType}>핸드메이드 클래스</span>
                  </div>
                </div>
              </div>

              <div className={styles.classSection}>
                <h3 className={styles.classTitle}>
                  <span className={styles.classNumber}>2교시</span>
                  온클래스
                </h3>
                <div className={styles.classContent}>
                  <div className={styles.classItem}>
                    <span className={styles.classType}>인문학 강의</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.noticeSection}>
              <h2 className={styles.noticeTitle}>
                <FaExclamationCircle className={styles.noticeIcon} />
                공지사항
              </h2>
              <div className={styles.noticeContent}>
               
                <div className={styles.noticeItem}>
                  <span className={styles.noticeNumber}>필독</span>
                  <p>체험재료비: <strong>회당 5천원</strong><br />
                      입금계좌: 카카오뱅크 3333-33-7846805 이미현</p>
                </div>
              </div>
            </div>

            <div className={styles.applySection}>
              <button className={styles.applyBtn} onClick={handleApply}>
                신청하기
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Application Modal */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.applicationModal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>프로그램 신청서</h3>
              <button 
                type="button"
                className={styles.closeButton}
                onClick={() => setShowModal(false)}
                aria-label="닫기"
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className={styles.applicationForm}>
              <div className={styles.formSection}>
                <h4 className={styles.formSectionTitle}>신청자 정보</h4>
                
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    이름 <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                    placeholder="이름을 입력하세요"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    연락처 <span className={styles.required}>*</span>
                  </label>
                  <div className={styles.phoneInputWrapper}>
                    <span className={styles.phonePrefix}>010-</span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={styles.phoneInput}
                      required
                      placeholder="0000-0000"
                      maxLength={9}
                      pattern="[0-9]{4}-[0-9]{4}"
                    />
                  </div>
                </div>

              </div>

              <div className={styles.formSection}>
                <h4 className={styles.formSectionTitle}>신청 내용</h4>

                <div className={styles.formGroup}>
                  <label htmlFor="time" className={styles.label}>
                    희망 시간대 <span className={styles.required}>*</span>
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className={styles.select}
                    required
                  >
                    <option value="오후 2시">오후 2시</option>
                    <option value="저녁 7시 반">저녁 7시 반</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="participants" className={styles.label}>
                    참가 인원 <span className={styles.required}>*</span>
                  </label>
                  <select
                    id="participants"
                    name="participants"
                    value={formData.participants}
                    onChange={handleInputChange}
                    className={styles.select}
                    required
                  >
                    <option value="1">1명</option>
                    <option value="2">2명</option>
                    <option value="3">3명</option>
                    <option value="4">4명</option>
                    <option value="5">5명</option>
                    <option value="6">6명</option>
                    <option value="7">7명</option>
                    <option value="8">8명</option>
                  </select>
                </div>
              </div>

              <div className={styles.formSection}>
                <h4 className={styles.formSectionTitle}>추가 사항</h4>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    요청사항
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.textarea}
                    rows={4}
                    placeholder="특별한 요청사항이 있으시면 입력해주세요"
                  />
                </div>
              </div>

              <div className={styles.formNotice}>
                <p>• 체험재료비: 회당 5천원</p>
                <p>• 신청 후 확인되면 연락드립니다.</p>
                <p>• 취소는 프로그램 3일 전까지 가능합니다.</p>
              </div>

              <div className={styles.formButtons}>
                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={() => setShowModal(false)}
                >
                  취소
                </button>
                <button
                  type="submit"
                  className={styles.submitButton}
                >
                  신청하기
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className={styles.modalOverlay} onClick={() => setShowSuccessModal(false)}>
          <div className={styles.successModal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.successIcon}>
              ✓
            </div>
            <h3 className={styles.successTitle}>신청이 완료되었습니다</h3>
            <div className={styles.successInfo}>
              <p className={styles.successMessage}>
                확인 후 연락드리겠습니다.
              </p>
              <div className={styles.paymentInfo}>
                <h4 className={styles.paymentTitle}>💳 입금 안내</h4>
                <div className={styles.paymentDetails}>
                  <div className={styles.paymentRow}>
                    <span className={styles.label}>은행</span>
                    <span className={styles.value}>카카오뱅크</span>
                  </div>
                  <div className={styles.paymentRow}>
                    <span className={styles.label}>계좌번호</span>
                    <span className={styles.value}>3333-33-7846805</span>
                  </div>
                  <div className={styles.paymentRow}>
                    <span className={styles.label}>예금주</span>
                    <span className={styles.value}>이미현</span>
                  </div>
                  <div className={styles.paymentRow}>
                    <span className={styles.label}>금액</span>
                    <span className={styles.value}>회당 5천원</span>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              className={styles.successButton}
              onClick={() => setShowSuccessModal(false)}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ApplyPage;