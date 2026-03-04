"use client";

import { useEffect } from "react";

/**
 * Updates --light-angle on :root as the user scrolls.
 * All glass-* CSS classes react to this variable, creating a
 * "light source shifting from above" effect as you scroll the page.
 */
export function ScrollLightProvider() {
  useEffect(() => {
    let ticking = false;

    const update = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;

      // Shift angle from 165° (top of page) to 192° (bottom)
      const angle = 165 + progress * 27;
      document.documentElement.style.setProperty(
        "--light-angle",
        `${angle}deg`
      );
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
