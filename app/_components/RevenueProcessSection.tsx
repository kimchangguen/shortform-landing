import { Fragment } from "react";
import type { LucideIcon } from "lucide-react";
import { Camera, ChevronRight, Clapperboard, Lightbulb, Send } from "lucide-react";
import { MegaHitPinnedSequence } from "./MegaHitPinnedSequence";

type ProcessStep = {
  number: string;
  title: string;
  Icon: LucideIcon;
  image: string;
  headline: string[];
  description: string[];
};

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "기획",
    Icon: Lightbulb,
    image: "/process-media/process-1.jpg",
    headline: ["매출 터지는 영상 콘셉트 및", "알고리즘 최적화 전략 기획"],
    description: [
      "빅데이터 분석을 통해 고객이 좋아하고",
      "알고리즘에 최적화된 영상 콘셉트와",
      "키워드를 선정합니다.",
    ],
  },
  {
    number: "02",
    title: "촬영",
    Icon: Camera,
    image: "/process-media/process-2.jpg",
    headline: ["단순 정보 전달을 넘어", "구매 욕구를 자극하는", "식당 맞춤 고퀄리티 촬영"],
    description: [
      "전문 장비와 노하우로 음식의 맛과",
      "매장의 분위기를 생생하게 담아",
      "구매 욕구를 자극합니다.",
    ],
  },
  {
    number: "03",
    title: "콘텐츠 제작",
    Icon: Clapperboard,
    image: "/process-media/process-3.jpg",
    headline: ["쇼츠, 릴스 등 트렌드에 맞는", "숏폼 영상 20개 제작"],
    description: [
      "최신 트렌드를 반영한 숏폼 영상을",
      "20개 제작하여 다양한 주제와 메시지로",
      "고객에게 어필합니다.",
    ],
  },
  {
    number: "04",
    title: "확산",
    Icon: Send,
    image: "/process-media/process-4.jpg",
    headline: [
      "총 팔로워 240만 이상의",
      "32개 채널(인스타그램 20개,",
      "페이스북 10개, 유튜브 2개)에",
      "동시 업로드",
    ],
    description: [
      "강력한 채널 네트워크를 통해 콘텐츠를",
      "동시에 확산시켜 최대 효과를 만듭니다.",
    ],
  },
];

function ProcessArrow() {
  return (
    <div className="process-arrow" aria-hidden>
      <ChevronRight className="h-7 w-7" strokeWidth={4} />
    </div>
  );
}

function ProcessCard({ step }: { step: ProcessStep }) {
  const { Icon } = step;

  return (
    <article className="process-card">
      <div className="flex items-center justify-center gap-4 text-[#4b1398] sm:gap-5">
        <Icon className="h-14 w-14 sm:h-16 sm:w-16 lg:h-[4.5rem] lg:w-[4.5rem]" strokeWidth={2.5} />
        <div className="grid h-12 w-12 place-items-center rounded-full bg-[#4b1398] text-xl font-black text-white sm:h-14 sm:w-14 sm:text-2xl">
          {step.number}
        </div>
        <h3 className="text-2xl font-black leading-none tracking-tight sm:text-3xl lg:text-[2rem]">{step.title}</h3>
      </div>

      <img src={step.image} alt="" className="mt-8 h-44 w-full rounded-xl object-cover sm:h-52 lg:h-[12.75rem]" />

      <div className="mt-8 break-keep text-center text-[1.55rem] font-black leading-[1.42] tracking-tight text-black sm:text-[1.7rem] lg:text-[1.67rem]">
        {step.headline.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <div className="mt-8 break-keep text-center text-[1.12rem] font-medium leading-[1.7] tracking-tight text-black sm:text-[1.18rem] lg:text-[1.16rem]">
        {step.description.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </article>
  );
}

export function RevenueProcessSection() {
  return (
    <section id="production-process" className="bg-[#f8f8f8] px-4 text-center sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1672px]">
        <MegaHitPinnedSequence />

        <div className="mt-0 grid grid-cols-1 items-center gap-5 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-4">
          {processSteps.map((step, index) => (
            <Fragment key={step.number}>
              <ProcessCard step={step} />
              {index < processSteps.length - 1 ? <ProcessArrow /> : null}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
