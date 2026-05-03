"use client";

import { ChefHat, UsersRound } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type MessagePart = {
  text: string;
  accent?: boolean;
  breakAfter?: boolean;
  hero?: boolean;
  underline?: boolean;
  dots?: boolean;
};

type PinnedMessage = {
  id: string;
  parts: MessagePart[];
  icon?: "chef" | "people";
};

const pinnedMessages: PinnedMessage[] = [
  {
    id: "slow-marketing",
    parts: [
      { text: "비싸고 오래 걸리는", breakAfter: true },
      { text: "마케팅,", accent: true, hero: true },
    ],
  },
  {
    id: "time-money",
    parts: [
      { text: "돈과 시간 쓰고 결과가", breakAfter: true },
      { text: "만족스럽지 않으시죠?" },
    ],
  },
  {
    id: "not-your-fault",
    parts: [
      { text: "사장님 " },
      { text: "잘못", accent: true, underline: true },
      { text: "이 아니에요" },
    ],
  },
  {
    id: "world-changed",
    parts: [
      { text: "세상이 바뀌어서 " },
      { text: "그래요", dots: true },
    ],
  },
  {
    id: "make-food",
    icon: "chef",
    parts: [
      { text: "사장님은", breakAfter: true },
      { text: "음식만", accent: true },
      { text: " 만드세요" },
    ],
  },
  {
    id: "we-bring",
    icon: "people",
    parts: [
      { text: "손님은", breakAfter: true },
      { text: "저희가", accent: true, underline: true },
      { text: " 모읍니다." },
    ],
  },
];

const iconMap = {
  chef: ChefHat,
  people: UsersRound,
};

export function PinnedTextSequence({ className = "" }: { className?: string }) {
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
      { threshold: 0.15 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative z-10 w-full max-w-full overflow-hidden bg-[#f9f8f6] py-48 ${className}`}
    >
      <div className="mx-auto flex w-full max-w-[920px] flex-col items-center justify-center px-5 text-center sm:px-8 lg:px-10">
        {pinnedMessages.map((message, index) => {
          const Icon = message.icon ? iconMap[message.icon] : null;
          const isIconRow = Boolean(Icon);

          return (
            <div key={message.id} className="w-full">
              <div
                className={`flex w-full items-center justify-center gap-5 transition-all duration-300 ${
                  isInView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                } ${isIconRow ? "text-left" : "text-center"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {Icon ? (
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-[#F3D990] bg-[#FFF3D8] text-black sm:h-20 sm:w-20">
                    <Icon className="h-9 w-9 sm:h-11 sm:w-11" strokeWidth={2.4} />
                  </div>
                ) : null}

                <p
                  className={`break-keep whitespace-pre-line font-black leading-[1.1] tracking-tighter text-black [overflow-wrap:anywhere] ${
                    isIconRow ? "text-3xl sm:text-5xl md:text-6xl" : "text-2xl sm:text-4xl md:text-5xl lg:text-6xl"
                  }`}
                >
                  {message.parts.map((part) => (
                    <span key={part.text} className="relative inline-block">
                      <span className={part.accent ? "text-[#EAB308]" : undefined}>
                        {part.hero ? (
                          <span className="block text-7xl leading-[0.95] sm:text-[8rem] md:text-[9rem] lg:text-[10rem]">
                            {part.text}
                          </span>
                        ) : (
                          part.text
                        )}
                      </span>

                      {part.underline ? (
                        <span className="absolute -bottom-1 left-0 h-1 w-full -rotate-2 rounded-full bg-[#EAB308]" />
                      ) : null}

                      {part.dots ? (
                        <span className="absolute -top-5 left-1/2 flex -translate-x-1/2 gap-5 text-[#EAB308] sm:-top-7">
                          <span className="h-2 w-2 rounded-full bg-current" />
                          <span className="h-2 w-2 rounded-full bg-current" />
                          <span className="h-2 w-2 rounded-full bg-current" />
                        </span>
                      ) : null}

                      {part.breakAfter ? <br /> : null}
                    </span>
                  ))}
                </p>
              </div>

              {index < pinnedMessages.length - 1 ? (
                <div
                  className={`mx-auto my-8 w-full border-t border-[#D8D2C8] transition-all duration-300 sm:my-10 ${
                    isInView ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 150 + 120}ms` }}
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
