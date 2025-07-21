// src/app/gallery/page.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import GlowingBanner from "@/components/GlowingBanner";
import CulturalPattern from "@/components/CulturalPattern";

interface FestivalImage {
  id: string;
  src: string;
  alt: string;
  year: string;
}

interface FestivalYear {
  year: string;
  theme: string;
  themeDescription: string;
}

const festivalYears: FestivalYear[] = [
  {
    year: "2025",
    theme: "COMING SOON!",
    themeDescription:
      "Celebrating the foundational role of women in sustaining Igbo culture and traditions",
  },
  {
    year: "2024",
    theme: "A Woman And Her Dream: Where Are Our Women?",
    themeDescription:
      "Women's aspirations and the pursuit of future possibilities in Igbo land",
  },
];

const festivalImages: FestivalImage[] = Array.from({ length: 15 }, (_, i) => ({
  id: `img_${i + 1}`,
  src: `/carousel/img_${i + 1}.jpg`,
  alt: `Nwanyị bụ Ịfe Festival ${i % 2 === 0 ? "2025" : "2024"} moment ${
    i + 1
  }`,
  year: i % 2 === 0 ? "2025" : "2024",
}));

export default function GalleryPage() {
  const [selectedYear, setSelectedYear] = useState<string>("2025");
  const [selectedImage, setSelectedImage] = useState<FestivalImage | null>(
    null
  );

  const currentYearData =
    festivalYears.find((year) => year.year === selectedYear) ||
    festivalYears[0];
  const filteredImages = festivalImages.filter(
    (img) => img.year === selectedYear
  );

  const openLightbox = (image: FestivalImage) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return;

    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    let newIndex = 0;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex =
        (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }

    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className='min-h-screen '>
      <CulturalPattern />
      <GlowingBanner
        title='Festival Gallery'
        subtitle='Immerse yourself in the vibrant moments of Nwanyị bụ Ịfe'
     
      />

      {/* Year Selection with Theme Display */}
      <div className='py-8 bg-white/20 shadow-lg'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex justify-center gap-4 mb-6'>
            {festivalYears.map((yearData) => (
              <motion.button
                key={yearData.year}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  selectedYear === yearData.year
                    ? "bg-amber-600 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedYear(yearData.year)}>
                {yearData.year} Festival
              </motion.button>
            ))}
          </div>

          {/* Year Theme Display */}
          <motion.div
            className='text-center '
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}>
            <h3 className='text-xl font-bold text-amber-800 dark:text-amber-300'>
              {currentYearData.theme}
            </h3>
          
          </motion.div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className='py-12 px-4 max-w-7xl mx-auto'>
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
          layout>
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className='relative group overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openLightbox(image)}
              whileHover={{ scale: 1.02 }}>
              <div className='aspect-square relative'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-110'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  quality={90}
                  priority={index < 8}
                />
              </div>
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4'>
                <p className='text-white text-sm font-medium'>View Details</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Perfectly Centered Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}>
            <div className='absolute inset-0 flex items-center justify-center'>
              {/* Modal Container */}
              <motion.div
                className='relative w-full max-w-4xl mx-8 my-8 flex flex-col items-center'
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 100 }}
                onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button
                  className='absolute -top-12 right-0 text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10'
                  onClick={(e) => {
                    e.stopPropagation();
                    closeLightbox();
                  }}>
                  <X size={32} />
                </button>

                {/* Image Container */}
                <div className='relative w-full aspect-square max-h-[70vh] bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/30'>
                  {/* Navigation Arrows */}
                  <button
                    className='absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10'
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage("prev");
                    }}>
                    <ArrowLeft size={28} />
                  </button>

                  <button
                    className='absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10'
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage("next");
                    }}>
                    <ArrowRight size={28} />
                  </button>

                  {/* The Image */}
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className='object-contain'
                    quality={100}
                    priority
                  />

                  {/* Decorative Corner Elements */}
                  <div className='absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-400 rounded-tl-lg'></div>
                  <div className='absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-400 rounded-tr-lg'></div>
                  <div className='absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-400 rounded-bl-lg'></div>
                  <div className='absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-400 rounded-br-lg'></div>
                </div>

                {/* Caption Area */}
                {/* <div className='w-full max-w-2xl mt-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10'>
                  <p className='text-white font-medium text-center'>
                    {selectedImage.alt}
                  </p>
                  <div className='flex justify-between items-center mt-2 text-white/80 text-sm'>
                    <span>{selectedImage.year} Festival</span>
                    <span>
                      {filteredImages.findIndex(
                        (img) => img.id === selectedImage.id
                      ) + 1}{" "}
                      / {filteredImages.length}
                    </span>
                  </div>
                </div> */}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      {/* <div className='py-20 bg-gradient-to-r from-amber-500 to-purple-600 text-center'>
        <div className='max-w-4xl mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
            Become Part of Our Story
          </h2>
          <p className='text-xl text-amber-100 mb-8'>
            Share your festival moments with #NwanyiBuIfe for a chance to be
            featured
          </p>
          <motion.button
            className='bg-white text-amber-700 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            Join the Celebration
          </motion.button>
        </div>
      </div> */}
    </div>
  );
}
