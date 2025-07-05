// src/components/Banner.tsx
"use client"; // Add this directive at the top

import { motion } from "framer-motion";
import Image from "next/image";

interface BannerProps {
  title: string;
  subtitle: string;
}

export default function Banner({ title, subtitle }: BannerProps) {
  return (
    <motion.div
      className='bg-sky-700 text-white py-8'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}>
      <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:justify-between'>
        <div className='text-center md:text-left mb-4 md:mb-0'>
          <h2 className='text-2xl md:text-3xl font-playfair font-bold'>
            {title}
          </h2>
          <p className='text-amber-200 mt-1'>{subtitle}</p>
        </div>
        <div className='flex items-center'>
            <Image alt="logo" width={60} height={70} src='/logo.webp' className="object-cover mr-3" />
      
          <div className='text-sm'>
            <p>Countdown to Festival:</p>
            <p className='font-bold'>November 7, 2025</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
