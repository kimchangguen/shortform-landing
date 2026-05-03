"use client";

import { useEffect, useRef, useState } from "react";

const megaHitMessages = [
  {
    id: "channels",
    parts: [
      { text: "32개", accent: true },
      { text: " 채널" },
    ],
  },
  {
    id: "audience",
    parts: [
      { text: "240만명", accent: true },
      { text: "에 보내는" },
    ],
  },
  {
    id: "megahit",
    parts: [
      { text: "맛집 " },
      { text: "메가히트", accent: true },
      { text: " 숏폼" },
    ],
  },
  {
    id: "blast",
    parts: [
      { text: "폭탄", accent: true },
      { text: "으로 뿌려 드립니다." },
    ],
  },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function MegaHitPinnedSequence() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let animationFrameId = 0;

    const updateActiveIndex = () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const viewportHeight = window.innerHeight || 1;
      const rect = section.getBoundingClientRect();
      const scrollTrack = Math.max(section.offsetHeight - viewportHeight, 1);
      const progress = clamp(-rect.top / scrollTrack, 0, 0.999999);
      const segmentSize = 1 / megaHitMessages.length;
      const nextIndex = Math.min(megaHitMessages.length - 1, Math.floor(progress / segmentSize));

      setActiveIndex(nextIndex);
    };

    const onScroll = () => {
      window.cancelAnimationFrame(animationFrameId);
      animationFrameId = window.requestAnimationFrame(updateActiveIndex);
    };

    updateActiveIndex();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 h-[400vh] w-full overflow-hidden bg-[#f8f8f8]">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden px-4 text-center">
        <div className="relative flex min-h-[12rem] w-full max-w-6xl items-center justify-center overflow-hidden">
          {megaHitMessages.map((message, index) => (
            <p
              key={message.id}
              className={`absolute left-1/2 top-1/2 w-full max-w-[72rem] -translate-x-1/2 break-keep px-3 text-4xl font-black leading-tight tracking-tight text-black [overflow-wrap:anywhere] drop-shadow-[0_10px_32px_rgba(225,11,4,0.18)] transition-all duration-700 ease-out md:text-6xl ${
                activeIndex === index ? "-translate-y-1/2 opacity-100" : "translate-y-[calc(-50%+34px)] opacity-0"
              }`}
            >
              {message.parts.map((part) => (
                <span
                  key={part.text}
                  className={
                    part.accent
                      ? "font-black text-[#e10b04]"
                      : undefined
                  }
                >
                  {part.text}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
