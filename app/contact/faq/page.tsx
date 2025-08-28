'use client';

import React, { useState } from 'react';
import HeroSection from '@/app/components/common/HeroSection';
import styles from './page.module.css';

interface FAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
  popular?: boolean;
}

const faqData: FAQ[] = [
  {
    id: 1,
    category: '시설이용',
    question: '문화센터 이용시간은 어떻게 되나요?',
    answer: '평일 오전 9시부터 오후 9시까지, 주말 오전 9시부터 오후 6시까지 운영됩니다. 매주 월요일과 법정공휴일은 휴관일입니다. 단, 공연이나 특별행사가 있는 경우 운영시간이 연장될 수 있습니다.',
    popular: true
  },
  {
    id: 2,
    category: '프로그램',
    question: '인문학 강좌는 어떻게 신청하나요?',
    answer: '인문학 강좌는 온라인과 전화로 신청 가능합니다. 홈페이지 프로그램 메뉴에서 원하는 강좌를 선택하여 신청하거나, 교육팀(062-123-4568)으로 전화 신청하실 수 있습니다. 선착순 접수이며, 수강료는 신청 후 7일 이내 납부해 주시기 바랍니다.',
    popular: true
  },
  {
    id: 3,
    category: '주차',
    question: '주차는 무료인가요?',
    answer: '문화센터 이용고객에게는 최초 2시간 무료 주차를 제공합니다. 이후에는 시간당 1,000원의 주차비가 부과됩니다. 주차권은 1층 안내데스크에서 인증받으실 수 있습니다.',
    popular: true
  },
  {
    id: 4,
    category: '공연',
    question: '공연 티켓 예매는 어떻게 하나요?',
    answer: '공연 티켓은 홈페이지 온라인 예매, 전화 예매(062-123-4569), 현장 매표소에서 구매 가능합니다. 온라인 예매 시 할인 혜택이 있으며, 공연 당일에는 현장 매표소에서만 구매하실 수 있습니다.',
    popular: true
  },
  {
    id: 5,
    category: '시설이용',
    question: '장애인 편의시설은 어떤 것들이 있나요?',
    answer: '장애인 전용 주차구역, 휠체어 리프트, 장애인 화장실, 점자 안내판, 휠체어 대여 서비스 등을 제공하고 있습니다. 시각장애인을 위한 음성 안내 서비스도 이용하실 수 있습니다.'
  },
  {
    id: 6,
    category: '프로그램',
    question: '원데이클래스는 언제 열리나요?',
    answer: '원데이클래스는 매주 토요일과 일요일에 다양한 주제로 진행됩니다. 월별 프로그램 일정은 매월 25일경 홈페이지와 SNS를 통해 공지됩니다. 사전 예약 필수이며, 재료비가 별도로 발생할 수 있습니다.'
  },
  {
    id: 7,
    category: '대관',
    question: '공연장 대관은 어떻게 신청하나요?',
    answer: '공연장 대관은 이용 희망일 최소 30일 전에 신청해 주시기 바랍니다. 대관 신청서를 작성하여 총무팀(062-123-4567)으로 제출하시면 검토 후 승인 여부를 알려드립니다. 대관료는 승인 후 7일 이내 납부해 주셔야 합니다.'
  },
  {
    id: 8,
    category: '시설이용',
    question: '음식물 반입이 가능한가요?',
    answer: '공연장과 전시실 내에는 음식물 반입이 금지되어 있습니다. 다만, 1층 로비와 야외 휴게공간에서는 간단한 음료 섭취가 가능합니다. 센터 내 카페테리아도 이용하실 수 있습니다.'
  },
  {
    id: 9,
    category: '프로그램',
    question: '수강료 환불 정책은 어떻게 되나요?',
    answer: '강좌 시작 7일 전까지는 전액 환불, 강좌 시작 3일 전까지는 80% 환불, 강좌 시작 후에는 환불이 불가합니다. 단, 센터 사정으로 인한 강좌 취소 시에는 전액 환불해 드립니다.'
  },
  {
    id: 10,
    category: '공연',
    question: '공연 중 사진 촬영이 가능한가요?',
    answer: '저작권 보호를 위해 공연 중 사진 및 동영상 촬영은 금지되어 있습니다. 공연 전후 로비에서의 기념사진 촬영은 가능하며, 일부 공연에서는 지정된 시간에 촬영 타임을 제공하기도 합니다.'
  },
  {
    id: 11,
    category: '기타',
    question: '분실물 보관기간은 얼마나 되나요?',
    answer: '분실물은 접수일로부터 3개월간 보관됩니다. 분실물 확인은 1층 안내데스크나 전화(062-123-4567)로 문의하실 수 있습니다. 귀중품의 경우 즉시 연락드리도록 하겠습니다.'
  },
  {
    id: 12,
    category: '시설이용',
    question: '와이파이 이용이 가능한가요?',
    answer: '센터 전체 구역에서 무료 와이파이를 이용하실 수 있습니다. SSID는 "GJ_Culture_Free"이며, 비밀번호는 1층 안내데스크에서 안내받으실 수 있습니다. 접속 시간은 하루 최대 3시간입니다.'
  }
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const breadcrumbs = [
    { label: '홈', href: '/' },
    { label: '문의·상담', href: '/contact' },
    { label: '자주 묻는 질문' }
  ];

  const categories = ['전체', '시설이용', '프로그램', '공연', '대관', '주차', '기타'];

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === '전체' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularFAQs = faqData.filter(faq => faq.popular);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case '시설이용':
        return '🏢';
      case '프로그램':
        return '📚';
      case '공연':
        return '🎭';
      case '대관':
        return '📅';
      case '주차':
        return '🚗';
      default:
        return '❓';
    }
  };

  return (
    <div className={styles.container}>
      <HeroSection 
        title="자주 묻는 질문"
        description="광주문화진흥센터 이용에 대한 궁금한 점들을 확인해보세요"
        breadcrumbs={breadcrumbs}
        backgroundGradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
      />
      
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.faqSection}>
            <div className={styles.popularSection}>
              <h2 className={styles.sectionTitle}>인기 FAQ</h2>
              <div className={styles.popularGrid}>
                {popularFAQs.map(faq => (
                  <div key={faq.id} className={styles.popularCard}>
                    <div className={styles.popularIcon}>
                      {getCategoryIcon(faq.category)}
                    </div>
                    <div className={styles.popularContent}>
                      <h3 className={styles.popularQuestion}>{faq.question}</h3>
                      <p className={styles.popularAnswer}>
                        {faq.answer.substring(0, 100)}...
                      </p>
                      <button 
                        className={styles.readMoreBtn}
                        onClick={() => toggleItem(faq.id)}
                      >
                        자세히 보기
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.allFAQSection}>
              <h2 className={styles.sectionTitle}>전체 FAQ</h2>
              
              <div className={styles.controls}>
                <div className={styles.categoryTabs}>
                  {categories.map(category => (
                    <button
                      key={category}
                      className={`${styles.categoryTab} ${selectedCategory === category ? styles.active : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                <div className={styles.searchBox}>
                  <input
                    type="text"
                    placeholder="FAQ 검색..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.searchInput}
                  />
                  <button className={styles.searchButton}>🔍</button>
                </div>
              </div>
              
              <div className={styles.faqList}>
                {filteredFAQs.map((faq, index) => (
                  <div key={faq.id} className={styles.faqItem}>
                    <div 
                      className={styles.faqHeader}
                      onClick={() => toggleItem(faq.id)}
                    >
                      <div className={styles.faqQuestion}>
                        <span className={styles.faqNumber}>Q{index + 1}</span>
                        <span className={styles.faqCategory}>
                          [{faq.category}]
                        </span>
                        <span className={styles.questionText}>{faq.question}</span>
                        {faq.popular && (
                          <span className={styles.popularBadge}>인기</span>
                        )}
                      </div>
                      <button className={styles.toggleButton}>
                        {openItems.includes(faq.id) ? '−' : '+'}
                      </button>
                    </div>
                    
                    {openItems.includes(faq.id) && (
                      <div className={styles.faqAnswer}>
                        <div className={styles.answerContent}>
                          <span className={styles.answerLabel}>A</span>
                          <p className={styles.answerText}>{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {filteredFAQs.length === 0 && (
                  <div className={styles.noResults}>
                    <p>검색 결과가 없습니다.</p>
                    <p>다른 검색어를 시도해보거나 카테고리를 변경해보세요.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className={styles.helpSection}>
            <div className={styles.helpCard}>
              <h3>원하는 답변을 찾지 못하셨나요?</h3>
              <p>직접 문의를 남겨주시면 빠른 시일 내에 답변드리겠습니다.</p>
              <div className={styles.helpActions}>
                <a href="/contact/info" className={styles.contactButton}>
                  온라인 문의
                </a>
                <a href="tel:062-123-4567" className={styles.phoneButton}>
                  전화 문의
                </a>
              </div>
            </div>
            
            <div className={styles.tipCard}>
              <h3>이용 팁</h3>
              <ul>
                <li>프로그램 신청은 조기 마감될 수 있으니 서둘러 신청하세요</li>
                <li>주차공간이 한정되어 있으니 대중교통을 이용해주세요</li>
                <li>공연 관람 시 30분 전까지 도착하시기 바랍니다</li>
                <li>분실물 발생 시 즉시 안내데스크에 신고해주세요</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}