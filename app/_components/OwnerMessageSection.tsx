"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./OwnerMessageSection.module.css";

export function OwnerMessageSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.visible = "true";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    section.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
      element.dataset.visible = "false";
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="owner-message-title">
      <div className={styles.container}>
        <div className={styles.visual}>
          <div className={styles.portrait} data-reveal="person">
            <Image
              src="/owner-message/owner-portrait.webp"
              alt="매장 카운터에서 손가락을 앞으로 가리키는 사장님"
              width={1254}
              height={1254}
              sizes="(max-width: 599px) calc(100vw - 40px), (max-width: 899px) 440px, 560px"
              className={styles.personImage}
            />
          </div>

          <div className={`${styles.bubblePosition} ${styles.bubbleOne}`} data-reveal="left">
            <p className={styles.bubble}>
              영상 한 번으로<br />
              우리 매장이<br />
              <strong>이렇게 주목받을 줄</strong><br />
              몰랐어요!
            </p>
          </div>
          <div className={`${styles.bubblePosition} ${styles.bubbleTwo}`} data-reveal="upper-right">
            <p className={styles.bubble}>
              광고비는 계속 나가는데<br />
              <strong>효과는 미미했죠...</strong>
            </p>
          </div>
          <div className={`${styles.bubblePosition} ${styles.bubbleThree}`} data-reveal="right">
            <p className={styles.bubble}>
              시간도 없고<br />
              뭘 어떻게 해야 할지<br />
              <strong>막막했어요...</strong>
            </p>
          </div>
        </div>

        <div className={styles.message} data-reveal="message">
          <h2 id="owner-message-title">
            <span>숏폼으로</span>
            <span className={styles.accent}>
              매출상승!
              <svg viewBox="0 0 240 22" preserveAspectRatio="none" aria-hidden="true">
                <path d="M6 14C48 5 96 18 132 10C168 3 200 16 234 8" />
              </svg>
            </span>
          </h2>
          <p>사장님의 매장이 더 많은 사람에게 발견됩니다.</p>
        </div>
      </div>
    </section>
  );
}
