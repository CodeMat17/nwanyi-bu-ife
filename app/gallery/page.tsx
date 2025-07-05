// src/app/gallery/page.tsx
"use client";

import CulturalPattern from "@/components/CulturalPattern";
import GlowingBanner from "@/components/GlowingBanner";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Play, X } from "lucide-react";
import { useState } from "react";

// Define types
type GalleryItem = {
  id: number;
  type: "image" | "video";
  category: string;
  title: string;
};

type GalleryYear = {
  year: string;
  theme: string;
  items: GalleryItem[];
};

type VideoHighlight = {
  id: number;
  title: string;
  description: string;
  duration: string;
};

type Category = {
  id: string;
  name: string;
};

// Gallery data
const galleryYears: GalleryYear[] = [
  {
    year: "2025",
    theme: "A Woman and Her Dream: Where Are Our Women?",
    items: [
      { id: 1, type: "image", category: "opening", title: "Opening Ceremony" },
      { id: 2, type: "image", category: "speakers", title: "Keynote Address" },
      {
        id: 3,
        type: "video",
        category: "performance",
        title: "Cultural Dance Performance",
      },
      {
        id: 4,
        type: "image",
        category: "workshop",
        title: "Entrepreneurship Workshop",
      },
      { id: 5, type: "image", category: "awards", title: "Awards Ceremony" },
      {
        id: 6,
        type: "video",
        category: "performance",
        title: "Tiwa Savage Live Concert",
      },
      { id: 7, type: "image", category: "crowd", title: "Festival Attendees" },
      {
        id: 8,
        type: "image",
        category: "culture",
        title: "Traditional Craft Exhibition",
      },
    ],
  },
  {
    year: "2024",
    theme: "Breaking Barriers: Women Redefining Possibilities",
    items: [
      { id: 1, type: "image", category: "opening", title: "Founder's Welcome" },
      {
        id: 2,
        type: "video",
        category: "speakers",
        title: "Fireside Chat with Chimamanda",
      },
      {
        id: 3,
        type: "image",
        category: "workshop",
        title: "Tech Innovation Workshop",
      },
      {
        id: 4,
        type: "image",
        category: "performance",
        title: "Igbo Cultural Dance",
      },
      {
        id: 5,
        type: "video",
        category: "awards",
        title: "Trailblazer Award Presentation",
      },
      {
        id: 6,
        type: "image",
        category: "culture",
        title: "Traditional Attire Showcase",
      },
    ],
  },

];

// Video highlights
const videoHighlights: VideoHighlight[] = [
  {
    id: 1,
    title: "2025 Festival Highlights",
    description:
      "Relive the magic of our most recent festival with this emotional recap of empowering moments, cultural celebrations, and inspiring speeches.",
    duration: "4:22",
  },
  {
    id: 2,
    title: "Cultural Performances Compilation",
    description:
      "Experience the vibrant traditional dances, music, and performances that celebrate our rich Igbo heritage.",
    duration: "7:45",
  },
  {
    id: 3,
    title: "Awards Ceremony Moments",
    description:
      "Watch the emotional acceptance speeches from our 2025 award recipients honoring exceptional women leaders.",
    duration: "6:18",
  },
  {
    id: 4,
    title: "Women's Stories of Empowerment",
    description:
      "Hear firsthand accounts from festival attendees whose lives have been transformed through our community.",
    duration: "5:32",
  },
];

const categories: Category[] = [
  { id: "all", name: "All" },
  { id: "opening", name: "Opening" },
  { id: "speakers", name: "Speakers" },
  { id: "workshop", name: "Workshops" },
  { id: "performance", name: "Performances" },
  { id: "awards", name: "Awards" },
  { id: "crowd", name: "Attendees" },
  { id: "culture", name: "Cultural Heritage" },
];

