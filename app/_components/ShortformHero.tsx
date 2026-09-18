"use client";

import { useEffect, useRef, useState } from "react";

type ShortformVideo = {
  id: number;
  poster: string;
  videoSrc?: string;
  headline: string;
  subline: string;
  handle: string;
  caption: string;
  likes: string;
  comments: string;
  shares: string;
};

const baseVideos: Omit<ShortformVideo, "id">[] = [
  {
    poster: "/hero-media/media-1.jpg",
    headline: "갓 튀긴 바삭함!",
    subline: "이 집 치킨 미쳤다!",
    handle: "@food_lover",
    caption: "치즈마니아를 모아라",
    likes: "7.4만",
    comments: "5.9천",
    shares: "3.8천",
  },
  {
    poster: "/hero-media/media-2.jpg",
    headline: "치즈 폭포 비주얼",
    subline: "반칙이야...",
    handle: "@eat_now",
    caption: "오늘은 여기가 답",
    likes: "6.4만",
    comments: "4.8천",
    shares: "2.9천",
  },
  {
    poster: "/hero-media/media-3.jpg",
    headline: "오늘 저녁은 이거다!",
    subline: "#얼큰 #국물 #소주각",
    handle: "@mukbang_k",
    caption: "현지인픽 떡볶이",
    likes: "8.7만",
    comments: "6.2천",
    shares: "4.1천",
  },
  {
    poster: "/hero-media/media-4.jpg",
    headline: "꾸덕한 크림 파스타",
    subline: "완벽해...!",
    handle: "@pasta_queen",
    caption: "버거타운 인증 숏",
    likes: "7.3만",
    comments: "5.1천",
    shares: "3.7천",
  },
  {
    poster: "/hero-media/media-5.jpg",
    headline: "수제버거 끝판왕!",
    subline: "육즙 가득",
    handle: "@burger_holic",
    caption: "버거다운 한입",
    likes: "6.9만",
    comments: "4.2천",
    shares: "3.1천",
  },
  {
    poster: "/hero-media/media-6.jpg",
    headline: "카페 분위기 미쳤다",
    subline: "커피도 미쳤다!",
    handle: "@coffee_ins",
    caption: "밀크티의 진심",
    likes: "8.3만",
    comments: "2.1만",
    shares: "7.4천",
  },
];

const shortformVideos: ShortformVideo[] = Array.from({ length: 60 }, (_, index) => {
  const source = baseVideos[index % baseVideos.length];
  const round = Math.floor(index / baseVideos.length);

  return {
    ...source,
    id: index + 1,
    videoSrc: `/videos/shorts/a%20(${index + 1}).mp4`,
    handle: round === 0 ? source.handle : `${source.handle}_${round + 1}`,
  };
});

