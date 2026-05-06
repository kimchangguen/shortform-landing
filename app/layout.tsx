import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "숏폼 영상 마케팅",
  description: "식당 사장님들을 위한 숏폼 영상 마케팅 랜딩 페이지",
  verification: {
    // 구글 서치 콘솔 코드
    google: "-TvPd-k5EFeZfLomw_02KG7rMiObgUwIgVAEvyS37-0",
    // 네이버 서치어드바이저 코드
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
      <body>{children}</body>
    </html>
  );
}
