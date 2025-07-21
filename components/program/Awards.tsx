'use client'

import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle'
import { Button } from '../ui/button';
import Link from 'next/link';



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



const Awards = () => {
  return (
    <section className='py-20'>
      <div className='max-w-7xl mx-auto px-4'>
        <SectionTitle
          title='Nwanyị bụ ịfe Awards'
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
                      <div>
                        <h4 className='text-xl font-bold text-sky-500'>
                          {category.name}
                        </h4>
                      </div>
                    </div>

                    <div className='mt-6'>
                      <div className='flex items-center mb-4'>
                        <div>
                          <h5 className='text-lg font-bold'>
                            {category.recipient}
                          </h5>
                          <p className='text-gray-600 dark:text-gray-300 text-sm mt-1'>
                            {category.achievement}
                          </p>
                        </div>
                      </div>

                      <p className='text-muted-foreground mt-4 italic'>
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
          <h3 className='text-2xl font-bold mb-6'>Nominate for 2025 Awards</h3>
          <p className='text-muted-foreground max-w-2xl mx-auto mb-8'>
            Know an exceptional woman making a difference? Nominate her for the
            next Nwanyị bụ ịfe Awards. Help us recognize and celebrate women who
            are transforming communities and industries.
          </p>
        
          <Button
            asChild
            size={"lg"}
            className='rounded-full p-8 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-md'>
            <Link href='/nomination'>Submit a Nomination</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default Awards