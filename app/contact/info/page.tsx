'use client';

import React, { useState } from 'react';
import HeroSection from '@/app/components/common/HeroSection';
import styles from './page.module.css';

interface ContactInfo {
  department: string;
  phone: string;
  email: string;
  description: string;
  hours: string;
}

interface Inquiry {
  name: string;
  email: string;
  phone: string;
  category: string;
  subject: string;
  message: string;
}

const contactList: ContactInfo[] = [
  {
    department: '기획운영팀',
    phone: '070-462-7934',
    email: 'planning@gjcc.or.kr',
    description: '시설 이용 문의, 대관 신청, 센터 운영 총괄',
    hours: '평일 09:00~18:00'
  },
  {
    department: '문화사업팀',
    phone: '070-462-7935',
    email: 'culture@gjcc.or.kr',
    description: '인문학 강좌, 원데이클래스, 교육 프로그램',
    hours: '평일 09:00~18:00'
  },
  {
    department: '공연기획팀',
    phone: '070-462-7936',
    email: 'performance@gjcc.or.kr',
    description: '공연 관람, 티켓 예매, 공연 기획',
    hours: '평일 10:00~19:00'
  },
  {
    department: '홍보마케팅팀',
    phone: '070-462-7937',
    email: 'marketing@gjcc.or.kr',
    description: '보도자료, 홍보, SNS, 웹사이트',
    hours: '평일 09:00~18:00'
  }
];

export default function ContactInfoPage() {
  const [formData, setFormData] = useState<Inquiry>({
    name: '',
    email: '',
    phone: '',
    category: '시설이용',
    subject: '',
    message: ''
  });

  const breadcrumbs = [
    { label: '홈', href: '/' },
    { label: '문의·상담', href: '/contact' },
    { label: '연락처 안내' }
  ];

  const inquiryCategories = [
    '시설이용',
    '프로그램 신청',
    '공연 관람',
    '대관 문의',
    '기타 문의'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 구현에서는 서버로 데이터 전송
    alert('문의가 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      category: '시설이용',
      subject: '',
      message: ''
    });
  };

  return (
    <div className={styles.container}>
      <HeroSection 
        title="연락처 안내"
        description="광주문화진흥센터 각 부서별 연락처와 온라인 문의"
        breadcrumbs={breadcrumbs}
        backgroundGradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      />
      
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.contactSection}>
            <div className={styles.contactInfo}>
              <h2 className={styles.sectionTitle}>부서별 연락처</h2>
              
              <div className={styles.mainContact}>
                <div className={styles.mainContactCard}>
                  <div className={styles.mainContactIcon}>📞</div>
                  <div className={styles.mainContactInfo}>
                    <h3>대표전화</h3>
                    <p className={styles.mainPhone}>070-462-7934</p>
                    <p className={styles.mainDesc}>평일 09:00~18:00 (점심시간 12:00~13:00)</p>
                  </div>
                </div>
                
                <div className={styles.mainContactCard}>
                  <div className={styles.mainContactIcon}>📠</div>
                  <div className={styles.mainContactInfo}>
                    <h3>팩스</h3>
                    <p className={styles.mainPhone}>070-462-7935</p>
                    <p className={styles.mainDesc}>24시간 접수 가능</p>
                  </div>
                </div>
                
                <div className={styles.mainContactCard}>
                  <div className={styles.mainContactIcon}>📧</div>
                  <div className={styles.mainContactInfo}>
                    <h3>이메일</h3>
                    <p className={styles.mainPhone}>contact@gjcc.or.kr</p>
                    <p className={styles.mainDesc}>24시간 접수, 1~2일 내 답변</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.departmentList}>
                {contactList.map((contact, index) => (
                  <div key={index} className={styles.departmentCard}>
                    <div className={styles.departmentHeader}>
                      <h3 className={styles.departmentName}>{contact.department}</h3>
                      <span className={styles.departmentHours}>{contact.hours}</span>
                    </div>
                    <div className={styles.departmentContent}>
                      <div className={styles.contactDetail}>
                        <span className={styles.contactIcon}>📞</span>
                        <span className={styles.contactValue}>{contact.phone}</span>
                      </div>
                      <div className={styles.contactDetail}>
                        <span className={styles.contactIcon}>📧</span>
                        <span className={styles.contactValue}>{contact.email}</span>
                      </div>
                      <p className={styles.departmentDesc}>{contact.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.inquiryForm}>
              <h2 className={styles.sectionTitle}>온라인 문의</h2>
              
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">이름 *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={styles.formInput}
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">연락처 *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className={styles.formInput}
                      placeholder="010-1234-5678"
                    />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">이메일 *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={styles.formInput}
                    placeholder="example@email.com"
                  />
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="category">문의 분류 *</label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className={styles.formSelect}
                    >
                      {inquiryCategories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="subject">제목 *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={styles.formInput}
                    placeholder="문의 제목을 입력해주세요"
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">문의 내용 *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className={styles.formTextarea}
                    placeholder="문의하실 내용을 상세히 작성해주세요"
                    rows={8}
                  />
                </div>
                
                <div className={styles.formActions}>
                  <button type="submit" className={styles.submitButton}>
                    문의 접수
                  </button>
                  <button 
                    type="button" 
                    className={styles.resetButton}
                    onClick={() => setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      category: '시설이용',
                      subject: '',
                      message: ''
                    })}
                  >
                    초기화
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div className={styles.additionalInfo}>
            <div className={styles.infoCard}>
              <h3>방문 시 안내사항</h3>
              <ul>
                <li>방문 전 사전 예약을 권장합니다</li>
                <li>주차공간이 한정되어 있으니 대중교통 이용을 권장합니다</li>
                <li>코로나19 방역수칙을 준수해 주시기 바랍니다</li>
                <li>센터 내 금연·금주 구역입니다</li>
              </ul>
            </div>
            
            <div className={styles.infoCard}>
              <h3>응답 시간 안내</h3>
              <div className={styles.responseTime}>
                <div className={styles.timeItem}>
                  <strong>전화 문의</strong>
                  <span>즉시 응답 (운영시간 내)</span>
                </div>
                <div className={styles.timeItem}>
                  <strong>이메일 문의</strong>
                  <span>1~2일 내 답변</span>
                </div>
                <div className={styles.timeItem}>
                  <strong>온라인 문의</strong>
                  <span>1~3일 내 답변</span>
                </div>
                <div className={styles.timeItem}>
                  <strong>팩스 문의</strong>
                  <span>2~3일 내 답변</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}