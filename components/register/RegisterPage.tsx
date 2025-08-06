// src/app/register/page.tsx
"use client";

import CulturalPattern from "@/components/CulturalPattern";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Check,
  ArrowRight,
  ArrowLeft,
  Calendar,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";
import GlowingBanner from "@/components/GlowingBanner";
import Image from "next/image";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  ticketQuantity: number;
};

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    ticketQuantity: 1,
  });

  const ticketPrice = 200000; // N200,000 per ticket
  const deadline = "September 15, 2025";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTicketChange = (value: number) => {
    setFormData((prev) => ({
      ...prev,
      ticketQuantity: Math.max(1, value), // Ensure at least 1 ticket
    }));
  };

  const calculateTotal = () => {
    return formData.ticketQuantity * ticketPrice;
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would redirect to Squadco payment
    console.log("Form submitted:", formData);
    // Remove the nextStep() call here as it was causing the issue
  };

  return (
    <div className='relative overflow-hidden'>
      <CulturalPattern />

      <GlowingBanner
        title='Festival Registration'
        subtitle='Secure your spot at the most empowering cultural event of the year'
      />

      {/* Progress Bar - Fixed for mobile */}
      <div className='max-w-4xl mx-auto px-4 py-8'>
        <div className='flex justify-between relative'>
          <div className='absolute top-4 left-0 right-0 h-1 bg-gray-200 -z-10 mx-8 sm:mx-16'></div>
          <div
            className='absolute top-4 left-0 h-1 bg-amber-500 -z-10 transition-all duration-500'
            style={{
              width: step === 1 ? "0%" : step === 2 ? "50%" : "100%",
            }}></div>

          {[1, 2, 3].map((num) => (
            <div key={num} className='flex flex-col items-center'>
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mb-2 ${
                  step >= num
                    ? "bg-amber-500 text-white"
                    : "bg-white border-2 border-gray-300 text-gray-400"
                }`}>
                {step > num ? <Check size={16} className='sm:size-5' /> : num}
              </div>
              <span
                className={`text-xs sm:text-sm font-medium ${
                  step >= num ? "text-amber-600" : "text-gray-500"
                }`}>
                {num === 1 && "Information"}
                {num === 2 && "Tickets"}
                {num === 3 && "Payment"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Form Section */}
      <section className='py-8 sm:py-12 px-4 max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8'>
          {/* Registration Form */}
          <div className='lg:col-span-2'>
            <form
              onSubmit={handleSubmit}
              className='bg-white dark:bg-gray-700 rounded-2xl shadow-xl p-4 sm:p-6 md:p-8'>
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}>
                  <h2 className='text-xl sm:text-2xl font-bold mb-6'>
                    Personal Information
                  </h2>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6'>
                    <div>
                      <label className='block text-muted-foreground mb-2 text-sm sm:text-base'>
                        First Name *
                      </label>
                      <input
                        type='text'
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base'
                        required
                      />
                    </div>
                    <div>
                      <label className='block text-muted-foreground mb-2 text-sm sm:text-base'>
                        Last Name *
                      </label>
                      <input
                        type='text'
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base'
                        required
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6'>
                    <div>
                      <label className='block text-muted-foreground mb-2 text-sm sm:text-base'>
                        Email Address *
                      </label>
                      <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base'
                        required
                      />
                    </div>
                    <div>
                      <label className='block text-muted-foreground mb-2 text-sm sm:text-base'>
                        Phone Number *
                      </label>
                      <input
                        type='tel'
                        name='phone'
                        value={formData.phone}
                        onChange={handleInputChange}
                        className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base'
                        required
                      />
                    </div>
                  </div>

                  <div className='mb-6'>
                    <label className='block text-muted-foreground mb-2 text-sm sm:text-base'>
                      Organization/Affiliation
                    </label>
                    <input
                      type='text'
                      name='organization'
                      value={formData.organization}
                      onChange={handleInputChange}
                      className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base'
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 2: Ticket Selection */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}>
                  <h2 className='text-xl sm:text-2xl font-bold mb-6'>
                    Ticket Selection
                  </h2>

                  <div className='mb-8 p-4 sm:p-6 border border-amber-200 bg-amber-50 rounded-xl'>
                    <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2'>
                      <h3 className='text-lg sm:text-xl font-bold'>
                        Festival Pass
                      </h3>
                      <span className='bg-amber-500 text-white px-3 py-1 rounded-full text-sm'>
                        ₦{ticketPrice.toLocaleString()}
                      </span>
                    </div>

                    <p className='mb-4 text-sm sm:text-base'>
                      Available until {deadline}
                    </p>

                    <div className='flex items-center justify-between'>
                      <label className='block text-muted-foreground text-sm sm:text-base'>
                        Quantity:
                      </label>
                      <div className='flex items-center'>
                        <button
                          type='button'
                          className='w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200'
                          onClick={() =>
                            handleTicketChange(formData.ticketQuantity - 1)
                          }>
                          -
                        </button>
                        <span className='mx-2 sm:mx-3 w-6 sm:w-8 text-center text-sm sm:text-base'>
                          {formData.ticketQuantity}
                        </span>
                        <button
                          type='button'
                          className='w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200'
                          onClick={() =>
                            handleTicketChange(formData.ticketQuantity + 1)
                          }>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Payment - Enhanced with Squadco details */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}>
                  <h2 className='text-xl sm:text-2xl font-bold mb-6'>
                    Payment
                  </h2>

                  <div className='mb-8 p-4 sm:p-6 bg-sky-50 rounded-xl border border-sky-100'>
                    <div className='flex items-center justify-center mb-4'>
                      <div className='relative w-40 h-12'>
                        <Image
                          src='/squadco.svg' // Add Squadco logo to your public folder
                          alt='Squadco'
                          fill
                          className='object-contain'
                        />
                      </div>
                    </div>

                    <h3 className='font-bold text-sky-700 mb-3 text-center'>
                      Secure Payment Gateway
                    </h3>

                    <div className='space-y-3 mb-6'>
                      <p className='text-sm sm:text-base text-center'>
                        You&apos;ll be redirected to Squadco&apos;s secure
                        payment platform to complete your transaction.
                      </p>

                      <div className='bg-white p-3 rounded-lg border border-gray-200 mt-4'>
                        <div className='flex justify-between mb-2'>
                          <span className='text-sm sm:text-base'>Tickets:</span>
                          <span className='font-medium text-sm sm:text-base'>
                            {formData.ticketQuantity} × ₦
                            {ticketPrice.toLocaleString()}
                          </span>
                        </div>
                        <div className='flex justify-between font-bold'>
                          <span className='text-sm sm:text-base'>Total:</span>
                          <span className='text-sm sm:text-base'>
                            ₦{calculateTotal().toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='space-y-2 text-sm sm:text-base'>
                      <a
                        href='https://squadco.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center text-sky-600 hover:underline'>
                        <ExternalLink className='mr-2' size={16} />
                        Squadco Website
                      </a>
                      <a
                        href='https://squadco.com/developers/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center text-sky-600 hover:underline'>
                        <ExternalLink className='mr-2' size={16} />
                        Developer Documentation
                      </a>
                      <a
                        href='https://docs.squadco.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center text-sky-600 hover:underline'>
                        <ExternalLink className='mr-2' size={16} />
                        API Documentation
                      </a>
                    </div>
                  </div>

                  <div className='p-4 bg-purple-50 rounded-xl border border-purple-100'>
                    <p className='text-sm sm:text-base text-purple-800'>
                      <span className='font-bold'>Secure Payment:</span> All
                      transactions are encrypted and securely processed through
                      Squadco.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons - Improved mobile layout */}
              <div className='mt-8 flex flex-col-reverse sm:flex-row justify-between gap-3'>
                {step > 1 && (
                  <button
                    type='button'
                    onClick={prevStep}
                    className='flex items-center justify-center text-sky-500 font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-purple-50'>
                    <ArrowLeft className='mr-1 sm:mr-2' size={18} />
                    <span className='text-sm sm:text-base'>Previous</span>
                  </button>
                )}

                <button
                  type={step < 3 ? "button" : "submit"}
                  onClick={step < 3 ? nextStep : undefined}
                  className={`flex items-center justify-center ${
                    step === 3
                      ? "bg-amber-500 hover:bg-amber-600 text-white"
                      : "bg-purple-700 hover:bg-purple-800 text-white"
                  } font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full flex-1 sm:flex-none`}>
                  <span className='text-sm sm:text-base'>
                    {step === 3 ? "Proceed to Payment" : "Continue"}
                  </span>
                  {step < 3 && (
                    <ArrowRight className='ml-1 sm:ml-2' size={18} />
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary - Improved mobile layout */}
          <div className='lg:col-span-1'>
            <motion.div
              className='rounded-2xl shadow-xl p-4 sm:p-6 sticky top-6'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <h2 className='text-xl sm:text-2xl font-bold mb-4 sm:mb-6'>
                Order Summary
              </h2>

              <div className='mb-4 sm:mb-6 p-3 sm:p-4 bg-purple-50 dark:bg-gray-700 rounded-xl'>
                <h3 className='font-bold text-sky-500 mb-1 sm:mb-2 text-sm sm:text-base'>
                  Festival Details
                </h3>
                <p className='flex items-center mb-1 text-xs sm:text-sm'>
                  <Calendar className='text-amber-600 mr-1 sm:mr-2' size={14} />
                  <span>November 7-9, 2025</span>
                </p>
                <p className='flex items-center text-xs sm:text-sm'>
                  <MapPin className='text-amber-600 mr-1 sm:mr-2' size={14} />
                  <span>Cultural Heritage Center, Enugu</span>
                </p>
              </div>

              <div className='border-b border-gray-200 pb-3 sm:pb-4 mb-3 sm:mb-4'>
                <h3 className='font-bold mb-2 sm:mb-3 text-sm sm:text-base'>
                  Tickets
                </h3>
                <div className='flex justify-between mb-1 text-sm sm:text-base'>
                  <span>{formData.ticketQuantity} × Festival Pass</span>
                  <span className='font-bold'>
                    ₦{(formData.ticketQuantity * ticketPrice).toLocaleString()}
                  </span>
                </div>
              </div>

              <div className='mb-4 sm:mb-6'>
                <div className='flex justify-between font-bold text-base sm:text-lg mb-1 sm:mb-2'>
                  <span>Total:</span>
                  <span>₦{calculateTotal().toLocaleString()}</span>
                </div>
              </div>

              <div className='bg-purple-50 dark:bg-gray-700 rounded-xl p-3 sm:p-4'>
                <h3 className='font-bold text-sky-500 mb-1 sm:mb-2 text-sm sm:text-base'>
                  Need Help?
                </h3>
                <p className='text-xs sm:text-sm mb-2 sm:mb-3'>
                  Contact our registration team:
                </p>
                <p className='text-xs sm:text-sm flex items-center'>
                  <Mail className='text-amber-600 mr-1 sm:mr-2' size={12} />
                  <span>email@nwanyi-bu-ife.com.ng</span>
                </p>
                <p className='text-xs sm:text-sm flex items-center mt-1'>
                  <Phone className='text-amber-600 mr-1 sm:mr-2' size={12} />
                  <span>+234 812 345 6789</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-12 sm:py-16 bg-gradient-to-r from-purple-50 to-amber-50 dark:from-sky-900 dark:to-purple-800'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='text-center mb-8 sm:mb-12'>
            <SectionTitle
              title='Why Attend?'
              subtitle="Experience the power of cultural celebration and women's empowerment"
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6'>
            {[
              {
                title: "Cultural Immersion",
                desc: "Experience Igbo traditions through dance, music, art, and culinary experiences.",
              },
              {
                title: "Empowerment Sessions",
                desc: "Learn from leading women in business, technology, arts, and social impact.",
              },
              {
                title: "Networking Opportunities",
                desc: "Connect with like-minded individuals and organizations driving change.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className='bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div className='w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-full flex items-center justify-center mb-3 sm:mb-4'>
                  <div className='bg-amber-500 w-2 h-6 sm:h-8 rounded-full' />
                </div>
                <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3'>
                  {benefit.title}
                </h3>
                <p className='text-muted-foreground text-sm sm:text-base'>
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
