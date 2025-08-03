"use client";

import SectionTitle from "@/components/SectionTitle";
import CulturalPattern from "@/components/CulturalPattern";
import { motion } from "framer-motion";
import GlowingBanner from "@/components/GlowingBanner";
import { Crown, Bird, HandHeart, Quote, Sparkles, Infinity, Zap } from "lucide-react";
import Image from "next/image";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function AboutPage() {

  const aboutMission = useQuery(api.about.getMission)
  const principle = useQuery(api.about.getGuidingPrinciple)
  const aboutImg = useQuery(api.about.getAboutImage)
  const essence = useQuery(api.about.getLatestEssenceOfName)
  const ourJourney = useQuery(api.about.getLatestOurJourney)
  const testimonial = useQuery(api.about.getTestimonial)

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
          {aboutMission ? (
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}>
              <SectionTitle
                title={aboutMission.title}
                centered={true}
                subtitle={aboutMission.caption}
              />

              <p className='mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300'>
                {aboutMission.body}
              </p>

              {principle && (
                <div className='mt-8 p-6 bg-gradient-to-br from-amber-50/80 to-purple-50/80 dark:from-gray-800 dark:to-gray-900 rounded-2xl border-l-4 border-amber-500 shadow-lg'>
                  <div className='flex items-center gap-3 mb-3'>
                    <Bird className='text-sky-500' strokeWidth={1.5} />
                    <h3 className='text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-600'>
                      {principle.title}
                    </h3>
                  </div>
                  <p className='text-gray-700 dark:text-gray-300'>
                    &quot;{principle.body}&quot;
                  </p>
                </div>
              )}
            </motion.div>
          ) : (
            <div className='flex justify-center py-36'>loading...</div>
          )}

          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateY: 20 }}
            whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='relative'>
            <div className='relative overflow-hidden rounded-2xl shadow-2xl transform perspective-1000'>
              <div className='bg-gradient-to-br from-amber-500/10 to-purple-700/20 border-2 border-amber-500/30 rounded-2xl w-full aspect-[4/5] flex items-center justify-center'>
                <div className='relative border-2 border-dashed rounded-xl w-4/5 h-4/5 object-cover aspect-square'>
                  {aboutImg?.imageUrl ? (
                    <Image
                      alt=''
                      fill
                      src={aboutImg?.imageUrl}
                      className='object-cover object-center rounded-xl'
                    />
                  ) : (
                    <div className='flex items-center justify-center'>
                      loading...
                    </div>
                  )}
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
                // repeat: Infinity,
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

          {essence ? (
            <div>
              <SectionTitle
                title={essence.title}
                subtitle={essence.caption}
                centered={true}
              />

              <div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-8'>
                {essence.data.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className={`bg-gradient-to-br dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-white/10 relative overflow-hidden`}
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}>
                    <div className='absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-r from-amber-500/5 to-purple-500/5 blur-xl' />

                    <div className='w-20 h-20 mx-auto bg-gradient-to-br from-amber-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-6'>
                      <div className='w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center text-white'>
                        {/* {item.icon} */}
                        {index === 0 && <Sparkles />}
                        {index === 1 && <Infinity />}
                        {index === 2 && <Zap />}
                      </div>
                    </div>

                    <h3 className='text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white'>
                      {item.title}
                    </h3>
                    <p className='text-gray-700 dark:text-gray-300 text-center'>
                      {item.body}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <div className='flex justify-center py-48'>loading...</div>
          )}
        </div>
      </section>

      {/* History Section */}
      <section className='py-24 max-w-5xl mx-auto px-4 relative'>
        <div className='absolute top-1/4 left-10 w-0.5 h-2/3 bg-gradient-to-b from-transparent via-amber-500 to-transparent opacity-20 -z-10' />

        {ourJourney ? (
          <div>
            <SectionTitle
              title={ourJourney.title}
              subtitle={ourJourney.caption}
              centered={true}
            />

            <motion.div
              className='mt-16 space-y-12 relative'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}>
              {ourJourney.journey.map((item, index) => (
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
                        {index + 1}
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
                      {item.body}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ) : (
          <div className='flex justify-center py-48'>loading...</div>
        )}
      </section>

      {/* Testimonial Section */}
      <section className='py-24 bg-gradient-to-br from-sky-900 to-purple-900 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-[url("/cultural-pattern-light.svg")] bg-repeat opacity-[0.03]' />
        <div className='absolute top-20 right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl' />

        {testimonial ? (
          <div className='max-w-4xl mx-auto px-4 text-center relative z-10'>
            <motion.div
              className='w-24 h-24 mx-auto bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mb-8 shadow-lg'
              animate={{
                rotate: [0, 10, -10, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                // repeat: Infinity,
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
           {testimonial.body}
              <span className='text-4xl text-amber-300 ml-2'>&rdquo;</span>
            </motion.blockquote>

            <motion.div
              className='mt-12'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}>
              <p className='font-bold text-xl'>{testimonial.name}</p>
              <div className='mt-2 flex flex-col items-center'>
                <p className='text-amber-300'>{testimonial.position}</p>
                <div className='flex items-center mt-3 gap-2'>
                  <div className='flex'>
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className='w-3 h-3 rounded-full bg-amber-500 mx-0.5'
                      />
                    ))}
                  </div>
                  <span className='text-sky-300'>{testimonial.caption}</span>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className='flex justify-center py-48'>loading...</div>
        )}
      </section>
    </div>
  );
}
