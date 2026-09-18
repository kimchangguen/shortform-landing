import { PortfolioMarquee } from "./PortfolioMarquee";
import shortformVideos from "../_data/shortform-videos.json";

const CONSULTATION_HREF = "#consultation";
const PORTFOLIO_HREF = "#portfolio";

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

function HeroBackgroundArtwork() {
  return (
    <svg
      className="hero-background-artwork"
      viewBox="0 0 1672 941"
      fill="none"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="hero-ribbon-left" x1="0" y1="370" x2="0" y2="770" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BCD8FF" stopOpacity="0.7" />
          <stop offset="0.48" stopColor="#DFC9FA" stopOpacity="0.55" />
          <stop offset="1" stopColor="#F7E6FA" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hero-ribbon-top" x1="1220" y1="70" x2="1220" y2="475" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CDE3FF" stopOpacity="0.6" />
          <stop offset="0.4" stopColor="#E9D9FC" stopOpacity="0.4" />
          <stop offset="0.75" stopColor="#DEEDFF" stopOpacity="0.22" />
          <stop offset="1" stopColor="#F1F7FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hero-ribbon-bottom" x1="1360" y1="540" x2="1340" y2="945" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DBD1FC" stopOpacity="0.6" />
          <stop offset="0.52" stopColor="#DBEBFF" stopOpacity="0.36" />
          <stop offset="1" stopColor="#F9FCFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hero-curve-left" x1="0" y1="350" x2="580" y2="740" gradientUnits="userSpaceOnUse">
          <stop stopColor="#78A5FF" stopOpacity="0.85" />
          <stop offset="0.6" stopColor="#B9BBFF" stopOpacity="0.55" />
          <stop offset="1" stopColor="#DCEAFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hero-curve-right" x1="1660" y1="190" x2="1100" y2="820" gradientUnits="userSpaceOnUse">
          <stop stopColor="#78A5FF" stopOpacity="0.85" />
          <stop offset="0.5" stopColor="#C7DEFF" stopOpacity="0.3" />
          <stop offset="0.8" stopColor="#8DAFFF" stopOpacity="0.7" />
          <stop offset="1" stopColor="#DCEAFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g className="hero-organic-shapes">
        <path d="M-100 334C52 397 218 478 342 590C415 656 458 741 486 784C316 684 144 700-100 779Z" fill="url(#hero-ribbon-left)" />
        <path d="M-90 479C20 600 126 554 234 514C145 558 57 669-90 650Z" fill="url(#hero-ribbon-left)" opacity="0.45" />
        <path d="M1740-62C1546-22 1377 84 1259 216C1167 319 1132 398 1128 473C1314 435 1471 388 1740 411Z" fill="url(#hero-ribbon-top)" />
        <path d="M1004 737C1099 609 1201 504 1333 566C1465 628 1560 750 1740 805L1740 1000L1040 1000Z" fill="url(#hero-ribbon-bottom)" />
      </g>
      <g className="hero-curved-lines" strokeWidth="1.6">
        <path d="M-30 321C83 362 129 544 241 637C350 728 485 747 587 716" stroke="url(#hero-curve-left)" vectorEffect="non-scaling-stroke" />
        <path d="M-45 645C89 613 144 548 233 507" stroke="#D7DEFF" strokeOpacity="0.5" vectorEffect="non-scaling-stroke" />
        <path d="M1710 112C1579 266 1551 418 1491 557C1428 708 1342 836 1201 820C1117 811 1078 764 1047 717" stroke="url(#hero-curve-right)" vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  );
}

