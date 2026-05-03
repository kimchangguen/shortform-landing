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
};

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "기획",
    Icon: Lightbulb,
    image: "/process-media/process-1.jpg",
    headline: ["매출 터지는 영상 콘셉트 및", "알고리즘 최적화 전략 기획"],
  },
  {
    number: "02",
    title: "촬영",
    Icon: Camera,
    image: "/process-media/process-2.jpg",
    headline: ["구매 욕구를 자극하는", "식당 맞춤 고퀄리티 촬영"],
  },
  {
    number: "03",
    title: "콘텐츠 제작",
    Icon: Clapperboard,
    image: "/process-media/process-3.jpg",
    headline: ["쇼츠, 릴스 등 트렌드에 맞는", "숏폼 영상 20개 제작"],
  },
  {
    number: "04",
    title: "폭탄 확산",
    Icon: Send,
    image: "/process-media/process-4.jpg",
    headline: ["총 팔로워 240만 이상의", "32개 채널 동시 업로드"],
  },
];

function ProcessArrow() {
  return (
    <div className="process-arrow self-center" aria-hidden>
      <ChevronRight className="h-7 w-7" strokeWidth={4} />
    </div>
  );
}

function ProcessCard({ step }: { step: ProcessStep }) {
  const { Icon } = step;

  return (
    <article className="process-card">
      <div className="flex min-h-[4.75rem] items-center justify-center gap-4 text-[#4b1398] sm:gap-5">
        <Icon className="h-14 w-14 sm:h-16 sm:w-16 lg:h-[4.5rem] lg:w-[4.5rem]" strokeWidth={2.5} />
        <div className="grid h-12 w-12 place-items-center rounded-full bg-[#4b1398] text-xl font-black text-white sm:h-14 sm:w-14 sm:text-2xl">
          {step.number}
        </div>
        <h3 className="break-keep text-2xl font-black leading-none tracking-tight sm:text-3xl lg:text-[2rem]">
          {step.title}
        </h3>
      </div>

      <img src={step.image} alt="" className="mt-8 h-44 w-full rounded-xl object-cover sm:h-52 lg:h-[12.75rem]" />

      <div className="mt-8 flex flex-1 flex-col items-center justify-center break-keep text-center text-[1.55rem] font-black leading-[1.42] tracking-tight text-black sm:text-[1.7rem] lg:text-[1.67rem]">
        {step.headline.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </article>
  );
}

export function RevenueProcessSection() {
  return (
    <section id="production-process" className="bg-[#f8f8f8] px-4 pb-[160px] text-center sm:px-6 sm:pb-[180px] lg:px-8 lg:pb-[200px]">
      <div className="mx-auto w-full max-w-[1672px]">
        <MegaHitPinnedSequence />

        <div className="mt-20 grid grid-cols-1 items-stretch gap-5 sm:mt-24 lg:mt-32 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-4">
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
