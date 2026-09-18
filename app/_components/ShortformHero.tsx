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

export function ShortformHero() {
  return (
    <>
      <section id="top" className="hero">
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

      <section id="portfolio" className="relative isolate mb-0 w-full overflow-hidden site-section pb-24 pt-20 text-black sm:pb-32 sm:pt-32">
        <PortfolioMarquee videos={shortformVideos} />
      </section>
    </>
  );
}
