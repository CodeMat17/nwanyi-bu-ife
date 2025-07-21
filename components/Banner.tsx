// src/components/Banner.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fascinate } from "./FascinateFont";
import { Badge } from "./ui/badge";

export default function Banner() {
  return (
    <motion.div
      className='bg-gradient-to-r from-sky-700 via-sky-700 to-amber-800 text-white py-8'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row items-center gap-3'>
          <Image
            alt='logo'
            width={150}
            height={100}
            src='/logo.webp'
            className='object-cover mr-3'
          />
          <div className='text-center md:text-left mb-4 md:mb-0 max-w-4xl'>
            <Badge className='bg-amber-500 text-lg rounded-full px-4 text-white'>
              2025 Theme
            </Badge>
            <h1
              className={`${fascinate.className} mt-3 text-4xl md:text-5xl font-bold text-amber-500`}>
              A Woman and Her Power: <br />
              From Potential to Impact
            </h1>
            <p className='mt-8 font-semibold text-sm whitespace-nowrap'>
              November 7, 2025
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
