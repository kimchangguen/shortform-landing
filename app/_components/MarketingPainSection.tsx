const painItems = [
  {
    label: "네이버 체험단",
    src: "/marketing-pain/icon-naver.svg",
  },
  {
    label: "인플루언서 마케팅",
    src: "/marketing-pain/icon-influencer.svg",
  },
  {
    label: "SNS 마케팅",
    src: "/marketing-pain/icon-sns.svg",
  },
  {
    label: "일반 숏폼",
    src: "/marketing-pain/icon-shortform.svg",
  },
];

export function MarketingPainSection() {
  return (
    <section
      id="why-shortform"
      className="bg-[#f8f8f8] px-4 pb-20 pt-20 text-center sm:px-6 sm:pb-24 sm:pt-24 lg:px-8 lg:pb-24 lg:pt-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        <img
          src="/marketing-pain/person-placeholder.svg"
          alt=""
          className="mx-auto h-auto w-[13rem] sm:w-[16rem] lg:w-[19rem]"
        />

        <div className="mx-auto mt-8 grid max-w-[40rem] grid-cols-2 justify-items-center gap-x-6 gap-y-7 sm:mt-9 sm:flex sm:max-w-none sm:justify-center sm:gap-9 lg:gap-11">
          {painItems.map((item) => (
            <div key={item.label} className="w-[8.25rem] text-center sm:w-[8.9rem] lg:w-[9.4rem]">
              <img src={item.src} alt="" className="mx-auto h-[5.8rem] w-[5.8rem] sm:h-[7rem] sm:w-[7rem] lg:h-[8rem] lg:w-[8rem]" />
              <p className="mt-2.5 break-keep text-[0.98rem] font-black leading-tight text-black sm:text-[1.1rem] lg:text-[1.32rem]">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-[75rem] break-keep font-black leading-[1.18] tracking-tight text-[#061735] sm:mt-20">
          <p className="text-[2rem] sm:text-[3rem] lg:text-[4.15rem]">비싸고 오래 걸리는 마케팅,</p>
          <p className="mt-3 text-[1.72rem] sm:mt-4 sm:text-[2.65rem] lg:text-[3.85rem]">
            돈과 시간 쓰고 <span className="text-[#e10b04]">결과가 만족스럽지 않으시죠?</span>
          </p>
        </div>
      </div>
    </section>
  );
}
