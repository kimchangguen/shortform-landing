const pricingPlans = [
  {
    title: "숏폼 1건 팩",
    icon: "/refund-pricing/icon-camera.jpg",
    items: ["숏폼 기획", "숏폼 영상 1건", "라이센스 기간제 허용"],
    price: "120",
    unit: "*숏폼 1건당 1,000,000원",
    featured: false,
  },
  {
    title: "숏폼 20건 팩",
    icon: "/refund-pricing/icon-clapper.jpg",
    items: ["숏폼 기획", "숏폼 영상 20건", "원본 파일 제공", "외부 페이지 20개 업로드"],
    price: "300",
    unit: "*숏폼 1건당 150,000원",
    featured: true,
  },
  {
    title: "숏폼 40건 팩",
    icon: "/refund-pricing/icon-reel.jpg",
    items: ["숏폼 기획", "숏폼 영상 40건", "원본 파일 제공", "파워페이지 20개 업로드"],
    price: "550",
    unit: "*숏폼 1건당 137,500원",
    featured: false,
  },
];

function PricingCard({ plan }: { plan: (typeof pricingPlans)[number] }) {
  return (
    <article
      className={`relative rounded-[1.45rem] bg-white px-7 pb-5 pt-8 shadow-[0_14px_34px_rgba(0,35,80,0.12)] ${
        plan.featured ? "border-2 border-[#0b72f0] pt-16" : ""
      }`}
    >
      {plan.featured ? (
        <div className="absolute left-0 right-0 top-0 flex h-14 items-center justify-center rounded-t-[1.25rem] bg-[#0b72f0] text-[1.55rem] font-black text-white">
          <img src="/refund-pricing/crown.jpg" alt="" className="mr-3 h-7 w-7 object-contain" />
          BEST
        </div>
      ) : null}

      <img src={plan.icon} alt="" className="mx-auto h-[6.15rem] w-[6.15rem] rounded-full object-cover" />
      <h3
        className={`mt-8 break-keep text-[2.35rem] font-black leading-tight tracking-tight ${
          plan.featured ? "text-[#0b72f0]" : "text-[#071735]"
        }`}
      >
        {plan.title}
      </h3>

      <div className="mt-6 h-px w-full bg-[#d9e1ee]" />

      <div className="mt-7 space-y-5 text-left">
        {plan.items.map((item) => (
          <div key={item} className="border-b border-dashed border-[#d9e1ee] pb-4 last:border-b-0">
            <p className="flex items-center gap-4 break-keep text-[1.25rem] font-medium leading-tight text-[#071735]">
              <img src="/refund-pricing/check.jpg" alt="" className="h-8 w-8 shrink-0 rounded-full object-cover" />
              {item}
            </p>
          </div>
        ))}
      </div>

      <div
        className={`mt-14 rounded-xl px-6 py-5 text-center ${
          plan.featured ? "bg-[#0b72f0] text-white" : "bg-[#eef4ff] text-[#071735]"
        }`}
      >
        <p className="font-black leading-none tracking-tight">
          <span className="text-[5.45rem]">{plan.price}</span>
          <span className="ml-1 text-[2rem]">만원</span>
        </p>
        <p className="mt-3 text-[1.2rem] font-medium leading-tight">{plan.unit}</p>
      </div>
    </article>
  );
}

export function RefundPricingSection() {
  return (
    <section id="pricing" className="bg-[#edf6ff] px-4 pb-16 pt-8 text-center sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1315px]">
        <div className="rounded-[1.7rem] bg-white px-5 pb-10 pt-7 shadow-[0_12px_35px_rgba(30,90,160,0.08)]">
          <div className="relative mx-auto h-[8.5rem] max-w-[64rem]">
            <img src="/refund-pricing/shield-badge.jpg" alt="" className="mx-auto h-[7.5rem] w-auto object-contain" />
            <img src="/refund-pricing/spark-left.jpg" alt="" className="absolute left-[15%] top-[4.8rem] h-20 w-20 object-contain" />
            <img src="/refund-pricing/spark-right.jpg" alt="" className="absolute right-[15%] top-[4.8rem] h-20 w-20 object-contain" />
          </div>

          <p className="mt-1 break-keep text-[1.65rem] font-black leading-tight tracking-tight text-[#071735] sm:text-[2.05rem]">
            불만족시 <span className="text-[#0b72f0]">100% 환불</span>
          </p>
          <h2 className="mt-3 break-keep text-[3.2rem] font-black leading-tight tracking-tight text-[#071735] sm:text-[4.6rem] lg:text-[5.25rem]">
            결과 없어도 <span className="text-[#0b72f0]">100% 환불</span>
          </h2>
          <div className="mx-auto mt-6 flex max-w-[56rem] items-center justify-center gap-6 text-[1.4rem] font-medium text-[#071735] sm:text-[1.75rem]">
            <div className="h-px w-28 bg-[#c9d8ee]" />
            <p className="shrink-0">계약서에 작성합니다.</p>
            <div className="h-px w-28 bg-[#c9d8ee]" />
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-[1185px] grid-cols-1 gap-10 lg:grid-cols-3 lg:items-start lg:gap-10">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.title} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
