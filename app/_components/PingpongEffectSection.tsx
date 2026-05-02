const pingpongCards = [
  {
    icon: "/pingpong-effect/icon-search.jpg",
    title: (
      <>
        키워드 검색
        <br />
        <span>노출 상승</span>
      </>
    ),
    description: ["최적화된 영상이 네이버 검색", "상위에 꾸준히 노출되어", "더 많은 고객이 유입됩니다."],
  },
  {
    icon: "/pingpong-effect/icon-clock.jpg",
    title: (
      <>
        지속적인 효과
        <br />
        <span>최대 10개월 분할 업로드</span>
      </>
    ),
    description: ["콘텐츠를 최대 10개월까지", "분할 업로드하여 끊김 없이 노출!", "시간이 지날수록 강력한", "누적 효과를 발휘합니다."],
  },
];

export function PingpongEffectSection() {
  return (
    <section className="bg-[#f8f8f8] px-4 pb-20 pt-12 text-center sm:px-6 sm:pb-24 sm:pt-16 lg:px-8">
      <div className="mx-auto w-full max-w-[1024px]">
        <div className="break-keep font-black leading-[1.18] tracking-tight text-black">
          <p className="text-[3.05rem] sm:text-[5.1rem] lg:text-[5.55rem]">한번 올린 영상은</p>
          <p className="text-[3.05rem] sm:text-[5.1rem] lg:text-[5.55rem]">삭제되지 않습니다.</p>
          <p className="mt-7 text-[2.45rem] sm:text-[4.1rem] lg:text-[4.7rem]">
            강력한 <span className="text-[#00592e]">핑퐁효과를</span> 누리세요
          </p>
        </div>

        <img
          src="/pingpong-effect/pingpong-visual.jpg"
          alt=""
          className="mx-auto mt-7 h-auto w-full max-w-[928px]"
        />

        <div className="mt-7 grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8">
          {pingpongCards.map((card, index) => (
            <article
              key={index}
              className="rounded-[1.75rem] bg-white px-7 pb-10 pt-7 text-left shadow-[0_9px_28px_rgba(0,0,0,0.1)] ring-1 ring-black/5 sm:rounded-[2rem] sm:px-9 sm:pb-11 sm:pt-8"
            >
              <div className="flex items-center gap-6">
                <img src={card.icon} alt="" className="h-[6.1rem] w-[6.1rem] shrink-0 rounded-full object-cover" />
                <h3 className="break-keep text-[2.25rem] font-black leading-[1.16] tracking-tight text-black sm:text-[2.6rem]">
                  {card.title}
                </h3>
              </div>
              <div className="ml-[7.6rem] mt-4 h-[3px] bg-[#00592e]" />
              <div className="mt-6 break-keep text-[1.45rem] font-medium leading-[1.55] tracking-tight text-black sm:text-[1.65rem]">
                {card.description.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
