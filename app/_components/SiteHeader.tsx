"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "왜 숏폼인가", href: "#top" },
  { label: "포트폴리오", href: "#portfolio" },
  { label: "폭탄매출이유", href: "#bomb-sales" },
  { label: "핑퐁효과", href: "#pingpong" },
  { label: "가격비교", href: "#pricing" },
  { label: "견적확인", href: "#consultation" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#top");

  // Detect scroll to toggle header shadow/blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is currently in view
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`);
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      const target = document.querySelector(href);
      if (target) {
        const headerHeight = 90;
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - headerHeight,
          behavior: "smooth",
        });
      }
    },
    []
  );

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-[999] transition-all duration-500 ${
          scrolled
            ? "bg-white/60 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
        style={{ height: 86 }}
      >
        <div
          className="mx-auto flex h-full w-full items-center justify-between"
          style={{ maxWidth: 1440, paddingLeft: 48, paddingRight: 48 }}
        >
          {/* ─── Logo ─── */}
          <a
            href="#top"
            aria-label="ADGRIT"
            onClick={(e) => handleNavClick(e, "#top")}
            className="flex shrink-0 items-center"
            style={{ marginLeft: 130 }}
          >
            <Image
              src="/logo_01.png"
              alt="ADGRIT"
              width={400}
              height={114}
              priority
              unoptimized
              className="h-auto object-contain"
              style={{ width: 120 }}
            />
          </a>

          {/* ─── Desktop Nav ─── */}
          <nav
            className="hidden items-center gap-2 lg:flex"
            aria-label="메인 메뉴"
            style={{ marginRight: 80, fontFamily: "'Jua', sans-serif" }}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="nav-link-desktop group relative whitespace-nowrap px-[18px] py-2 transition-colors duration-200"
                style={{
                  fontSize: "15.5px",
                  letterSpacing: "0.08em",
                  color: activeSection === item.href ? "#0F3A2E" : "#444",
                  fontWeight: activeSection === item.href ? 800 : 700,
                }}
              >
                {item.label}
                {/* Animated underline */}
                <span
                  className="absolute bottom-0.5 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#0F3A2E] transition-all duration-300 ease-out group-hover:w-[calc(100%-36px)]"
                  style={{
                    width: activeSection === item.href ? "calc(100% - 36px)" : 0,
                  }}
                />
              </a>
            ))}

            {/* ─── Phone Number ─── */}
            <a
              href="tel:01066632336"
              className="ml-6 flex items-center gap-2 rounded-full bg-[#0F3A2E] text-white transition-all duration-300 hover:bg-[#1a5a47] hover:shadow-lg hover:shadow-[#0F3A2E]/20 active:scale-[0.97]"
              style={{
                padding: "12px 26px",
                borderRadius: 999,
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "0.02em",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              010-6663-2336
            </a>
          </nav>

          {/* ─── Mobile Hamburger ─── */}
          <button
            type="button"
            aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-[1001] flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span
              className="block h-[2px] w-5 rounded-full bg-[#222] transition-all duration-300"
              style={{
                transform: mobileOpen
                  ? "translateY(3.5px) rotate(45deg)"
                  : "none",
              }}
            />
            <span
              className="block h-[2px] w-5 rounded-full bg-[#222] transition-all duration-300"
              style={{
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-[2px] w-5 rounded-full bg-[#222] transition-all duration-300"
              style={{
                transform: mobileOpen
                  ? "translateY(-3.5px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </div>

        {/* ─── Premium Glassmorphism Blend ─── */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-[86px] h-[60px] transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(15,58,46,0.12) 50%, rgba(15,58,46,0.3) 100%)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
            opacity: scrolled ? 1 : 0,
          }}
        />
      </header>

      {/* ─── Mobile Overlay ─── */}
      <div
        className={`fixed inset-0 z-[998] bg-black/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ─── Mobile Drawer ─── */}
      <nav
        className={`fixed right-0 top-0 z-[999] flex h-full w-[min(320px,85vw)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="모바일 메뉴"
      >
        {/* Drawer top spacer */}
        <div className="flex h-[86px] shrink-0 items-center justify-end px-5">
          <button
            type="button"
            aria-label="메뉴 닫기"
            onClick={() => setMobileOpen(false)}
            className="flex h-10 w-10 items-center justify-center"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="#222"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <div className="flex flex-1 flex-col gap-1 px-5 pt-2" style={{ fontFamily: "'Jua', sans-serif" }}>
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="rounded-xl px-4 py-3.5 transition-all duration-200 hover:bg-[#f5f5f5]"
              style={{
                fontSize: "16px",
                color: activeSection === item.href ? "#0F3A2E" : "#333",
                fontWeight: activeSection === item.href ? 800 : 700,
                letterSpacing: "0.04em",
                animationDelay: `${i * 40}ms`,
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile CTA - Phone */}
        <div className="px-5 pb-8">
          <a
            href="tel:01066632336"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0F3A2E] py-4 text-[15px] font-bold text-white transition-all duration-300 hover:bg-[#1a5a47] active:scale-[0.97]"
            style={{ borderRadius: 999, letterSpacing: "0.02em", fontFamily: "'Jua', sans-serif" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            010-6663-2336
          </a>
        </div>
      </nav>

      {/* Header spacer so content isn't hidden behind fixed header */}
      <div style={{ height: 86 }} aria-hidden />
    </>
  );
}
