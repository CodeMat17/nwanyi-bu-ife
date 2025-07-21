"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import Image from "next/image";
import SectionTitle from "../SectionTitle";

// Speaker data
const speakers = [
  {
    id: 1,
    name: "Dr. Ngozi Okonjo-Iweala",
    title: "Director-General, WTO",
    bio: "First woman and first African to lead the World Trade Organization. Economist and international development expert with 40 years of experience.",
    image: "/ngozi.jpg",
    time: "10:00 AM",
    stage: "Main Stage",
  },
  {
    id: 2,
    name: "Chimamanda Ngozi Adichie",
    title: "Award-winning Author",
    bio: "Renowned novelist and feminist thinker. Author of 'Half of a Yellow Sun' and 'Americanah'. TED talk 'We Should All Be Feminists'.",
    image: "/chimamanda.jpg",
    time: "11:30 AM",
    stage: "Literary Pavilion",
  },
  {
    id: 3,
    name: "Dr. Ola Orekunrin",
    title: "Founder, Flying Doctors Nigeria",
    bio: "Youngest licensed helicopter pilot in Nigeria. Founded West Africa's first air ambulance service saving thousands of lives.",
    image: "/ola.jpg",
    time: "2:00 PM",
    stage: "Innovation Hub",
  },
  {
    id: 4,
    name: "Hajia Bola Shagaya",
    title: "CEO, Bolmus Group",
    bio: "Leading businesswoman with investments in banking, real estate, and energy. Philanthropist supporting women entrepreneurs.",
    image: "/bola.jpg",
    time: "3:30 PM",
    stage: "Business Forum",
  },
  {
    id: 5,
    name: "Tiwa Savage",
    title: "Award-winning Musician",
    bio: "International Afrobeats superstar. Brand ambassador and activist for women's empowerment through the arts.",
    image: "/tiwa.jpg",
    time: "5:00 PM",
    stage: "Main Stage",
  },
  {
    id: 6,
    name: "Dr. Amina J. Mohammed",
    title: "Deputy Secretary-General, UN",
    bio: "Former Nigerian Minister of Environment. Leading UN's sustainable development goals implementation globally.",
    image: "/amina.jpg",
    time: "6:30 PM",
    stage: "Global Leaders Forum",
  },
];

const Speakers = () => {
  return (
    <section className='pt-24 relative '>
      {/* Decorative elements */}
      {/* <div className='absolute top-20 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl' />
      <div className='absolute bottom-10 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl' /> */}
      {/* <div
        className='absolute inset-0 opacity-10 dark:opacity-[0.02]'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' fill='%23a855f7' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      /> */}

      <div className='max-w-6xl mx-auto px-4 relative z-10'>
        <div className='text-center mb-20'>
          <SectionTitle
            title='Speakers & Special Guests'
            subtitle='Trailblazers sharing wisdom and igniting change'
            centered={true}
          />

          <motion.div
            className='mt-8 flex justify-center'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}>
            <div className='inline-flex items-center bg-gradient-to-r from-amber-500 to-purple-600 px-6 py-2 rounded-full'>
              <span className='text-white font-medium'>
                2025 Speaker Lineup
              </span>
              <div className='ml-3 flex space-x-1'>
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className='w-2 h-2 rounded-full bg-white'
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Speaker Card */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {speakers.length < 1 ? (
            <p className='text-center py-12 animate-pulse'>No speaker found</p>
          ) : (
            speakers.map((speaker) => (
              <div
                key={speaker.id}
                className='group border rounded-xl p-4 sm:p-5 bg-white/20 shadow-md hover:shadow-lg transition-shadow'>
                <div>
                  <h1 className='text-lg font-medium line-clamp-1'>
                    {speaker.name}
                  </h1>
                  <p className='line-clamp-1 text-amber-600'>{speaker.title}</p>
                </div>
                <div className='flex items-center gap-3 mt-3'>
                  <div className='border border-amber-700 group-hover:border-2 group-hover:border-amber-500 transition-colors duration-500 rounded-xl'>
                    {!speaker.image ? <Image alt='' width={96} height={96} src={speaker.image} className='rounded-full object-cover' /> :
                      <User className='h-24 w-24 sm:h-28 sm:w-28' />
                    }
                  </div>
                  <div className='line-clamp-4 text-sm'>{speaker.bio}</div>
                </div>

                <div className=' mt-3 flex justify-end'>
                  <div className='flex space-x-4'>
                    <motion.button
                      className='w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors group'
                      whileHover={{ scale: 1.1 }}
                      aria-label={`Follow speaker ${speaker.name} on Twitter`}>
                      <svg
                        className='w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                        aria-hidden='true'>
                        <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
                      </svg>
                    </motion.button>
                    <motion.button
                      className='w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors group'
                      whileHover={{ scale: 1.1 }}
                      aria-label={`Connect with speaker ${speaker.name} on LinkedIn`}>
                      <svg
                        className='w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                        aria-hidden='true'>
                        <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>


        <motion.div
          className='mt-20 text-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}></motion.div>
      </div>
    </section>
  );
};

export default Speakers;
