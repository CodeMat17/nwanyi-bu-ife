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
  Ticket,
  CreditCard,
  BadgeCheck,
  Calendar,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import GlowingBanner from "@/components/GlowingBanner";

// Define types for tickets
type TicketType = "earlyBird" | "regular" | "vip" | "student";
type Tickets = Record<TicketType, number>;

// Define workshop type
type Workshop = {
  id: string;
  name: string;
  price: number;
};

// Define form data structure
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  dietary: string;
  accessibility: string;
  tickets: Tickets;
  workshops: string[];
  paymentMethod: "credit" | "paystack";
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
};

// Define ticket option
type TicketOption = {
  id: TicketType;
  name: string;
  price: number;
  desc: string;
  badge?: string;
};

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    dietary: "",
    accessibility: "",
    tickets: {
      earlyBird: 0,
      regular: 0,
      vip: 0,
      student: 0,
    },
    workshops: [],
    paymentMethod: "credit",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const workshopOptions: Workshop[] = [
    { id: "weaving", name: "Traditional Igbo Weaving Workshop", price: 25 },
    { id: "leadership", name: "Women in Leadership Masterclass", price: 40 },
    { id: "tech", name: "Tech Innovation for Social Impact", price: 30 },
    { id: "culinary", name: "Igbo Culinary Heritage Experience", price: 35 },
  ];

  const ticketPrices: Record<TicketType, number> = {
    earlyBird: 100,
    regular: 150,
    vip: 300,
    student: 75,
  };

  const ticketOptions: TicketOption[] = [
    {
      id: "earlyBird",
      name: "Early Bird Pass",
      price: 100,
      desc: "Available until July 15, 2025",
      badge: "Best Value",
    },
    {
      id: "regular",
      name: "Regular Pass",
      price: 150,
      desc: "Available until October 30, 2025",
    },
    {
      id: "vip",
      name: "VIP Experience",
      price: 300,
      desc: "Includes premium seating and exclusive events",
      badge: "Popular",
    },
    {
      id: "student",
      name: "Student Pass",
      price: 75,
      desc: "Valid student ID required at check-in",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTicketChange = (ticketType: TicketType, value: number) => {
    setFormData((prev) => ({
      ...prev,
      tickets: {
        ...prev.tickets,
        [ticketType]: Math.max(0, value),
      },
    }));
  };

  const handleWorkshopToggle = (id: string) => {
    setFormData((prev) => {
      if (prev.workshops.includes(id)) {
        return { ...prev, workshops: prev.workshops.filter((w) => w !== id) };
      } else {
        return { ...prev, workshops: [...prev.workshops, id] };
      }
    });
  };

  const calculateTotal = () => {
    let total = 0;

    // Calculate ticket costs
    (Object.entries(formData.tickets) as [TicketType, number][]).forEach(
      ([type, quantity]) => {
        total += quantity * ticketPrices[type];
      }
    );

    // Calculate workshop costs
    formData.workshops.forEach((id) => {
      const workshop = workshopOptions.find((w) => w.id === id);
      if (workshop) total += workshop.price;
    });

    return total;
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would process payment and submit to backend
    console.log("Form submitted:", formData);
    nextStep(); // Move to confirmation
  };

  return (
    <div className='relative overflow-hidden bg-amber-50 dark:bg-gray-900'>
      <CulturalPattern />

   

      {/* Glowing Banner */}
      <GlowingBanner
        title='Festival Registration'
        subtitle='Secure your spot at the most empowering cultural event of the year'
      />

      {/* Progress Bar */}
      <div className='max-w-4xl mx-auto px-4 py-8'>
        <div className='flex justify-between relative'>
          {/* Progress line */}
          <div className='absolute top-4 left-0 right-0 h-1 bg-gray-200 -z-10 mx-16'></div>
          <div
            className='absolute top-4 left-0 h-1 bg-amber-500 -z-10 transition-all duration-500'
            style={{ width: `${(step - 1) * 33.33}%` }}></div>

          {[1, 2, 3, 4].map((num) => (
            <div key={num} className='flex flex-col items-center'>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  step >= num
                    ? "bg-amber-500 text-white"
                    : "bg-white border-2 border-gray-300 text-gray-400"
                }`}>
                {step > num ? <Check size={20} /> : num}
              </div>
              <span
                className={`text-sm font-medium ${
                  step >= num ? "text-amber-600" : "text-gray-500"
                }`}>
                {num === 1 && "Information"}
                {num === 2 && "Tickets"}
                {num === 3 && "Payment"}
                {num === 4 && "Confirm"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Form Section */}
      <section className='py-12 px-4 max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Registration Form */}
          <div className='lg:col-span-2'>
            <form
              onSubmit={handleSubmit}
              className='bg-white dark:bg-gray-700 rounded-2xl shadow-xl p-6 md:p-8'>
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}>
                  <h2 className='text-2xl font-bold mb-6 flex items-center'>
                    <BadgeCheck className='text-amber-600 mr-3' size={24} />
                    Personal Information
                  </h2>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                    <div>
                      <label
                        htmlFor='firstName'
                        className='block text-muted-foreground mb-2'>
                        First Name *
                      </label>
                      <input
                        type='text'
                        id='firstName'
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent'
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='lastName'
                        className='block text-muted-foreground mb-2'>
                        Last Name *
                      </label>
                      <input
                        type='text'
                        id='lastName'
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent'
                        required
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-muted-foreground mb-2'>
                        Email Address *
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent'
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='phone'
                        className='block text-muted-foreground mb-2'>
                        Phone Number *
                      </label>
                      <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent'
                        required
                      />
                    </div>
                  </div>

                  <div className='mb-6'>
                    <label
                      htmlFor='organization'
                      className='block text-muted-foreground mb-2'>
                      Organization/Affiliation
                    </label>
                    <input
                      type='text'
                      id='organization'
                      name='organization'
                      value={formData.organization}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent'
                      placeholder='Company, school, or community group'
                    />
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <label
                        htmlFor='dietary'
                        className='block text-muted-foreground mb-2'>
                        Dietary Requirements
                      </label>
                      <input
                        type='text'
                        id='dietary'
                        name='dietary'
                        value={formData.dietary}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent'
                        placeholder='Vegetarian, allergies, etc.'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='accessibility'
                        className='block text-muted-foreground mb-2'>
                        Accessibility Needs
                      </label>
                      <input
                        type='text'
                        id='accessibility'
                        name='accessibility'
                        value={formData.accessibility}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent'
                        placeholder='Mobility assistance, etc.'
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Ticket Selection */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}>
                  <h2 className='text-2xl font-bold mb-6 flex items-center'>
                    <Ticket className='text-amber-600 mr-3' size={24} />
                    Select Tickets & Workshops
                  </h2>

                  <div className='mb-8'>
                    <h3 className='text-xl font-bold mb-4 text-sky-500'>
                      Festival Passes
                    </h3>
                    <div className='space-y-4'>
                      {ticketOptions.map((ticket) => (
                        <div
                          key={ticket.id}
                          className='flex items-center justify-between p-4 border border-gray-200 rounded-xl'>
                          <div>
                            <div className='flex items-center'>
                              <h4 className='font-bold'>{ticket.name}</h4>
                              {ticket.badge && (
                                <span className='ml-3 bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full'>
                                  {ticket.badge}
                                </span>
                              )}
                            </div>
                            <p className='text-muted-foreground text-sm'>
                              {ticket.desc}
                            </p>
                            <p className='font-bold text-lg mt-1'>
                              ${ticket.price}
                            </p>
                          </div>

                          <div className='flex items-center'>
                            <button
                              type='button'
                              className='w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200'
                              onClick={() =>
                                handleTicketChange(
                                  ticket.id,
                                  formData.tickets[ticket.id] - 1
                                )
                              }>
                              -
                            </button>
                            <span className='mx-3 w-8 text-center'>
                              {formData.tickets[ticket.id]}
                            </span>
                            <button
                              type='button'
                              className='w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200'
                              onClick={() =>
                                handleTicketChange(
                                  ticket.id,
                                  formData.tickets[ticket.id] + 1
                                )
                              }>
                              +
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className='text-xl font-bold mb-4 text-sky-500'>
                      Optional Workshops
                    </h3>
                    <div className='space-y-3'>
                      {workshopOptions.map((workshop) => (
                        <div
                          key={workshop.id}
                          className={`flex items-start p-4 border rounded-xl cursor-pointer transition-colors ${
                            formData.workshops.includes(workshop.id)
                              ? "border-amber-500 bg-amber-50"
                              : "border-gray-200 hover:border-purple-300"
                          }`}
                          onClick={() => handleWorkshopToggle(workshop.id)}>
                          <div
                            className={`w-5 h-5 flex items-center justify-center rounded-full border mr-4 mt-1 ${
                              formData.workshops.includes(workshop.id)
                                ? "bg-amber-500 border-amber-500 text-white"
                                : "border-gray-300"
                            }`}>
                            {formData.workshops.includes(workshop.id) && (
                              <Check size={14} />
                            )}
                          </div>
                          <div className='flex-1'>
                            <h4 className='font-bold'>{workshop.name}</h4>
                            <p className='text-amber-600 font-bold'>
                              ${workshop.price}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Payment */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}>
                  <h2 className='text-2xl font-bold mb-6 flex items-center'>
                    <CreditCard className='text-amber-600 mr-3' size={24} />
                    Payment Information
                  </h2>

                  <div className='mb-6'>
                    <h3 className='text-lg font-bold mb-3'>Payment Method</h3>
                    <div className='flex gap-4 mb-6'>
                      <button
                        type='button'
                        className={`px-4 py-3 rounded-xl border-2 flex-1 text-center ${
                          formData.paymentMethod === "credit"
                            ? "border-amber-500 bg-amber-50 text-gray-900"
                            : "border-gray-200 hover:border-purple-300"
                        }`}
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            paymentMethod: "credit",
                          }))
                        }>
                        Credit Card
                      </button>
                      <button
                        type='button'
                        className={`px-4 py-3 rounded-xl border-2 flex-1 text-center ${
                          formData.paymentMethod === "paystack"
                            ? "border-amber-500 bg-amber-50 text-gray-900"
                            : "border-gray-200 hover:border-purple-300"
                        }`}
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            paymentMethod: "paystack",
                          }))
                        }>
                        Paystack
                      </button>
                    </div>
                  </div>

                  {formData.paymentMethod === "credit" ? (
                    <div className='space-y-6'>
                      <div>
                        <label
                          htmlFor='cardName'
                          className='block text-muted-foreground mb-2'>
                          Name on Card *
                        </label>
                        <input
                          type='text'
                          id='cardName'
                          name='cardName'
                          value={formData.cardName}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent'
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor='cardNumber'
                          className='block text-muted-foreground mb-2'>
                          Card Number *
                        </label>
                        <input
                          type='text'
                          id='cardNumber'
                          name='cardNumber'
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent'
                          placeholder='0000 0000 0000 0000'
                          required
                        />
                      </div>

                      <div className='grid grid-cols-2 gap-6'>
                        <div>
                          <label
                            htmlFor='expiry'
                            className='block text-muted-foreground mb-2'>
                            Expiry Date *
                          </label>
                          <input
                            type='text'
                            id='expiry'
                            name='expiry'
                            value={formData.expiry}
                            onChange={handleInputChange}
                            className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent'
                            placeholder='MM/YY'
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor='cvv'
                            className='block text-muted-foreground mb-2'>
                            CVV *
                          </label>
                          <input
                            type='text'
                            id='cvv'
                            name='cvv'
                            value={formData.cvv}
                            onChange={handleInputChange}
                            className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent'
                            placeholder='123'
                            required
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className='bg-purple-50 dark:bg-gray-800 rounded-xl p-6 text-center'>
                      <div className='mb-4'>
                        <div className='bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto' />
                      </div>
                      <p className='mb-6'>
                        You&apos;ll be redirected to Paystack to complete your
                        payment after registration
                      </p>
                      <button
                        type='button'
                        className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium'>
                        Connect Paystack Account
                      </button>
                    </div>
                  )}

                  <div className='mt-8 p-4 bg-purple-50 rounded-xl'>
                    <p className='text-sm text-purple-800'>
                      <span className='font-bold'>Secure Payment:</span> All
                      transactions are encrypted and securely processed. We do
                      not store your credit card information.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Confirmation */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className='text-center py-10'>
                  <div className='w-24 h-24 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                    <Check
                      className='text-amber-600'
                      size={48}
                      strokeWidth={2.5}
                    />
                  </div>

                  <h2 className='text-3xl font-bold mb-4'>
                    Registration Complete!
                  </h2>
                  <p className='text-xl text-muted-foreground max-w-2xl mx-auto mb-8'>
                    Thank you for registering for the Nwanyị bụ Ife Festival.
                    We&apos;ve sent a confirmation to
                    <span className='font-bold'> {formData.email}</span> with
                    your ticket details.
                  </p>

                  <div className='bg-purple-50 rounded-2xl p-6 max-w-md mx-auto mb-8'>
                    <h3 className='font-bold text-lg mb-3'>Next Steps</h3>
                    <ul className='space-y-2 text-left'>
                      <li className='flex items-center'>
                        <Check className='text-amber-600 mr-2' size={18} />
                        <span>Check your email for tickets</span>
                      </li>
                      <li className='flex items-center'>
                        <Check className='text-amber-600 mr-2' size={18} />
                        <span>Download the festival app (coming soon)</span>
                      </li>
                      <li className='flex items-center'>
                        <Check className='text-amber-600 mr-2' size={18} />
                        <span>Join our community forum to connect</span>
                      </li>
                    </ul>
                  </div>

                  <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <button
                      type='button'
                      className='bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-full'>
                      Download Tickets
                    </button>
                    <button
                      type='button'
                      className='border-2 border-sky-500 text-sky-800 hover:bg-sky-50 font-bold px-8 py-3 rounded-full'>
                      Back to Festival Home
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              {step < 4 && (
                <div className='mt-10 flex justify-between'>
                  {step > 1 && (
                    <button
                      type='button'
                      onClick={prevStep}
                      className='flex items-center text-sky-500 font-bold px-6 py-3 rounded-full hover:bg-purple-50'>
                      <ArrowLeft className='mr-2' size={20} />
                      Previous
                    </button>
                  )}

                  <button
                    type={step < 3 ? "button" : "submit"}
                    onClick={step < 3 ? nextStep : undefined}
                    className={`flex items-center ml-auto ${
                      step === 3
                        ? "bg-amber-500 hover:bg-amber-600 text-white"
                        : "bg-purple-700 hover:bg-purple-800 text-white"
                    } font-bold px-8 py-3 rounded-full`}>
                    {step === 3 ? "Complete Registration" : "Continue"}
                    {step < 3 && <ArrowRight className='ml-2' size={20} />}
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Order Summary */}
          <div className='lg:col-span-1'>
            <motion.div
              className='rounded-2xl shadow-xl p-6 sticky top-6'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <h2 className='text-2xl font-bold mb-6'>Order Summary</h2>

              <div className='mb-6 p-4 bg-purple-50 dark:bg-gray-700 rounded-xl'>
                <h3 className='font-bold text-sky-500 mb-2'>
                  Festival Details
                </h3>
                <p className='flex items-center mb-1'>
                  <Calendar className='text-amber-600 mr-2' size={18} />
                  <span>November 7-9, 2025</span>
                </p>
                <p className='flex items-center'>
                  <MapPin className='text-amber-600 mr-2' size={18} />
                  <span>Cultural Heritage Center, Enugu</span>
                </p>
              </div>

              <div className='border-b border-gray-200 pb-4 mb-4'>
                <h3 className='font-bold mb-3'>Tickets</h3>

                {(Object.entries(formData.tickets) as [TicketType, number][])
                  .filter((entry) => entry[1] > 0)
                  .map(([type, quantity]) => {
                    const ticketName =
                      ticketOptions.find((t) => t.id === type)?.name || type;
                    return (
                      <div key={type} className='flex justify-between mb-2'>
                        <span>
                          {quantity} x {ticketName}
                        </span>
                        <span className='font-bold'>
                          ${quantity * ticketPrices[type]}
                        </span>
                      </div>
                    );
                  })}

                {Object.values(formData.tickets).every((qty) => qty === 0) && (
                  <p className='text-gray-500 text-sm'>No tickets selected</p>
                )}
              </div>

              {formData.workshops.length > 0 && (
                <div className='border-b border-gray-200 pb-4 mb-4'>
                  <h3 className='font-bold  mb-3'>Workshops</h3>

                  {formData.workshops.map((id) => {
                    const workshop = workshopOptions.find((w) => w.id === id);
                    if (!workshop) return null;

                    return (
                      <div key={id} className='flex justify-between mb-2'>
                        <span>{workshop.name}</span>
                        <span className='font-bold'>${workshop.price}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className='mb-6'>
                <div className='flex justify-between font-bold text-lg mb-2'>
                  <span>Total:</span>
                  <span>${calculateTotal()}</span>
                </div>

                {step === 3 && (
                  <div className='bg-amber-50 dark:bg-gray-700 p-4 rounded-xl text-sm'>
                    <p className='flex items-center mb-2'>
                      <Check className='text-amber-600 mr-2' size={18} />
                      <span>Early Bird discount applied</span>
                    </p>
                    <p className='flex items-center'>
                      <Check className='text-amber-600 mr-2' size={18} />
                      <span>Student discount applied</span>
                    </p>
                  </div>
                )}
              </div>

              {step < 4 && (
                <div className='bg-purple-50 dark:bg-gray-700 rounded-xl p-4'>
                  <h3 className='font-bold text-sky-500 mb-2'>Need Help?</h3>
                  <p className='text-sm mb-3'>
                    Contact our registration team for assistance:
                  </p>
                  <p className='text-sm flex items-center'>
                    <Mail className='text-amber-600 mr-2' size={16} />
                    <span>registration@nwanyibuife.org</span>
                  </p>
                  <p className='text-sm flex items-center mt-1'>
                    <Phone className='text-amber-600 mr-2' size={16} />
                    <span>+234 812 345 6789</span>
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {step < 4 && (
        <section className='py-16 bg-gradient-to-r from-purple-50 to-amber-50 dark:from-sky-900 dark:to-purple-800'>
          <div className='max-w-6xl mx-auto px-4'>
            <div className='text-center mb-12'>
              <SectionTitle
                title='Why Attend?'
                subtitle="Experience the power of cultural celebration and women's empowerment"
              />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
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
                  className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg'
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <div className='w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4'>
                    <div className='bg-amber-500 w-2 h-8 rounded-full' />
                  </div>
                  <h3 className='text-xl font-bold mb-3'>{benefit.title}</h3>
                  <p className='text-muted-foreground'>{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {step < 4 && (
        <section className='py-16 bg-sky-900 text-white'>
          <div className='max-w-4xl mx-auto px-4 text-center'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>
              <h2 className='text-3xl md:text-4xl font-bold mb-12'>
                Voices from Previous Festivals
              </h2>

              <div className='space-y-8'>
                {[
                  {
                    text: "The festival transformed my understanding of our cultural heritage and empowered me to start my own social enterprise.",
                    author: "Amara Nwosu",
                    role: "Entrepreneur, 2024 Attendee",
                  },
                  {
                    text: "I've never felt more connected to my roots. The workshops and performances were life-changing.",
                    author: "Chioma Eze",
                    role: "Educator, 2024 Attendee",
                  },
                  {
                    text: "The connections I made at Nwanyị bụ Ife have blossomed into meaningful collaborations that continue to this day.",
                    author: "Zainab Bello",
                    role: "Tech Innovator, 2024 Speaker",
                  },
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className='bg-white/10 backdrop-blur-sm rounded-2xl p-6'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}>
                    <p className='text-xl italic mb-4'>
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div className='font-bold'>{testimonial.author}</div>
                    <div className='text-amber-300'>{testimonial.role}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
