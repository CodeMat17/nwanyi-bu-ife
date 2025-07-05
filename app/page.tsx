'use client'

import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import InterviewCard from "@/components/InterviewCard";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";
import { interviews } from "@/data/interviews";
import HeroComponent from "@/components/HeroComponent";

export default function Home() {
  return (
    <>
   
      <HeroComponent />
      <Banner
        title='2025 Festival: A Woman and Her Dream'
        subtitle='November 7, 2025 at International Conference Centre, IMT Enugu'
      />

      <section className='py-16 px-4 max-w-7xl mx-auto'>
        <SectionTitle
          title='Exclusive Interviews'
          subtitle='Women Doing Amazing Things'
        />

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-12'>
          {interviews.map((interview, index) => (
            <motion.div
              key={interview.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <InterviewCard {...interview} />
            </motion.div>
          ))}
        </div>
      </section>

      <CTA
        title="Join Us in Celebrating Women's Achievements"
        description='Register now for the 2025 Nwanyị bụ Ife Festival and be part of this empowering experience.'
        buttonText='Register Today'
        buttonLink='/register'
      />
    </>
  );
}
