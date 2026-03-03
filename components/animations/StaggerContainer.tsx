"use client";

import { motion } from "framer-motion";

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  /** Delay before the first child starts animating */
  initialDelay?: number;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Wraps children and staggers their fade-in animations by 0.15s each
export function StaggerContainer({
  children,
  className,
  initialDelay = 0,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      variants={{
        ...containerVariants,
        visible: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: initialDelay,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

// Individual item to place directly inside StaggerContainer
export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
