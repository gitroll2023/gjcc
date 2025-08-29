'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const quickLinks = [
    { name: '원앤온', icon: '/downloads/quick_icon01.png', href: '/apply' },
    { name: '프로그램', icon: '/downloads/quick_icon02.png', href: '/program' },
    { name: '공지사항', icon: '/downloads/quick_icon03.png', href: '/notice/list' },
    { name: '문의하기', icon: '/downloads/quick_icon04.png', href: '/contact' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerInner}>
          <div className={styles.footerLogo}>
            <img 
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
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerInner}>
          <div className={styles.footerInfo}>
            <p>광주광역시 남구 독립로 4 광주문화진흥센터</p>
            <p>대표전화 : 070-462-7934 | 팩스 : 070-462-7935</p>
            <p>Copyright © 2020 광주문화진흥센터. All rights reserved.</p>
          </div>

          <div className={styles.footerQuick}>
            {quickLinks.map((link) => (
              <Link key={link.name} href={link.href} className={styles.quickBtn}>
                <img 
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