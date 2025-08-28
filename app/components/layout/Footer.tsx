'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  const [isFamilyOpen, setIsFamilyOpen] = useState(false);

  const familySites = [
    { name: '광주광역시', url: 'https://www.gwangju.go.kr' },
    { name: '광주광역시의회', url: 'https://council.gwangju.kr' },
    { name: '문화체육관광부', url: 'https://www.mcst.go.kr' },
    { name: '한국문화예술위원회', url: 'https://www.arko.or.kr' },
  ];

  const quickLinks = [
    { name: '온라인접수', icon: '/downloads/quick_icon01.png', href: '/apply' },
    { name: '프로그램', icon: '/downloads/quick_icon02.png', href: '/program' },
    { name: '공지사항', icon: '/downloads/quick_icon03.png', href: '/notice/list' },
    { name: '문의하기', icon: '/downloads/quick_icon04.png', href: '/contact' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerInner}>
          <div className={styles.footerLogo}>
            <Image 
              src="/logo/logo.png" 
              alt="광주문화진흥센터" 
              width={220} 
              height={50}
            />
          </div>

          <div className={styles.footerMenu}>
            <ul>
              <li><Link href="/privacy">개인정보처리방침</Link></li>
              <li><Link href="/terms">이용약관</Link></li>
              <li><Link href="/email">이메일무단수집거부</Link></li>
              <li><Link href="/sitemap">사이트맵</Link></li>
            </ul>
          </div>

          <div className={styles.familySite}>
            <button 
              className={styles.familyBtn}
              onClick={() => setIsFamilyOpen(!isFamilyOpen)}
            >
              유관기관 바로가기
            </button>
            {isFamilyOpen && (
              <ul className={styles.familyList}>
                {familySites.map((site) => (
                  <li key={site.name}>
                    <a href={site.url} target="_blank" rel="noopener noreferrer">
                      {site.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerInner}>
          <div className={styles.footerInfo}>
            <p>61475 광주광역시 동구 장동로 23 (장동) 광주문화예술회관</p>
            <p>대표전화 : 062-670-7400 | 팩스 : 062-670-7499</p>
            <p>Copyright © 2025 광주문화진흥센터. All rights reserved.</p>
          </div>

          <div className={styles.footerQuick}>
            {quickLinks.map((link) => (
              <Link key={link.name} href={link.href} className={styles.quickBtn}>
                <Image 
                  src={link.icon} 
                  alt={link.name} 
                  width={30} 
                  height={30}
                />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;