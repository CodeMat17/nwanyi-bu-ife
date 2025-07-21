"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import CulturalPattern from "@/components/CulturalPattern";
import GlowingBanner from "@/components/GlowingBanner";
import { motion } from "framer-motion";

type FormData = {
  nominator: {
    fullName: string;
    email: string;
    confirmEmail: string;
    phone: string;
  };
  nominee: {
    fullName: string;
    title: string;
    email: string;
    confirmEmail: string;
    phone: string;
    reason: string;
  };
};

type FormErrors = {
  nominator?: {
    fullName?: string;
    email?: string;
    confirmEmail?: string;
    phone?: string;
  };
  nominee?: {
    fullName?: string;
    title?: string;
    email?: string;
    confirmEmail?: string;
    phone?: string;
    reason?: string;
  };
};

export default function NominationPage() {
  const [formData, setFormData] = useState<FormData>({
    nominator: {
      fullName: "",
      email: "",
      confirmEmail: "",
      phone: "",
    },
    nominee: {
      fullName: "",
      title: "",
      email: "",
      confirmEmail: "",
      phone: "",
      reason: "",
    },
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Nominator validation
    if (!formData.nominator.fullName.trim()) {
      newErrors.nominator = {
        ...newErrors.nominator,
        fullName: "Full name is required",
      };
    }

    if (!formData.nominator.email.trim()) {
      newErrors.nominator = {
        ...newErrors.nominator,
        email: "Email is required",
      };
    } else if (!validateEmail(formData.nominator.email)) {
      newErrors.nominator = {
        ...newErrors.nominator,
        email: "Invalid email format",
      };
    }

    if (formData.nominator.email !== formData.nominator.confirmEmail) {
      newErrors.nominator = {
        ...newErrors.nominator,
        confirmEmail: "Emails don't match",
      };
    }

    if (!formData.nominator.phone.trim()) {
      newErrors.nominator = {
        ...newErrors.nominator,
        phone: "Phone number is required",
      };
    }

    // Nominee validation
    if (!formData.nominee.fullName.trim()) {
      newErrors.nominee = {
        ...newErrors.nominee,
        fullName: "Full name is required",
      };
    }

    if (!formData.nominee.title.trim()) {
      newErrors.nominee = {
        ...newErrors.nominee,
        title: "Title is required",
      };
    }

    if (!formData.nominee.email.trim()) {
      newErrors.nominee = {
        ...newErrors.nominee,
        email: "Email is required",
      };
    } else if (!validateEmail(formData.nominee.email)) {
      newErrors.nominee = {
        ...newErrors.nominee,
        email: "Invalid email format",
      };
    }

    if (formData.nominee.email !== formData.nominee.confirmEmail) {
      newErrors.nominee = {
        ...newErrors.nominee,
        confirmEmail: "Emails don't match",
      };
    }

    if (!formData.nominee.phone.trim()) {
      newErrors.nominee = {
        ...newErrors.nominee,
        phone: "Phone number is required",
      };
    }

    if (!formData.nominee.reason.trim()) {
      newErrors.nominee = {
        ...newErrors.nominee,
        reason: "Reason is required",
      };
    } else if (formData.nominee.reason.length < 50) {
      newErrors.nominee = {
        ...newErrors.nominee,
        reason: "Reason must be at least 50 characters",
      };
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const [section, field] = name.split(".");

    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section as keyof FormData],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset form after submission
        setFormData({
          nominator: {
            fullName: "",
            email: "",
            confirmEmail: "",
            phone: "",
          },
          nominee: {
            fullName: "",
            title: "",
            email: "",
            confirmEmail: "",
            phone: "",
            reason: "",
          },
        });
      }, 1500);
    }
  };

  if (isSuccess) {
    return (
      <div className='relative overflow-hidden'>
        <CulturalPattern />
        <section className='min-h-screen flex items-center justify-center'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className='text-center'>
            <div className='bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-md mx-auto'>
              <div className='w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-10 w-10 text-green-600 dark:text-green-300'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              </div>
              <h2 className='text-2xl font-bold text-gray-800 dark:text-white mb-2'>
                Nomination Submitted!
              </h2>
              <p className='text-gray-600 dark:text-gray-300 mb-6'>
                Thank you for your nomination. We&apos;ll review it and get back to
                you soon.
              </p>
              <Button
                onClick={() => setIsSuccess(false)}
                className='bg-amber-600 hover:bg-amber-700'>
                Submit Another Nomination
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
    );
  }

  return (
    <div className='relative overflow-hidden'>
      <CulturalPattern />

      <GlowingBanner
        title='Award Nominations'
        subtitle='Recognize outstanding individuals contributing to our cultural heritage'
      />

      <section className='py-12 px-4 max-w-6xl mx-auto flex flex-col lg:flex-row gap-8'>
        <div className='top-24 mx-auto w-[512px] lg:w-[30%]'>
          <div className=' '>
            <Card className='border-0 shadow-lg'>
              <CardHeader className=' text-amber-600'>
                <CardTitle className=' text-xl font-serif tracking-wide'>
                  Nomination Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className='p-6 space-y-4'>
                <ul className='list-disc pl-5 space-y-3 text-sm'>
                  <li>All fields marked with * are required</li>
                  <li>Provide accurate contact information</li>
                  <li>
                    Reason for nomination should be at least 50 characters
                  </li>
                  <li>Nominations close on October 15, 2025</li>
                  <li>You may nominate multiple individuals</li>
                  <li>Self-nominations are allowed</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className='mx-auto w-[512px] lg:w-[70%] space-y-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='space-y-8 '>
            {/* Nominator Card */}
            <div>
              <Card className='border-0 shadow-xl   dark:border dark:bg-gray-700'>
                <CardHeader className=''>
                  <CardTitle className=' text-2xl tracking-wide'>
                    Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent className='p-6 md:p-8 space-y-6'>
                  <div className='grid grid-cols-1 gap-6'>
                    <div>
                      <Label htmlFor='nominator.fullName'>Full Name *</Label>
                      <Input
                        id='nominator.fullName'
                        name='nominator.fullName'
                        value={formData.nominator.fullName}
                        onChange={handleChange}
                        placeholder='Your full name'
                        className='mt-2'
                      />
                      {errors.nominator?.fullName && (
                        <p className='text-red-500 text-sm mt-1'>
                          {errors.nominator.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor='nominator.email'>Email *</Label>
                      <Input
                        id='nominator.email'
                        name='nominator.email'
                        type='email'
                        value={formData.nominator.email}
                        onChange={handleChange}
                        placeholder='your@email.com'
                        className='mt-2'
                      />
                      {errors.nominator?.email && (
                        <p className='text-red-500 text-sm mt-1'>
                          {errors.nominator.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor='nominator.phone'>Phone Number *</Label>
                      <Input
                        id='nominator.phone'
                        name='nominator.phone'
                        value={formData.nominator.phone}
                        onChange={handleChange}
                        placeholder='+234 800 000 0000'
                        className='mt-2'
                      />
                      {errors.nominator?.phone && (
                        <p className='text-red-500 text-sm mt-1'>
                          {errors.nominator.phone}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Nominee Card */}
            <div>
              <Card className='border-0 shadow-xl  dark:border dark:bg-gray-700'>
                <CardHeader className=''>
                  <CardTitle className=' text-2xl  tracking-wide'>
                    Nominee Information
                  </CardTitle>
                </CardHeader>
                <CardContent className='p-6 md:p-8 space-y-6'>
                  <div>
                    <Label htmlFor='nominee.fullName'>Full Name *</Label>
                    <Input
                      id='nominee.fullName'
                      name='nominee.fullName'
                      value={formData.nominee.fullName}
                      onChange={handleChange}
                      placeholder="Nominee's full name"
                      className='mt-2'
                    />
                    {errors.nominee?.fullName && (
                      <p className='text-red-500 text-sm mt-1'>
                        {errors.nominee.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor='nominee.title'>Title/Position *</Label>
                    <Input
                      id='nominee.title'
                      name='nominee.title'
                      value={formData.nominee.title}
                      onChange={handleChange}
                      placeholder='e.g. Cultural Ambassador'
                      className='mt-2'
                    />
                    {errors.nominee?.title && (
                      <p className='text-red-500 text-sm mt-1'>
                        {errors.nominee.title}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor='nominee.email'>Email *</Label>
                    <Input
                      id='nominee.email'
                      name='nominee.email'
                      type='email'
                      value={formData.nominee.email}
                      onChange={handleChange}
                      placeholder='nominee@email.com'
                      className='mt-2'
                    />
                    {errors.nominee?.email && (
                      <p className='text-red-500 text-sm mt-1'>
                        {errors.nominee.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor='nominee.phone'>Phone Number *</Label>
                    <Input
                      id='nominee.phone'
                      name='nominee.phone'
                      value={formData.nominee.phone}
                      onChange={handleChange}
                      placeholder='+234 800 000 0000'
                      className='mt-2'
                    />
                    {errors.nominee?.phone && (
                      <p className='text-red-500 text-sm mt-1'>
                        {errors.nominee.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor='nominee.reason'>
                      Reason for Nomination *
                    </Label>
                    <Textarea
                      id='nominee.reason'
                      name='nominee.reason'
                      value={formData.nominee.reason}
                      onChange={handleChange}
                      placeholder='Describe their contributions, achievements, and impact (minimum 50 characters)'
                      className='min-h-[150px] mt-2'
                    />
                    {errors.nominee?.reason && (
                      <p className='text-red-500 text-sm mt-1'>
                        {errors.nominee.reason}
                      </p>
                    )}
                    <p className='text-sm text-gray-500 mt-2'>
                      {formData.nominee.reason.length}/500 characters
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
          <div className='flex justify-center'>
            <Button
              type='submit'
              onClick={handleSubmit}
              className='bg-amber-600 hover:bg-amber-700 px-8 py-6 text-lg w-full '
              disabled={isSubmitting}>
              {isSubmitting ? (
                <>
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
                  Submitting...
                </>
              ) : (
                "Submit Nomination"
              )}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
