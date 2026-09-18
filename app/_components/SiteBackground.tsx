function BackgroundArtwork() {
  return (
    <svg
      className="site-bg-artwork"
      viewBox="0 0 1672 941"
      fill="none"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="site-bg-ribbon-left" x1="0" y1="370" x2="0" y2="770" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BCD8FF" stopOpacity="0.7" />
          <stop offset="0.48" stopColor="#DFC9FA" stopOpacity="0.55" />
          <stop offset="1" stopColor="#F7E6FA" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="site-bg-ribbon-top" x1="1220" y1="70" x2="1220" y2="475" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CDE3FF" stopOpacity="0.6" />
          <stop offset="0.4" stopColor="#E9D9FC" stopOpacity="0.4" />
          <stop offset="0.75" stopColor="#DEEDFF" stopOpacity="0.22" />
          <stop offset="1" stopColor="#F1F7FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="site-bg-ribbon-bottom" x1="1360" y1="540" x2="1340" y2="945" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DBD1FC" stopOpacity="0.6" />
          <stop offset="0.52" stopColor="#DBEBFF" stopOpacity="0.36" />
          <stop offset="1" stopColor="#F9FCFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="site-bg-curve-left" x1="0" y1="350" x2="580" y2="740" gradientUnits="userSpaceOnUse">
          <stop stopColor="#78A5FF" stopOpacity="0.85" />
          <stop offset="0.6" stopColor="#B9BBFF" stopOpacity="0.55" />
          <stop offset="1" stopColor="#DCEAFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="site-bg-curve-right" x1="1660" y1="190" x2="1100" y2="820" gradientUnits="userSpaceOnUse">
          <stop stopColor="#78A5FF" stopOpacity="0.85" />
          <stop offset="0.5" stopColor="#C7DEFF" stopOpacity="0.3" />
          <stop offset="0.8" stopColor="#8DAFFF" stopOpacity="0.7" />
          <stop offset="1" stopColor="#DCEAFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g className="site-bg-organic-shapes">
        <path d="M-100 334C52 397 218 478 342 590C415 656 458 741 486 784C316 684 144 700-100 779Z" fill="url(#site-bg-ribbon-left)" />
        <path d="M-90 479C20 600 126 554 234 514C145 558 57 669-90 650Z" fill="url(#site-bg-ribbon-left)" opacity="0.45" />
        <path d="M1740-62C1546-22 1377 84 1259 216C1167 319 1132 398 1128 473C1314 435 1471 388 1740 411Z" fill="url(#site-bg-ribbon-top)" />
        <path d="M1004 737C1099 609 1201 504 1333 566C1465 628 1560 750 1740 805L1740 1000L1040 1000Z" fill="url(#site-bg-ribbon-bottom)" />
      </g>
      <g className="site-bg-curved-lines" strokeWidth="1.6">
        <path d="M-30 321C83 362 129 544 241 637C350 728 485 747 587 716" stroke="url(#site-bg-curve-left)" vectorEffect="non-scaling-stroke" />
        <path d="M-45 645C89 613 144 548 233 507" stroke="#D7DEFF" strokeOpacity="0.5" vectorEffect="non-scaling-stroke" />
        <path d="M1710 112C1579 266 1551 418 1491 557C1428 708 1342 836 1201 820C1117 811 1078 764 1047 717" stroke="url(#site-bg-curve-right)" vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  );
}

function HandwritingSwoosh() {
  return (
    <svg className="site-bg-handwriting-swoosh" viewBox="0 0 280 48" fill="none" preserveAspectRatio="none">
      <path d="M5 43C77 11 169 6 272 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SiteBackground() {
  return (
    <div aria-hidden="true" className="site-background">
      <div className="site-background-artboard">
        <BackgroundArtwork />

        <div className="site-bg-orb site-bg-orb--1" />
        <div className="site-bg-orb site-bg-orb--2" />
        <div className="site-bg-orb site-bg-orb--3" />
        <div className="site-bg-orb site-bg-orb--4" />

        <div className="site-bg-dot-pattern site-bg-dot-pattern--1" />
        <div className="site-bg-dot-pattern site-bg-dot-pattern--2" />

        <div className="site-bg-play-decoration site-bg-play-decoration--1">
          <svg viewBox="0 0 48 48" fill="none"><path d="M15 9Q11 7 11 12V37Q11 42 16 39L37 27Q42 24 37 21Z" fill="white" /></svg>
        </div>
        <div className="site-bg-play-decoration site-bg-play-decoration--2">
          <svg viewBox="0 0 48 48" fill="none"><path d="M15 9Q11 7 11 12V37Q11 42 16 39L37 27Q42 24 37 21Z" fill="white" /></svg>
        </div>

        <div className="site-bg-editorial site-bg-editorial--left">
          <span>ONE<br />SHOOT</span>
          <span>MORE<br />STORIES</span>
        </div>
        <div className="site-bg-editorial site-bg-editorial--right">
          VIDEO<br />CHANGES<br />EVERYTHING
        </div>

        <div className="site-bg-handwriting site-bg-handwriting--1">
          <span>More</span>
          <span>Customers</span>
          <HandwritingSwoosh />
        </div>
        <div className="site-bg-handwriting site-bg-handwriting--2">
          <span>Good</span>
          <span>Content</span>
          <span>Bigger Business</span>
        </div>
        <div className="site-bg-handwriting site-bg-handwriting--3">
          <span>Short Form</span>
          <span>Big Impact</span>
          <HandwritingSwoosh />
        </div>
        <div className="site-bg-handwriting site-bg-handwriting--4">
          <span>좋은 브랜드는</span>
          <span>영상으로 기억됩니다.</span>
          <HandwritingSwoosh />
        </div>
      </div>
    </div>
  );
}
