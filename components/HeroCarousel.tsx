// src/components/HeroCarousel.tsx
"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";



const colors = ["from-purple-900/80", "from-amber-800/80", "from-teal-800/80"];

export default function HeroCarousel() {
  const slides = useQuery(api.carousel.getCarouselItems);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const getColorForSlide = (index: number) => {
    return colors[index % colors.length];
  };

  // Handle loading state
  if (slides === undefined) {
    return (
      <div className='relative h-[70vh] w-full overflow-hidden sm:rounded-xl bg-gray-100 dark:bg-gray-800'>
        {/* Main shimmer effect */}
        <div className='absolute inset-0 animate-pulse'>
          <div className='h-full w-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700' />
        </div>

        {/* Content placeholder structure */}
        <div className='relative h-full w-full flex flex-col p-6 md:p-8'>
          {/* Title placeholder */}
          <div className='mb-4 h-8 w-3/4 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse' />

          {/* Excerpt placeholder */}
          <div className='mb-2 h-4 w-full rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse' />
          <div className='mb-2 h-4 w-5/6 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse' />
          <div className='mb-6 h-4 w-2/3 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse' />

          {/* Metadata placeholders */}
          <div className='flex gap-4 mb-8'>
            <div className='h-5 w-24 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse' />
            <div className='h-5 w-20 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse' />
          </div>

          {/* CTA button placeholder */}
          <div className='mt-auto h-10 w-32 rounded-lg bg-gray-300 dark:bg-gray-600 animate-pulse' />
        </div>

        {/* Moving shimmer overlay */}
        <div
          className='absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-gray-700/50 animate-shimmer'
          style={{ animationDuration: "2s" }}
        />

        {/* Navigation dots placeholder */}
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className='h-2 w-2 rounded-full bg-gray-300/80 dark:bg-gray-600/80 animate-pulse'
            />
          ))}
        </div>
      </div>
    );
  }

  // Handle empty state
  if (slides.length === 0) {
    return (
      <div className='relative h-[70vh] w-full bg-gray-100 flex items-center justify-center sm:rounded-xl'>
        <p className='text-lg text-gray-500'>No slides available</p>
      </div>
    );
  }

  return (
    <div className='relative h-[70vh] w-full overflow-hidden sm:rounded-xl shadow-2xl'>
      <div ref={emblaRef} className='embla h-full w-full'>
        <div className='embla__container h-full'>
          {slides.map((slide, index) => {
            const color = getColorForSlide(index);
            return (
              <div
                key={slide._id}
                className='embla__slide relative min-w-full h-full'>
                {/* Background image with parallax effect */}
                <div className='absolute inset-0 transform transition-transform duration-1000 group-hover:scale-105'>
                  <Image
                    src={slide.image}
                    alt={`Slide ${slide._id}`}
                    fill
                    priority={index === 0}
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw'
                  />
                </div>

                {/* Dynamic gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${color} to-transparent`}
                />

                {/* Glowing pattern overlay */}
                <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/60' />

                {/* Content */}
                <div className='absolute bottom-12 flex flex-col justify-center items-start text-left text-white px-8 md:px-16 lg:px-24'>
                  <div className='max-w-2xl'>
                    {/* Slide counter */}
                    <div className='flex items-center mb-6'>
                      <div className='text-6xl font-bold text-white/30'>
                        {String(selectedIndex + 1).padStart(2, "0")}
                      </div>
                      <div className='h-px w-16 bg-amber-400 mx-4' />
                      <div className='text-lg font-light'>
                        {String(slides.length).padStart(2, "0")}
                      </div>
                    </div>

                    <p className='text-lg md:text-xl mb-4 max-w-xl text-amber-500'>
                      {slide.tag}
                    </p>
                    <h1 className='text-3xl sm:text-4xl md:text-[49px] font-bold leading-tight'>
                      {slide.title}
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => emblaApi && emblaApi.scrollPrev()}
        className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full z-10 transition-all duration-300 shadow-lg'>
        <ChevronLeft size={28} strokeWidth={1.5} />
      </button>
      <button
        onClick={() => emblaApi && emblaApi.scrollNext()}
        className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full z-10 transition-all duration-300 shadow-lg'>
        <ChevronRight size={28} strokeWidth={1.5} />
      </button>
    </div>
  );
}
