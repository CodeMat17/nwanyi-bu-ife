'use client'

import SectionTitle from "@/components/SectionTitle";
import CulturalPattern from "@/components/CulturalPattern";
import { motion } from "framer-motion";
import { Mic, Trophy, Calendar, MapPin } from 'lucide-react';
import GlowingBanner from "@/components/GlowingBanner";

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

// Award categories and recipients
const awards = [
  // {
  //   year: "2025",
  //   categories: [
  //     {
  //       name: "Trailblazer Award",
  //       recipient: "Dr. Adaeze Oreh",
  //       achievement:
  //         "First Nigerian female neurosurgeon and healthcare reform advocate",
  //     },
  //     {
  //       name: "Cultural Preservation Award",
  //       recipient: "Uzoamaka Asika",
  //       achievement:
  //         "Reviving traditional Igbo weaving techniques through social enterprise",
  //     },
  //     {
  //       name: "Young Innovator Award",
  //       recipient: "Temie Giwa-Tubosun",
  //       achievement:
  //         "Founder of LifeBank, saving lives through tech-enabled blood delivery",
  //     },
  //   ],
  // },
  {
    year: "2024",
    categories: [
      {
        name: "Trailblazer Award",
        recipient: "Dr. Obiageli Ezekwesili",
        achievement:
          "Co-founder of Transparency International and education reform champion",
      },
      {
        name: "Cultural Preservation Award",
        recipient: "Chief Mrs. Ifeoma Anyansi",
        achievement:
          "Preserving Igbo oral traditions through storytelling festivals",
      },
      {
        name: "Young Innovator Award",
        recipient: "Jewel Peprah",
        achievement:
          "Developing AI solutions for early detection of breast cancer",
      },
    ],
  },
 
];

// Schedule data
const schedule = [
  {
    time: "8:00 AM - 9:30 AM",
    title: "Registration & Cultural Showcase",
    description: "Traditional Igbo welcome dance and craft exhibition",
  },
  {
    time: "9:30 AM - 10:00 AM",
    title: "Opening Ceremony",
    description: "Welcome address by Festival Founder, Dr. Amara Okeke",
  },
  {
    time: "10:00 AM - 11:30 AM",
    title: "Keynote Address",
    description: "Dr. Ngozi Okonjo-Iweala: 'Women Shaping Global Economies'",
  },
  {
    time: "11:30 AM - 1:00 PM",
    title: "Concurrent Sessions",
    description:
      "Choose from: Literary Salon, Business Masterclass, Health & Wellness, Tech Innovation",
  },
  {
    time: "1:00 PM - 2:30 PM",
    title: "Lunch & Cultural Performances",
    description: "Traditional cuisine tasting and masquerade displays",
  },
  {
    time: "2:30 PM - 4:00 PM",
    title: "Panel Discussions",
    description: "Women in Leadership: Breaking Barriers Across Generations",
  },
  {
    time: "4:00 PM - 5:30 PM",
    title: "Skills Workshops",
    description:
      "Hands-on sessions: Entrepreneurship, Digital Skills, Creative Arts",
  },
  {
    time: "5:30 PM - 7:00 PM",
    title: "Awards Ceremony",
    description: "Honoring women making exceptional contributions",
  },
  {
    time: "7:00 PM - 9:00 PM",
    title: "Gala Dinner & Concert",
    description: "Featuring Tiwa Savage and cultural dance troupes",
  },
];

