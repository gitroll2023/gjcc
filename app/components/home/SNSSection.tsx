'use client';

import React from 'react';
import Image from 'next/image';
import styles from './SNSSection.module.css';

const SNSSection = () => {
  const snsItems = [
    { 
      id: 1, 
      name: '유튜브', 
      icon: '/downloads/sns_youtube.png', 
      href: 'https://youtube.com/@gjculturecenter',
      color: '#FF0000'
    },
    { 
      id: 2, 
      name: '페이스북', 
      icon: '/downloads/sns_facebook.png', 
      href: 'https://facebook.com/gjculturecenter',
      color: '#1877F2'
    },
    { 
      id: 3, 
      name: '블로그', 
      icon: '/downloads/sns_blog.png', 
      href: 'https://blog.naver.com/gjculturecenter',
      color: '#03C75A'
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h3 className={styles.sectionTitle}>SNS</h3>
        <p className={styles.subtitle}>광주문화진흥센터의 다양한 소식을 SNS에서 만나보세요</p>
        
        <div className={styles.snsGrid}>
          {snsItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.snsItem}
              style={{ '--sns-color': item.color } as React.CSSProperties}
            >
              <div className={styles.iconWrapper}>
                <Image 
                  src={item.icon} 
                  alt={item.name} 
                  width={40} 
                  height={40}
                />
              </div>
              <span className={styles.snsName}>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SNSSection;