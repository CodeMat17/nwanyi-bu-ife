'use client'

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";


const EventSchedule = () => {

const schedule = useQuery(api.schedule.getSchedule)

  return (
    <>
      {schedule ? (
        <section className='py-8 px-4 max-w-7xl mx-auto'>
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
                    <span className='font-bold'>{item.startTime} - {item.endTime}</span>
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
      ) : (
        <div className='flex justify-center py-48'>loading...</div>
      )}
    </>
  );
}

export default EventSchedule