"use client";

import SectionTitle from "@/components/SectionTitle";
import CulturalPattern from "@/components/CulturalPattern";
import { motion } from "framer-motion";
import GlowingBanner from "@/components/GlowingBanner";
import { Crown, Bird, HandHeart, Quote } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className='relative overflow-hidden'>
      <CulturalPattern />

      {/* Enhanced Glowing Banner */}
      <GlowingBanner
        title='About Nwanyị bụ ịfe'
        subtitle='Celebrating Women, Empowering Dreams, Honoring Heritage'
       
      />

      {/* Mission Section */}
      <section className='py-24 px-4 max-w-7xl mx-auto relative'>
        <div className='absolute top-10 right-0 opacity-20'>
          <Crown className='text-amber-500 w-48 h-48' strokeWidth={1.2} />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10'>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}>
            <SectionTitle
              title='Our Sacred Mission'
              centered={true}
              subtitle='Honoring the divine feminine essence'
            />

            <p className='mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300'>
              Founded in the heart of Igboland, Nwanyị bụ Ife Festival
              illuminates the truth that every woman carries within her a divine
              spark of creativity, strength, and potential. Our sacred mission
              creates a sanctuary where these eternal flames ignite, where
              ancestral wisdom dances with modern aspirations, and where
              womanhood is celebrated as the foundation of civilization.
            </p>

            <div className='mt-8 p-6 bg-gradient-to-br from-amber-50/80 to-purple-50/80 dark:from-gray-800 dark:to-gray-900 rounded-2xl border-l-4 border-amber-500 shadow-lg'>
              <div className='flex items-center gap-3 mb-3'>
                <Bird className='text-sky-500' strokeWidth={1.5} />
                <h3 className='text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-600'>
                  Our Guiding Principle
                </h3>
              </div>
              <p className='text-gray-700 dark:text-gray-300'>
                &quot;When women remember their ancestral power, communities
                transform. Our festival is the sacred fire that rekindles this
                remembering, connecting generations through the golden thread of
                our stories.&quot;
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateY: 20 }}
            whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='relative'>
            <div className='relative overflow-hidden rounded-2xl shadow-2xl transform perspective-1000'>
              <div className='bg-gradient-to-br from-amber-500/10 to-purple-700/20 border-2 border-amber-500/30 rounded-2xl w-full aspect-[4/5] flex items-center justify-center'>
                <div className='relative border-2 border-dashed rounded-xl w-4/5 h-4/5 object-cover aspect-square'>
                <Image alt="" fill src='/carousel/img_12.jpg' className="object-cover object-center rounded-xl" />
                </div> 
              </div>

              <div className='absolute inset-0 rounded-2xl border-4 border-transparent hover:border-amber-400/50 transition-all duration-500 pointer-events-none' />

              {/* Cultural pattern overlay */}
              <div className='absolute inset-0 bg-[url("/cultural-pattern.svg")] bg-repeat opacity-[0.03] dark:opacity-[0.02] pointer-events-none' />
            </div>

            <motion.div
              className='absolute -bottom-6 -right-4 w-28 h-28 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-xl'
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}>
              <span className='text-white font-bold text-lg tracking-wide'>
                Since <br /> 2024
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Section */}
      <section className='py-24 bg-gradient-to-b from-amber-50/50 to-white dark:from-gray-800 dark:to-gray-900'>
        <div className='max-w-7xl mx-auto px-4 relative'>
          <div className='absolute top-20 left-0 opacity-10 rotate-12'>
            <HandHeart className='text-amber-500 w-40 h-40' strokeWidth={1} />
          </div>

          <SectionTitle
            title='The Essence of Our Name'
            subtitle='Nwanyị bụ Ife: Woman is a Precious Light'
            centered={true}
          />

          <div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                title: "Sacred Meaning",
                icon: <Crown className='w-8 h-8' strokeWidth={1.5} />,
                description:
                  '"Nwanyị bụ Ife" translates to "Woman is a Precious Light" in Igbo, reflecting the divine essence and irreplaceable value of womanhood we celebrate.',
                color: "from-amber-500/10 to-amber-600/20",
              },
              {
                title: "Cultural Continuum",
                icon: (
                  <div className='text-2xl' aria-hidden='true'>
                    𓀙
                  </div>
                ),
                description:
                  "We weave ancestral wisdom with contemporary expression through dance, music, crafts, and oral traditions, ensuring our heritage thrives for generations.",
                color: "from-purple-500/10 to-purple-600/20",
              },
              {
                title: "Power Activation",
                icon: (
                  <div className='text-2xl' aria-hidden='true'>
                    ⚡
                  </div>
                ),
                description:
                  "Our festival creates sacred space for women to awaken their innate power, transforming dreams into tangible realities through sisterhood and resources.",
                color: "from-sky-500/10 to-sky-600/20",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className={`bg-gradient-to-br ${item.color} dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-white/10 relative overflow-hidden`}
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}>
                <div className='absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-r from-amber-500/5 to-purple-500/5 blur-xl' />

                <div className='w-20 h-20 mx-auto bg-gradient-to-br from-amber-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-6'>
                  <div className='w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center text-white'>
                    {item.icon}
                  </div>
                </div>

                <h3 className='text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white'>
                  {item.title}
                </h3>
                <p className='text-gray-700 dark:text-gray-300 text-center'>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className='py-24 max-w-5xl mx-auto px-4 relative'>
        <div className='absolute top-1/4 left-10 w-0.5 h-2/3 bg-gradient-to-b from-transparent via-amber-500 to-transparent opacity-20 -z-10' />

        <SectionTitle
          title='Our Journey Through Time'
          subtitle='From vision to global movement'
          centered={true}
        />

        <motion.div
          className='mt-16 space-y-12 relative'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}>
          {[
            {
              year: "2023",
              title: "The Sacred Spark",
              description:
                "Dr. Ambassador Chinemerem Anyi gathered 200 women in Enugu, igniting a flame of sisterhood and resilience that would become a roaring fire.",
              marker: "1",
            },
            {
              year: "2024",
              title: "First Festival Sunrise",
              description:
                "2,000 women answered the ancestral call at our inaugural festival, creating a tapestry of cultural celebration that resonated across Nigeria.",
              marker: "2",
            },
            {
              year: "2025",
              title: "Global Awakening",
              description:
                "Now welcoming 5,000+ attendees, we stand at the threshold of a global renaissance of feminine power and cultural remembrance.",
              marker: "3",
            },
          ].map((item, index) => (
            <motion.div
              key={item.year}
              className='flex group'
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}>
              <div className='flex flex-col items-center mr-6'>
                <motion.div
                  className='shrink-0 w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg'
                  whileHover={{ scale: 1.1 }}>
                  <span className='text-white font-bold text-xl'>
                    {item.marker}
                  </span>
                </motion.div>
                <div className='w-1 h-full bg-gradient-to-b from-amber-500 to-transparent opacity-40 group-last:hidden'></div>
              </div>

              <motion.div className='pb-12' whileHover={{ y: -5 }}>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-px bg-amber-500' />
                  <span className='font-bold text-amber-600 tracking-widest'>
                    {item.year}
                  </span>
                </div>
                <h4 className='text-2xl font-bold mt-3 text-gray-900 dark:text-white'>
                  {item.title}
                </h4>
                <p className='mt-3 text-gray-700 dark:text-gray-300 max-w-2xl'>
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonial Section */}
      <section className='py-24 bg-gradient-to-br from-sky-900 to-purple-900 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-[url("/cultural-pattern-light.svg")] bg-repeat opacity-[0.03]' />
        <div className='absolute top-20 right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl' />

        <div className='max-w-4xl mx-auto px-4 text-center relative z-10'>
          <motion.div
            className='w-24 h-24 mx-auto bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mb-8 shadow-lg'
            animate={{
              rotate: [0, 10, -10, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}>
            <Quote className='h-12 w-12 text-white' strokeWidth={1.2} />
          </motion.div>

          <motion.blockquote
            className='text-2xl md:text-3xl font-light italic leading-relaxed max-w-3xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <span className='text-4xl text-amber-300 mr-2'>&ldquo;</span>
            Nwanyị bụ Ife awakened the queen within me. Standing in that sacred
            circle of sisters, I remembered who I was. Now my textile business
            employs 15 women, and were reviving ancient patterns our
            grandmothers wove.
            <span className='text-4xl text-amber-300 ml-2'>&rdquo;</span>
          </motion.blockquote>

          <motion.div
            className='mt-12'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}>
            <p className='font-bold text-xl'>Chinwe Okoro</p>
            <div className='mt-2 flex flex-col items-center'>
              <p className='text-amber-300'>Founder, Ada Textiles</p>
              <div className='flex items-center mt-3 gap-2'>
                <div className='flex'>
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className='w-3 h-3 rounded-full bg-amber-500 mx-0.5'
                    />
                  ))}
                </div>
                <span className='text-sky-300'>
                  2024 Festival Attendee
                </span>
              </div>
            </div>
          </motion.div>
{/* 
          <motion.div
            className='mt-16'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}>
            <button className='group relative bg-transparent text-white hover:text-amber-50 font-bold px-8 py-4 rounded-full transition-all duration-500 border-2 border-amber-500 overflow-hidden'>
              <div className='absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 w-0 group-hover:w-full transition-all duration-500' />
              <span className='relative flex items-center gap-2'>
                <span>Join Our Sacred Circle</span>
                <span className='group-hover:translate-x-1 transition-transform'>
                  &rarr;
                </span>
              </span>
            </button>
          </motion.div> */}
        </div>
      </section>
    </div>
  );
}
