import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import FloatingNav from "./components/common/FloatingNav";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "광주문화진흥센터 | 문화로 행복한 광주를 만드는 곳",
  description: "광주문화진흥센터는 다양한 문화예술 프로그램과 인문학 강좌, 원데이클래스, 공연 등을 통해 시민의 문화 향유 기회를 제공합니다. 문화예술 교육, 전시, 공연 정보를 확인하세요.",
  keywords: "광주문화진흥센터, 문화예술, 광주, 문화정책, 문화사업, 인문학강좌, 원데이클래스, 문화공연, 전시회, 시민문화, 문화교육, 광주시, 문화센터, One&On, 원앤온",
  authors: [{ name: "광주문화진흥센터" }],
  creator: "광주문화진흥센터",
  publisher: "광주문화진흥센터",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gjcc.or.kr'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: 'https://gjcc.or.kr/favicon.png', type: 'image/png', sizes: '32x32' }
    ],
    shortcut: [
      { url: '/favicon.png', type: 'image/png' },
      { url: 'https://gjcc.or.kr/favicon.png', type: 'image/png' }
    ],
    apple: [
      { url: '/favicon.png', type: 'image/png', sizes: '180x180' },
      { url: 'https://gjcc.or.kr/favicon.png', type: 'image/png', sizes: '180x180' }
    ],
  },
  openGraph: {
    title: "광주문화진흥센터 | 문화로 행복한 광주를 만드는 곳",
    description: "광주문화진흥센터는 다양한 문화예술 프로그램과 인문학 강좌, 원데이클래스, 공연 등을 통해 시민의 문화 향유 기회를 제공합니다.",
    url: "https://gjcc.or.kr",
    siteName: "광주문화진흥센터",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: 'https://gjcc.or.kr/og-image.png',
        width: 1200,
        height: 630,
        alt: '광주문화진흥센터 - 문화로 행복한 광주를 만드는 곳',
      },
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '광주문화진흥센터 - 문화로 행복한 광주를 만드는 곳',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "광주문화진흥센터 | 문화로 행복한 광주를 만드는 곳",
    description: "광주문화진흥센터는 다양한 문화예술 프로그램과 인문학 강좌, 원데이클래스, 공연 등을 통해 시민의 문화 향유 기회를 제공합니다.",
    images: ['https://gjcc.or.kr/og-image.png'],
    creator: '@gjcc',
  },
  verification: {
    google: 'google-site-verification-code',
    other: {
      'naver-site-verification': '0576598d7a29e0bdb55d0fdd06a5be21e2da72b3',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e3a5f" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="icon" href="https://gjcc.or.kr/favicon.png" type="image/png" />
        
        {/* Open Graph Image */}
        <meta property="og:image" content="https://gjcc.or.kr/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="광주문화진흥센터" />
        
        {/* Additional SEO */}
        <link rel="canonical" href="https://gjcc.or.kr" />
        <meta name="author" content="광주문화진흥센터" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="naver-site-verification" content="0576598d7a29e0bdb55d0fdd06a5be21e2da72b3" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CulturalCenter",
              "name": "광주문화진흥센터",
              "alternateName": "GJCC",
              "url": "https://gjcc.or.kr",
              "logo": "https://gjcc.or.kr/logo/logo.png",
              "image": "https://gjcc.or.kr/og-image.png",
              "description": "광주문화진흥센터는 다양한 문화예술 프로그램과 인문학 강좌, 원데이클래스, 공연 등을 통해 시민의 문화 향유 기회를 제공합니다.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "광주광역시",
                "addressCountry": "KR"
              },
              "telephone": "070-462-7934",
              "email": "program@gjcc.or.kr",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/gjcc",
                "https://www.instagram.com/gjcc",
                "https://blog.naver.com/gjcc"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "문화프로그램",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "인문학 강좌",
                      "description": "철학, 역사, 문학을 통해 인간과 사회를 이해하는 프로그램"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "원데이클래스",
                      "description": "다양한 주제의 일일 체험 프로그램"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "문화공연",
                      "description": "음악, 연극, 무용 등 다양한 공연 프로그램"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingNav />
      </body>
    </html>
  );
}