export default function GalleryPage() {
  const [selectedYear, setSelectedYear] = useState<string>("2025");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<GalleryItem | null>(null);

  const selectedYearData = galleryYears.find(
    (year) => year.year === selectedYear
  );

  // Fallback to 2025 data if selectedYearData is undefined
  const yearData = selectedYearData || galleryYears[0];
  const filteredItems =
    selectedCategory === "all"
      ? yearData.items
      : yearData.items.filter((item) => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    setCurrentItem(item);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentItem(null);
    document.body.style.overflow = "auto";
  };

  const navigateItem = (direction: "prev" | "next") => {
    if (!currentItem) return;

    const currentIndex = filteredItems.findIndex(
      (item) => item.id === currentItem.id
    );
    let newIndex = 0;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredItems.length;
    } else {
      newIndex =
        (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    }

    setCurrentItem(filteredItems[newIndex]);
  };

  return (
    <div className='relative overflow-hidden'>
      <CulturalPattern />

   

      {/* Glowing Banner */}
      <GlowingBanner
        title='Festival Gallery'
        subtitle='Relive the magic of past Nwanyị bụ Ife Festivals through photos and
            videos'
      />

      {/* Year Selection */}
      <section className='py-12 bg-amber-50 dark:bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex flex-wrap justify-center gap-4'>
            {galleryYears.map((yearData) => (
              <motion.button
                key={yearData.year}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  selectedYear === yearData.year
                    ? "bg-sky-700 text-white"
                    : "bg-white dark:bg-gray-300  text-sky-800 hover:bg-sky-100"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedYear(yearData.year)}>
                {yearData.year} Festival
              </motion.button>
            ))}
          </div>

          <motion.div
            className='mt-6 text-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <h3 className='text-2xl font-bold'>{yearData.theme}</h3>
            <p className='text-amber-600 mt-2'>
              {filteredItems.length} moments captured
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className='py-8 bg-white dark:bg-gray-950 sticky top-0 z-20 shadow-sm'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex flex-wrap justify-center gap-2 md:gap-4'>
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${
                  selectedCategory === category.id
                    ? "bg-amber-500 text-white"
                    : "bg-purple-100 text-purple-800 hover:bg-purple-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}>
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className='py-12 px-4 max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${selectedYear}-${item.id}`}
              className='relative group overflow-hidden rounded-xl cursor-pointer'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openLightbox(item)}
              whileHover={{ scale: 1.03 }}>
              <div className='aspect-square bg-gray-200 border-2 border-dashed w-full rounded-xl' />

              <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'>
                <div className='absolute bottom-0 left-0 right-0 p-4 text-white'>
                  <h3 className='font-bold'>{item.title}</h3>
                  <p className='text-sm opacity-80 capitalize'>
                    {item.category}
                  </p>
                </div>
              </div>

              {item.type === "video" && (
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center group-hover:bg-amber-600 transition-colors'>
                    <Play className='text-white ml-1' fill='currentColor' />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Highlights */}
      <section className='py-20 bg-purple-50 dark:bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4'>
          <SectionTitle
            title='Video Highlights'
            subtitle='Featured moments from past festivals'
            centered={true}
          />

          <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {videoHighlights.map((video, index) => (
              <motion.div
                key={video.id}
                className='bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg group'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}>
                <div className='relative aspect-video'>
                  <div className='bg-gray-200 border-2 border-dashed w-full h-full' />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <div className='w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center'>
                        <Play className='text-white ml-1' fill='currentColor' />
                      </div>
                    </div>
                  </div>
                  <div className='absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm'>
                    {video.duration}
                  </div>
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold mb-2'>{video.title}</h3>
                  <p className='text-muted-foreground'>{video.description}</p>
                  <button className='mt-4 text-sky-500 font-medium flex items-center hover:text-sky-700 transition-colors'>
                    Watch Video
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5 ml-1'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path
                        fillRule='evenodd'
                        d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
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
            <button className='bg-sky-600 hover:bg-sky-800 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg'>
              View All Videos
            </button>
          </motion.div>
        </div>
      </section>

      {/* Memory Wall */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4'>
          <SectionTitle
            title='Share Your Memories'
            subtitle='Tag your photos with #NwanyiBuIfe to be featured'
            centered={true}
          />

          <div className='mt-12 bg-gradient-to-r from-amber-50 dark:from-amber-900 to-purple-50 dark:to-sky-900 p-8 rounded-2xl border-2 border-amber-200 dark:border-amber-600'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {[...Array(8)].map((_, index) => (
                <motion.div
                  key={index}
                  className='aspect-square bg-gray-200 border-2 border-dashed rounded-xl'
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />
              ))}
            </div>

            <div className='text-center mt-8'>
              <p className='text-gray-700 dark:text-gray-200 max-w-2xl mx-auto mb-6'>
                We love seeing how you experience the festival! Share your
                moments on social media with #NwanyiBuIfe for a chance to be
                featured on our memory wall.
              </p>
              <button className='bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-full'>
                Share Your Photos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && currentItem && (
        <motion.div
          className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <button
            className='absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/10 transition-colors'
            onClick={closeLightbox}>
            <X size={32} />
          </button>

          <button
            className='absolute left-6 top-1/2 -translate-y-1/2 text-white p-3 rounded-full hover:bg-white/10 transition-colors'
            onClick={() => navigateItem("prev")}>
            <ArrowLeft size={32} />
          </button>

          <button
            className='absolute right-6 top-1/2 -translate-y-1/2 text-white p-3 rounded-full hover:bg-white/10 transition-colors'
            onClick={() => navigateItem("next")}>
            <ArrowRight size={32} />
          </button>

          <div className='max-w-4xl w-full max-h-[80vh] flex flex-col'>
            <div className='relative bg-gray-200 border-2 border-dashed w-full aspect-video rounded-lg overflow-hidden'>
              {currentItem.type === "video" && (
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center'>
                    <Play
                      className='text-white ml-1'
                      size={40}
                      fill='currentColor'
                    />
                  </div>
                </div>
              )}
            </div>

            <div className='bg-white p-6 rounded-b-lg'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='text-xl font-bold'>{currentItem.title}</h3>
                  <p className='text-amber-600 capitalize'>
                    {currentItem.category}
                  </p>
                </div>
                <span className='bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm'>
                  {selectedYear} Festival
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
