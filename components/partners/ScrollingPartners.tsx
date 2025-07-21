// components/ScrollingPartner.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const ScrollingPartners = () => {
  const partners = [
    {
      id: 1,
      name: "UBA",
      logo: "/partners/img_8.png",
    },
    {
      id: 2,
      name: "Company",
      logo: "/partners/img_1.png",
    },
    {
      id: 3,
      name: "Enugu State",
      logo: "/partners/img_2.jpeg",
    },
    {
      id: 4,
      name: "FirstBank",
      logo: "/partners/img_3.png",
    },
    {
      id: 5,
      name: "GLO",
      logo: "/partners/img_4.jpg",
    },
    {
      id: 6,
      name: "Insurance",
      logo: "/partners/img_5.jpeg",
    },
    {
      id: 7,
      name: "Real Estate",
      logo: "/partners/img_6.jpeg",
    },
    {
      id: 8,
      name: "MTN",
      logo: "/partners/img_7.jpg",
    },
  ];

  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const progressRef = useRef<number>(0);
  const duration = 20; // Lower = faster

  useEffect(() => {
    const contentWidth = contentRef.current?.scrollWidth || 0;
    const totalDistance = contentWidth / 2;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      progressRef.current = (elapsed / (duration * 1000)) % 1;

      if (contentRef.current) {
        contentRef.current.style.transform = `translateX(-${
          progressRef.current * totalDistance
        }px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [duration]);

  return (
    <div className='relative w-full h-48 overflow-hidden my-12'>
      {/* Gradient fade effect on sides */}
      <div className='absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-amber-50 to-transparent dark:from-gray-800 z-10 pointer-events-none' />
      <div className='absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-amber-50 to-transparent dark:from-gray-800 z-10 pointer-events-none' />

      {/* Marquee content */}
      <div
        ref={contentRef}
        className='flex absolute h-full gap-6'
        style={{
          left: 0,
          willChange: "transform",
        }}>
        {/* Original content */}
        {partners.map((partner) => (
          <motion.div
            key={`original-${partner.id}`}
            className='flex-shrink-0 h-32 w-48 relative rounded-xl overflow-hidden'
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2 },
            }}
            onHoverStart={() => {
              if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
              }
            }}
            onHoverEnd={() => {
              const contentWidth = contentRef.current?.scrollWidth || 0;
              const totalDistance = contentWidth / 2;
              let startTime: number | null =
                performance.now() - progressRef.current * duration * 1000;

              const animate = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const elapsed = timestamp - startTime;
                progressRef.current = (elapsed / (duration * 1000)) % 1;

                if (contentRef.current) {
                  contentRef.current.style.transform = `translateX(-${
                    progressRef.current * totalDistance
                  }px)`;
                }

                animationRef.current = requestAnimationFrame(animate);
              };

              animationRef.current = requestAnimationFrame(animate);
            }}>
            <Image
              src={partner.logo}
              alt={partner.name}
              fill
              className='object-contain p-4'
              style={{ objectPosition: "center" }}
              priority
            />
          </motion.div>
        ))}

        {/* Duplicated content for seamless looping */}
        {partners.map((partner) => (
          <motion.div
            key={`duplicate-${partner.id}`}
            className='flex-shrink-0 h-32 w-48 relative rounded-xl overflow-hidden'
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            onHoverStart={() => {
              if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
              }
            }}
            onHoverEnd={() => {
              const contentWidth = contentRef.current?.scrollWidth || 0;
              const totalDistance = contentWidth / 2;
              let startTime: number | null =
                performance.now() - progressRef.current * duration * 1000;

              const animate = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const elapsed = timestamp - startTime;
                progressRef.current = (elapsed / (duration * 1000)) % 1;

                if (contentRef.current) {
                  contentRef.current.style.transform = `translateX(-${
                    progressRef.current * totalDistance
                  }px)`;
                }

                animationRef.current = requestAnimationFrame(animate);
              };

              animationRef.current = requestAnimationFrame(animate);
            }}>
            <Image
              src={partner.logo}
              alt={partner.name}
              fill
              className='object-contain p-4'
              style={{ objectPosition: "center" }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingPartners;
