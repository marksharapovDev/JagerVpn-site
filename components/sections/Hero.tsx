"use client";

// VIDEO: place hero-model.webm in /public/hero-model.webm

import { motion } from "framer-motion";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import PingPongVideo from "@/components/ui/PingPongVideo";


export function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="hero-gradient relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 pt-6 pb-32 sm:py-32 sm:px-6 lg:px-8 flex flex-col">

        {/* Two columns */}
        <div className="flex items-center justify-between gap-12">
          {/* Left column */}
          <div className="flex-1">
            {/* Main heading — gradient text */}
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
                  style={{
                    background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    display: "inline-block",
                    paddingBottom: "0.15em",
                    marginBottom: "-0.15em",
                  }}
                >
                  {SITE_CONFIG.siteName}
                </span>
              </span>
              {/* Desktop: just the gradient text */}
              <span
                className="hidden sm:inline-block"
                style={{
                  background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  paddingBottom: "0.15em",
                  marginBottom: "-0.15em",
                }}
              >
                {SITE_CONFIG.siteName}
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="mb-6 text-2xl font-semibold text-foreground sm:text-3xl"
            >
              {SITE_CONFIG.tagline}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="mb-10 max-w-xl text-base text-muted sm:text-lg"
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
              <button
                onClick={() => scrollTo("#cta")}
                className="w-full rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-background transition-all duration-300 hover:bg-primary-dark hover:shadow-[0_0_30px_rgba(0,229,160,0.35)] sm:w-auto"
              >
                Подключиться
              </button>
              <button
                onClick={() => scrollTo("#features")}
                className="w-full rounded-xl border border-border px-8 py-3.5 text-base font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary sm:w-auto"
              >
                Узнать больше
              </button>
            </motion.div>
          </div>

          {/* Right column — hidden on mobile */}
          <motion.div
            className="hidden md:flex flex-1 items-center justify-center -mt-16"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <PingPongVideo
              src="/hero-model.webm"
              className="w-full max-w-[500px] h-auto"
            />
          </motion.div>
        </div>


</div>
    </section>
  );
}
