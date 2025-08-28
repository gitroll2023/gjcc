'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Header.module.css';

interface MenuItem {
  title: string;
  href: string;
  subItems?: {
    title: string;
    href: string;
    subSubItems?: {
      title: string;
      href: string;
    }[];
  }[];
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      title: '센터소개',
      href: '/about',
      subItems: [
        { title: '인사말', href: '/about/greeting' },
        { title: '오시는길', href: '/about/location' },
      ],
    },
    {
      title: '프로그램',
      href: '/program',
      subItems: [
        { title: '인문학', href: '/program/humanities' },
        { title: '원데이클래스', href: '/program/oneday' },
        { title: '문화공연', href: '/program/performance' },
      ],
    },
    {
      title: '팟캐스트',
      href: '/podcast',
      subItems: [
        { title: '최신 에피소드', href: '/podcast/EP01' },
        { title: '지난 방송', href: '/podcast/archive' },
      ],
    },
    {
      title: '알림마당',
      href: '/notice',
      subItems: [
        { title: '공지사항', href: '/notice/list' },
        { title: '행사안내', href: '/notice/events' },
      ],
    },
    {
      title: '문의하기',
      href: '/contact',
      subItems: [
        { title: '연락처', href: '/contact/info' },
        { title: 'FAQ', href: '/contact/faq' },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <>
      {/* Top Bar */}
      <div className={`${styles.topBar} ${isScrolled ? styles.hidden : ''}`}>
        <div className={styles.topInner}>
          <ul className={styles.topLinks}>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/sitemap">SITEMAP</Link></li>
          </ul>
        </div>
      </div>

      {/* Main Header */}
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerWrapper}>
          <div className={styles.headerInner}>
            {/* Logo */}
            <div className={styles.logo}>
              <Link href="/">
                <img 
                  src="/logo/logo.png" 
                  alt="광주문화진흥센터" 
                  width={260} 
                  height={60}
                />
              </Link>
            </div>

            {/* Navigation */}
            <nav className={styles.nav}>
              <ul className={styles.navList}>
                {menuItems.map((item) => (
                  <li
                    key={item.title}
                    className={styles.navItem}
                    onMouseEnter={() => setActiveMenu(item.title)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <Link href={item.href} className={styles.navLink}>
                      {item.title}
                    </Link>
                    
                    {/* Individual dropdown for each menu */}
                    {item.subItems && (
                      <div className={`${styles.dropdown} ${activeMenu === item.title ? styles.show : ''}`}>
                        <ul className={styles.dropdownList}>
                          {item.subItems.map((subItem) => (
                            <li key={subItem.title} className={styles.dropdownItem}>
                              <Link href={subItem.href} className={styles.dropdownLink}>
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Controls */}
            <div className={styles.controls}>
              {/* Mobile Menu Button */}
              <button
                className={styles.mobileMenuBtn}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="메뉴"
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

      </header>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <button
          className={styles.mobileCloseBtn}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <FaTimes />
        </button>
        <nav className={styles.mobileNav}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.title}>
                <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                  {item.title}
                </Link>
                {item.subItems && (
                  <ul>
                    {item.subItems.map((subItem) => (
                      <li key={subItem.title}>
                        <Link href={subItem.href} onClick={() => setIsMobileMenuOpen(false)}>
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;