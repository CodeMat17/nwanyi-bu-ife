// src/app/contact/page.tsx
"use client";

import SectionTitle from "@/components/SectionTitle";
import CulturalPattern from "@/components/CulturalPattern";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";
import GlowingBanner from "@/components/GlowingBanner";

export default function ContactPage() {

  return (
    <div className='relative overflow-hidden'>
      <CulturalPattern />

      {/* Glowing Banner */}
      <GlowingBanner
        title='Contact Us'
        subtitle='Reach out to our team for inquiries, partnerships, or media requests'
      />

      {/* Contact Section */}
      <section className='py-16 px-4 max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <div>
              <motion.div
            className='bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl'
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}>
            <h2 className='text-3xl font-bold mb-6'>Send Us a Message</h2>

            <form className='space-y-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-muted-foreground mb-2'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent'
                    placeholder='Your full name'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-muted-foreground mb-2'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent'
                    placeholder='you@example.com'
                  />
                </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-muted-foreground mb-2'>
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent'
                  placeholder='How can we help?'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-muted-foreground mb-2'>
                  Your Message
                </label>
                <textarea
                  id='message'
                  rows={5}
                  className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent'
                  placeholder='Type your message here...'></textarea>
              </div>

              <button
                type='submit'
                className='w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-full transition-colors flex items-center justify-center group'>
                Send Message
                <Send className='h-5 w-5 ml-2 transition-transform group-hover:translate-x-1' />
              </button>
            </form>
          </motion.div>

          </div>
        
          {/* Contact Information */}
          <motion.div
            className='space-y-8'
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            {/* Contact Details */}
            <div className='bg-amber-500/10  dark:bg-gray-800 rounded-2xl p-8'>
              <h2 className='text-3xl font-bold mb-6'>Get In Touch</h2>

              <div className='space-y-6'>
                <div className='flex items-start'>
                  <div className='bg-amber-100 p-3 rounded-full mr-4'>
                    <Mail className='h-6 w-6 text-amber-600' />
                  </div>
                  <div>
                    <h3 className='font-bold text-lg mb-1'>Email Us</h3>
                    <p className='text-muted-foreground'>
                      contact@nwanyibuife.org
                    </p>
                    <p className='text-muted-foreground'>
                      partnerships@nwanyibuife.org
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='bg-amber-100 p-3 rounded-full mr-4'>
                    <Phone className='h-6 w-6 text-amber-600' />
                  </div>
                  <div>
                    <h3 className='font-bold text-lg mb-1'>Call Us</h3>
                    <p className='text-muted-foreground'>+234 812 345 6789</p>
                    <p className='text-muted-foreground'>+234 908 765 4321</p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='bg-amber-100 p-3 rounded-full mr-4'>
                    <MapPin className='h-6 w-6 text-amber-600' />
                  </div>
                  <div>
                    <h3 className='font-bold text-lg mb-1'>Visit Us</h3>
                    <p className='text-muted-foreground'>
                      Cultural Heritage Center
                    </p>
                    <p className='text-muted-foreground'>
                      25 Women&apos;s Way, Enugu
                    </p>
                    <p className='text-muted-foreground'>Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className='bg-purple-950/70 text-white rounded-2xl p-8'>
              <div className='flex items-center mb-4'>
                <Clock className='h-6 w-6 text-amber-300 mr-3' />
                <h3 className='text-2xl font-bold'>Office Hours</h3>
              </div>

              <div className='space-y-3'>
                <div className='flex justify-between border-b border-white/20 pb-3'>
                  <span>Monday - Friday</span>
                  <span className='font-medium'>9:00 AM - 5:00 PM</span>
                </div>
                <div className='flex justify-between border-b border-white/20 pb-3'>
                  <span>Saturday</span>
                  <span className='font-medium'>10:00 AM - 4:00 PM</span>
                </div>
                <div className='flex justify-between'>
                  <span>Sunday</span>
                  <span className='font-medium'>Closed</span>
                </div>
              </div>

              <div className='mt-6 bg-white/10 rounded-xl p-4'>
                <p className='font-medium'>Festival Week Hours (Nov 1-7):</p>
                <p className='text-amber-200'>8:00 AM - 9:00 PM Daily</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className='py-12 px-4 max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}>
          <div className='text-center mb-12'>
            <SectionTitle
              title='Our Location'
              subtitle='Visit our headquarters during festival preparations'
            />
          </div>

          <div className='rounded-3xl overflow-hidden shadow-2xl h-[500px] relative'>
            <div className='bg-gray-200 dark:bg-gray-800 border-2 border-dashed w-full h-full flex items-center justify-center'>
              <div className='text-center'>
                <MapPin className='h-12 w-12 text-amber-600 mx-auto mb-4' />
                <p className='text-xl font-bold'>Cultural Heritage Center</p>
                <p className='text-gray-600'>
                  25 Women&apos;s Way, Enugu, Nigeria
                </p>
              </div>
            </div>

            <div className='absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full shadow-lg'>
              <button className='text-purple-700 font-bold'>
                Get Directions
              </button>
            </div>
          </div>
        </motion.div>
      </section> */}

      {/* FAQ Section */}
      <section className='py-16 bg-gradient-to-r from-amber-50 dark:from-amber-950 to-purple-50 dark:to-sky-800'>
        <div className='max-w-5xl mx-auto px-4'>
          <div className='text-center mb-16'>
            <SectionTitle
              title='Frequently Asked Questions'
              subtitle='Find answers to common inquiries'
            />
          </div>

          <div className='space-y-6'>
            {[
              {
                question: "How can I volunteer for the festival?",
                answer:
                  "We welcome volunteers! Please visit our Volunteer page or contact our volunteer coordinator at volunteers@nwanyibuife.org.",
              },
              {
                question: "When will tickets be available for purchase?",
                answer:
                  "Early bird tickets go on sale July 15, 2025. Regular tickets will be available starting September 1, 2025.",
              },
              {
                question: "How can my organization partner with the festival?",
                answer:
                  "We offer various partnership opportunities. Please email partnerships@nwanyibuife.org with your proposal.",
              },
              {
                question: "Is the festival venue accessible?",
                answer:
                  "Yes, all festival venues are fully accessible. If you need special accommodations, please contact us at least 2 weeks before the event.",
              },
              {
                question: "Can I perform or showcase my work at the festival?",
                answer:
                  "We accept applications for performers and exhibitors. The application period opens January 15, 2025. Check our Participate page for details.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg'
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <h3 className='text-xl font-bold mb-3'>
                  {faq.question}
                </h3>
                <p className='text-muted-foreground'>{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          {/* <div className='text-center mt-12'>
            <button className='bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-full text-lg transition-colors'>
              View Full FAQ
            </button>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-purple-900 to-amber-800 text-white'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className='w-24 h-24 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-8'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-12 w-12 text-amber-300'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
            </div>

            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Stay Connected
            </h2>
            <p className='text-xl max-w-3xl mx-auto mb-10 opacity-90'>
              Subscribe to our newsletter for festival updates, inspiring
              stories, and exclusive content.
            </p>

            <div className='max-w-xl mx-auto flex flex-col sm:flex-row gap-4'>
              <input
                type='email'
                placeholder='Your email address'
                className='flex-grow px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-500'
                required
              />
              <button className='bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full transition-colors whitespace-nowrap'>
                Subscribe Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
