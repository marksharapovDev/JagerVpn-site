"use client";

import { useEffect, useRef } from "react";

/**
 * Intercepts wheel / touch / keyboard events and snaps the page
 * to the nearest <section id="..."> inside <main>.
 * Smooth animation is provided by window.scrollTo({ behavior: "smooth" }).
 */
export function FullPageScroller() {
  const isScrollingRef = useRef(false);
  const scrollEndTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const touchStartYRef = useRef(0);

  useEffect(() => {
    // On touch-screen devices (mobile/tablet) use native scroll
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const getSections = () =>
      Array.from(
        document.querySelectorAll("main section[id]")
      ) as HTMLElement[];

    const getCurrentIndex = (sections: HTMLElement[]) => {
      const viewportCenter = window.scrollY + window.innerHeight / 2;
      let closest = 0;
      let minDist = Infinity;
      sections.forEach((section, i) => {
        const top = section.getBoundingClientRect().top + window.scrollY;
        const center = top + section.offsetHeight / 2;
        const dist = Math.abs(viewportCenter - center);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      return closest;
    };

    const goToSection = (sections: HTMLElement[], index: number) => {
      if (index < 0 || index >= sections.length) return;
      if (isScrollingRef.current) return;

      isScrollingRef.current = true;
      const targetY =
        sections[index].getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    };

    // Reset the "is scrolling" lock ~150 ms after the last scroll event
    const onScrollActivity = () => {
      if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);
      scrollEndTimerRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 150);
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrollingRef.current) return;

      const sections = getSections();
      const current = getCurrentIndex(sections);
      if (e.deltaY > 0) {
        goToSection(sections, current + 1);
      } else if (e.deltaY < 0) {
        goToSection(sections, current - 1);
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (!["ArrowDown", "ArrowUp", "PageDown", "PageUp"].includes(e.key))
        return;
      e.preventDefault();
      if (isScrollingRef.current) return;

      const sections = getSections();
      const current = getCurrentIndex(sections);
      const dir = e.key === "ArrowDown" || e.key === "PageDown" ? 1 : -1;
      goToSection(sections, current + dir);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      const diff = touchStartYRef.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 50 || isScrollingRef.current) return;
      const sections = getSections();
      const current = getCurrentIndex(sections);
      goToSection(sections, current + (diff > 0 ? 1 : -1));
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScrollActivity, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScrollActivity);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);
    };
  }, []);

  return null;
}
