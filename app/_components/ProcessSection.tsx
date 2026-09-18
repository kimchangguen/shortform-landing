"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./ProcessSection.module.css";

const steps = [
  {
    number: "01", label: "PLANNING", title: "기획",
    description: "매출 터지는 영상 콘셉트 및 알고리즘 최적화 전략 기획",
    image: "/process-media/process-1.jpg", pill: "알고리즘 최적화",
  },
  {
    number: "02", label: "SHOOTING", title: "촬영",
    description: "구매 욕구를 자극하는 식당 맞춤 고퀄리티 촬영",
    image: "/process-media/process-2.jpg", pill: "고퀄리티 촬영",
  },
  {
    number: "03", label: "EDITING", title: "콘텐츠 제작",
    description: "쇼츠, 릴스 등 트렌드에 맞는 숏폼 영상 20개 제작",
    image: "/process-media/process-3.jpg", pill: "숏폼 영상 20개",
  },
  {
    number: "04", label: "UPLOAD", title: "업로드",
    description: "총 팔로워 240만 이상의 32개 채널 동시 업로드",
    image: "/process-media/process-4.jpg", pill: "32개 채널",
  },
  {
    number: "05", label: "GROWTH", title: "성과 확산",
    description: "SNS 상위노출 최적화부터 스폰서드 광고 셋팅까지",
    image: "/visit-effect/phone-social-visual.jpg", pill: "성과를 위한 모든 과정",
  },
];

export function ProcessSection() {
  const triggerRef = useRef<HTMLSpanElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || !("IntersectionObserver" in window)) {
      setIsExpanded(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsExpanded(true);
        observer.disconnect();
      }
    }, { rootMargin: "0px 0px -35% 0px", threshold: 0 });

    const onMotionChange = () => {
      if (motion.matches) {
        setIsExpanded(true);
        observer.disconnect();
      }
    };
    observer.observe(trigger);
    motion.addEventListener("change", onMotionChange);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <section
      id="production-process"
      aria-labelledby="process-title"
      className={styles.section}
      data-expanded={isExpanded}
    >
      <header className={styles.heading}>
        <p className={styles.eyebrow}>PROCESS</p>
        <h2 id="process-title">이렇게 <span>진행됩니다</span></h2>
        <p className={styles.handwriting}>
          기획부터 확산까지, 한 번에.
          <svg aria-hidden="true" viewBox="0 0 360 18" preserveAspectRatio="none">
            <path d="M5 12C77 4 128 15 186 9C244 3 290 12 354 6" />
          </svg>
        </p>
      </header>

      <div className={styles.stage}>
        <span ref={triggerRef} className={styles.trigger} aria-hidden="true" />
        <div
          className={styles.viewport}
          role="region"
          aria-label="5단계 진행 과정"
          tabIndex={0}
          onFocus={() => setIsExpanded(true)}
        >
          <ol className={styles.deck}>
            {steps.map((step, index) => (
              <li
                key={step.number}
                className={styles.step}
                data-process-card={step.number}
                style={{ "--index": index, "--distance": Math.abs(index - 2) } as CSSProperties}
              >
                <article className={styles.card}>
                  <div className={styles.label}>
                    <span className={styles.badge}>{step.number}</span>
                    <span>{step.label}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p className={styles.description}>{step.description}</p>
                  <div className={styles.image}>
                    <img src={step.image} alt="" loading="lazy" decoding="async" width={640} height={400} />
                  </div>
                  <span className={styles.pill}>{step.pill}</span>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
