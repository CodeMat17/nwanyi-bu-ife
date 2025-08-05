"use client";

import CulturalPattern from "@/components/CulturalPattern";
import GlowingBanner from "@/components/GlowingBanner";
import Speakers from "@/components/program/Speakers";
import { motion } from "framer-motion";
import { Calendar, MapPin, Mic } from "lucide-react";

export default function SpeakersPage() {
  return (
    <div className=''>
      <CulturalPattern />

      {/* Glowing Banner */}
      <GlowingBanner
        title='2025 Festival Speakers'
        subtitle='Venue | International Conference Centre, Enugu'
      />

      {/* Speakers Section */}
      <Speakers />

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-sky-800 to-sky-600 text-white'>
        <div className='max-w-7xl mx-auto px-4 text-center'>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className='w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-8'>
              <Mic className='text-white text-4xl' />
            </div>

            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Be Part of &apos;Nwanyị bụ ịfe&apos; Transformative Experience
            </h2>
            {/* <p className='text-xl max-w-3xl mx-auto mb-10'>
              Join us at the International Conference Centre, Enugu on November
              7, 2025 for a day of empowerment, inspiration, and celebration of
              women&apos;s achievements.
            </p> */}

            <div className='flex flex-wrap justify-center gap-6 mb-12'>
              <div className='flex items-center bg-white/10 px-6 py-3 rounded-full'>
                <Calendar className='mr-3' />
                <span>November 7, 2025</span>
              </div>
              <div className='flex items-center bg-white/10 px-6 py-3 rounded-full'>
                <MapPin className='mr-3' />
                <span>International Conference Centre, Enugu</span>
              </div>
            </div>

            <button className='bg-amber-500 hover:bg-amber-600 text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg'>
              Register Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
