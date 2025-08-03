"use client";

import CulturalPattern from "@/components/CulturalPattern";
import GlowingBanner from "@/components/GlowingBanner";
import ScrollingPartners from "@/components/partners/ScrollingPartners";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";


export default function PartnersPage() {

const partners = useQuery(api.partners.getPartnershipSupport)

  return (
    <div className='relative overflow-hidden'>
      <CulturalPattern />

      {/* Glowing Banner */}
      <GlowingBanner
        title='Our Partners & Sponsors'
        subtitle='Together we empower women, celebrate heritage, and drive meaningful change'
      />

      {/* Partnership Intro */}
      <section className='py-20 px-4 max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          {partners ? (
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>
              <div className='bg-amber-100 p-6 rounded-2xl inline-block mb-6'>
                <Handshake className='text-amber-500 w-12 h-12' />
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
{partners.title}              </h2>
              <p className='text-lg text-muted-foreground mb-6'>
               {partners.body}
              </p>
         
            </motion.div>
          ) : (
            <div className='flex justify-center py-48'>loading...</div>
          )}

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='grid grid-cols-2 gap-4'>
            <div className='bg-gradient-to-br from-amber-400 to-amber-700 rounded-2xl p-5 sm:p-8 text-white'>
              <div className='text-3xl sm:text-4xl font-bold mb-2'>15+</div>
              <div className='text-lg'>Corporate Partners</div>
            </div>
            <div className='bg-gradient-to-br from-sky-500 to-purple-800 rounded-2xl p-5 sm:p-8 text-white'>
              <div className='text-3xl sm:text-4xl font-bold mb-2'>3</div>
              <div className='text-lg'>Countries Represented</div>
            </div>
            <div className='bg-gradient-to-br from-sky-600 to-purple-700 rounded-2xl p-5 sm:p-8 text-white'>
              <div className='text-3xl sm:text-4xl font-bold mb-2'>₦50M+</div>
              <div className='text-lg'>
                Invested in Women&apos;s Initiatives
              </div>
            </div>
            <div className='bg-gradient-to-br from-amber-400 to-amber-700 rounded-2xl p-5 sm:p-8 text-white'>
              <div className='text-3xl sm:text-4xl font-bold mb-2'>25+</div>
              <div className='text-lg'>Community Organizations</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animated Partner Scroller */}
      <section className='bg-amber-50 dark:bg-gray-800 py-12'>
        <div className='max-w-7xl mx-auto px-4'>
          <motion.h3
            className='text-center text-2xl font-bold mb-8 text-gray-800 dark:text-white'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}>
            Our Valued Partners
          </motion.h3>
          <ScrollingPartners />
        </div>
      </section>

      {/* Testimonial Section */}
      {/* <section className='py-20 bg-gradient-to-r from-sky-800 to-purple-600 text-white'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='w-24 h-24 mx-auto bg-amber-500 rounded-full flex items-center justify-center mb-8'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-12 w-12 text-white'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              />
            </svg>
          </motion.div>

          <motion.blockquote
            className='text-2xl italic'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            &quot;Partnering with Nwanyị bụ ịfe has been transformative for our
            brand. We&apos;ve not only gained visibility but have genuinely
            contributed to empowering thousands of women entrepreneurs across
            Nigeria. The alignment with our corporate values is perfect.&quot;
          </motion.blockquote>

          <motion.div
            className='mt-8'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}>
            <p className='font-semibold text-lg'>Amina Mohammed</p>
            <p className='text-amber-200'>
              Director of Corporate Social Responsibility, Zenith Bank
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className='py-20 bg-[url("/images/pattern-bg.jpg")] bg-cover bg-center relative'>
        <div className='absolute inset-0 bg-black/30 backdrop-blur-sm' />
        <div className='max-w-7xl mx-auto px-4 text-center relative z-10'>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className='w-24 h-24 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-8'>
              <Handshake className='text-sky-700 w-12 h-12' />
            </div>

            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-white'>
              Ready to Make an Impact?
            </h2>
            <p className='text-xl max-w-3xl mx-auto mb-10 text-white/90'>
              Join our community of forward-thinking organizations committed to
              women&apos;s empowerment and cultural preservation. Together, we
              can create lasting change.
            </p>

            <div className='flex flex-wrap justify-center gap-6 mb-12'>
              <motion.button
                className='bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Contact Our Partnership Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
