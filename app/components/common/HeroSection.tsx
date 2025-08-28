import React from 'react';
import Link from 'next/link';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  title: string;
  description?: string;
  breadcrumbs?: {
    label: string;
    href?: string;
  }[];
  backgroundGradient?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  breadcrumbs,
  backgroundGradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
}) => {
  return (
    <div className={styles.heroSection} style={{ background: backgroundGradient }}>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{title}</h1>
          {description && (
            <p className={styles.heroDescription}>{description}</p>
          )}
          {breadcrumbs && (
            <div className={styles.heroBreadcrumb}>
              {breadcrumbs.map((item, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <span className={styles.separator}>/</span>}
                  {item.href ? (
                    <Link href={item.href}>{item.label}</Link>
                  ) : (
                    <span className={styles.current}>{item.label}</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;