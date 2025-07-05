// src/components/HeroCarousel.tsx
"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Empowering Women, Celebrating Heritage",
    subtitle: "Join us for the annual Nwanyị bụ Ife Festival",
    image: "/carousel/img_1.jpg",
    cta: "Learn More",
    color: "from-purple-900/80",
  },
  {
    id: 2,
    title: "A Woman and Her Dream: Where Are Our Women?",
    subtitle: "2025 Festival Theme - November 7, 2024",
    image: "/carousel/img_2.jpg",
    cta: "See Program",
    color: "from-amber-800/80",
  },
  {
    id: 3,
    title: "Showcasing Cultural Heritage",
    subtitle: "Experience the richness of Igbo traditions",
    image: "/carousel/img_3.jpg",
    cta: "View Gallery",
    color: "from-teal-800/80",
  },
  {
    id: 4,
    title: "Where Are Our Women?",
    subtitle: "2025 Festival Theme - November 7, 2024",
    image: "/carousel/img_4.jpg",
    cta: "See Program",
    color: "from-amber-800/80",
  },
];

export default function HeroCarousel() {
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

  return (
    <div className='relative h-[70vh] w-full overflow-hidden sm:rounded-xl shadow-2xl'>
      <div ref={emblaRef} className='embla h-full w-full'>
        <div className='embla__container h-full'>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className='embla__slide relative min-w-full h-full'>
              {/* Background image with parallax effect */}
              <div className='absolute inset-0 transform transition-transform duration-1000 group-hover:scale-105'>
                <Image
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  fill
                  priority={index === 0}
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw'
                />
              </div>

              {/* Dynamic gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${slide.color} to-transparent`}
              />

              {/* Glowing pattern overlay */}
              <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/60' />

              {/* Content */}
              <div className='absolute inset-0 flex flex-col justify-center items-start text-left text-white px-8 md:px-16 lg:px-24'>
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

                  <h1 className='text-4xl md:text-[49px] font-bold leading-tight'>
                    {slide.title}
                  </h1>
                  <p className='text-xl md:text-xl mb-4 max-w-xl'>
                    {slide.subtitle}
                  </p>
                  <button className='relative overflow-hidden group bg-amber-500 hover:bg-amber-600 text-white font-medium px-8 py-3 rounded-full transition-all duration-500'>
                    <span className='relative z-10'>{slide.cta}</span>
                    <span className='absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                  </button>
                </div>
              </div>
            </div>
          ))}
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
