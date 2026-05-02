"use client";

import type { CSSProperties, KeyboardEvent, PointerEvent } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Send } from "lucide-react";

type ShortformVideo = {
  id: number;
  poster: string;
  videoSrc?: string;
  headline: string;
  subline: string;
  handle: string;
  caption: string;
  likes: string;
  comments: string;
  shares: string;
};

type PhoneSlot = {
  slot: number;
  x: string;
  y: string;
  rotate: string;
  scale: number;
  z: number;
};

type TextPart = {
  text: string;
  className?: string;
};

type TypingPhase = 0 | 1 | 2;

const baseVideos: Omit<ShortformVideo, "id">[] = [
  {
    poster: "/hero-media/media-1.jpg",
    headline: "갓 튀긴 바삭함!",
    subline: "이 집 치킨 미쳤다!",
    handle: "@food_lover",
    caption: "치즈마니아를 모아라",
    likes: "7.4만",
    comments: "5.9천",
    shares: "3.8천",
  },
  {
    poster: "/hero-media/media-2.jpg",
    headline: "치즈 폭포 비주얼",
    subline: "반칙이야...",
    handle: "@eat_now",
    caption: "오늘은 여기가 답",
    likes: "6.4만",
    comments: "4.8천",
    shares: "2.9천",
  },
  {
    poster: "/hero-media/media-3.jpg",
    headline: "오늘 저녁은 이거다!",
    subline: "#얼큰 #국물 #소주각",
    handle: "@mukbang_k",
    caption: "현지인픽 떡볶이",
    likes: "8.7만",
    comments: "6.2천",
    shares: "4.1천",
  },
  {
    poster: "/hero-media/media-4.jpg",
    headline: "꾸덕한 크림 파스타",
    subline: "완벽해...!",
    handle: "@pasta_queen",
    caption: "버거타운 인증 숏",
    likes: "7.3만",
    comments: "5.1천",
    shares: "3.7천",
  },
  {
    poster: "/hero-media/media-5.jpg",
    headline: "수제버거 끝판왕!",
    subline: "육즙 가득",
    handle: "@burger_holic",
    caption: "버거다운 한입",
    likes: "6.9만",
    comments: "4.2천",
    shares: "3.1천",
  },
  {
    poster: "/hero-media/media-6.jpg",
    headline: "카페 분위기 미쳤다",
    subline: "커피도 미쳤다!",
    handle: "@coffee_ins",
    caption: "밀크티의 진심",
    likes: "8.3만",
    comments: "2.1만",
    shares: "7.4천",
  },
];

const shortformVideos: ShortformVideo[] = Array.from({ length: 60 }, (_, index) => {
  const source = baseVideos[index % baseVideos.length];
  const round = Math.floor(index / baseVideos.length);

  return {
    ...source,
    id: index + 1,
    videoSrc: `/videos/shorts/a%20(${index + 1}).mp4`,
    handle: round === 0 ? source.handle : `${source.handle}_${round + 1}`,
  };
});

const phoneSlots: PhoneSlot[] = [
  { slot: 0, x: "13.3%", y: "52%", rotate: "-8deg", scale: 0.97, z: 16 },
  { slot: 1, x: "28.2%", y: "50%", rotate: "7deg", scale: 0.99, z: 24 },
  { slot: 2, x: "42.8%", y: "49%", rotate: "-5deg", scale: 1.04, z: 34 },
  { slot: 3, x: "57.2%", y: "49%", rotate: "-4deg", scale: 1.03, z: 32 },
  { slot: 4, x: "72.4%", y: "50.5%", rotate: "8deg", scale: 0.99, z: 24 },
  { slot: 5, x: "87.2%", y: "54%", rotate: "8deg", scale: 0.96, z: 16 },
];

const typingSecondParts: TextPart[] = [
  { text: "이제 고객은 검색보다 " },
  { text: "영상을", className: "text-[#e10b04]" },
  { text: " 봅니다" },
];

const typingThirdParts: TextPart[] = [
  { text: "숏폼으로", className: "block" },
  { text: "터집니다.", className: "mt-1 block text-[4.9rem] text-[#df0900] sm:text-[7.8rem] lg:text-[10.8rem]" },
];

const typingFirstParts: TextPart[] = [{ text: "요즘 맛집은 광고 안 합니다." }];

