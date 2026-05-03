"use client";

import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const rows = ["channels", "audience", "restaurant", "mega", "shortform", "blast"] as const;

function OrangeBurst({ side }: { side: "left" | "right" }) {
  const flipClass = side === "right" ? "scale-x-[-1]" : "";

  return (
    <svg
      aria-hidden
      viewBox="0 0 120 140"
      className={`pointer-events-none absolute top-1/2 hidden h-[7rem] w-[6rem] -translate-y-1/2 text-[#F6A400] sm:block ${
        side === "left" ? "left-[-7rem]" : "right-[-7rem]"
      } ${flipClass}`}
    >
      <path d="M94 8L112 26L52 84Z" fill="currentColor" />
      <path d="M38 54L111 103L29 80Z" fill="currentColor" />
      <path d="M18 112L91 118L23 130Z" fill="currentColor" />
    </svg>
  );
}

function RedSpark({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 120 120" className={className}>
      <path
        d="M60 4L72 42L111 24L86 58L116 80L76 75L67 116L49 79L10 101L35 66L4 48L45 45L60 4Z"
        fill="#C41212"
      />
      <path
        d="M60 29L67 50L88 41L74 60L93 72L69 69L63 92L52 71L30 84L45 63L24 53L49 51L60 29Z"
        fill="#F6A400"
      />
    </svg>
  );
}

function BombSvg() {
  return (
    <div className="relative h-[11rem] w-[11rem] shrink-0 sm:h-[14rem] sm:w-[14rem] lg:h-[16rem] lg:w-[16rem]">
      <div className="absolute right-[1.4rem] top-[0.2rem] h-[5.2rem] w-[1.25rem] origin-bottom rotate-[35deg] rounded-full bg-[#8B5A2B] shadow-[inset_0.35rem_0_0_rgba(255,255,255,0.18)] sm:h-[6.5rem] sm:w-[1.55rem]">
        <RedSpark className="absolute right-[-2.5rem] top-[-2.6rem] h-[4.2rem] w-[4.2rem] sm:right-[-3.4rem] sm:top-[-3.3rem] sm:h-[5.6rem] sm:w-[5.6rem]" />
      </div>

      <div className="absolute left-1/2 top-[2.3rem] h-[2.4rem] w-[4.8rem] -translate-x-1/2 rounded-t-[1rem] bg-[#111111] shadow-[inset_0_0.45rem_0_rgba(255,255,255,0.14)] sm:top-[2.8rem] sm:h-[3rem] sm:w-[5.8rem]" />

      <div className="absolute bottom-0 left-0 grid h-[10rem] w-[10rem] place-items-center rounded-full bg-[#080808] text-center shadow-[0_1.5rem_2.3rem_rgba(0,0,0,0.26),inset_0.7rem_0.8rem_0_rgba(255,255,255,0.13)] sm:h-[13rem] sm:w-[13rem] lg:h-[15rem] lg:w-[15rem]">
        <div className="-rotate-[5deg] text-white">
          <span className="block text-[2.7rem] font-black leading-[0.86] tracking-[-0.08em] sm:text-[3.8rem] lg:text-[4.45rem]">
            폭탄
          </span>
          <span className="block text-[1.55rem] font-black leading-[0.95] tracking-[-0.06em] sm:text-[2.1rem] lg:text-[2.45rem]">
            으로
          </span>
        </div>
      </div>
    </div>
  );
}

