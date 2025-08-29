import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import FloatingNav from "./components/common/FloatingNav";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "광주문화진흥센터",
  description: "문화로 행복한 광주를 만드는 광주문화진흥센터입니다.",
  keywords: "광주문화진흥센터, 문화예술, 광주, 문화정책, 문화사업",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: "광주문화진흥센터",
    description: "문화로 행복한 광주를 만드는 광주문화진흥센터입니다.",
    url: "https://gjcc.or.kr",
    siteName: "광주문화진흥센터",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingNav />
      </body>
    </html>
  );
}
