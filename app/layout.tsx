import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "숏폼 영상 마케팅",
  description: "식당 사장님들을 위한 숏폼 영상 마케팅 랜딩 페이지",
  // 구글 서치 콘솔 확인용 코드 추가
  verification: {
    google: "-TvPd-k5EFeZfLomw_02KG7rMiObgUwIgVAEvyS37-0",
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
