import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";

export const metadata: Metadata = {
  title: "트렌드 링크 Trend Link | 골목상권에 트렌드를 연결합니다",
  description:
    "전문 셰프의 검증된 레시피를 소상공인에게 연결하는 AI 기반 외식 콘텐츠 플랫폼. 골목상권의 메뉴 경쟁력을 높이고, 트렌드 소비자와 동네 맛집을 잇습니다.",
  keywords: [
    "트렌드 링크",
    "Trend Link",
    "소상공인",
    "골목상권",
    "외식업",
    "레시피 플랫폼",
    "AI 트렌드 분석",
    "메뉴 컨설팅",
    "셰프 레시피",
    "재도전성공패키지",
  ],
  openGraph: {
    title: "트렌드 링크 Trend Link | 골목상권에 트렌드를 연결합니다",
    description:
      "전문 셰프의 검증된 레시피와 AI 트렌드 분석으로 소상공인의 메뉴 경쟁력을 높이는 플랫폼",
    type: "website",
    locale: "ko_KR",
    siteName: "트렌드 링크",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
