'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './GallerySection.module.css';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: '전체' | '인문학' | '공방' | '쿠킹';
  title: string;
  description: string;
  date: string;
}

const galleryItems: GalleryItem[] = [
  // 인문학 관련
  {
    id: 1,
    src: '/photo/ON/1.png',
    alt: '인문학 강의 현장',
    category: '인문학',
    title: 'One & On 인문학 강좌',
    description: '철학과 문학을 통한 깊이 있는 사고의 시간',
    date: '2024-08-15'
  },
  {
    id: 2,
    src: '/photo/ON/2.png',
    alt: '인문학 토론 시간',
    category: '인문학',
    title: '인문학 토론 워크숍',
    description: '참여자들과 함께하는 활발한 토론과 소통',
    date: '2024-07-22'
  },
  {
    id: 3,
    src: '/photo/ON/3.png',
    alt: '인문학 세미나',
    category: '인문학',
    title: '인문학 특별 세미나',
    description: '전문가와 함께하는 심화 인문학 강의',
    date: '2024-06-10'
  },
  // 공방 관련
  {
    id: 4,
    src: '/photo/ONE/공방1.png',
    alt: '도자기 만들기 체험',
    category: '공방',
    title: '도자기 원데이클래스',
    description: '흙으로 빚어내는 나만의 작품 만들기',
    date: '2024-08-20'
  },
  {
    id: 5,
    src: '/photo/ONE/공방5.png',
    alt: '목공예 체험',
    category: '공방',
    title: '목공예 원데이클래스',
    description: '나무의 따뜻함을 담은 소품 제작',
    date: '2024-08-12'
  },
  {
    id: 6,
    src: '/photo/ONE/공방8.png',
    alt: '가죽공예 체험',
    category: '공방',
    title: '가죽공예 원데이클래스',
    description: '실용적이고 멋스러운 가죽 소품 만들기',
    date: '2024-07-28'
  },
  {
    id: 7,
    src: '/photo/ONE/공방12.jpg',
    alt: '금속공예 체험',
    category: '공방',
    title: '금속공예 원데이클래스',
    description: '금속으로 만드는 개성 있는 액세서리',
    date: '2024-07-15'
  },
  {
    id: 8,
    src: '/photo/ONE/공방15.png',
    alt: '염색 체험',
    category: '공방',
    title: '천연염색 원데이클래스',
    description: '자연의 색으로 물들이는 특별한 경험',
    date: '2024-06-25'
  },
  // 쿠킹 관련
  {
    id: 9,
    src: '/photo/ONE/쿠킹1.png',
    alt: '베이킹 클래스',
    category: '쿠킹',
    title: '홈베이킹 원데이클래스',
    description: '달콤한 디저트와 함께하는 힐링 시간',
    date: '2024-08-25'
  },
  {
    id: 10,
    src: '/photo/ONE/쿠킹5.png',
    alt: '전통요리 체험',
    category: '쿠킹',
    title: '한식 요리 원데이클래스',
    description: '우리나라 전통음식의 깊은 맛과 정성',
    date: '2024-08-18'
  },
  {
    id: 11,
    src: '/photo/ONE/쿠킹8.png',
    alt: '파스타 만들기',
    category: '쿠킹',
    title: '이탈리안 쿠킹 클래스',
    description: '정통 이탈리아 파스타와 소스 만들기',
    date: '2024-08-05'
  },
  {
    id: 12,
    src: '/photo/ONE/쿠킹12.jpg',
    alt: '디저트 만들기',
    category: '쿠킹',
    title: '프리미엄 디저트 클래스',
    description: '카페에서 맛볼 수 있는 고급 디저트 제작',
    date: '2024-07-30'
  },
  {
    id: 13,
    src: '/photo/ONE/쿠킹16.jpg',
    alt: '브런치 요리',
    category: '쿠킹',
    title: '브런치 쿠킹 클래스',
    description: '여유로운 주말을 위한 특별한 브런치',
    date: '2024-07-20'
  },
  {
    id: 14,
    src: '/photo/ONE/쿠킹20.jpg',
    alt: '아시안 요리',
    category: '쿠킹',
    title: '아시안 퓨전 쿠킹',
    description: '동남아시아의 향신료가 어우러진 요리',
    date: '2024-06-15'
  },
  {
    id: 15,
    src: '/photo/ONE/공방18.png',
    alt: '캘리그라피 체험',
    category: '공방',
    title: '캘리그라피 원데이클래스',
    description: '아름다운 손글씨로 마음을 전하는 시간',
    date: '2024-06-08'
  },
  {
    id: 16,
    src: '/photo/ONE/쿠킹25.png',
    alt: '카페 음료 만들기',
    category: '쿠킹',
    title: '홈카페 바리스타 클래스',
    description: '집에서 즐기는 전문가급 커피와 음료',
    date: '2024-05-28'
  }
];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<'전체' | '인문학' | '공방' | '쿠킹'>('전체');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = [
    { key: '전체' as const, label: '전체', icon: '🎯' },
    { key: '인문학' as const, label: '인문학', icon: '📚' },
    { key: '공방' as const, label: '공방', icon: '🎨' },
    { key: '쿠킹' as const, label: '쿠킹', icon: '👩‍🍳' }
  ];

  const filteredItems = selectedCategory === '전체' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const openModal = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section className={styles.gallerySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <h2 className={styles.title}>활동 갤러리</h2>
            <p className={styles.description}>
              광주문화진흥센터의 다양한 프로그램과 활동들을 사진으로 만나보세요
            </p>
          </div>
          
          <div className={styles.categoryFilter}>
            {categories.map(category => (
              <button
                key={category.key}
                className={`${styles.categoryButton} ${
                  selectedCategory === category.key ? styles.active : ''
                }`}
                onClick={() => setSelectedCategory(category.key)}
              >
                <span className={styles.categoryIcon}>{category.icon}</span>
                <span className={styles.categoryLabel}>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.galleryContainer}>
          <button className={styles.scrollButton} onClick={scrollLeft} aria-label="이전">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
          
          <div className={styles.galleryScroll} ref={scrollRef}>
            <div className={styles.galleryGrid}>
              {filteredItems.map(item => (
                <div
                  key={item.id}
                  className={styles.galleryItem}
                  onClick={() => openModal(item)}
                >
                  <div className={styles.imageContainer}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.image}
                    />
                    <div className={styles.overlay}>
                      <div className={styles.overlayContent}>
                        <h3 className={styles.itemTitle}>{item.title}</h3>
                        <p className={styles.itemDescription}>{item.description}</p>
                        <span className={styles.itemDate}>{formatDate(item.date)}</span>
                      </div>
                    </div>
                    <div className={styles.categoryBadge}>
                      {categories.find(c => c.key === item.category)?.icon} {item.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className={styles.scrollButton} onClick={scrollRight} aria-label="다음">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{galleryItems.length}</div>
            <div className={styles.statLabel}>총 활동</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{galleryItems.filter(item => item.category === '인문학').length}</div>
            <div className={styles.statLabel}>인문학 프로그램</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{galleryItems.filter(item => item.category === '공방').length}</div>
            <div className={styles.statLabel}>공방 클래스</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{galleryItems.filter(item => item.category === '쿠킹').length}</div>
            <div className={styles.statLabel}>쿠킹 클래스</div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>
              ×
            </button>
            <div className={styles.modalImage}>
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="90vw"
                className={styles.modalImg}
              />
            </div>
            <div className={styles.modalInfo}>
              <div className={styles.modalCategory}>
                {categories.find(c => c.key === selectedImage.category)?.icon} {selectedImage.category}
              </div>
              <h3 className={styles.modalTitle}>{selectedImage.title}</h3>
              <p className={styles.modalDescription}>{selectedImage.description}</p>
              <div className={styles.modalDate}>{formatDate(selectedImage.date)}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}