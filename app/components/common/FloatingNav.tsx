'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaChevronUp } from 'react-icons/fa';
import styles from './FloatingNav.module.css';

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickMenuItems = [
    { 
      id: 1, 
      name: '원앤온\n클래스', 
      icon: '/downloads/quick_icon01.png', 
      href: '/apply',
      color: '#FF6B6B'
    },
    { 
      id: 2, 
      name: '프로그램\n안내', 
      icon: '/downloads/quick_icon02.png', 
      href: '/program',
      color: '#4ECDC4'
    },
    { 
      id: 3, 
      name: '공지\n사항', 
      icon: '/downloads/quick_icon03.png', 
      href: '/notice/list',
      color: '#45B7D1'
    },
    { 
      id: 4, 
      name: '문의\n하기', 
      icon: '/downloads/quick_icon04.png', 
      href: '/contact',
      color: '#96CEB4'
    },
  ];

  return (
    <div className={`${styles.floatingNav} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.quickMenu}>
        {quickMenuItems.map((item) => (
          <Link 
            key={item.id} 
            href={item.href} 
            className={styles.quickItem}
            style={{ '--item-color': item.color } as React.CSSProperties}
          >
            <div className={styles.iconWrapper}>
              <img 
                src={item.icon} 
                alt={item.name} 
                width={30} 
                height={30}
              />
            </div>
            <span className={styles.itemName}>{item.name}</span>
          </Link>
        ))}
      </div>
      
      <button 
        className={styles.topButton}
        onClick={scrollToTop}
        aria-label="맨 위로"
      >
        <FaChevronUp />
        <span>TOP</span>
      </button>
    </div>
  );
};

export default FloatingNav;