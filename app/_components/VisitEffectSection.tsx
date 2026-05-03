"use client";

import { Heart, ThumbsUp, UsersRound } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

const effectCards = [
  {
    icon: "/visit-effect/icon-views.jpg",
    title: "조회수 & 노출 증가",
    description: [
      "네이버, 인스타그램, 유튜브",
      "알고리즘을 통한 동시다발적 확산으로",
      "더 많은 잠재 고객에게 노출됩니다.",
    ],
  },
  {
    icon: "/visit-effect/icon-customers.jpg",
    title: "고객 유입 증가",
    description: [
      "매력적인 영상으로",
      "잠재 고객의 관심을 끌어올리고,",
      "실제 방문과 매출로 이어집니다.",
    ],
  },
];

const shortVideoSources = Array.from(
  { length: 60 },
  (_, index) => `/videos/shorts/a%20(${index + 1}).mp4`,
);

const visitTypingFirstLine = "우리 매장을 찾아오는";
const visitTypingSecondLine = "‘찾아오는 가게’가 됩니다";
const visitTypingDelay = 34;

function getRandomVideoIndex(currentIndex: number) {
  if (shortVideoSources.length <= 1) {
    return currentIndex;
  }

  let nextIndex = Math.floor(Math.random() * shortVideoSources.length);

  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * shortVideoSources.length);
  }

  return nextIndex;
}

function FloatingIcon({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`absolute z-30 grid place-items-center rounded-full border-0 shadow-none outline-none ring-0 ${className}`}
      aria-hidden
    >
      {children}
    </div>
  );
}

