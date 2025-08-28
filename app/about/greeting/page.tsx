'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import HeroSection from '@/app/components/common/HeroSection';
import styles from './page.module.css';

export default function GreetingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const breadcrumbs = [
    { label: '홈', href: '/' },
    { label: '센터소개', href: '/about' },
    { label: '인사말' }
  ];

  if (!mounted) {
    return (
      <div className={styles.container}>
        <HeroSection 
          title="인사말"
          description="광주문화진흥센터장의 인사말씀"
          breadcrumbs={breadcrumbs}
          backgroundGradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <HeroSection 
        title="인사말"
        description="광주문화진흥센터장의 인사말씀"
        breadcrumbs={breadcrumbs}
        backgroundGradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      />
      
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.greetingSection}>
            <div className={styles.directorInfo}>
              <div className={styles.directorImage}>
                <Image 
                  src="/leader.jpg"
                  alt="김정훈 센터장"
                  width={250}
                  height={300}
                  className={styles.leaderImage}
                />
              </div>
              <div className={styles.directorProfile}>
                <h2 className={styles.directorName}>광주문화진흥센터장</h2>
                <p className={styles.directorTitle}>김 정 훈</p>
              </div>
            </div>
            
            <div className={styles.greetingContent}>
              <div className={styles.greetingText}>
                <p className={styles.greeting}>
                  존경하는 시민 여러분, 광주문화진흥센터를 찾아주신 모든 분들께 깊은 감사의 말씀을 드립니다.
                </p>
                
                <p>
                  예향(藝鄕) 광주는 오랜 세월 동안 문화와 예술의 터전으로서 대한민국 문화 발전의 
                  중추적 역할을 담당해 왔습니다. 5.18 민주화운동의 숭고한 정신과 더불어, 
                  비엔날레의 도시로서 세계와 소통하며, 아시아 문화중심도시로서의 위상을 
                  더욱 공고히 다져가고 있습니다.
                </p>
                
                <p>
                  저희 광주문화진흥센터는 이러한 광주의 문화적 자산과 전통을 계승하면서도, 
                  4차 산업혁명 시대의 급변하는 환경 속에서 시민 여러분의 삶에 실질적인 
                  문화적 가치를 더하는 혁신적 플랫폼이 되고자 합니다. 
                  전통과 현대, 지역과 세계, 예술과 일상이 조화롭게 어우러지는 
                  문화 생태계를 조성하는 것이 우리의 사명입니다.
                </p>
                
                <p>
                  특별히 저희는 세대를 아우르는 인문학 프로그램을 통해 삶의 지혜를 나누고, 
                  청년들에게는 창의적 도전의 기회를, 어르신들께는 평생교육의 장을 제공하고자 합니다. 
                  또한 지역 예술가들의 창작 활동을 적극 지원하여, 광주가 명실상부한 
                  문화예술의 메카로 자리매김할 수 있도록 최선을 다하겠습니다.
                </p>
                
                <p>
                  문화는 단순한 여가나 오락이 아닌, 우리 삶을 풍요롭게 하고 
                  공동체의 결속을 다지는 중요한 매개체입니다. 경제적 가치만이 중시되는 
                  이 시대에, 문화가 지닌 치유와 소통, 성찰의 힘은 더욱 절실히 요구됩니다.
                </p>
                
                <p>
                  앞으로도 광주문화진흥센터는 시민 여러분과 함께 호흡하며, 
                  문화민주주의를 실현하는 열린 공간이 되도록 노력하겠습니다. 
                  여러분의 따뜻한 관심과 적극적인 참여가 우리 센터의 가장 큰 힘이 됩니다.
                </p>
                
                <p className={styles.closing}>
                  감사합니다.
                </p>
              </div>
              
              <div className={styles.signature}>
                <p className={styles.signatureText}>광주문화진흥센터장</p>
                <p className={styles.signatureName}>김 정 훈</p>
              </div>
            </div>
          </div>
          
          <div className={styles.visionSection}>
            <h3 className={styles.visionTitle}>우리의 비전</h3>
            <div className={styles.visionGrid}>
              <div className={styles.visionItem}>
                <h4>문화 창조</h4>
                <p>시민 모두가{'\n'}문화의 창조자가 되는 공간</p>
              </div>
              <div className={styles.visionItem}>
                <h4>소통과 공유</h4>
                <p>다양한 세대와 계층이{'\n'}소통하는 문화공동체</p>
              </div>
              <div className={styles.visionItem}>
                <h4>지역 발전</h4>
                <p>광주 지역문화 발전의{'\n'}중심 역할</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}