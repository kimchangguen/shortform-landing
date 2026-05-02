const effectCards = [
  {
    icon: "/visit-effect/icon-views.jpg",
    title: "조회수 & 노출 증가",
    description: ["페이스북, 인스타그램, 유튜브", "알고리즘을 통한 동시다발적 확산으로", "더 많은 잠재 고객에게 노출됩니다."],
  },
  {
    icon: "/visit-effect/icon-customers.jpg",
    title: "고객 유입 증가",
    description: ["매력적인 영상이", "잠재 고객의 관심을 사로잡고,", "실제 발길을 매장으로 이끕니다."],
  },
];

export function VisitEffectSection() {
  return (
    <section className="bg-[#f8f8f8] px-4 pb-20 pt-10 text-center sm:px-6 sm:pb-24 lg:px-8">
      <div className="mx-auto w-full max-w-[1024px]">
        <img
          src="/visit-effect/phone-social-visual.jpg"
          alt=""
          className="mx-auto h-auto w-full max-w-[804px]"
        />

        <div className="mt-9 break-keep tracking-tight">
          <p className="text-[2.45rem] font-black leading-[1.05] text-black sm:text-[3.6rem] lg:text-[4rem]">
            우리 매장이 알아서
          </p>
          <h2 className="mt-4 text-[3.1rem] font-black leading-[1.02] text-[#063f98] sm:text-[5rem] lg:text-[5.7rem]">
            &lsquo;찾아오는 가게&rsquo;가 됩니다.
          </h2>
          <p className="mt-9 text-[1.22rem] font-medium leading-[1.42] text-black sm:text-[1.8rem] lg:text-[2rem]">
            다중 채널 동시 확산으로 우리 매장을 더 많은 사람들에게 노출하고,
          </p>
          <p className="mt-2 text-[1.2rem] font-medium leading-[1.42] text-black sm:text-[1.72rem] lg:text-[1.9rem]">
            <span className="font-bold text-[#063f98]">실제 방문과 매출로 이어지는 효과</span>를 경험하세요.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-9">
          {effectCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[1.75rem] bg-white px-8 pb-10 pt-7 shadow-[0_9px_28px_rgba(0,0,0,0.1)] ring-1 ring-black/5 sm:rounded-[2rem] sm:px-11 sm:pb-11 sm:pt-8"
            >
              <img src={card.icon} alt="" className="mx-auto h-40 w-40 rounded-full object-cover sm:h-44 sm:w-44" />
              <h3 className="mt-7 break-keep text-[2rem] font-black leading-tight tracking-tight text-[#063f98] sm:text-[2.65rem]">
                {card.title}
              </h3>
              <div className="mx-auto mt-5 h-px w-full max-w-[21rem] bg-[#9bb8df]" />
              <div className="mt-7 break-keep text-[1.25rem] font-medium leading-[1.72] tracking-tight text-black sm:text-[1.55rem]">
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
