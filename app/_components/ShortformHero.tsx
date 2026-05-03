"use client";

import type { CSSProperties, KeyboardEvent, PointerEvent } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Send, X } from "lucide-react";

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

function wrapIndex(value: number, length: number) {
  return ((value % length) + length) % length;
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
  isPaused,
  onSelect,
}: {
  item: ShortformVideo;
  slot: PhoneSlot;
  direction: number;
  isPaused: boolean;
  onSelect: (item: ShortformVideo) => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const style = {
    "--slot-x": slot.x,
    "--slot-y": slot.y,
    "--slot-rotate": slot.rotate,
    "--slot-scale": slot.scale.toString(),
    "--enter-x": direction > 0 ? "-18px" : "18px",
    zIndex: slot.z,
  } as CSSProperties;

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (isPaused) {
      video.pause();
      return;
    }

    video.muted = true;
    void video.play().catch(() => undefined);
  }, [isPaused, item.videoSrc]);

  return (
    <div className="shortform-phone-slot" data-slot={slot.slot} style={style}>
      <article
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
              ref={videoRef}
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
        </div>
      </article>
    </div>
  );
}

function ReelsModal({ item, onClose }: { item: ShortformVideo; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const stopVideo = useCallback(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.pause();
    video.muted = true;

    try {
      video.currentTime = 0;
    } catch {
      // Metadata can arrive after close on slower devices.
    }
  }, []);

  const closeModal = useCallback(() => {
    stopVideo();
    setIsVisible(false);
    onClose();
  }, [onClose, stopVideo]);

  useEffect(() => {
    const animationFrameId = window.requestAnimationFrame(() => setIsVisible(true));
    const video = videoRef.current;

    if (video) {
      video.muted = false;
      video.volume = 1;
      void video.play().catch(() => undefined);
    }

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      stopVideo();
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeModal, stopVideo]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-6 transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.id}번 숏폼 원본 영상 보기`}
      onClick={closeModal}
    >
      <button
        type="button"
        aria-label="영상 닫기"
        className="absolute right-4 top-4 z-[110] grid h-11 w-11 place-items-center rounded-full bg-black/45 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-black/65 focus:outline-none focus:ring-4 focus:ring-white/25 sm:right-6 sm:top-6 sm:h-12 sm:w-12"
        onClick={(event) => {
          event.stopPropagation();
          closeModal();
        }}
      >
        <X className="h-7 w-7" strokeWidth={3} />
      </button>

      <div
        className={`relative aspect-[9/16] h-[min(88vh,900px)] max-h-[90vh] max-w-[92vw] overflow-hidden rounded-[1.5rem] bg-black shadow-[0_24px_80px_rgba(0,0,0,0.5)] transition-transform duration-200 ${
          isVisible ? "scale-100" : "scale-[0.985]"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <video
          ref={videoRef}
          className="h-full w-full object-contain"
          src={item.videoSrc}
          poster={item.poster}
          autoPlay
          controls
          loop
          playsInline
          preload="metadata"
        />

        <div className="pointer-events-none absolute inset-0 text-white">
          <button
            type="button"
            aria-label="영상 닫기"
            className="pointer-events-auto absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-black/55 focus:outline-none focus:ring-4 focus:ring-white/25"
            onClick={closeModal}
          >
            <ChevronLeft className="h-8 w-8" strokeWidth={3.2} />
          </button>

          <div className="absolute bottom-24 right-4 flex flex-col items-center gap-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)] sm:bottom-28">
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
    </div>
  );
}

