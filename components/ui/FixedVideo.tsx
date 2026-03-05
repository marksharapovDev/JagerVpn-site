"use client";

import PingPongVideo from "@/components/ui/PingPongVideo"
import { motion } from "framer-motion"

/**
 * Fixed video panel — desktop (lg+) only.
 * Stays in the right 42vw of the viewport while all page content scrolls on the left.
 */
export function FixedVideo() {
  return (
    <motion.div
      className="hidden lg:flex fixed right-0 top-0 h-screen w-[42vw] items-center justify-center pointer-events-none z-[5]"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
    >
      {/* Left-edge fade so the video blends into the content side */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent" />
      <PingPongVideo className="w-[88%] h-auto" />
    </motion.div>
  );
}
