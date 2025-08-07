// src/app/contact/page.tsx
"use client";

import CulturalPattern from "@/components/CulturalPattern";
import GlowingBanner from "@/components/GlowingBanner";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length > 100) {
      newErrors.name = "Name must be less than 100 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.length > 200) {
      newErrors.subject = "Subject must be less than 200 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length > 2000) {
      newErrors.message = "Message must be less than 2000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormErrors];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          to:
            process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@nwanyibuife.org",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSuccessModalOpen(true);
    } catch (error: unknown) {
      console.error("Error sending message:", error);

      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again.";

      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='relative overflow-hidden'>
      <CulturalPattern />

      {/* Success Modal */}
      {/* Success Dialog */}
      <Dialog open={isSuccessModalOpen} onOpenChange={setIsSuccessModalOpen}>
        <DialogContent className='sm:max-w-md rounded-lg'>
          <DialogHeader>
            <div className='flex flex-col items-center text-center space-y-4'>
              <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100'>
                <CheckCircle className='h-10 w-10 text-green-600' />
              </div>
              <DialogTitle className='text-2xl font-bold'>
                Message Sent Successfully!
              </DialogTitle>
              <p className='text-muted-foreground'>
                Thank you for reaching out to us. Our team will get back to you
                within 24-48 hours.
              </p>
            </div>
          </DialogHeader>
          <div className='flex justify-center'>
            <Button
              type='button'
              className='rounded-full'
              onClick={() => setIsSuccessModalOpen(false)}>
              Continue Exploring
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Glowing Banner */}
      <GlowingBanner
        title='Contact Us'
        subtitle='Reach out to our team for inquiries, partnerships, or media requests'
      />

      {/* Contact Section */}
      <section className='pt-8 pb-16 px-4 max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <div>
            <motion.div
              className='bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl'
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}>
              <h2 className='text-3xl font-bold mb-6'>Send Us a Message</h2>

              <form className='space-y-4' onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-muted-foreground mb-2'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent`}
                    placeholder='Your full name'
                    required
                  />
                  {errors.name && (
                    <p className='mt-1 text-sm text-red-500'>{errors.name}</p>
                  )}
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
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent`}
                    placeholder='you@example.com'
                    required
                  />
                  {errors.email && (
                    <p className='mt-1 text-sm text-red-500'>{errors.email}</p>
                  )}
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
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.subject ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent`}
                    placeholder='How can we help?'
                    required
                  />
                  {errors.subject && (
                    <p className='mt-1 text-sm text-red-500'>
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-muted-foreground mb-2'>
                    Your Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent`}
                    placeholder='Type your message here...'
                    required
                  />
                  {errors.message && (
                    <p className='mt-1 text-sm text-red-500'>
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className={`w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-full transition-colors flex items-center justify-center group ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}>
                  {isSubmitting ? (
                    <div className='flex items-center'>
                      <svg
                        className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'>
                        <circle
                          className='opacity-25'
                          cx='12'
                          cy='12'
                          r='10'
                          stroke='currentColor'
                          strokeWidth='4'></circle>
                        <path
                          className='opacity-75'
                          fill='currentColor'
                          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    <>
                      Send Message
                      <Send className='h-5 w-5 ml-2 transition-transform group-hover:translate-x-1' />
                    </>
                  )}
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
                    <a
                      href={"mailto:email@nwanyi-bu-ife.com.ng"}
                      className='text-muted-foreground hover:text-amber-500'>
                      email@nwanyi-bu-ife.com.ng
                    </a>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='bg-amber-100 p-3 rounded-full mr-4'>
                    <Phone className='h-6 w-6 text-amber-600' />
                  </div>
                  <div>
                    <h3 className='font-bold text-lg mb-1'>Call Us</h3>
                    <a
                      href={"tel:+2347030991464"}
                      className='text-muted-foreground hover:text-amber-500'>
                      +234 703 099 1464
                    </a>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='bg-amber-100 p-3 rounded-full mr-4'>
                    <MapPin className='h-6 w-6 text-amber-600' />
                  </div>
                  <div>
                    <h3 className='font-bold text-lg mb-1'>Visit Us</h3>
                    <p className='text-muted-foreground'>83 Park Avenue</p>
                    <p className='text-muted-foreground'>GRA Enugu</p>
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
                <div className='flex flex-col sm:flex-row justify-between border-b border-white/20 pb-3'>
                  <p>Monday - Friday</p>
                  <p className='font-medium text-lg'>9:00 AM - 5:00 PM</p>
                </div>
                <div className='flex flex-col sm:flex-row justify-between border-b border-white/20 pb-3'>
                  <span>Saturday</span>
                  <span className='font-medium text-lg'>
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className='flex flex-col sm:flex-row justify-between'>
                  <span>Sunday</span>
                  <span className='font-medium text-lg'>Closed</span>
                </div>
              </div>

              <div className='mt-6 bg-white/10 rounded-xl p-4'>
                <div className='font-medium flex flex-col sm:flex-row sm:gap-2'>
                  <p>Festival Week Hours</p>
                  <p>(Nov 1-7):</p>
                </div>

                <p className='text-amber-200'>8:00 AM - 9:00 PM Daily</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
                  "We accept applications for performers and exhibitors. The application period opens January 15, 2025. Check our Partners page for details.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg'
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <h3 className='text-xl font-bold mb-3'>{faq.question}</h3>
                <p className='text-muted-foreground'>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className='py-20 bg-gradient-to-r from-purple-900 to-amber-800 text-white'>
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
      </section> */}
    </div>
  );
}
