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
    tag: "Empowerment",
    image: "/carousel/img_1.jpg",
    cta: "Learn More",
  },
  {
    id: 2,
    title: "Unity in Cultural Celebration",
    tag: "Togetherness",
    image: "/carousel/img_2.jpg",
    cta: "See Program",
  },
  {
    id: 3,
    title: "Awards Highlight Exceptional Talent",
    tag: "Excellence",
    image: "/carousel/img_3.jpg",
    cta: "View Gallery",
  },
  {
    id: 4,
    title: "Empowering Women, Celebrating Heritage",
    tag: "Heritage",
    image: "/carousel/img_4.jpg",
    cta: "See Program",
  },
  {
    id: 5,
    title: "Our Women of valour",
    tag: "Excellence",
    image: "/carousel/img_5.jpg",
    cta: "Learn More",
  },
  {
    id: 6,
    title: "A Woman and Her Dream",
    tag: "Heritage",
    image: "/carousel/img_6.jpg",
    cta: "See Program",
  },
  {
    id: 7,
    title: "Celebrating Strength at Nwanyị bụ ịfe 2024",
    tag: "Cultural Pride",
    image: "/carousel/img_7.jpg",
    cta: "View Gallery",
  },
  {
    id: 8,
    title: "Joyful Moments at Nwanyị bụ ịfe 2024",
    tag: "Festivity",
    image: "/carousel/img_8.jpg",
    cta: "See Program",
  },
  {
    id: 9,
    title: "Colorful Scenes from 2024 Festival",
    tag: "Vibrance",
    image: "/carousel/img_9.jpg",
    cta: "Learn More",
  },
  {
    id: 10,
    title: "Honoring Women of Strength",
    tag: "Valour",
    image: "/carousel/img_10.jpg",
    cta: "See Program",
  },
  {
    id: 11,
    title: "Capturing the Festival's Spirit",
    tag: "Heritage",
    image: "/carousel/img_11.jpg",
    cta: "View Gallery",
  },
  {
    id: 12,
    title: "Dignitaries Grace Nwanyị bụ ịfe",
    tag: "Prestige",
    image: "/carousel/img_12.jpg",
    cta: "See Program",
  },
  {
    id: 13,
    title: "Capturing the Festival's Spirit",
    tag: "Empowerment",
    image: "/carousel/img_13.jpg",
    cta: "Learn More",
  },
  {
    id: 14,
    title: "Tradition Meets Modernity in 2024",
    tag: "Culture",
    image: "/carousel/img_14.jpg",
    cta: "See Program",
  },
  {
    id: 15,
    title: "Memorable Moments at Nwanyị bụ ịfe 2024",
    tag: "Honour",
    image: "/carousel/img_15.jpg",
  },
];

const colors = ["from-purple-900/80", "from-amber-800/80", "from-teal-800/80"];

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

  const getColorForSlide = (index: number) => {
    return colors[index % colors.length];
  };

  return (
    <div className='relative h-[70vh] w-full overflow-hidden sm:rounded-xl shadow-2xl'>
      <div ref={emblaRef} className='embla h-full w-full'>
        <div className='embla__container h-full'>
          {slides.map((slide, index) => {
            const color = getColorForSlide(index);
            return (
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
