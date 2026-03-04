"use client";

// VIDEO: place hero-model.webm in /public/hero-model.webm

import { SITE_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="hero-gradient relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mb-8 text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl"
          >
            {/* Mobile: logo + name side by side */}
            <span className="flex items-center gap-3 sm:hidden">
              <Image
                src="/logo.svg"
                alt="JagerVPN лого"
                width={48}
                height={48}
                className="h-12 w-auto flex-shrink-0"
              />
              <span
                className="glass-hero"
                style={{ paddingBottom: "0.15em", marginBottom: "-0.15em" }}
              >
                {SITE_CONFIG.siteName}
              </span>
            </span>
            {/* Desktop: just the gradient text */}
            <span
              className="glass-hero hidden sm:inline-block"
              style={{ paddingBottom: "0.15em", marginBottom: "-0.15em" }}
            >
              {SITE_CONFIG.siteName}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mb-6 text-2xl font-semibold sm:text-3xl glass-heading"
          >
            {SITE_CONFIG.tagline}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mb-10 max-w-xl text-base sm:text-lg glass-body"
          >
            Защитите интернет-соединение с шифрованием военного уровня. Просматривайте
            анонимно, обходите блокировки и защищайте данные на любом устройстве.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start"
          >
            <div className="glass-btn-wrap block w-full sm:inline-block sm:w-auto">
              <button
                onClick={() => scrollTo("#cta")}
                className="glass-btn glass-btn-green w-full text-base sm:w-auto"
              >
                <span>Подключиться</span>
              </button>
              <div className="glass-btn-shadow" />
            </div>
            <div className="glass-btn-wrap block w-full sm:inline-block sm:w-auto">
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
    </section>
  );
}