const CONSULTATION_HREF = "#consultation";
const PORTFOLIO_HREF = "#portfolio";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function MarkerUnderline() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute -bottom-1 left-1/2 h-3 w-[112%] -translate-x-1/2 text-[#9CC2FF]"
      viewBox="0 0 220 20"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M4 13C40 6 80 15 112 9C150 3 180 12 216 7"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

function BrushUnderline() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute -bottom-2 left-1/2 h-3.5 w-[105%] -translate-x-1/2 text-[#7FAAFF]"
      viewBox="0 0 240 22"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M6 14C48 5 96 18 132 10C168 3 200 16 234 8"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

function PriceMarker() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute -bottom-1 left-1/2 h-4 w-[118%] -translate-x-1/2"
      viewBox="0 0 200 22"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M4 15C36 6 70 18 100 12C132 6 164 17 196 9"
        stroke="#FFE236"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeroCurves() {
  return (
    <svg
      aria-hidden
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1200 800"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        d="M-40 620C220 520 380 700 620 560C820 450 980 560 1240 380"
        stroke="#9CB8FF"
        strokeWidth="1.6"
        opacity="0.28"
      />
      <path
        d="M1240 140C980 260 860 90 640 220C440 340 260 200 -40 300"
        stroke="#C4D5FF"
        strokeWidth="1.4"
        opacity="0.24"
      />
      <g className="hidden md:block">
        <path
          d="M-40 200C160 120 300 260 520 180C740 100 880 220 1240 120"
          stroke="#7FAAFF"
          strokeWidth="1.2"
          opacity="0.2"
        />
      </g>
    </svg>
  );
}

function HeroBackgroundDecoration() {
  return (
    <div aria-hidden="true" className="hero-bg">
      <div className="hero-blob hero-blob--1" />
      <div className="hero-blob hero-blob--2" />
      <div className="hero-blob hero-blob--3" />
      <div className="hero-blob hero-blob--4" />
      <div className="hero-blob hero-blob--5" />
      <div className="hero-blob hero-blob--6" />
      <div className="hero-blob hero-blob--7" />

      <HeroCurves />

      <div className="hero-dot-pattern hero-dot-pattern--1" />
      <div className="hero-dot-pattern hero-dot-pattern--2" />
      <div className="hero-dot-pattern hero-dot-pattern--3" />
      <div className="hero-dot-pattern hero-dot-pattern--4" />

      <div className="hero-play-decoration hero-play-decoration--1" />
      <div className="hero-play-decoration hero-play-decoration--2" />
      <div className="hero-play-decoration hero-play-decoration--3" />

      <div className="hero-handwriting hero-handwriting--1 text-[clamp(1.05rem,1.6vw,1.5rem)]">
        More Customers
      </div>
      <div className="hero-handwriting hero-handwriting--2 text-[clamp(1.05rem,1.6vw,1.5rem)]">
        Good Content
        <br />
        Bigger Business
      </div>
      <div className="hero-handwriting hero-handwriting--3 text-[clamp(1.05rem,1.6vw,1.5rem)]">
        Short Form
        <br />
        Big Impact
      </div>
      <div className="hero-handwriting hero-handwriting--4 text-[clamp(1.05rem,1.6vw,1.5rem)]">
        Make People Stop
      </div>
    </div>
  );
}

function PortfolioMarquee() {
  const displayVideos = shortformVideos.slice(0, 12);
  const marqueeVideos = [...displayVideos, ...displayVideos];

  return (
    <div className="w-full max-w-[100vw] overflow-hidden py-4">
      <div className="animate-marquee gap-5 pr-5 sm:gap-7 sm:pr-7">
        {marqueeVideos.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="group relative shrink-0 overflow-hidden rounded-[20px] bg-black/5 shadow-sm transition-all duration-300 hover:scale-[1.03] sm:rounded-[28px]"
            style={{
              width: "clamp(240px, 60vw, 300px)",
              aspectRatio: "9 / 16",
              cursor: "pointer",
            }}
          >
            <video
              src={item.videoSrc}
              poster={item.poster}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ShortformHero() {
  const scrollWrapperRef = useRef<HTMLElement | null>(null);
  const stepMaskRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [stepMask, setStepMask] = useState(0);
  const [jsReady, setJsReady] = useState(false);

  useEffect(() => {
    setJsReady(true);
  }, []);

  useEffect(() => {
    const compute = () => {
      const el = scrollWrapperRef.current;

      if (!el) {
        return;
      }

      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progress = total > 0 ? clamp(-rect.top / total, 0, 1) : rect.top <= 0 ? 1 : 0;

      let nextMask = 0;

      if (progress > 0.04) nextMask = 1;
      if (progress > 0.36) nextMask = 2;
      if (progress > 0.64) nextMask = 3;
      if (progress > 0.84) nextMask = 4;

      if (nextMask !== stepMaskRef.current) {
        stepMaskRef.current = nextMask;
        setStepMask(nextMask);
      }
    };

    let ticking = false;

    const onScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      rafRef.current = window.requestAnimationFrame(() => {
        compute();
        ticking = false;
      });
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const step1Visible = stepMask >= 1;
  const step2Visible = stepMask >= 2;
  const step3Visible = stepMask >= 3;
  const ctaVisible = stepMask >= 4;

  return (
    <>
      <section ref={scrollWrapperRef} id="top" className="hero-scroll">
        <div className="hero-sticky">
          <HeroBackgroundDecoration />

          <div
            className={`hero-content mx-auto flex w-full max-w-[1180px] flex-col items-center px-6 text-center sm:px-8 ${
              jsReady ? "js-enabled" : ""
            }`}
          >
            <div className={`hero-step ${step1Visible ? "is-visible" : ""}`}>
              <h1 className="hero-headline break-keep">
                <span className="hero-step-line" style={{ transitionDelay: "0ms" }}>
                  이제 고객은
                </span>
                <span className="hero-step-line hero-headline-accent" style={{ transitionDelay: "110ms" }}>
                  검색보다
                  <MarkerUnderline />
                </span>
                <span className="hero-step-line" style={{ transitionDelay: "220ms" }}>
                  영상을 봅니다
                </span>
              </h1>
            </div>

            <div className={`hero-step mt-3 sm:mt-4 ${step2Visible ? "is-visible" : ""}`}>
              <p className="hero-handwrite-main relative inline-block break-keep">
                숏폼으로 터집니다
                <BrushUnderline />
              </p>
            </div>

            <div className={`hero-step mt-7 flex flex-col gap-1.5 sm:mt-9 ${step3Visible ? "is-visible" : ""}`}>
              <p className="hero-price-line">
                촬영부터 <span className="hero-number">32개 계정</span>,{" "}
                <span className="hero-number">240만 팔로워</span>
              </p>
              <p className="hero-price-line">
                1,000만원 넘는 서비스를{" "}
                <span className="hero-number-price">
                  350만원
                  <PriceMarker />
                </span>
                에 해드려요
              </p>
            </div>

            <div
              className={`hero-step hero-cta-group mt-8 flex w-full flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4 ${
                ctaVisible ? "is-visible" : ""
              }`}
            >
              <a href={CONSULTATION_HREF} className="hero-cta-primary w-full text-center sm:w-auto">
                지금 바로 상담하기
              </a>
              <a href={PORTFOLIO_HREF} className="hero-cta-secondary w-full text-center sm:w-auto">
                포트폴리오 보기
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="relative isolate mb-0 w-full overflow-hidden bg-white pb-24 pt-20 text-black sm:pb-32 sm:pt-32">
        <PortfolioMarquee />
      </section>
    </>
  );
}