function HandwritingSwoosh() {
  return (
    <svg className="hero-handwriting-swoosh" viewBox="0 0 280 48" fill="none" preserveAspectRatio="none">
      <path d="M5 43C77 11 169 6 272 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function HeroBackgroundDecoration() {
  return (
    <div aria-hidden="true" className="hero-bg">
      <HeroBackgroundArtwork />

      <div className="hero-orb hero-orb--1" />
      <div className="hero-orb hero-orb--2" />
      <div className="hero-orb hero-orb--3" />
      <div className="hero-orb hero-orb--4" />

      <div className="hero-dot-pattern hero-dot-pattern--1" />
      <div className="hero-dot-pattern hero-dot-pattern--2" />

      <div className="hero-play-decoration hero-play-decoration--1">
        <svg viewBox="0 0 48 48" fill="none"><path d="M15 9Q11 7 11 12V37Q11 42 16 39L37 27Q42 24 37 21Z" fill="white" /></svg>
      </div>
      <div className="hero-play-decoration hero-play-decoration--2">
        <svg viewBox="0 0 48 48" fill="none"><path d="M15 9Q11 7 11 12V37Q11 42 16 39L37 27Q42 24 37 21Z" fill="white" /></svg>
      </div>

      <div className="hero-editorial hero-editorial--left">
        <span>ONE<br />SHOOT</span>
        <span>MORE<br />STORIES</span>
      </div>
      <div className="hero-editorial hero-editorial--right">
        VIDEO<br />CHANGES<br />EVERYTHING
      </div>

      <div className="hero-handwriting hero-handwriting--1">
        <span>More</span>
        <span>Customers</span>
        <HandwritingSwoosh />
      </div>
      <div className="hero-handwriting hero-handwriting--2">
        <span>Good</span>
        <span>Content</span>
        <span>Bigger Business</span>
      </div>
      <div className="hero-handwriting hero-handwriting--3">
        <span>Short Form</span>
        <span>Big Impact</span>
        <HandwritingSwoosh />
      </div>
      <div className="hero-handwriting hero-handwriting--4">
        <span>좋은 브랜드는</span>
        <span>영상으로 기억됩니다.</span>
        <HandwritingSwoosh />
      </div>
    </div>
  );
}

export function ShortformHero() {
  return (
    <>
      <section id="top" className="hero">
        <HeroBackgroundDecoration />

        <div className="hero-content mx-auto flex w-full max-w-[1180px] flex-col items-center px-6 text-center sm:px-8">
          <h1 className="hero-headline break-keep">
            <span className="hero-reveal hero-headline-line" style={{ animationDelay: "150ms" }}>
              이제 고객은
            </span>
            <span className="hero-reveal hero-headline-accent" style={{ animationDelay: "350ms" }}>
              검색보다
              <MarkerUnderline />
            </span>
            <span className="hero-reveal hero-headline-line" style={{ animationDelay: "550ms" }}>
              영상을 봅니다
            </span>
          </h1>

          <p
            className="hero-reveal hero-handwrite-main relative mt-3 inline-block break-keep sm:mt-4"
            style={{ animationDelay: "850ms" }}
          >
            숏폼으로 터집니다
            <BrushUnderline />
          </p>

          <div className="mt-7 flex w-full flex-col gap-1.5 sm:mt-9">
            <p className="hero-reveal hero-price-line" style={{ animationDelay: "1150ms" }}>
              촬영부터 <span className="hero-number">32개</span> 계정,{" "}
              <span className="hero-number">240만</span> 팔로워
            </p>
            <p className="hero-reveal hero-price-line" style={{ animationDelay: "1450ms" }}>
              1,000만원 넘는 서비스를{" "}
              <span className="inline-block">
                <span className="hero-number-price">
                  350만원
                  <PriceMarker />
                </span>
                에 해드려요
              </span>
            </p>
          </div>

          <div
            className="hero-reveal hero-cta-group mt-8 flex w-full flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4"
            style={{ animationDelay: "1750ms" }}
          >
            <a href={CONSULTATION_HREF} className="hero-cta-primary w-full text-center sm:w-auto">
              지금 바로 상담하기
            </a>
            <a href={PORTFOLIO_HREF} className="hero-cta-secondary w-full text-center sm:w-auto">
              포트폴리오 보기
            </a>
          </div>
        </div>
      </section>

      <section id="portfolio" className="relative isolate mb-0 w-full overflow-hidden bg-white pb-24 pt-20 text-black sm:pb-32 sm:pt-32">
        <PortfolioMarquee videos={shortformVideos} />
      </section>
    </>
  );
}
