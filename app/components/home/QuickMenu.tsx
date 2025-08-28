'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './QuickMenu.module.css';

const QuickMenu = () => {
  const menuItems = [
    { id: 1, name: '사업공고', icon: '/downloads/quick_icon01.png', href: '/notice/business' },
    { id: 2, name: '온라인접수', icon: '/downloads/quick_icon02.png', href: '/apply' },
    { id: 3, name: '시설예약', icon: '/downloads/quick_icon03.png', href: '/reservation' },
    { id: 4, name: '자료실', icon: '/downloads/quick_icon04.png', href: '/archive' },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h3 className={styles.sectionTitle}>바로가기</h3>
        
        <div className={styles.menuGrid}>
          {menuItems.map((item) => (
            <Link key={item.id} href={item.href} className={styles.menuItem}>
              <div className={styles.iconWrapper}>
                <Image 
                  src={item.icon} 
                  alt={item.name} 
                  width={60} 
                  height={60}
                />
              </div>
              <span className={styles.menuName}>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickMenu;