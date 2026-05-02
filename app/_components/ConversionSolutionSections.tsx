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

function DividerLine() {
  return <div className="mx-auto h-[3px] w-16 rounded-full bg-[#d9d9d9] sm:w-20" />;
}

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
    <section className="bg-[#f8f8f8] px-4 py-16 text-center sm:px-6 sm:py-[4.5rem] lg:px-8 lg:py-0">
      <div className="mx-auto flex w-full max-w-[1920px] flex-col items-center lg:h-[1080px] lg:justify-start lg:overflow-hidden">
        <div className="break-keep font-black leading-[1.08] tracking-tight text-black lg:pt-10">
          <p className="text-[3.25rem] sm:text-[5.6rem] lg:text-[4.65rem]">저희는</p>
          <p className="mt-8 text-[2.72rem] text-[#006f6c] sm:mt-10 sm:text-[4.7rem] lg:mt-6 lg:text-[4.15rem]">
            손님을 모아드리고 <span className="text-black">다닙니다.</span>
          </p>
          <div className="my-12 sm:my-16 lg:my-7">
            <DividerLine />
          </div>
          <p className="text-[3.2rem] sm:text-[5.45rem] lg:text-[4.45rem]">사장님은</p>
          <p className="mt-8 text-[2.86rem] text-[#006f6c] sm:mt-10 sm:text-[4.9rem] lg:mt-6 lg:text-[4.35rem]">
            음식만 만드세요
          </p>
          <div className="mt-12 sm:mt-16 lg:mt-7">
            <DividerLine />
          </div>
        </div>

        <h2 className="mt-14 break-keep text-[2rem] font-black leading-tight tracking-tight text-black sm:mt-[4.5rem] sm:text-[3.35rem] lg:mt-7 lg:text-[2.85rem]">
          그러면 <span className="text-[#006f6c]">4가지</span>가 해결됩니다.
        </h2>

        <div className="solution-diagram mx-auto mt-14 lg:mt-6">
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
