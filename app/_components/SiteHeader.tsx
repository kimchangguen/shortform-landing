"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigationItems = [
  { label: "왜 숏폼인가", href: "#why-shortform" },
  { label: "성공 사례", href: "#success-cases" },
  { label: "제작 과정", href: "#production-process" },
  { label: "서비스 비용", href: "#pricing" },
  { label: "상담 신청", href: "#consultation" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f5f3ef]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <a
          href="#top"
          className="shrink-0 text-lg font-black tracking-tight text-gray-950 transition-colors hover:text-red-600 sm:text-xl"
          onClick={() => setIsOpen(false)}
        >
          adgrit-Short-form
        </a>

        <nav aria-label="주요 메뉴" className="hidden items-center gap-1 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-bold text-gray-700 transition-colors hover:bg-white/80 hover:text-red-600 xl:text-base"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-grid h-10 w-10 place-items-center rounded-lg border border-gray-200 bg-white/70 text-gray-950 shadow-sm transition-colors hover:bg-white lg:hidden"
          aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`grid overflow-hidden border-t border-black/5 bg-[#f5f3ef]/95 transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <nav className="min-h-0" aria-label="모바일 주요 메뉴">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-bold text-gray-800 transition-colors hover:bg-white hover:text-red-600"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
