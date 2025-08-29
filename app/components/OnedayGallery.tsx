'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './OnedayGallery.module.css';

const OnedayGallery = () => {
  const [currentSet, setCurrentSet] = useState(0);

  // 모든 이미지 경로 (54개 - 6의 배수로 맞춤)
  const allImages = [
    '/photo/원데이클래스(공방,쿠킹)/공방1.png',
    '/photo/원데이클래스(공방,쿠킹)/공방2.png',
    '/photo/원데이클래스(공방,쿠킹)/공방3.png',
    '/photo/원데이클래스(공방,쿠킹)/공방4.png',
    '/photo/원데이클래스(공방,쿠킹)/공방5.png',
    '/photo/원데이클래스(공방,쿠킹)/공방6.jpg',
    '/photo/원데이클래스(공방,쿠킹)/공방7.jpg',
    '/photo/원데이클래스(공방,쿠킹)/공방8.png',
    '/photo/원데이클래스(공방,쿠킹)/공방9.jpg',
    '/photo/원데이클래스(공방,쿠킹)/공방10.png',
    '/photo/원데이클래스(공방,쿠킹)/공방11.png',
    '/photo/원데이클래스(공방,쿠킹)/공방12.jpg',
    '/photo/원데이클래스(공방,쿠킹)/공방13.png',
    '/photo/원데이클래스(공방,쿠킹)/공방14.png',
    '/photo/원데이클래스(공방,쿠킹)/공방15.png',
    '/photo/원데이클래스(공방,쿠킹)/공방16.png',
    '/photo/원데이클래스(공방,쿠킹)/공방17.jpg',
    '/photo/원데이클래스(공방,쿠킹)/공방18.png',
    '/photo/원데이클래스(공방,쿠킹)/공방19.png',
    '/photo/원데이클래스(공방,쿠킹)/공방20.png',
    '/photo/원데이클래스(공방,쿠킹)/공방21.jpg',
    '/photo/원데이클래스(공방,쿠킹)/공방22.png',
    '/photo/원데이클래스(공방,쿠킹)/공방23.jpg',
    '/photo/원데이클래스(공방,쿠킹)/공방24.jpg',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹1.png',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹2.png',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹3.png',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹4.png',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹5.png',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹6.png',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹7.png',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹8.png',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹9.png',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹10.png',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹11.jpg',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹12.jpg',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹13.jpg',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹14.jpg',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹15.jpg',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹16.jpg',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹17.png',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹18.png',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹19.jpg',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹20.jpg',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹21.png',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹22.jpg',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹23.png',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹24.png',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹25.png',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹26.jpg',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹27.png',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹28.png',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹29.jpg',
    '/photo/원데이클래스(공방,쿠킹)/쿠킹30.jpg',
  ];

  // 이미지를 6개씩 그룹으로 나누기
  const imageGroups = [];
  for (let i = 0; i < allImages.length; i += 6) {
    imageGroups.push(allImages.slice(i, i + 6));
  }

  // 자동 슬라이드
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % imageGroups.length);
    }, 4000); // 4초마다 전환

    return () => clearInterval(timer);
  }, [imageGroups.length]);

  return (
    <section className={styles.gallerySection}>
      <div className={styles.header}>
        <h2>원데이 클래스 갤러리</h2>
        <p>다양한 원데이 클래스 현장을 만나보세요</p>
      </div>
      
      <div className={styles.galleryContainer}>
        <div className={styles.galleryGrid}>
          {imageGroups[currentSet]?.map((image, index) => (
            <div 
              key={index} 
              className={styles.imageWrapper}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <Image
                src={image}
                alt={`원데이 클래스 ${index + 1}`}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                className={styles.galleryImage}
              />
            </div>
          ))}
        </div>
        
        <div className={styles.indicators}>
          {imageGroups.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentSet ? styles.active : ''}`}
              onClick={() => setCurrentSet(index)}
              aria-label={`Go to image set ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className={styles.ctaWrapper}>
        <a href="/program/oneday" className={styles.ctaButton}>
          원데이 클래스 자세히 보기
        </a>
      </div>
    </section>
  );
};

export default OnedayGallery;