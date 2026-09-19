"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, BarChart3, BatteryFull, Check, ChevronLeft, Heart, MapPin, Pause, Play, Search, Signal, SlidersHorizontal, Star, UsersRound, Wifi } from "lucide-react";
import styles from "./PlaceGrowthSection.module.css";

const poster = (id: number) => `/videos/shorts/posters/a%20(${id}).jpg`;
const restaurants = [
  { name: "오후의 파스타", category: "이탈리안", rating: "4.98", description: "한 입에 반하는 시그니처 파스타", tags: ["생면 파스타", "분위기 맛집"], image: 4 },
  { name: "테이블 온", category: "양식", rating: "4.87", description: "함께 즐기는 따뜻한 한 끼", tags: ["데이트", "예약 가능"], image: 3 },
  { name: "키친 모먼트", category: "이탈리안", rating: "4.82", description: "매일 새롭게 준비하는 제철 메뉴", tags: ["오늘의 메뉴", "주차 가능"], image: 8 },
];

function SearchResult({ index }: { index: number }) {
  const restaurant = restaurants[index];
  return (
    <article className={`${styles.searchResult} ${index === 0 ? styles.firstResult : ""}`} aria-label={`${index + 1}위 ${restaurant.name}`}>
      {index === 0 && <div className={styles.rankLabel}><ArrowUpRight size={13} aria-hidden="true" /> 지금 주목받는 맛집</div>}
      <div className={styles.resultContent}>
        <span className={styles.rank}>{String(index + 1).padStart(2, "0")}</span>
        <div className={styles.resultText}>
          <h4>{restaurant.name}</h4>
          <span className={styles.category}>{restaurant.category}</span>
          <p className={styles.rating}><Star size={11} fill="currentColor" aria-hidden="true" /> {restaurant.rating}<span>방문자 리뷰</span></p>
        </div>
        <img src={poster(restaurant.image)} alt={`${restaurant.name} 메뉴 예시`} width={76} height={82} loading="lazy" />
      </div>
      <p className={styles.resultDescription}>{restaurant.description}</p>
      <div className={styles.tags}>{restaurant.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
    </article>
  );
}

function ShortformCards() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) video.pause();
    });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  async function toggleVideo() {
    const video = videoRef.current;
    if (!video) return;
    if (!video.paused) { video.pause(); return; }
    setFailed(false);
    if (!videoLoaded) {
      video.src = "/videos/shorts/a%20(4).mp4";
      setVideoLoaded(true);
    }
    try { await video.play(); } catch { setFailed(true); }
  }

  return (
    <div className={styles.shortformCards}>
      <div className={`${styles.shortCard} ${styles.backLeft}`} aria-hidden="true"><img src={poster(3)} alt="" width={180} height={320} loading="lazy" /></div>
      <div className={`${styles.shortCard} ${styles.backRight}`} aria-hidden="true"><img src={poster(8)} alt="" width={180} height={320} loading="lazy" /></div>
      <div className={`${styles.shortCard} ${styles.mainCard}`}>
        <video ref={videoRef} poster={poster(4)} preload="none" muted playsInline onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} onError={() => { setPlaying(false); setFailed(true); }} aria-label="파스타 음식 숏폼 예시" />
        <span className={styles.shortsLabel}><Play size={12} fill="currentColor" aria-hidden="true" /> SHORTS</span>
        <button type="button" className={`${styles.playButton} ${playing ? styles.playing : ""}`} onClick={toggleVideo} aria-label={playing ? "숏폼 일시정지" : failed ? "숏폼 다시 재생" : "음식 숏폼 재생"}>
          {playing ? <Pause size={25} fill="currentColor" /> : <Play size={27} fill="currentColor" />}
        </button>
        <div className={styles.videoCaption}><span>눈길을 끄는 한 장면</span><strong>오늘, 여기 어때요?</strong></div>
        <Heart className={styles.videoHeart} size={20} aria-hidden="true" />
        {failed && <span className={styles.videoError} role="status">눌러서 다시 재생</span>}
      </div>
    </div>
  );
}

