// src/app/partners/page.tsx
"use client";

import SectionTitle from "@/components/SectionTitle";
import CulturalPattern from "@/components/CulturalPattern";
import { motion } from "framer-motion";
import {
  Handshake,
  Star,
  Award,
  Mic,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";
import GlowingBanner from "@/components/GlowingBanner";

// Partner data
const partnerTiers = [
  {
    name: "Premier Partners",
    description: "Visionary organizations leading the empowerment movement",
    partners: [
      {
        id: 1,
        name: "Zenith Bank",
        logo: "/zenith.png",
        description:
          "Financial empowerment initiatives for women entrepreneurs",
      },
      {
        id: 2,
        name: "MTN Nigeria",
        logo: "/mtn.png",
        description: "Digital inclusion programs across Nigeria",
      },
      {
        id: 3,
        name: "Dangote Group",
        logo: "/dangote.png",
        description: "Supporting women in manufacturing and industry",
      },
    ],
  },
  {
    name: "Strategic Partners",
    description: "Key collaborators driving our mission forward",
    partners: [
      {
        id: 1,
        name: "UN Women",
        logo: "/unwomen.png",
        description: "Global gender equality initiatives",
      },
      {
        id: 2,
        name: "Google Africa",
        logo: "/google.png",
        description: "Tech skills development for women",
      },
      {
        id: 3,
        name: "Tony Elumelu Foundation",
        logo: "/tef.png",
        description: "Entrepreneurship funding and mentorship",
      },
      {
        id: 4,
        name: "African Development Bank",
        logo: "/afdb.png",
        description: "Economic empowerment programs",
      },
    ],
  },
  {
    name: "Community Partners",
    description: "Grassroots organizations creating local impact",
    partners: [
      {
        id: 1,
        name: "Women's Technology Empowerment Centre",
        logo: "/wtec.png",
        description: "STEM education for girls",
      },
      {
        id: 2,
        name: "She Leads Africa",
        logo: "/sla.png",
        description: "Career development and networking",
      },
      {
        id: 3,
        name: "Stand to End Rape Initiative",
        logo: "/ster.png",
        description: "Advocacy and support services",
      },
      {
        id: 4,
        name: "Girl Child Concerns",
        logo: "/gcc.png",
        description: "Education access for underprivileged girls",
      },
      {
        id: 5,
        name: "Nigerian Women Trust Fund",
        logo: "/nwtf.png",
        description: "Political participation and leadership",
      },
    ],
  },
  {
    name: "Media Partners",
    description: "Amplifying our message to wider audiences",
    partners: [
      {
        id: 1,
        name: "Channels TV",
        logo: "/channels.png",
        description: "Broadcast coverage and promotion",
      },
      {
        id: 2,
        name: "BellaNaija",
        logo: "/bellanaija.png",
        description: "Digital media and influencer outreach",
      },
      {
        id: 3,
        name: "Pulse Nigeria",
        logo: "/pulse.png",
        description: "Social media amplification",
      },
      {
        id: 4,
        name: "Guardian Nigeria",
        logo: "/guardian.png",
        description: "Print and online features",
      },
    ],
  },
];

// Partnership benefits
const partnershipBenefits = [
  {
    title: "Brand Visibility",
    description:
      "Prominent recognition across all festival platforms and materials",
    icon: Star,
  },
  {
    title: "Thought Leadership",
    description:
      "Opportunities to speak at events and contribute to panel discussions",
    icon: Mic,
  },
  {
    title: "Networking",
    description:
      "Access to exclusive events with industry leaders and change-makers",
    icon: Handshake,
  },
  {
    title: "Community Impact",
    description:
      "Demonstrate commitment to women's empowerment and social change",
    icon: HeartHandshake,
  },
  {
    title: "Content Opportunities",
    description:
      "Co-create meaningful content that aligns with your CSR initiatives",
    icon: Award,
  },
  {
    title: "Market Development",
    description:
      "Connect with emerging women entrepreneurs and business leaders",
    icon: TrendingUp,
  },
];

// Partnership levels
const partnershipLevels = [

  {
    name: "Gold",
    investment: "$25,000 - $49,999",
    benefits: [
      "Prominent logo placement",
      "Panel speaking opportunity",
      "Branded workshop session",
      "Half-page ad in festival program",
      "30 VIP tickets",
    ],
  },
  {
    name: "Silver",
    investment: "$10,000 - $24,999",
    benefits: [
      "Recognition in main hall",
      "Exhibit space",
      "Quarter-page ad in program",
      "15 VIP tickets",
    ],
  },
  {
    name: "Community",
    investment: "In-kind support",
    benefits: [
      "Logo on community partner wall",
      "Recognition in press releases",
      "Social media features",
      "5 VIP tickets",
    ],
  },
];

export default function PartnersPage() {

  return (
    <div className='relative overflow-hidden'>
      <CulturalPattern />

      {/* Glowing Banner */}
      <GlowingBanner
        title='Our Partners & Sponsors'
        subtitle='Together we empower women, celebrate heritage, and drive meaningful change'
      />

      {/* Partnership Intro */}
      <section className='py-20 px-4 max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className='bg-purple-100 p-6 rounded-2xl inline-block mb-6'>
              <Handshake className='text-sky-500 w-12 h-12' />
            </div>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Powering Women&apos;s Empowerment Together
            </h2>
            <p className='text-lg text-muted-foreground mb-6'>
              The Nwanyị bụ Ife Festival is made possible through the generous
              support of organizations committed to gender equality and cultural
              preservation. Our partners share our vision of creating platforms
              where women&apos;s potential can flourish.
            </p>
            <p className='text-lg text-muted-foreground'>
              Together, we&apos;re building a movement that celebrates
              women&apos;s achievements, preserves cultural heritage, and
              creates opportunities for the next generation of women leaders.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='grid grid-cols-2 gap-6'>
            <div className='bg-gradient-to-br from-amber-400 to-amber-700 rounded-2xl p-8 text-white'>
              <div className='text-5xl font-bold mb-2'>15+</div>
              <div className='text-xl'>Corporate Partners</div>
            </div>
            <div className='bg-gradient-to-br from-sky-500 to-purple-800 rounded-2xl p-8 text-white'>
              <div className='text-5xl font-bold mb-2'>3</div>
              <div className='text-xl'>Countries Represented</div>
            </div>
            <div className='bg-gradient-to-br from-sky-600 to-purple-700 rounded-2xl p-8 text-white'>
              <div className='text-5xl font-bold mb-2'>₦50M+</div>
              <div className='text-xl'>
                Invested in Women&apos;s Initiatives
              </div>
            </div>
            <div className='bg-gradient-to-br from-amber-400 to-amber-700 rounded-2xl p-8 text-white'>
              <div className='text-5xl font-bold mb-2'>25+</div>
              <div className='text-xl'>Community Organizations</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className='py-20 bg-amber-50 dark:bg-gray-700'>
        <div className='max-w-7xl mx-auto px-4'>
          <SectionTitle
            title='Our Valued Partners'
            subtitle='Organizations making our festival possible'
            centered={true}
          />

          <div className='mt-16 space-y-20'>
            {partnerTiers.map((tier, tierIndex) => (
              <motion.div
                key={tierIndex}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: tierIndex * 0.1 }}>
                <div className='mb-10 text-center'>
                  <h3 className='text-2xl md:text-3xl font-bold mb-2'>
                    {tier.name}
                  </h3>
                  <p className='text-amber-600 max-w-2xl mx-auto'>
                    {tier.description}
                  </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 '>
                  {tier.partners.map((partner, partnerIndex) => (
                    <motion.div
                      key={partner.id}
                      className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col items-center text-center'
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: partnerIndex * 0.1 }}
                      whileHover={{ y: -10 }}>
                      <div className='bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24 mb-6' />
                      <h4 className='text-lg font-bold mb-2'>{partner.name}</h4>
                      <p className='text-muted-foreground text-sm'>
                        {partner.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4'>
          <SectionTitle
            title='Partnership Opportunities'
            subtitle='Join our movement and amplify your impact'
            centered={true}
          />

          <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className='bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg border border-amber-100 dark:border-none'
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div className='w-16 h-16 bg-purple-100 dark:bg-gray-500 rounded-full flex items-center justify-center mb-6'>
                  <benefit.icon className='text-sky-400 w-8 h-8' />
                </div>
                <h3 className='text-xl font-bold mb-4'>{benefit.title}</h3>
                <p className='text-muted-foreground'>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Levels */}
      <section className='py-20 bg-purple-50 dark:bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4'>
          <SectionTitle
            title='Partnership Tiers'
            subtitle='Customized opportunities to align with your goals'
            centered={true}
          />

          <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {partnershipLevels.map((level, index) => (
              <motion.div
                key={index}
                className={`flex flex-col rounded-2xl overflow-hidden shadow-lg h-full ${
                  index === 0
                    ? "border-4 border-amber-500"
                    : "border-2 border-purple-200"
                }`}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div
                  className={`p-6 text-center ${
                    index === 0
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
                      : "bg-white dark:bg-gray-700"
                  }`}>
                  <h3 className='text-2xl font-bold mb-2'>{level.name}</h3>
                  <div
                    className={`text-lg font-medium ${
                      index === 0 ? "text-amber-100" : "text-amber-600"
                    }`}>
                    {level.investment}
                  </div>
                </div>

                <div className='flex flex-col p-6 h-full bg-white dark:bg-gray-800'>
                  <ul className='space-y-4 mb-6'>
                    {level.benefits.map((benefit, i) => (
                      <li key={i} className='flex items-start'>
                        <div
                          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                            index === 0
                              ? "bg-amber-100 text-amber-700"
                              : "bg-purple-100 text-purple-700"
                          }`}>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4'
                            viewBox='0 0 20 20'
                            fill='currentColor'>
                            <path
                              fillRule='evenodd'
                              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </div>
                        <span className='text-muted-foreground'>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button moved to base with mt-auto */}
                  <button
                    className={`mt-auto w-full py-3 rounded-lg font-medium transition-colors ${
                      index === 0
                        ? "bg-amber-500 hover:bg-amber-600 text-white"
                        : "bg-sky-700 hover:bg-sky-800 text-white"
                    }`}>
                    Become a {level.name} Partner
                  </button>
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
            <p className='text-muted-foreground max-w-2xl mx-auto mb-6'>
              We offer customized partnership packages tailored to your
              organization&apos;s specific goals and social impact objectives.
              Contact us to explore how we can create meaningful impact
              together.
            </p>
            <button className='bg-gradient-to-r from-sky-600 to-sky-900 hover:from-sky-800 hover:to-sky-950 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg'>
              Request Custom Partnership Proposal
            </button>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className='py-20 bg-gradient-to-r from-sky-800 to-purple-600 text-white'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <div className='w-24 h-24 mx-auto bg-amber-500 rounded-full flex items-center justify-center mb-8'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-12 w-12 text-white'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              />
            </svg>
          </div>

          <blockquote className='text-2xl italic'>
            &quot;Partnering with Nwanyị bụ Ife has been transformative for our
            brand. We&apos;ve not only gained visibility but have genuinely
            contributed to empowering thousands of women entrepreneurs across
            Nigeria. The alignment with our corporate values is perfect.&quot;
          </blockquote>

          <div className='mt-8'>
            <p className='font-semibold text-lg'>Amina Mohammed</p>
            <p className='text-amber-200'>
              Director of Corporate Social Responsibility, Zenith Bank
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 text-center'>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className='w-24 h-24 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-8'>
              <Handshake className='text-sky-700 w-12 h-12' />
            </div>

            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Ready to Make an Impact?
            </h2>
            <p className='text-xl max-w-3xl mx-auto mb-10'>
              Join our community of forward-thinking organizations committed to
              women&apos;s empowerment and cultural preservation. Together, we
              can create lasting change.
            </p>

            <div className='flex flex-wrap justify-center gap-6 mb-12'>
              {/* <button className='bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg'>
                Download Partnership Brochure
              </button> */}
              <button className='bg-white border-2 border-sky-700 text-sky-700 hover:bg-sky-50 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg'>
                Contact Our Partnership Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
