import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "숏폼 영상 마케팅",
  description: "식당 사장님들을 위한 숏폼 영상 마케팅 랜딩 페이지",
  // 구글 및 네이버 사이트 소유권 확인 코드 통합
  verification: {
    google: "-TvPd-k5EFeZfLomw_02KG7rMiObgUwIgVAEvyS37-0",
    other: {
      "naver-site-verification": "bf9f11af4225d3c21be3a54f990583c078477352",
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
        {/* 1. 구글 광고(Google Ads) gtag.js 설치 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-853524546"
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-853524546');
          `}
        </Script>

        {/* 2. 네이버 프리미엄 로그분석 (나중에 메일로 코드가 오면 이 아래에 추가하면 됩니다) */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