export function MegaHitPinnedSequence() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.14 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  const animationStyle = (index: number) => ({
    transitionDelay: `${index * 150}ms`,
    animation: isInView
      ? `mega-hit-pop 480ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms both`
      : "none",
  });

  const rowClass = (index: number) =>
    `transition-all duration-[480ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
      isInView ? "translate-y-0 scale-[1] opacity-100" : "translate-y-[1.75rem] scale-[0.92] opacity-0"
    }`;

  return (
    <section
      ref={sectionRef}
      className="relative z-10 mb-0 w-full overflow-hidden bg-[#f9f8f6] px-[1rem] py-[6rem] pb-0 text-center sm:px-[1.5rem] sm:py-[7.5rem] sm:pb-0 lg:px-[2rem] lg:py-[9rem] lg:pb-0"
    >
      <style jsx global>{`
        @keyframes mega-hit-pop {
          0% {
            opacity: 0;
            transform: translateY(1.75rem) scale(0.92);
          }
          62% {
            opacity: 1;
            transform: translateY(-0.25rem) scale(1.055);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>

      <div className="mx-auto flex w-full max-w-[68rem] flex-col items-center">
        <div className={rowClass(0)} style={animationStyle(rows.indexOf("channels"))}>
          <div className="relative inline-block">
            <OrangeBurst side="left" />
            <p className="-skew-x-[7deg] break-keep text-[4rem] font-black leading-[0.88] tracking-[-0.1em] text-black drop-shadow-[0_0.45rem_0_rgba(0,0,0,0.08)] sm:text-[7rem] md:text-[8.5rem] lg:text-[10rem]">
              32개 채널
            </p>
            <OrangeBurst side="right" />
          </div>
        </div>

        <div
          className={`${rowClass(1)} mt-[0.65rem] -skew-x-[7deg]`}
          style={animationStyle(rows.indexOf("audience"))}
        >
          <p className="break-keep text-[2.65rem] font-black leading-[0.96] tracking-[-0.08em] text-black sm:text-[4.7rem] md:text-[5.7rem] lg:text-[6.6rem]">
            <span className="text-[#EAB308]">240만명</span>에게 보내는
          </p>
        </div>

        <div className={`${rowClass(2)} mt-[2rem]`} style={animationStyle(rows.indexOf("restaurant"))}>
          <p className="break-keep text-[5.4rem] font-black leading-[0.8] tracking-[-0.12em] text-black drop-shadow-[0_0.5rem_0_rgba(0,0,0,0.08)] sm:text-[8.5rem] md:text-[10.5rem] lg:text-[13rem]">
            맛집
          </p>
        </div>

        <div className={`${rowClass(3)} mt-[1rem]`} style={animationStyle(rows.indexOf("mega"))}>
          <p className="-skew-x-[5deg] break-keep text-[4.4rem] font-black leading-[0.86] tracking-[-0.11em] text-[#EAB308] sm:text-[7rem] md:text-[8.6rem] lg:text-[10.4rem]">
            메가
            <span className="relative inline-block px-[0.03em]">
              히
              <span className="absolute left-1/2 top-1/2 grid h-[0.42em] w-[0.42em] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#EAB308]">
                <Play className="ml-[0.06em] h-[0.23em] w-[0.23em] fill-white text-white" strokeWidth={0} />
              </span>
            </span>
            트
          </p>
        </div>

        <div className={`${rowClass(4)} mt-[0.35rem]`} style={animationStyle(rows.indexOf("shortform"))}>
          <div className="relative inline-block">
            <RedSpark className="absolute -left-[2.2rem] -top-[2.4rem] h-[4.4rem] w-[4.4rem] sm:-left-[4rem] sm:-top-[4rem] sm:h-[6.5rem] sm:w-[6.5rem]" />
            <p className="break-keep text-[4.9rem] font-black leading-[0.84] tracking-[-0.12em] text-black drop-shadow-[0_0.5rem_0_rgba(0,0,0,0.08)] sm:text-[7.8rem] md:text-[9.5rem] lg:text-[11.8rem]">
              숏폼
            </p>
          </div>
        </div>

        <div
          className={`${rowClass(5)} mt-[1.6rem] flex w-full flex-col items-center justify-center gap-[1.25rem] sm:mt-[2rem] sm:flex-row sm:items-end sm:gap-[2rem]`}
          style={animationStyle(rows.indexOf("blast"))}
        >
          <BombSvg />

          <div className="relative pb-[1.15rem] text-left">
            <p className="-skew-x-[6deg] break-keep text-[3.1rem] font-black leading-[0.95] tracking-[-0.1em] text-[#C41212] sm:text-[5.3rem] md:text-[6.4rem] lg:text-[7.7rem]">
              뿌려드립니다.
            </p>
            <svg
              aria-hidden
              viewBox="0 0 520 34"
              preserveAspectRatio="none"
              className="absolute bottom-0 left-0 h-[1.2rem] w-full text-[#C41212] sm:h-[1.45rem]"
            >
              <path
                d="M4 24C82 9 166 26 246 15C341 2 423 9 516 17"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="12"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
