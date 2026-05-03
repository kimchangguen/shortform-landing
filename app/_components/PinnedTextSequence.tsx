"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type MessagePart = {
  text: string;
  accent?: boolean;
};

type PinnedMessage = {
  id: string;
  parts: MessagePart[];
};

const pinnedMessages: PinnedMessage[] = [
  {
    id: "slow-marketing",
    parts: [
      { text: "비싸고 오래 걸리는", accent: true },
      { text: " 마케팅," },
    ],
  },
  {
    id: "time-money",
    parts: [
      { text: "돈과 시간", accent: true },
      { text: " 쓰고 결과가 만족스럽지 않으시죠?" },
    ],
  },
  {
    id: "not-your-fault",
    parts: [
      { text: "사장님 잘못", accent: true },
      { text: "이 아니에요" },
    ],
  },
  {
    id: "world-changed",
    parts: [
      { text: "세상이 바뀌어서", accent: true },
      { text: " 그래요" },
    ],
  },
  {
    id: "make-food",
    parts: [
      { text: "사장님은 음식만", accent: true },
      { text: " 만드세요" },
    ],
  },
  {
    id: "we-bring",
    parts: [
      { text: "손님은 저희가", accent: true },
      { text: " 모읍니다." },
    ],
  },
];

const lastMessageIndex = pinnedMessages.length - 1;

export function PinnedTextSequence({ className = "" }: { className?: string }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const currentIndexRef = useRef(0);
  const isSequenceReleasedRef = useRef(false);
  const isSwitchingRef = useRef(false);
  const switchTimeoutRef = useRef<number | null>(null);
  const touchStartYRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const canPinSequence = useCallback(() => {
    const section = sectionRef.current;

    if (!section || isSequenceReleasedRef.current) {
      return false;
    }

    const rect = section.getBoundingClientRect();
    return rect.top <= 1 && rect.bottom > window.innerHeight;
  }, []);

  const beginSwitch = useCallback((nextIndex: number) => {
    if (isSwitchingRef.current || currentIndexRef.current === nextIndex) {
      return;
    }

    currentIndexRef.current = nextIndex;
    isSwitchingRef.current = true;
    setActiveIndex(nextIndex);

    if (switchTimeoutRef.current) {
      window.clearTimeout(switchTimeoutRef.current);
    }

    switchTimeoutRef.current = window.setTimeout(() => {
      isSwitchingRef.current = false;

      if (nextIndex === lastMessageIndex) {
        isSequenceReleasedRef.current = true;
      }
    }, 220);
  }, []);

  const triggerNextSentence = useCallback(() => {
    if (isSequenceReleasedRef.current || isSwitchingRef.current || currentIndexRef.current === lastMessageIndex) {
      return;
    }

    beginSwitch(currentIndexRef.current + 1);
  }, [beginSwitch]);

  useEffect(() => {
    const lockToSequenceTop = () => {
      const section = sectionRef.current;

      if (section) {
        window.scrollTo({
          top: section.getBoundingClientRect().top + window.scrollY,
          behavior: "instant",
        });
      }
    };

    const onWheel = (event: WheelEvent) => {
      if (!canPinSequence() || event.deltaY <= 1) {
        return;
      }

      event.preventDefault();
      lockToSequenceTop();
      triggerNextSentence();
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartYRef.current = event.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (!canPinSequence()) {
        return;
      }

      const currentY = event.touches[0]?.clientY ?? touchStartYRef.current;
      const deltaY = touchStartYRef.current - currentY;

      if (deltaY <= 3) {
        touchStartYRef.current = currentY;
        return;
      }

      event.preventDefault();
      lockToSequenceTop();
      triggerNextSentence();
      touchStartYRef.current = currentY;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);

      if (switchTimeoutRef.current) {
        window.clearTimeout(switchTimeoutRef.current);
      }
    };
  }, [canPinSequence, triggerNextSentence]);

  return (
    <section
      ref={sectionRef}
      className={`relative z-10 h-[300vh] w-full max-w-full bg-[#f8f8f8] ${className}`}
      style={{ overflowX: "clip" }}
    >
      <div className="sticky top-0 z-10 grid h-screen w-full max-w-full place-items-center overflow-hidden px-4 text-center sm:px-6 lg:px-8">
        <div className="relative flex h-full w-full max-w-full items-center justify-center overflow-hidden">
          <div className="relative flex h-56 w-full max-w-full items-center justify-center overflow-hidden">
            {pinnedMessages.map((message, index) => (
              <p
                key={message.id}
                className="absolute inset-0 flex w-full max-w-full items-center justify-center break-keep px-4 text-center text-4xl font-black leading-tight tracking-tight text-[#061735] [overflow-wrap:anywhere] transition-opacity duration-200 md:text-5xl lg:text-6xl"
                style={{ opacity: activeIndex === index ? 1 : 0 }}
              >
                <span className="block w-full max-w-[64rem]">
                  {message.parts.map((part) => (
                    <span
                      key={part.text}
                      className={
                        part.accent
                          ? "bg-gradient-to-r from-[#e10b04] via-[#ff4a24] to-[#4b1398] bg-clip-text font-black text-transparent"
                          : undefined
                      }
                    >
                      {part.text}
                    </span>
                  ))}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