function InteractivePhoneVideo() {
  const [isMounted, setIsMounted] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const [isVideoVisible, setIsVideoVisible] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    setVideoIndex(Math.floor(Math.random() * shortVideoSources.length));
  }, []);

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setIsVideoVisible(false);

      window.setTimeout(() => {
        setVideoIndex((currentIndex) => getRandomVideoIndex(currentIndex));
        setIsVideoVisible(true);
      }, 360);
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isMounted]);

  const currentVideoSource = isMounted ? shortVideoSources[videoIndex] : "";

  return (
    <div className="relative mx-auto w-full max-w-[804px]">
      <img
        src="/visit-effect/phone-social-visual.jpg"
        alt=""
        className="relative z-10 block h-auto w-full select-none mix-blend-multiply"
      />

      <div className="absolute left-[3.7%] top-[10.6%] z-[15] h-[18%] w-[18%] rounded-[2rem] bg-[#f9f8f6]" aria-hidden />
      <div className="absolute left-[13.2%] top-[12.2%] z-[16] h-[15.5%] w-[7.5%] rounded-full bg-[#f9f8f6]" aria-hidden />
      <div className="absolute left-[1.6%] top-[42.1%] z-[15] h-[21%] w-[21%] rounded-[2rem] bg-[#f9f8f6]" aria-hidden />
      <div className="absolute left-[19.4%] top-[29.7%] z-[15] h-[11.2%] w-[11.2%] rounded-[1.25rem] bg-[#f9f8f6]" aria-hidden />
      <div className="absolute right-[5.2%] top-[18%] z-[15] h-[21%] w-[21%] rounded-[2rem] bg-[#f9f8f6]" aria-hidden />
      <div className="absolute right-[17.5%] top-[20.2%] z-[16] h-[15.8%] w-[7.5%] rounded-full bg-[#f9f8f6]" aria-hidden />
      <div className="absolute right-[4.9%] top-[51.3%] z-[15] h-[20%] w-[20%] rounded-[2rem] bg-[#f9f8f6]" aria-hidden />

      <div className="absolute left-[31.4%] top-[6.1%] z-20 h-[83.1%] w-[32.5%] overflow-hidden rounded-[2rem] bg-black shadow-inner sm:rounded-[2.35rem]">
        <video
          key={currentVideoSource || "pending-phone-video"}
          {...(currentVideoSource ? { src: currentVideoSource } : {})}
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            isVideoVisible ? "opacity-100" : "opacity-0"
          }`}
          suppressHydrationWarning
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/55" />
        <div className="pointer-events-none absolute left-[7%] top-[5%] flex items-center gap-2 text-[0.62rem] font-bold text-white sm:text-[0.78rem]">
          <span className="text-lg leading-none sm:text-xl">&lsaquo;</span>
          <span>Reels</span>
        </div>
        <div className="pointer-events-none absolute bottom-[7%] left-[7%] right-[7%] text-left text-[0.55rem] font-bold leading-tight text-white sm:text-[0.68rem]">
          <p>@yummy_restaurant</p>
          <p className="mt-2 font-medium">오늘의 메뉴! 너무 맛있어요!</p>
          <p className="mt-2 font-medium">Original Audio</p>
        </div>
      </div>

      <FloatingIcon className="left-[7%] top-[15%] h-[4.6rem] w-[4.6rem] bg-[#135fd6] text-white visit-float-slow sm:h-[5.4rem] sm:w-[5.4rem]">
        <ThumbsUp className="h-[2.25rem] w-[2.25rem] fill-white sm:h-[2.8rem] sm:w-[2.8rem]" strokeWidth={0} />
      </FloatingIcon>
      <FloatingIcon className="left-[5%] top-[47%] h-[5.4rem] w-[5.4rem] bg-[#f52555] text-white visit-float-medium sm:h-[6.3rem] sm:w-[6.3rem]">
        <Heart className="h-[3rem] w-[3rem] fill-white sm:h-[3.6rem] sm:w-[3.6rem]" strokeWidth={0} />
      </FloatingIcon>
      <FloatingIcon className="left-[22%] top-[33%] h-[3rem] w-[3rem] bg-[#f52555] text-white visit-float-fast sm:h-[3.6rem] sm:w-[3.6rem]">
        <Heart className="h-[1.7rem] w-[1.7rem] fill-white sm:h-[2rem] sm:w-[2rem]" strokeWidth={0} />
      </FloatingIcon>
      <FloatingIcon className="right-[8%] top-[23%] h-[5.8rem] w-[5.8rem] bg-[#f52555] text-white visit-float-slow sm:h-[6.9rem] sm:w-[6.9rem]">
        <Heart className="h-[3.3rem] w-[3.3rem] fill-white sm:h-[4rem] sm:w-[4rem]" strokeWidth={0} />
      </FloatingIcon>
      <FloatingIcon className="right-[7%] top-[55%] h-[5.2rem] w-[5.2rem] bg-[#135fd6] text-white visit-float-medium sm:h-[6.1rem] sm:w-[6.1rem]">
        <UsersRound className="h-[3rem] w-[3rem] fill-white/20 sm:h-[3.45rem] sm:w-[3.45rem]" strokeWidth={3} />
      </FloatingIcon>
    </div>
  );
}

function TypingCaret() {
  return (
    <span className="ml-[0.08em] inline-block h-[0.85em] w-[0.08em] translate-y-[0.08em] animate-pulse bg-current" />
  );
}

function VisitTypingText() {
  const textRef = useRef<HTMLDivElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [typedCount, setTypedCount] = useState(0);
  const totalLength = visitTypingFirstLine.length + visitTypingSecondLine.length;

  useEffect(() => {
    const element = textRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!hasStarted || typedCount >= totalLength) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setTypedCount((currentCount) => Math.min(currentCount + 1, totalLength));
    }, visitTypingDelay);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [hasStarted, totalLength, typedCount]);

  const firstLineCount = Math.min(typedCount, visitTypingFirstLine.length);
  const secondLineCount = Math.max(0, typedCount - visitTypingFirstLine.length);
  const isTypingFirstLine = hasStarted && typedCount < visitTypingFirstLine.length;
  const isTypingSecondLine =
    hasStarted && typedCount >= visitTypingFirstLine.length && typedCount < totalLength;

  return (
    <div ref={textRef} className="mb-[150px] mt-[150px] break-keep tracking-tight">
      <p className="min-h-[1.05em] text-[2.45rem] font-black leading-[1.05] text-black sm:text-[3.6rem] lg:text-[4rem]">
        {visitTypingFirstLine.slice(0, firstLineCount)}
        {isTypingFirstLine ? <TypingCaret /> : null}
      </p>
      <h2 className="mt-4 min-h-[1.02em] text-[3.1rem] font-black leading-[1.02] text-[#063f98] sm:text-[5rem] lg:text-[5.7rem]">
        {visitTypingSecondLine.slice(0, secondLineCount)}
        {isTypingSecondLine ? <TypingCaret /> : null}
      </h2>
    </div>
  );
}

export function VisitEffectSection() {
  return (
    <section className="bg-[#f9f8f6] px-4 pb-[150px] pt-10 text-center sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1024px]">
        <InteractivePhoneVideo />

        <VisitTypingText />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-9">
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
