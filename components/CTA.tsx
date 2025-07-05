// src/components/CTA.tsx
import { motion } from "framer-motion";
import Link from "next/link";

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function CTA({
  title,
  description,
  buttonText,
  buttonLink,
}: CTAProps) {
  return (
    <section className='py-20 px-4 bg-gradient-to-r from-purple-800 to-sky-600 text-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='md:w-2/3 mb-8 md:mb-0'>
            <motion.h2
              className='text-3xl md:text-4xl font-playfair font-bold'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              {title}
            </motion.h2>
            <motion.p
              className='mt-4 text-lg max-w-2xl'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              {description}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}>
            <Link href={buttonLink}>
              <button className='bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg'>
                {buttonText}
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
