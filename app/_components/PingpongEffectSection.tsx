"use client";

import { useEffect, useRef, useState } from "react";
import { PlaceGrowthSection } from "./PlaceGrowthSection";
import styles from "./PlaceGrowthSection.module.css";

const pingpongCards = [
  {
    icon: "/pingpong-effect/icon-search.jpg",
    title: (
      <>
        네이버 검색
        <br />
        노출 상승
      </>
    ),
    description: ["최적화된 영상이 네이버 검색", "상위에 꾸준히 노출되어", "더 많은 고객을 유입합니다."],
  },
  {
    icon: "/pingpong-effect/icon-clock.jpg",
    title: (
      <>
        지속적인 효과
        <br />
        최대 10개월 분할
        <br />
        업로드
      </>
    ),
    description: [
      "콘텐츠를 최대 10개월까지",
      "분할 업로드하여 끊김 없이 노출!",
      "시간이 지날수록 강력한",
      "누적 효과를 발휘합니다.",
    ],
  },
];

function PingpongHeadline() {
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = headlineRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <h2 ref={headlineRef} className={styles.headline} data-visible={isVisible}>
      <span>한번 올린 영상은</span>
      <span>삭제되지 않으며</span>
      <span>강력한 <em>핑퐁효과</em>를 누리세요</span>
    </h2>
  );
}

export function PingpongEffectSection() {
  return (
    <section id="pingpong" className={styles.section}>
      <PingpongHeadline />
      <PlaceGrowthSection />
      <div className="mx-auto w-full max-w-[1088px] px-4 sm:px-6 lg:px-8">
        <div className="mt-[150px] grid grid-cols-1 items-stretch gap-7 md:grid-cols-2 md:gap-8">
          {pingpongCards.map((card, index) => (
            <article
              key={index}
              className="grid h-full min-h-[27rem] grid-rows-[8.8rem_3px_1fr] rounded-[1.75rem] bg-white px-7 pb-10 pt-8 text-left shadow-[0_9px_28px_rgba(0,0,0,0.1)] ring-1 ring-black/5 sm:min-h-[28.5rem] sm:rounded-[2rem] sm:px-9 sm:pb-11 sm:pt-8"
            >
              <div className="grid grid-cols-[6.1rem_minmax(0,1fr)] items-start gap-6">
                <img src={card.icon} alt="" className="h-[6.1rem] w-[6.1rem] shrink-0 rounded-full object-cover" />
                <h3 className="break-keep text-[2.25rem] font-black leading-[1.16] tracking-tight text-black sm:text-[2.6rem]">
                  {card.title}
                </h3>
              </div>
              <div className="ml-[7.6rem] h-[3px] bg-[#00592e]" />
              <div className="ml-[7.6rem] mt-6 break-keep text-[1.45rem] font-medium leading-[1.55] tracking-tight text-black sm:text-[1.65rem]">
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
