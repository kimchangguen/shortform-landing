"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type ShortformVideo = { id: number; src: string; poster: string };
type Selection = { video: ShortformVideo; mode: "hover" | "manual" };

function VideoPreview({ video }: { video: ShortformVideo }) {
  const playerRef = useRef<HTMLVideoElement>(null);
  const [needsPlay, setNeedsPlay] = useState(false);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;
    let disposed = false;
    player.play().catch((error: DOMException) => {
      if (!disposed && error.name !== "AbortError") setNeedsPlay(true);
    });
    return () => {
      disposed = true;
      player.pause();
      player.currentTime = 0;
      player.removeAttribute("src");
      player.load();
    };
  }, []);

  return (
    <>
      <video
        ref={playerRef}
        src={video.src}
        poster={video.poster}
        autoPlay
        muted
        playsInline
        loop
        controls
        preload="metadata"
        onPlay={() => setNeedsPlay(false)}
        onError={() => setNeedsPlay(true)}
        aria-label={"숏폼 포트폴리오 " + video.id}
      />
      {needsPlay && (
        <button
          type="button"
          className="portfolio-preview-retry"
          onClick={() => {
            const player = playerRef.current;
            if (!player) return;
            if (player.error) player.load();
            player.play().catch(() => setNeedsPlay(true));
          }}
        >
          영상 재생
        </button>
      )}
    </>
  );
}

export function PortfolioMarquee({ videos }: { videos: ShortformVideo[] }) {
  const [selection, setSelection] = useState<Selection | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const switchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const restoreFocus = useRef(false);

  const cancelClose = useCallback(() => {
    if (switchTimer.current !== null) {
      clearTimeout(switchTimer.current);
      switchTimer.current = null;
    }
    if (closeTimer.current !== null) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const closePreview = useCallback(() => {
    cancelClose();
    setIsOpen(false);
    if (restoreFocus.current) triggerRef.current?.focus({ preventScroll: true });
    restoreFocus.current = false;
  }, [cancelClose]);

  const scheduleClose = () => {
    if (selection?.mode !== "hover") return;
    cancelClose();
    closeTimer.current = setTimeout(closePreview, 500);
  };

  const openPreview = (
    video: ShortformVideo,
    mode: Selection["mode"],
    trigger: HTMLButtonElement,
    keyboard = false,
  ) => {
    if (mode === "hover" && isOpen && selection?.mode === "manual") return;
    cancelClose();
    triggerRef.current = trigger;
    restoreFocus.current = keyboard;
    setSelection({ video, mode });
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) return;
    if (selection?.mode === "manual") closeButtonRef.current?.focus({ preventScroll: true });
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePreview();
    };
    const onVisibilityChange = () => {
      if (document.hidden) closePreview();
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", closePreview, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", closePreview);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [isOpen, selection?.mode, closePreview]);

  useEffect(() => cancelClose, [cancelClose]);

  // Keep original assignments unique and distribute any remainder across the first rows.
  let offset = 0;
  const rows = Array.from({ length: 3 }, (_, row) => {
    const count = Math.floor(videos.length / 3) + (row < videos.length % 3 ? 1 : 0);
    const items = videos.slice(offset, offset + count);
    offset += count;
    return items;
  });

  return (
    <>
      <div className="portfolio-marquee" data-paused={isOpen} aria-label="숏폼 영상 포트폴리오">
        {rows.map((items, row) => (
          <div className="portfolio-row" key={row} aria-label={"포트폴리오 " + (row + 1) + "번째 줄"}>
            <div className={"portfolio-track portfolio-track--" + (row + 1)}>
              {[false, true].map((duplicate) => (
                <div className="portfolio-group" key={String(duplicate)} aria-hidden={duplicate || undefined} data-copy={duplicate}>
                  {items.map((video) => (
                    <button
                      type="button"
                      className="portfolio-card"
                      key={video.id}
                      data-video-id={video.id}
                      aria-label={"숏폼 영상 " + video.id + " 미리보기"}
                      aria-haspopup="dialog"
                      tabIndex={duplicate ? -1 : 0}
                      onPointerEnter={(event) => {
                        if (event.pointerType === "mouse" && window.matchMedia("(hover: hover)").matches) {
                          const trigger = event.currentTarget;
                          cancelClose();
                          if (isOpen && selection?.video.id !== video.id) {
                            // Crossing another card on the way to the preview must not switch videos.
                            switchTimer.current = setTimeout(() => openPreview(video, "hover", trigger), 180);
                          } else {
                            openPreview(video, "hover", trigger);
                          }
                        }
                      }}
                      onPointerLeave={scheduleClose}
                      onClick={(event) => openPreview(video, "manual", event.currentTarget, event.detail === 0)}
                    >
                      {/* Pre-generated posters avoid all MP4 requests until selection. */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={video.poster} alt="" width={360} height={640} loading="lazy" decoding="async" draggable={false} />
                      <span className="portfolio-card-play" aria-hidden="true">▶</span>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selection && createPortal(
        <div className={"portfolio-preview-layer " + (isOpen ? "is-open" : "")} aria-hidden={!isOpen}>
          <div
            className={"portfolio-preview-backdrop " + (selection.mode === "manual" ? "is-interactive" : "")}
            onPointerDown={closePreview}
          />
          <div
            className="portfolio-preview"
            role="dialog"
            aria-label={"숏폼 영상 " + selection.video.id + " 미리보기"}
            onPointerEnter={cancelClose}
            onPointerLeave={scheduleClose}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="portfolio-preview-poster" src={selection.video.poster} alt="" />
            {isOpen && <VideoPreview key={selection.video.src} video={selection.video} />}
            <button
              ref={closeButtonRef}
              type="button"
              className="portfolio-preview-close"
              aria-label="미리보기 닫기"
              tabIndex={isOpen ? 0 : -1}
              onClick={closePreview}
            >
              ×
            </button>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
