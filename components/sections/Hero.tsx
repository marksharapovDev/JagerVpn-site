"use client";

// VIDEO: place hero-model.webm in /public/hero-model.webm

import PingPongVideo from "@/components/ui/PingPongVideo"
import { SITE_CONFIG } from "@/lib/constants"
import { motion } from "framer-motion"

export function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="hero-gradient relative flex flex-col sm:flex-row min-h-screen sm:items-center overflow-hidden"
    >
      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 py-6 sm:py-16 sm:px-6 lg:px-8 flex-1 flex flex-col">
        <div className="max-w-2xl w-full mx-auto sm:mx-0 flex-1 flex flex-col sm:block">
          {/* Mobile: bottle video instead of logo + name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="sm:hidden -mx-4 flex justify-center"
            style={{ transform: "scale(1.55)", transformOrigin: "top center" }}
          >
            <PingPongVideo src="/hero-model.webm" className="w-full h-auto" />
          </motion.div>

          {/* Spacer: pushes tagline + buttons to the bottom on mobile */}
          <div className="flex-1 sm:hidden" />

          {/* Main heading — desktop only */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mb-8 text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl hidden sm:block"
          >
            <span
              className="glass-hero"
              style={{ paddingBottom: "0.15em", marginBottom: "-0.15em" }}
            >
              {SITE_CONFIG.siteName}
            </span>
          </motion.h1>

          {/* Mobile: tagline + buttons grouped, buttons match tagline width */}
          {/* sm:contents makes the wrapper invisible on desktop */}
          <div className="flex flex-col w-fit mx-auto sm:contents">
            {/* Tagline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="mb-4 text-2xl font-semibold sm:text-3xl glass-heading whitespace-nowrap sm:text-left"
            >
              {SITE_CONFIG.tagline}
            </motion.h2>

            {/* Description — desktop only */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="mb-10 max-w-xl text-base sm:text-lg glass-body sm:text-left hidden sm:block"
            >
              Безопасность в сети, обход блокировок, анонимность - всё это доступно с JagerVPN. Защитите свои данные и наслаждайтесь свободой интернета уже сегодня.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-start mb-8 sm:mb-0"
            >
              <div className="glass-btn-wrap sm:inline-block sm:w-auto">
                <button
                  onClick={() => scrollTo("#cta")}
                  className="glass-btn glass-btn-green w-full text-base sm:w-auto"
                >
                  <span>Подключиться</span>
                </button>
                <div className="glass-btn-shadow" />
              </div>
              <div className="glass-btn-wrap sm:inline-block sm:w-auto">
                <button
                  onClick={() => scrollTo("#features")}
                  className="glass-btn w-full text-base sm:w-auto"
                >
                  <span>Узнать больше</span>
                </button>
                <div className="glass-btn-shadow" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