function PhoneFanCarousel() {
  const [firstVideoIndex, setFirstVideoIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState<ShortformVideo | null>(null);
  const startXRef = useRef<number | null>(null);
  const hasDraggedRef = useRef(false);

  const moveBy = useCallback((delta: number) => {
    setDirection(delta > 0 ? 1 : -1);
    setFirstVideoIndex((current) => wrapIndex(current - delta, shortformVideos.length));
  }, []);

  useEffect(() => {
    if (selectedVideo) {
      return;
    }

    const timer = window.setInterval(() => moveBy(1), 4000);
    return () => window.clearInterval(timer);
  }, [moveBy, selectedVideo]);

  const visibleItems = useMemo(
    () =>
      phoneSlots.map((slot) => ({
        slot,
        item: shortformVideos[wrapIndex(firstVideoIndex + slot.slot, shortformVideos.length)],
      })),
    [firstVideoIndex],
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

    moveBy(distance > 0 ? 1 : -1);
  };

  const dotCount = 5;
  const pageSize = Math.ceil(shortformVideos.length / dotCount);
  const activeDot = Math.min(dotCount - 1, Math.floor(wrapIndex(firstVideoIndex, shortformVideos.length) / pageSize));

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
          <PhoneCard
            key={item.id}
            item={item}
            slot={slot}
            direction={direction}
            isPaused={Boolean(selectedVideo)}
            onSelect={setSelectedVideo}
          />
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
              setFirstVideoIndex(Math.min(index * pageSize, shortformVideos.length - 1));
            }}
          />
        ))}
      </div>

      {selectedVideo && <ReelsModal item={selectedVideo} onClose={() => setSelectedVideo(null)} />}
    </div>
  );
}

export function ShortformHero() {
  const typingRef = useRef<HTMLElement | null>(null);
  const isHeroReleasedRef = useRef(false);
  const isTypingRef = useRef(true);
  const currentPhaseRef = useRef<TypingPhase>(0);
  const touchStartYRef = useRef(0);
  const [activePhase, setActivePhase] = useState<TypingPhase>(0);
  const [typedCount, setTypedCount] = useState(1);

  const canPinHero = useCallback(() => {
    const section = typingRef.current;

    if (!section || isHeroReleasedRef.current) {
      return false;
    }

    const rect = section.getBoundingClientRect();
    return rect.top <= 1 && rect.bottom > 0;
  }, []);

  const beginTyping = useCallback((phase: TypingPhase) => {
    if (currentPhaseRef.current === phase) {
      return;
    }

    currentPhaseRef.current = phase;
    isTypingRef.current = true;
    setActivePhase(phase);
    setTypedCount(1);
  }, []);

  const triggerNextSentence = useCallback(() => {
    if (isHeroReleasedRef.current || isTypingRef.current || currentPhaseRef.current === 2) {
      return;
    }

    beginTyping((currentPhaseRef.current + 1) as TypingPhase);
  }, [beginTyping]);

  useEffect(() => {
    const totalLength = partLength(typingMessages[activePhase]);
    const intervalId = window.setInterval(() => {
      setTypedCount((currentCount) => {
        const nextCount = Math.min(currentCount + 1, totalLength);

        if (nextCount === totalLength) {
          window.clearInterval(intervalId);
          isTypingRef.current = false;

          if (activePhase === 2) {
            isHeroReleasedRef.current = true;
          }
        }

        return nextCount;
      });
    }, activePhase === 2 ? 38 : 30);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [activePhase]);

  useEffect(() => {
    const lockToHeroTop = () => {
      const section = typingRef.current;

      if (section) {
        window.scrollTo({ top: section.offsetTop, behavior: "instant" });
      }
    };

    const onWheel = (event: WheelEvent) => {
      if (!canPinHero() || event.deltaY <= 1) {
        return;
      }

      event.preventDefault();
      lockToHeroTop();
      triggerNextSentence();
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartYRef.current = event.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (!canPinHero()) {
        return;
      }

      const currentY = event.touches[0]?.clientY ?? touchStartYRef.current;
      const deltaY = touchStartYRef.current - currentY;

      if (deltaY <= 3) {
        touchStartYRef.current = currentY;
        return;
      }

      event.preventDefault();
      lockToHeroTop();
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
    };
  }, [canPinHero, triggerNextSentence]);

  const firstOpacity = activePhase === 0 ? 1 : 0;
  const secondOpacity = activePhase === 1 ? 1 : 0;
  const thirdOpacity = activePhase === 2 ? 1 : 0;

  return (
    <>
      <section ref={typingRef} id="top" className="shortform-typing-hero relative mx-auto mt-0 w-full max-w-[1920px] bg-[#f7f7f7] pt-0">
        <div className="shortform-typing-stage sticky top-0 z-10 grid !h-[800px] place-items-center overflow-hidden px-4 pt-0 text-center sm:px-6 lg:px-8">
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
