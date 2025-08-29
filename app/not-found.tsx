'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './not-found.module.css';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.title}>페이지를 찾을 수 없습니다</h1>
        <p className={styles.description}>
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        
        <div className={styles.actions}>
          <Link href="/" className={styles.homeButton}>
            홈으로 가기
          </Link>
          <button 
            onClick={() => router.back()} 
            className={styles.backButton}
          >
            이전 페이지로
          </button>
        </div>

        <div className={styles.suggestions}>
          <h3>다음 페이지를 찾고 계신가요?</h3>
          <div className={styles.quickLinks}>
            <Link href="/program" className={styles.quickLink}>
              <span className={styles.icon}>▶</span>
              <span>프로그램</span>
            </Link>
            <Link href="/notice/list" className={styles.quickLink}>
              <span className={styles.icon}>▶</span>
              <span>공지사항</span>
            </Link>
            <Link href="/contact" className={styles.quickLink}>
              <span className={styles.icon}>▶</span>
              <span>문의하기</span>
            </Link>
            <Link href="/about" className={styles.quickLink}>
              <span className={styles.icon}>▶</span>
              <span>센터소개</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}