export function PlaceGrowthSection() {
  const groupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const group = groupRef.current;
    if (!group || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = group.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.visible = "true";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach(element => { element.dataset.visible = "false"; observer.observe(element); });
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={groupRef} className={styles.infographic} role="group" aria-labelledby="place-growth-title">
      <div className={styles.title} data-reveal="up">
        <p className={styles.eyebrow}>SHORTS <span aria-hidden="true">↗</span> PLACE</p>
        <h3 id="place-growth-title">숏폼으로<br /><span className={styles.blue}><span className={styles.marker}>플레이스<svg viewBox="0 0 240 22" preserveAspectRatio="none" aria-hidden="true"><path d="M6 14C48 5 96 18 132 10C168 3 200 16 234 8" /></svg></span> 상승</span></h3>
      </div>

      <div className={styles.shorts} data-reveal="left"><ShortformCards /></div>

      <div className={styles.connection} data-reveal="fade">
        <div className={styles.visitBubble}><UsersRound size={27} aria-hidden="true" /><span>영상 보고<br /><strong>매장 방문!</strong></span></div>
        <svg className={styles.connectArrow} viewBox="0 0 270 180" fill="none" aria-hidden="true"><path d="M15 151C80 149 82 44 161 44C203 44 226 62 250 82M222 82L253 85L250 53" /></svg>
      </div>

      <div className={styles.phonePosition} data-reveal="phone">
        <div className={styles.phone}>
          <div className={styles.phoneFrame}>
            <div className={styles.phoneScreen}>
              <div className={styles.statusBar}><span>9:41</span><div className={styles.dynamicIsland} /><div><Signal size={13} /><Wifi size={13} /><BatteryFull size={18} /></div></div>
              <div className={styles.searchHeader}><ChevronLeft size={20} aria-hidden="true" /><div className={styles.searchBox}><Search size={17} aria-hidden="true" /><span>강남 파스타 맛집</span><span className={styles.searchIcon}><Search size={15} aria-hidden="true" /></span></div></div>
              <div className={styles.tabs}><span>통합</span><span className={styles.activeTab}>장소</span><span>블로그</span><span>영상</span></div>
              <div className={styles.placeHeader}><h4><MapPin size={17} aria-hidden="true" /> 플레이스</h4><SlidersHorizontal size={16} aria-hidden="true" /></div>
              <div className={styles.location}><span>강남역 주변 맛집</span><span>관련도순</span></div>
              <div className={styles.results}><div className={styles.firstResultSpace} /><SearchResult index={1} /><SearchResult index={2} /></div>
              <p className={styles.sampleNote}>이해를 돕기 위한 가상의 검색 결과입니다.</p>
              <div className={styles.homeIndicator} />
            </div>
          </div>
          <div className={styles.floatingResult}><SearchResult index={0} /></div>
        </div>
      </div>

      <div className={styles.growth} data-reveal="fade">
        <div className={styles.bars} aria-hidden="true">{[22, 34, 48, 64, 83, 100].map(height => <span key={height} style={{ height: `${height}%` }} />)}</div>
        <svg className={styles.growthArrow} viewBox="0 0 240 310" fill="none" aria-hidden="true"><path d="M21 289C126 247 160 179 181 50M146 75L184 34L210 83" /></svg>
        <div className={styles.growthBubble}><BarChart3 size={31} aria-hidden="true" /><span>플레이스<br /><strong>노출 상승!</strong></span></div>
      </div>

      <div className={styles.benefitsPosition} data-reveal="right"><ul className={styles.benefits}>{["더 많은 고객 유입", "검색 노출 상승", "지속적인 매출 성장"].map(text => <li key={text}><span><Check size={13} strokeWidth={3} aria-hidden="true" /></span>{text}</li>)}</ul></div>
    </div>
  );
}
