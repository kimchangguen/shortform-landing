const orbitCards = [
  {
    className: "solution-card-top",
    title: "네이버 플레이스",
    description: "검색 노출 최적화",
    logo: "/solution-logos/logo-naver.svg",
  },
  {
    className: "solution-card-left",
    title: "SNS",
    description: "브랜드 인지도 상승",
    logo: "/solution-logos/logo-instagram.svg",
  },
  {
    className: "solution-card-right",
    title: "숏폼",
    description: "알고리즘 기반 확산",
    logo: "/solution-logos/logo-shorts.svg",
  },
  {
    className: "solution-card-bottom",
    title: "인플루언서",
    description: "신뢰 기반 파급 효과",
    logo: "/solution-logos/logo-influencer.svg",
  },
];

function CircularArrows() {
  return (
    <svg
      aria-hidden
      className="solution-orbit-arrows"
      viewBox="0 0 760 760"
      fill="none"
    >
      <defs>
        <marker
          id="orbitArrow"
          markerWidth="12"
          markerHeight="12"
          refX="10"
          refY="6"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M2 2L10 6L2 10V2Z" fill="#006f6c" />
        </marker>
      </defs>
      <path
        d="M279 108C190 139 124 213 102 304"
        stroke="#006f6c"
        strokeWidth="7"
        strokeLinecap="round"
        markerEnd="url(#orbitArrow)"
      />
      <path
        d="M103 458C127 548 191 619 279 652"
        stroke="#006f6c"
        strokeWidth="7"
        strokeLinecap="round"
        markerEnd="url(#orbitArrow)"
      />
      <path
        d="M481 652C569 619 633 548 657 458"
        stroke="#006f6c"
        strokeWidth="7"
        strokeLinecap="round"
        markerEnd="url(#orbitArrow)"
      />
      <path
        d="M658 304C636 213 570 139 481 108"
        stroke="#006f6c"
        strokeWidth="7"
        strokeLinecap="round"
        markerEnd="url(#orbitArrow)"
      />
    </svg>
  );
}

export function ConversionSolutionSections() {
  return (
    <section className="bg-[#f8f8f8] px-4 py-24 text-center sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto flex w-full max-w-[1920px] flex-col items-center">
        <div className="solution-diagram mx-auto mt-16 sm:mt-20 lg:mt-24">
          <CircularArrows />

          <div className="solution-center-circle">
            <p>
              다중 채널
              <br />
              숏폼 마케팅
              <br />
              <span>하나로 끝!</span>
            </p>
          </div>

          {orbitCards.map((card) => (
            <article key={card.title} className={`solution-orbit-card ${card.className}`}>
              <img src={card.logo} alt="" className="solution-card-logo" />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
