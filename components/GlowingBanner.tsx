// src/components/GlowingBanner.tsx
"use client";

import { motion } from "framer-motion";
import { fascinate } from "./FascinateFont";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  subtitle: string;
  glowColor?: string;
};

export default function GlowingBanner({
  title,
  subtitle,
  glowColor = "from-amber-500/30 via-purple-500/20 to-amber-500/10",
}: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Traditional Uli symbols from Igbo culture
  const uliSymbols = [
    "ⵙ",
    "ⵚ",
    "ⵛ",
    "ⵜ",
    "ⵞ",
    "ⵟ",
    "ⵠ",
    "ⵡ",
    "◇",
    "○",
    "△",
    "□",
  ];

  return (
    <div className='relative py-8 overflow-hidden isolate'>
      {/* Cultural gradient background */}
      <div className='absolute inset-0 bg-gradient-to-br from-amber-600 via-purple-900 to-amber-800 dark:from-gray-900 dark:via-purple-950 dark:to-amber-950 z-0' />

      {/* Primary glow layer */}
      <div className={`absolute inset-0 bg-gradient-to-br ${glowColor} z-0`} />

      {/* Animated Uli symbols */}
      <div className='absolute inset-0 z-0 overflow-hidden'>
        {[...Array(isMobile ? 15 : 30)].map((_, i) => {
          const symbol =
            uliSymbols[Math.floor(Math.random() * uliSymbols.length)];
          return (
            <motion.div
              key={i}
              className='absolute text-purple-300 dark:text-amber-200'
              initial={{
                opacity: 0,
                scale: 0,
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, Math.random() * 0.5 + 0.5, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
              style={{
                fontSize: `${Math.random() * 20 + 16}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                textShadow: "0 0 8px rgba(192, 132, 252, 0.8)",
              }}
              aria-hidden='true'>
              {symbol}
            </motion.div>
          );
        })}
      </div>

      {/* Radial light accents */}
      <div className='absolute inset-0 z-0 overflow-hidden'>
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute bg-gradient-to-r from-transparent via-amber-300/20 to-transparent'
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.05, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: i * 2 }}
            style={{
              width: "150%",
              height: "1px",
              left: "-25%",
              top: "50%",
              rotate: i * 45,
              filter: "blur(0.5px)",
            }}
            aria-hidden='true'
          />
        ))}
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 text-center'>
        <motion.h1
          className={`${fascinate.className} text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-white drop-shadow-[0_0_12px_rgba(192,132,252,0.8)]`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          {title}
        </motion.h1>

        <motion.div
          className='w-24 h-1 mx-auto bg-gradient-to-r from-amber-400 to-purple-400 mb-6 md:mb-8 rounded-full'
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ boxShadow: "0 0 15px rgba(216, 180, 254, 0.8)" }}
          aria-hidden='true'
        />

        <motion.p
          className='text-lg md:text-xl lg:text-2xl font-medium max-w-3xl mx-auto text-amber-100 drop-shadow-[0_0_6px_rgba(192,132,252,0.4)]'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}>
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
}