const typingMessages: [TextPart[], TextPart[], TextPart[]] = [typingFirstParts, typingSecondParts, typingThirdParts];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function partLength(parts: TextPart[]) {
  return parts.reduce((total, part) => total + Array.from(part.text).length, 0);
}

function renderTypedParts(parts: TextPart[], count: number) {
  let remaining = count;

  return parts.map((part, index) => {
    const characters = Array.from(part.text);
    const visibleCharacters = characters.slice(0, clamp(remaining, 0, characters.length)).join("");
    remaining -= characters.length;

    return (
      <span key={`${part.text}-${index}`} className={part.className}>
        {visibleCharacters}
      </span>
    );
  });
}

function DoodleUnderline() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute -bottom-1 left-1/2 h-3 w-[72%] -translate-x-1/2 text-[#df0900]"
      viewBox="0 0 420 32"
      fill="none"
    >
      <path
        d="M8 20C68 12 105 25 164 16C229 6 284 20 412 10"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M18 27C93 20 151 29 222 21C287 14 336 22 402 17"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

function DoodleStar() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute -right-28 -top-24 hidden h-14 w-14 text-[#df0900] md:block lg:-right-44 lg:-top-28 lg:h-16 lg:w-16"
      viewBox="0 0 80 80"
      fill="none"
    >
      <path
        d="M41 8L48 31L71 22L53 39L69 59L43 50L27 72L28 47L5 38L30 32L41 8Z"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path d="M31 19L55 64M61 19L17 56" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function TitleAccent() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute right-[-8.75rem] top-[55%] hidden h-28 w-24 text-[#df0900] md:block lg:right-[-10rem]"
      viewBox="0 0 120 150"
      fill="none"
    >
      <path d="M75 10C52 42 33 68 18 88" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path d="M95 65C63 80 38 92 17 101" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path d="M93 104C67 111 44 116 25 119" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

function ButtonBurst({ side }: { side: "left" | "right" }) {
  const sideClass =
    side === "left"
      ? "-left-10 top-[-1rem] rotate-[-14deg] md:-left-14"
      : "-right-10 bottom-[-1rem] rotate-[14deg] md:-right-14";

  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute h-16 w-16 text-black ${sideClass}`}
      viewBox="0 0 90 90"
      fill="none"
    >
      <path d="M45 10V30" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M20 24L34 38" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M10 52H30" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

function PhoneCard({
  item,
  slot,
  direction,
  onSelect,
}: {
  item: ShortformVideo;
  slot: PhoneSlot;
  direction: number;
  onSelect: (item: ShortformVideo) => void;
}) {
  const style = {
    "--slot-x": slot.x,
    "--slot-y": slot.y,
    "--slot-rotate": slot.rotate,
    "--slot-scale": slot.scale.toString(),
    "--enter-x": direction > 0 ? "18px" : "-18px",
    zIndex: slot.z,
  } as CSSProperties;

  return (
    <div className="shortform-phone-slot" data-slot={slot.slot} style={style}>
      <article
        key={`${item.id}-${slot.slot}`}
        className="shortform-phone-shell cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label={`${item.id}번 숏폼 릴스 크게 보기`}
        onClick={() => onSelect(item)}
        onKeyDown={(event: KeyboardEvent<HTMLElement>) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onSelect(item);
          }
        }}
      >
        <div className="shortform-phone-notch" />
        <div className="shortform-phone-screen">
          {item.videoSrc ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={item.videoSrc}
              poster={item.poster}
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
            />
          ) : (
            <img className="absolute inset-0 h-full w-full object-cover" src={item.poster} alt="" draggable={false} />
          )}

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.08)_43%,rgba(0,0,0,0.78)_100%)]" />

          <div className="absolute left-[7%] right-[7%] top-[4%] flex items-center justify-between text-[0.55rem] font-extrabold text-white sm:text-[0.62rem]">
            <span>9:31</span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-3 rounded-sm border border-white/90" />
              <span className="h-1.5 w-1 rounded-sm bg-white" />
            </span>
          </div>

          <div className="absolute left-[7%] top-[11%] text-white">
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={3} />
          </div>

          <div className="absolute left-[9%] right-[9%] top-[24%] text-center text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.55)]">
            <p className="break-keep text-[0.92rem] font-black leading-tight sm:text-[1.08rem]">{item.headline}</p>
            <p className="mt-1 break-keep text-[0.75rem] font-black leading-tight sm:text-[0.88rem]">{item.subline}</p>
          </div>

          <div className="absolute bottom-[20%] right-[7%] flex flex-col items-center gap-2 text-white">
            <div className="flex flex-col items-center">
              <Heart className="h-5 w-5 fill-white sm:h-6 sm:w-6" strokeWidth={2.5} />
              <span className="mt-0.5 text-[0.48rem] font-black sm:text-[0.55rem]">{item.likes}</span>
            </div>
            <div className="flex flex-col items-center">
              <MessageCircle className="h-5 w-5 fill-white sm:h-6 sm:w-6" strokeWidth={2.5} />
              <span className="mt-0.5 text-[0.48rem] font-black sm:text-[0.55rem]">{item.comments}</span>
            </div>
            <div className="flex flex-col items-center">
              <Send className="h-4 w-4 fill-white sm:h-5 sm:w-5" strokeWidth={2.5} />
              <span className="mt-0.5 text-[0.48rem] font-black sm:text-[0.55rem]">{item.shares}</span>
            </div>
          </div>

          <div className="absolute bottom-[7%] left-[7%] right-[7%] text-white">
            <div className="flex items-center gap-2">
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-pink-500 via-orange-400 to-yellow-300 text-[0.52rem] font-black">
                ad
              </span>
              <span className="min-w-0 flex-1 truncate text-[0.58rem] font-black sm:text-[0.66rem]">{item.handle}</span>
              <span className="rounded-full border border-white/70 px-2 py-0.5 text-[0.48rem] font-black sm:text-[0.55rem]">
                팔로우
              </span>
            </div>
            <p className="mt-1 truncate text-[0.58rem] font-black sm:text-[0.66rem]">{item.caption}</p>
            <div className="mt-2 h-1 w-20 rounded-full bg-white/80" />
          </div>
        </div>
      </article>
    </div>
  );
}

function ReelsModal({ item, onClose }: { item: ShortformVideo; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/82 px-4 py-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.id}번 숏폼 릴스 보기`}
    >
      <button
        type="button"
        aria-label="릴스 닫기"
        className="absolute left-5 top-5 z-20 grid h-12 w-12 place-items-center rounded-full bg-black/35 text-white backdrop-blur-sm"
        onClick={onClose}
      >
        <ChevronLeft className="h-8 w-8" strokeWidth={3.2} />
      </button>

      <div className="relative h-[min(86vh,820px)] w-[min(92vw,462px)] overflow-hidden rounded-[2rem] bg-black shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={item.videoSrc}
          poster={item.poster}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0)_46%,rgba(0,0,0,0.72)_100%)]" />

        <div className="absolute left-5 right-5 top-5 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <ChevronLeft className="h-7 w-7" strokeWidth={3} />
            <span className="text-lg font-black">Reels</span>
          </div>
          <span className="text-sm font-black">9:31</span>
        </div>

        <div className="absolute bottom-8 left-5 right-20 text-white">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-pink-500 via-orange-400 to-yellow-300 text-xs font-black">
              ad
            </span>
            <span className="text-sm font-black">{item.handle}</span>
            <span className="rounded-full border border-white/70 px-3 py-1 text-xs font-black">팔로우</span>
          </div>
          <p className="mt-3 break-keep text-base font-black">{item.caption}</p>
        </div>

        <div className="absolute bottom-9 right-5 flex flex-col items-center gap-5 text-white">
          <div className="flex flex-col items-center">
            <Heart className="h-9 w-9 fill-white" strokeWidth={2.4} />
            <span className="mt-1 text-xs font-black">{item.likes}</span>
          </div>
          <div className="flex flex-col items-center">
            <MessageCircle className="h-9 w-9 fill-white" strokeWidth={2.4} />
            <span className="mt-1 text-xs font-black">{item.comments}</span>
          </div>
          <div className="flex flex-col items-center">
            <Send className="h-8 w-8 fill-white" strokeWidth={2.4} />
            <span className="mt-1 text-xs font-black">{item.shares}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneFanCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState<ShortformVideo | null>(null);
  const startXRef = useRef<number | null>(null);
  const hasDraggedRef = useRef(false);

  const moveBy = useCallback((delta: number) => {
    setDirection(delta > 0 ? 1 : -1);
    setActiveIndex((current) => (current + delta + shortformVideos.length) % shortformVideos.length);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => moveBy(1), 4800);
    return () => window.clearInterval(timer);
  }, [moveBy]);

  const visibleItems = useMemo(
    () =>
      phoneSlots.map((slot) => ({
        slot,
        item: shortformVideos[(activeIndex + slot.slot) % shortformVideos.length],
      })),
    [activeIndex],
  );

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    startXRef.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (startXRef.current === null) {
      return;
    }

    const distance = event.clientX - startXRef.current;
    startXRef.current = null;

    if (Math.abs(distance) < 36) {
      return;
    }

    moveBy(distance < 0 ? 1 : -1);
  };

  const dotCount = 5;
  const pageSize = Math.ceil(shortformVideos.length / dotCount);
  const activeDot = Math.min(dotCount - 1, Math.floor(activeIndex / pageSize));

  return (
    <div className="relative z-10 w-full">
      <div
        className="shortform-phone-fan"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          startXRef.current = null;
        }}
      >
        <button
          type="button"
          aria-label="이전 숏폼 보기"
          className="shortform-carousel-arrow left-0 sm:left-3"
          onClick={() => moveBy(-1)}
        >
          <ChevronLeft className="h-11 w-11 sm:h-14 sm:w-14" strokeWidth={4.2} />
        </button>

        {visibleItems.map(({ slot, item }) => (
          <PhoneCard key={slot.slot} item={item} slot={slot} direction={direction} />
        ))}

        <button
          type="button"
          aria-label="다음 숏폼 보기"
          className="shortform-carousel-arrow right-0 sm:right-3"
          onClick={() => moveBy(1)}
        >
          <ChevronRight className="h-11 w-11 sm:h-14 sm:w-14" strokeWidth={4.2} />
        </button>
      </div>

      <div className="mt-2 flex items-center justify-center gap-3 sm:mt-3">
        {Array.from({ length: dotCount }, (_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`${index + 1}번째 숏폼 묶음 보기`}
            className={`h-3 w-3 rounded-full transition-colors ${
              activeDot === index ? "bg-[#e10b04]" : "bg-[#cfcfcf]"
            }`}
            onClick={() => {
              setDirection(index >= activeDot ? 1 : -1);
              setActiveIndex(Math.min(index * pageSize, shortformVideos.length - 1));
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function ShortformHero() {
  const typingRef = useRef<HTMLElement | null>(null);
  const isHeroReleasedRef = useRef(false);
  const hasStartedRef = useRef(false);
  const isTypingRef = useRef(false);
  const isPhaseCompleteRef = useRef(false);
  const currentPhaseRef = useRef<TypingPhase>(0);
  const touchStartYRef = useRef(0);
  const [activePhase, setActivePhase] = useState<TypingPhase>(0);
  const [typedCount, setTypedCount] = useState(0);
  const [hasTypingStarted, setHasTypingStarted] = useState(false);

  const canPinHero = useCallback(() => {
    const section = typingRef.current;

    if (!section || isHeroReleasedRef.current) {
      return false;
    }

    const rect = section.getBoundingClientRect();
    return rect.top <= 0 && rect.bottom > 0;
  }, []);

  const beginTyping = useCallback((phase: TypingPhase) => {
    currentPhaseRef.current = phase;
    isTypingRef.current = true;
    isPhaseCompleteRef.current = false;
    setActivePhase(phase);
    setTypedCount(0);
    setHasTypingStarted(true);
  }, []);

  const triggerNextSentence = useCallback(() => {
    if (isHeroReleasedRef.current || isTypingRef.current) {
      return;
    }

    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      beginTyping(0);
      return;
    }

    if (!isPhaseCompleteRef.current || currentPhaseRef.current === 2) {
      return;
    }

    beginTyping((currentPhaseRef.current + 1) as TypingPhase);
  }, [beginTyping]);

  useEffect(() => {
    if (!hasTypingStarted || !isTypingRef.current) {
      return;
    }

    const totalLength = partLength(typingMessages[activePhase]);
    let intervalId: number | undefined;

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setTypedCount((currentCount) => {
          const nextCount = Math.min(currentCount + 1, totalLength);

          if (nextCount === totalLength) {
            if (intervalId) {
              window.clearInterval(intervalId);
            }

            isTypingRef.current = false;
            isPhaseCompleteRef.current = true;

            if (activePhase === 2) {
              isHeroReleasedRef.current = true;
            }
          }

          return nextCount;
        });
      }, activePhase === 2 ? 38 : 30);
    }, activePhase === 0 ? 80 : 110);

    return () => {
      window.clearTimeout(timeoutId);

      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [activePhase, hasTypingStarted]);

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      if (!canPinHero()) {
        return;
      }

      event.preventDefault();

      if (event.deltaY > 0) {
        triggerNextSentence();
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartYRef.current = event.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (!canPinHero()) {
        return;
      }

      const currentY = event.touches[0]?.clientY ?? touchStartYRef.current;
      const delta = touchStartYRef.current - currentY;

      event.preventDefault();

      if (delta > 0) {
        triggerNextSentence();
      }

      touchStartYRef.current = currentY;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [canPinHero, triggerNextSentence]);

  const firstOpacity = hasTypingStarted && activePhase === 0 ? 1 : 0;
  const secondOpacity = hasTypingStarted && activePhase === 1 ? 1 : 0;
  const thirdOpacity = hasTypingStarted && activePhase === 2 ? 1 : 0;

  return (
    <>
      <section ref={typingRef} id="top" className="shortform-typing-hero relative mx-auto !h-[800px] w-full max-w-[1920px] bg-[#f7f7f7]">
        <div className="shortform-typing-stage sticky top-0 z-10 grid !h-[800px] place-items-center overflow-hidden px-4 text-center sm:px-6 lg:px-8">
          <div className="relative flex h-full w-full max-w-[1920px] items-center justify-center">
            <div
              className="absolute inset-x-0 mx-auto w-fit transition-opacity duration-200"
              style={{ opacity: firstOpacity }}
            >
              <div className="relative inline-block">
                <p className="break-keep text-[2.2rem] font-black leading-tight text-black sm:text-[3.9rem] lg:text-[4.9rem]">
                  {renderTypedParts(typingFirstParts, activePhase === 0 ? typedCount : partLength(typingFirstParts))}
                </p>
                <DoodleUnderline />
              </div>
            </div>

            <p
              className="absolute inset-x-0 mx-auto break-keep text-[2.25rem] font-black leading-tight text-black transition-opacity duration-200 sm:text-[4.65rem] lg:text-[6.35rem]"
              style={{ opacity: secondOpacity }}
            >
              {renderTypedParts(typingSecondParts, activePhase === 1 ? typedCount : partLength(typingSecondParts))}
            </p>

            <div
              className="absolute inset-x-0 mx-auto w-fit break-keep text-center font-black leading-[0.92] text-black transition-opacity duration-200"
              style={{ opacity: thirdOpacity }}
            >
              <DoodleStar />
              <TitleAccent />
              <h1 className="text-[4.4rem] sm:text-[7.3rem] lg:text-[9.5rem]">
                {renderTypedParts(typingThirdParts, activePhase === 2 ? typedCount : partLength(typingThirdParts))}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="shortform-hero shortform-slider-section relative isolate overflow-hidden bg-[#f7f7f7] px-4 text-black sm:px-6 lg:px-8">
        <div className="relative mx-auto flex h-full w-full max-w-[1920px] flex-col items-center justify-center">
          <PhoneFanCarousel />

          <div className="relative z-20 mt-4 w-full max-w-[884px] px-2 sm:px-0">
            <ButtonBurst side="left" />
            <ButtonBurst side="right" />
            <a
              href="#consultation"
              className="group flex min-h-[4.5rem] w-full items-center justify-center gap-2 rounded-[1.25rem] bg-[#e10b04] px-3 text-center text-[1rem] font-black leading-tight text-white shadow-[0_16px_24px_rgba(225,11,4,0.25),0_6px_0_rgba(255,255,255,0.7)_inset] transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-red-200 min-[380px]:text-[1.05rem] sm:min-h-[5.8rem] sm:gap-5 sm:px-5 sm:text-[1.95rem] lg:min-h-[7rem] lg:text-[2.45rem]"
            >
              <span className="min-w-0 break-keep">무료 매장 진단받고 노출 구조 확인하기</span>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-[#111] shadow-sm min-[380px]:h-9 min-[380px]:w-9 sm:h-12 sm:w-12">
                <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5 min-[380px]:h-7 min-[380px]:w-7 sm:h-10 sm:w-10" strokeWidth={4} />
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
