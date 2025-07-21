'use client'

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

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
    description:
      "Welcome address by Festival Founder, Dr. Ambassdor Chinemerem Anyi",
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


const EventSchedule = () => {
  return (
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
  );
}

export default EventSchedule