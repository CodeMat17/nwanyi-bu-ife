"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={`${centered ? "text-center" : ""}`}>
      <motion.h2
        className='text-3xl md:text-4xl font-joti font-bold '
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}>
        {title}
      </motion.h2>

      {subtitle && (
        <motion.div
          className='flex justify-center' // Added wrapper for consistent centering
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <p className='mt-2 text-lg text-amber-600 max-w-2xl text-center'>
            {subtitle}
          </p>
        </motion.div>
      )}

      <motion.div
        className={`bg-amber-500 h-1 w-20 mt-4 ${centered ? "mx-auto" : ""}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
    </div>
  );
}
