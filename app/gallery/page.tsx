"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import GlowingBanner from "@/components/GlowingBanner";
import CulturalPattern from "@/components/CulturalPattern";
import { useEffect, useState, useRef } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function GalleryPage() {
  const galleryImages = useQuery(api.gallery.getAll);
  const [centerImageIndex, setCenterImageIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const autoRotateTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const navigateImage = (index: number) => {
    if (!galleryImages || index === centerImageIndex || isTransitioning) return;

    setIsTransitioning(true);
    setCenterImageIndex(index);

    if (autoRotateTimer.current) {
      clearInterval(autoRotateTimer.current);
    }
    startAutoRotate();

    if (isMobile && thumbnailsRef.current) {
      const thumbnail = thumbnailsRef.current.children[index] as HTMLElement;
      if (thumbnail) {
        thumbnailsRef.current.scrollTo({
          left:
            thumbnail.offsetLeft -
            thumbnailsRef.current.offsetWidth / 2 +
            thumbnail.offsetWidth / 2,
          behavior: "smooth",
        });
      }
    }
  };

  const startAutoRotate = () => {
    if (!galleryImages || galleryImages.length === 0) return;

    autoRotateTimer.current = setInterval(() => {
      setIsTransitioning(true);
      setCenterImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
  };

  useEffect(() => {
    if (galleryImages && galleryImages.length > 0) {
      startAutoRotate();
    }
    return () => {
      if (autoRotateTimer.current) {
        clearInterval(autoRotateTimer.current);
      }
    };
  }, [galleryImages]);

  if (!galleryImages) {
    return <div className="text-center py-64">Loading gallery...</div>;
  }

  return (
    <div className='min-h-screen relative overflow-x-hidden'>
      <CulturalPattern />
      <GlowingBanner
        title='Festival Gallery'
        subtitle='Immerse yourself in the vibrant moments of Nwanyị bụ Ịfe'
      />

      <div className='py-8 text-center px-4 text-4xl font-semibold'>
        Festival Memories
      </div>

      {galleryImages.length > 0 ? (
        <div className='pt-4 md:pt-8 w-full max-w-7xl mx-auto px-4'>
          {isMobile ? (
            <div className='flex flex-col items-center gap-6'>
              <div className='w-full max-w-[350px] aspect-square relative'>
                <AnimatePresence
                  mode='wait'
                  onExitComplete={() => setIsTransitioning(false)}>
                  <motion.div
                    key={galleryImages[centerImageIndex]?._id || "empty"}
                    className='w-full h-full rounded-xl overflow-hidden shadow-xl absolute'
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      boxShadow: "0 0 20px rgba(245, 158, 11, 0.4)",
                    }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}>
                    {galleryImages[centerImageIndex] && (
                      <Image
                        src={galleryImages[centerImageIndex].image}
                        alt={`Festival image ${centerImageIndex + 1}`}
                        fill
                        className='object-cover'
                        quality={100}
                        priority
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div
                ref={thumbnailsRef}
                className='w-full overflow-x-auto pb-4 hide-scrollbar'
                style={{ scrollbarWidth: "none" }}>
                <div className='flex gap-3 px-2 w-max'>
                  {galleryImages.map((image, index) => (
                    <motion.div
                      key={image._id}
                      className={`w-20 h-20 rounded-lg overflow-hidden cursor-pointer shrink-0 relative ${
                        index === centerImageIndex
                          ? "ring-4 ring-amber-500"
                          : "border-2 border-amber-300"
                      }`}
                      whileHover={{ scale: 0.95 }}
                      onClick={() => navigateImage(index)}>
                      <Image
                        src={image.image}
                        alt={`Festival thumbnail ${index + 1}`}
                        fill
                        className='object-cover'
                        quality={80}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
              <div className='flex justify-center lg:justify-end'>
                <div className='w-full max-w-[450px] aspect-square relative'>
                  <AnimatePresence
                    mode='wait'
                    onExitComplete={() => setIsTransitioning(false)}>
                    <motion.div
                      key={galleryImages[centerImageIndex]?._id || "empty"}
                      className='w-full h-full rounded-xl overflow-hidden shadow-xl absolute'
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                        boxShadow: "0 0 20px rgba(245, 158, 11, 0.4)",
                      }}
                      exit={{ scale: 0.95, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}>
                      {galleryImages[centerImageIndex] && (
                        <Image
                          src={galleryImages[centerImageIndex].image}
                          alt={`Festival image ${centerImageIndex + 1}`}
                          fill
                          className='object-cover'
                          quality={100}
                          priority
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3'>
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={image._id}
                    className={`aspect-square rounded-lg overflow-hidden cursor-pointer relative ${
                      index === centerImageIndex
                        ? "ring-4 ring-amber-500"
                        : "border-2 border-amber-300"
                    }`}
                    whileHover={{ scale: 0.95 }}
                    onClick={() => navigateImage(index)}>
                    <Image
                      src={image.image}
                      alt={`Festival thumbnail ${index + 1}`}
                      fill
                      className='object-cover'
                      quality={80}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className='text-center py-12'>No images found in the gallery</div>
      )}

      {galleryImages.length > 0 && (
        <div className='pb-12 px-4 lg:pt-4 max-w-4xl mx-auto'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={galleryImages[centerImageIndex]?._id || "empty"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className='text-center'>
              <p className='text-sm'>
                Photo {centerImageIndex + 1} of {galleryImages.length}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
