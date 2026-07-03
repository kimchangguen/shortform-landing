"use client";

import { useEffect, useRef, useState } from "react";
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
    title: ["업계 최저가, 최대 효율", "가성비 독보적"],
    description: ["100만원 넘게 드는 숏폼", "20개를 300만원으로!", "콘텐츠 제작 비용은 줄이고,", "광고 효과는 극대화합니다."],
  },
  {
    icon: "/bottom-conversion/reason-time.jpg",
    title: ["240만 팔로워", "공식 계정 네트워크"],
    description: ["30개 이상의 인스타 파워계정,", "메타계정, 유튜브 채널", "총 240만 팔로워에게", "한 번에 뿌려드립니다."],
  },
  {
    icon: "/bottom-conversion/reason-competitor.jpg",
    title: ["상위노출 + 스폰서드까지", "광고 셋팅 풀패키지"],
    description: ["단순 업로드로 끝이 아닙니다.", "SNS 상위노출 최적화부터", "스폰서드 광고 셋팅까지", "성과를 위한 모든 과정을", "지원합니다."],
  },
  {
    icon: "/bottom-conversion/reason-start.jpg",
    title: ["촬영부터 기획까지", "일사천리 원스톱 진행"],
    description: ["사장님은 가게 운영에만 집중!", "기획, 촬영, 편집, 업로드까지", "모든 과정을 애드그릿이", "책임지고 빠르게 진행합니다."],
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

function ReasonsHeading() {
  const headingRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = headingRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const lineClass = `transition-all duration-700 ease-out ${
    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
  }`;

  return (
    <div
      ref={headingRef}
      className="break-keep text-[2.05rem] font-black leading-[1.35] tracking-tight text-black sm:text-[2.8rem]"
    >
      <p className={lineClass} style={{ transitionDelay: "0ms" }}>
        손님 모아드리는
      </p>
      <p className={lineClass} style={{ transitionDelay: "180ms" }}>
        <span className="text-[#0b72f0]">애드그릿</span>에게 숏폼을 맡기는
      </p>
      <p className={lineClass} style={{ transitionDelay: "360ms" }}>
        사장님들의 이유 4가지
      </p>
    </div>
  );
}

export function BottomConversionSections() {
  return (
    <>
      <section className="bg-[#f9f8f6] px-4 py-[150px] text-center sm:px-6 sm:py-[170px] lg:px-8">
        <div className="mx-auto w-[43%] min-w-[320px] max-w-[468px] bg-[#f9f8f6]">
          <img
            src="/09-02-transparent.png"
            alt=""
            className="mx-auto h-auto w-full max-w-full bg-transparent object-contain mix-blend-multiply"
          />
        </div>
      </section>

      <section className="bg-[#f9f8f6] px-4 pb-20 pt-0 text-center sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[864px]">
          <ReasonsHeading />

        <div className="mt-[150px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
    </>
  );
}
