'use client'

import SectionTitle from "@/components/SectionTitle";
import CulturalPattern from "@/components/CulturalPattern";
import { motion } from "framer-motion";
import GlowingBanner from "@/components/GlowingBanner";

export default function AboutPage() {

  return (
    <div className='relative overflow-hidden'>
      <CulturalPattern />

      {/* Glowing Banner */}
      <GlowingBanner
        title=' About Nwanyị bụ Ife'
        subtitle='  Celebrating Women, Empowering Dreams, Honoring Heritage'
      />

      {/* Mission Section */}
      <section className='py-20 px-4 max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <SectionTitle title='Our Mission' centered={false} />
            <p className='mt-6 text-lg leading-relaxed'>
              Nwanyị bụ Ife Festival was founded on the principle that every
              woman carries within her a divine spark of creativity, strength,
              and potential. Our mission is to create a platform where these
              latent potentials find expression, where cultural heritage is
              celebrated, and where women&apos;s achievements are honored.
            </p>
            <div className='mt-8 p-6 bg-purple-50 dark:bg-gray-800 rounded-xl border-l-4 border-amber-500'>
              <h3 className='text-xl font-semibold text-sky-500 mb-2'>
                We Believe
              </h3>
              <p className='text-muted-foreground'>
                That when women are empowered to pursue their dreams, entire
                communities transform. Our festival is a catalyst for this
                transformation, connecting generations through shared stories
                and cultural expression.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='relative'>
            <div className='bg-gray-200 border-2 border-dashed rounded-xl w-full h-96' />
            <div className='absolute -bottom-6 -right-2 w-32 h-32 bg-amber-500 rounded-full flex items-center justify-center'>
              <span className='text-white font-bold text-xl'>Since 2024</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Section */}
      <section className='py-20 bg-amber-50 dark:bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4'>
          <SectionTitle
            title='Why Nwanyị bụ Ife?'
            subtitle='The meaning behind our name and purpose'
            centered={true}
          />

       

          <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-10'>
            <motion.div
              className='bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg text-center'
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}>
              <div className='w-20 h-20 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6'>
                <div className='w-12 h-12 bg-amber-500 rounded-full'></div>
              </div>
              <h3 className='text-xl font-bold mb-4'>Nwanyị bụ Ife</h3>
              <p className='text-gray-700 dark:text-gray-300'>
                Meaning &quot;Woman is a Precious light&quot; in Igbo, our
                name reflects the intrinsic value and divine essence of
                womanhood that we celebrate.
              </p>
            </motion.div>

            <motion.div
              className='bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg text-center'
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <div className='w-20 h-20 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6'>
                <div className='w-12 h-12 bg-purple-600 rounded-full'></div>
              </div>
              <h3 className='text-xl font-bold mb-4'>Cultural Preservation</h3>
              <p className='text-gray-700 dark:text-gray-300'>
                We honor our heritage through traditional dance, music, crafts,
                and storytelling, ensuring these treasures are passed to future
                generations.
              </p>
            </motion.div>

            <motion.div
              className='bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg text-center'
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}>
              <div className='w-20 h-20 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6'>
                <div className='w-12 h-12 bg-purple-800 rounded-full'></div>
              </div>
              <h3 className='text-xl font-bold mb-4'>Empowerment Platform</h3>
              <p className='text-gray-700 dark:text-gray-300'>
                Our festival provides visibility, networking, and resources for
                women to transform their dreams into tangible achievements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className='py-20 max-w-3xl mx-auto px-4'>
        <div className='grid grid-cols-1  items-center'>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <SectionTitle
              title='Our Journey'
              subtitle='From vision to movement'
              centered={true}
            />

            <div className='mt-8 space-y-6'>
              <div className='flex'>
                <div className='flex flex-col items-center mr-4'>
                  <div className='shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center'>
                    <span className='text-white font-bold'>1</span>
                  </div>
                  <div className='w-1 h-full bg-amber-500'></div>
                </div>
                <div>
                  <h4 className='text-lg font-semibold'>2023: The Beginning</h4>
                  <p className='mt-2 text-gray-700 dark:text-gray-300'>
                    Founded by Dr. Ambassador Chinemerem Anyi with a small
                    gathering of 200 women in Enugu, focused on sharing stories
                    of resilience.
                  </p>
                </div>
              </div>

              <div className='flex'>
                <div className='flex flex-col items-center mr-4'>
                  <div className='shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center'>
                    <span className='text-white font-bold'>2</span>
                  </div>
                  <div className='w-1 h-full bg-amber-500'></div>
                </div>
                <div>
                  <h4 className='text-lg font-semibold'>
                    2024: First Festival
                  </h4>
                  <p className='mt-2 text-gray-700 dark:text-gray-300'>
                    We hosted the first Nwanyị bụ Ife Festival in Enugu, where
                    2,000 women gathered to celebrate their heritage.
                  </p>
                </div>
              </div>

              <div className='flex'>
                <div className='flex flex-col items-center mr-4'>
                  <div className='shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center'>
                    <span className='text-white font-bold'>3</span>
                  </div>
                </div>
                <div>
                  <h4 className='text-lg font-semibold'>Today: A Movement</h4>
                  <p className='mt-2 text-gray-700 dark:text-gray-300'>
                    Now reaching over 5,000 attendees, becoming a catalyst for
                    women&apos;s empowerment, we are ready to host the 2025
                    Nwanyị bụ Ife Festival.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className='py-20 bg-sky-900 text-white'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <div className='w-24 h-24 mx-auto bg-amber-500 rounded-full flex items-center justify-center mb-8'>
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
                d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>

          <blockquote className='text-2xl italic'>
            &quot;Nwanyị bụ Ife gave me the courage to start my textile
            business. Seeing women who looked like me achieving greatness
            transformed what I believed was possible for myself.&quot;
          </blockquote>

          <div className='mt-8'>
            <p className='font-semibold text-lg'>Chinwe Okoro</p>
            <p className='text-amber-200'>Founder, Ada Textiles</p>
            <p className='mt-2 text-purple-300'>Festival Attendee since 2024</p>
          </div>

          <div className='mt-12 flex justify-center'>
            <button className='bg-white text-purple-800 hover:bg-amber-50 font-bold px-8 py-3 rounded-full transition-colors duration-300'>
              Join Our Story
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