export default function ProgramPage() {

  return (
    <div className='relative overflow-hidden'>
      <CulturalPattern />

      {/* Glowing Banner */}
      <GlowingBanner
        title='2025 Festival Program'
        subtitle='November 7, 2024 | International Conference Centre, IMT Enugu'
      />

      {/* Schedule Section */}
      <section className='py-20 px-4 max-w-7xl mx-auto'>
        <SectionTitle
          title='Event Schedule'
          subtitle='A day of empowerment, inspiration, and celebration'
          centered={true}
        />

        <div className='mt-12 max-w-4xl mx-auto'>
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              className='grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-amber-100'
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <div className='md:col-span-3'>
                <div className='flex items-center text-amber-600'>
                  <Calendar className='mr-2' />
                  <span className='font-bold'>{item.time}</span>
                </div>
              </div>
              <div className='md:col-span-9'>
                <h3 className='text-xl font-bold mb-2'>{item.title}</h3>
                <p className='text-gray-700 dark:text-gray-300'>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Speakers Section */}
      <section className='py-20 bg-purple-50 dark:bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4'>
          <SectionTitle
            title='Speakers & Special Guests'
            subtitle='Visionary women sharing wisdom and inspiration'
            centered={true}
          />

          <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                className='bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow'
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}>
                <div className='h-64 relative'>
                  <div className='bg-gray-200 border-2 border-dashed w-full h-full' />
                  <div className='absolute bottom-4 left-4 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold'>
                    {speaker.time}
                  </div>
                  <div className='absolute bottom-4 right-4 bg-purple-600 text-white px-4 py-1 rounded-full text-sm'>
                    {speaker.stage}
                  </div>
                </div>
                <div className='p-6'>
                  <h3 className='text-2xl font-bold'>{speaker.name}</h3>
                  <p className='text-amber-600 mt-1'>{speaker.title}</p>
                  <p className='mt-4 text-muted-foreground line-clamp-3'>
                    {speaker.bio}
                  </p>
                  <div className='mt-6 flex items-center justify-between'>
                    <button className='text-sky-500 font-medium flex items-center hover:text-purple-900 transition-colors'>
                      View Profile
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 ml-1'
                        viewBox='0 0 20 20'
                        fill='currentColor'>
                        <path
                          fillRule='evenodd'
                          d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </button>
                    <div className='flex space-x-2'>
                      <button className='w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition-colors'>
                        <svg
                          className='w-4 h-4 text-purple-600'
                          fill='currentColor'
                          viewBox='0 0 24 24'>
                          <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
                        </svg>
                      </button>
                      <button className='w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition-colors'>
                        <svg
                          className='w-4 h-4 text-purple-600'
                          fill='currentColor'
                          viewBox='0 0 24 24'>
                          <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4'>
          <SectionTitle
            title='Nwanyị bụ Ife Awards'
            subtitle='Honoring exceptional women and their achievements'
            centered={true}
          />

          <div className='mt-16'>
            {awards.map((awardYear, yearIndex) => (
              <motion.div
                key={awardYear.year}
                className='mb-16'
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: yearIndex * 0.2 }}>
                <div className='flex items-center mb-8'>
                  <div className='w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mr-4'>
                    <Trophy className='text-white text-xl' />
                  </div>
                  <h3 className='text-3xl font-bold'>
                    {awardYear.year} Award Recipients
                  </h3>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                  {awardYear.categories.map((category, catIndex) => (
                    <motion.div
                      key={catIndex}
                      className='bg-white dark:bg-gray-700 p-4 rounded-xl shadow-lg border-t-4 border-sky-600'
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: catIndex * 0.1 + yearIndex * 0.3,
                      }}>
                      <div className='flex items-start'>
                        <div className='bg-purple-100 dark:bg-sky-800 w-8 h-8 rounded-full flex items-center justify-center mr-2 shrink-0'>
                          <span className=' text-sky-500 font-bold'>
                            {catIndex + 1}
                          </span>
                        </div>
                        <div>
                          <h4 className='text-xl font-bold text-sky-500'>
                            {category.name}
                          </h4>
                        </div>
                      </div>

                      <div className='mt-6'>
                        <div className='flex items-center mb-4'>
                          <div className='shrink-0 w-16 h-16 bg-gray-200 rounded-full mr-4 border-2 border-dashed'></div>
                          <div>
                            <h5 className='text-lg font-bold'>
                              {category.recipient}
                            </h5>
                            <p className='text-gray-600 dark:text-gray-300 text-sm mt-1'>
                              {category.achievement}
                            </p>
                          </div>
                        </div>

                        <p className='text-muted-foreground mt-4'>
                          Recognized for outstanding contributions to{" "}
                          {awardYear.year === "2025"
                            ? "their field"
                            : "women's empowerment"}{" "}
                          and serving as an inspiration to future generations.
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className='text-center mt-16'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <h3 className='text-2xl font-bold mb-6'>
              Nominate for 2025 Awards
            </h3>
            <p className='text-muted-foreground max-w-2xl mx-auto mb-8'>
              Know an exceptional woman making a difference? Nominate her for
              next year&apos;s Nwanyị bụ Ife Awards. Help us recognize and
              celebrate women who are transforming communities and industries.
            </p>
            <button className='bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg'>
              Submit a Nomination
            </button>
          </motion.div>
        </div>
      </section>

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
              Be Part of This Transformative Experience
            </h2>
            <p className='text-xl max-w-3xl mx-auto mb-10'>
              Join us at the International Conference Centre, IMT Enugu on
              November 7, 2024 for a day of empowerment, inspiration, and
              celebration of women&apos;s achievements.
            </p>

            <div className='flex flex-wrap justify-center gap-6 mb-12'>
              <div className='flex items-center bg-white/10 px-6 py-3 rounded-full'>
                <Calendar className='mr-3' />
                <span>November 7, 2025</span>
              </div>
              <div className='flex items-center bg-white/10 px-6 py-3 rounded-full'>
                <MapPin className='mr-3' />
                <span>International Conference Centre, IMT Enugu</span>
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
