import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "숏폼 영상 마케팅",
  description: "식당 사장님들을 위한 숏폼 영상 마케팅 랜딩 페이지",
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
