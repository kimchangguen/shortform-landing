import {
  CalendarDays,
  CircleDollarSign,
  Eye,
  FolderOpen,
  Headset,
  Infinity,
  Megaphone,
} from "lucide-react";

const reasonCards = [
  {
    icon: "/bottom-conversion/reason-cost.jpg",
    title: ["비용은 부담스럽고", "효과는 미미한 광고"],
    description: ["지속적인 비용 지출에도 불구하고", "만족스러운 결과를 얻기 어렵습니다."],
  },
  {
    icon: "/bottom-conversion/reason-time.jpg",
    title: ["시간은 부족하고", "마케팅은 복잡한 현실"],
    description: ["매장 운영만으로도 바쁜데,", "마케팅까지 신경 쓰기 어렵습니다."],
  },
  {
    icon: "/bottom-conversion/reason-competitor.jpg",
    title: ["경쟁사는 앞서가는데", "우리는 제자리"],
    description: ["마케팅을 망설이는 사이,", "경쟁사는 고객을 선점하고 있습니다."],
  },
  {
    icon: "/bottom-conversion/reason-start.jpg",
    title: ["지금 시작하지 않으면", "더 큰 기회를 놓칩니다"],
    description: ["고객의 선택은 오늘도 경쟁사로 향합니다.", "더 늦기 전에 시작해야 합니다."],
  },
];

const competitorRows = [
  {
    Icon: CircleDollarSign,
    label: "비용",
    value: ["1건당 평균", "80 ~ 150"],
  },
  {
    Icon: Eye,
    label: "노출",
    value: ["영상만 제작", "노출 채널없음"],
  },
  {
    Icon: CalendarDays,
    label: "사용기간",
    value: ["기간제로", "하는 경우도 있음"],
  },
  {
    Icon: Headset,
    label: "부가적 지원",
    value: ["전혀 없음"],
  },
];

const adgritRows = [
  {
    Icon: CircleDollarSign,
    label: "비용",
    value: ["1건당 환산시"],
    highlight: "15만원 이하",
  },
  {
    Icon: Megaphone,
    label: "노출",
    value: ["인스타 파워계정 20개", "메타 파워계정 5개", "유튜브 2개 계정"],
    highlight: "총 240만 팔로워 폭탄 송출",
  },
  {
    Icon: Infinity,
    label: "사용기간",
    value: [],
    highlight: "영구적 무한",
  },
  {
    Icon: FolderOpen,
    label: "부가적 지원",
    value: ["촬영 원본파일 제공 후"],
    highlight: "자유가공 허용",
  },
];

function ReasonCard({ card }: { card: (typeof reasonCards)[number] }) {
  return (
    <article className="relative rounded-2xl border border-[#cfd9e9] bg-white px-5 pb-7 pt-8 text-center shadow-sm">
      <img
        src="/bottom-conversion/check-badge.jpg"
        alt=""
        className="absolute left-5 top-5 h-8 w-8 rounded-full object-cover"
      />
      <img src={card.icon} alt="" className="mx-auto h-[5.5rem] w-[5.5rem] rounded-full object-cover" />
      <h3 className="mt-5 break-keep text-[1.15rem] font-black leading-[1.45] tracking-tight text-[#052b69] sm:text-[1.34rem]">
        {card.title.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h3>
      <div className="mt-5 break-keep text-[0.78rem] font-medium leading-[1.75] tracking-tight text-black sm:text-[0.9rem]">
        {card.description.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </article>
  );
}

function CompetitorBox() {
  return (
    <article className="relative rounded-[1.45rem] border-2 border-[#c8c8c8] bg-white px-8 pb-7 pt-10">
      <div className="absolute left-1/2 top-0 flex h-11 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#a9a9a9] text-[1.45rem] font-black text-white">
        타 업체
      </div>
      {competitorRows.map(({ Icon, label, value }, index) => (
        <div
          key={label}
          className={`grid grid-cols-[4.2rem_5rem_1fr] items-center gap-4 py-7 text-left ${
            index === 0 ? "" : "border-t border-[#d8d8d8]"
          }`}
        >
          <Icon className="h-12 w-12 text-[#777]" strokeWidth={1.9} />
          <p className="border-r border-[#d8d8d8] pr-5 text-[1.2rem] font-bold text-black">{label}</p>
          <div className="break-keep text-[1.05rem] font-medium leading-[1.55] text-black">
            {value.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </article>
  );
}

function AdgritBox() {
  return (
    <article className="relative rounded-[1.45rem] border-2 border-[#0b72f0] bg-white px-8 pb-7 pt-10">
      <div className="absolute left-1/2 top-0 flex h-11 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0b72f0] text-[1.45rem] font-black text-white">
        애드그릿
      </div>
      <img
        src="/bottom-conversion/gold-medal.jpg"
        alt=""
        className="absolute -right-5 -top-10 h-20 w-20 object-contain"
      />
      {adgritRows.map(({ Icon, label, value, highlight }, index) => (
        <div
          key={label}
          className={`grid grid-cols-[4.2rem_5rem_1fr] items-center gap-4 py-7 text-left ${
            index === 0 ? "" : "border-t border-[#d8d8d8]"
          }`}
        >
          <Icon className="h-12 w-12 text-[#0b72f0]" strokeWidth={2.1} />
          <p className="border-r border-[#d8d8d8] pr-5 text-[1.2rem] font-bold text-black">{label}</p>
          <div className="break-keep text-[1.05rem] font-medium leading-[1.55] text-black">
            {value.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p className="font-black text-[#0b72f0]">{highlight}</p>
          </div>
        </div>
      ))}
    </article>
  );
}

export function BottomConversionSections() {
  return (
    <section className="bg-[#f8f8f8] px-4 pb-20 pt-12 text-center sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[864px]">
        <div className="break-keep text-[2.05rem] font-black leading-[1.35] tracking-tight text-black sm:text-[2.8rem]">
          <p>
            손님 모아드리는 <span className="text-[#0b72f0]">애드그릿</span>을
          </p>
          <p>사장님들이 찾는 이유</p>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasonCards.map((card) => (
            <ReasonCard key={card.title.join("")} card={card} />
          ))}
        </div>

        <div className="mt-20 break-keep text-[2.2rem] font-black leading-[1.25] tracking-tight text-black sm:text-[3rem] lg:text-[3.35rem]">
          <p>중간 외주가 없어 타사 대비</p>
          <p>
            압도적으로 <span className="text-[#0b72f0]">저렴한 가격</span>
          </p>
        </div>

        <div className="relative mx-auto mt-16 grid max-w-[760px] grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-8">
          <CompetitorBox />
          <div className="absolute left-1/2 top-1/2 z-10 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#0b72f0] text-2xl font-black text-white shadow-md lg:top-1/2">
            VS
          </div>
          <AdgritBox />
        </div>
      </div>
    </section>
  );
}
