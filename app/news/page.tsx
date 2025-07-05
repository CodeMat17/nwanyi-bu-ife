// src/app/news/page.tsx
"use client";

import CulturalPattern from "@/components/CulturalPattern";
import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Clock, Tag, Search, ArrowRight } from "lucide-react";
import GlowingBanner from "@/components/GlowingBanner";

// Article data type
type Article = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
};

// Category type
// type Category = {
//   id: string;
//   name: string;
// };

// Article data
const articles: Article[] = [
  {
    id: 1,
    title: "2025 Festival Theme Announcement: 'A Woman and Her Dream'",
    excerpt:
      "Discover the profound meaning behind our 2025 festival theme and how it addresses the critical question 'Where Are Our Women?' in leadership spaces.",
    date: "June 15, 2025",
    readTime: "4 min",
    category: "Festival Updates",
    image: "/theme-announcement.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Meet the Trailblazing Women Receiving Nwanyị bụ Ife Awards",
    excerpt:
      "Get to know the extraordinary women being honored at this year's festival for their groundbreaking work in technology, cultural preservation, and social justice.",
    date: "May 28, 2025",
    readTime: "6 min",
    category: "Awards",
    image: "/awardees.jpg",
  },
  {
    id: 3,
    title: "Preserving Igbo Textile Traditions: The Women Weavers of Nsukka",
    excerpt:
      "How a collective of women artisans are reviving ancient weaving techniques while creating economic opportunities in rural communities.",
    date: "May 20, 2025",
    readTime: "8 min",
    category: "Cultural Heritage",
    image: "/weavers.jpg",
  },
  {
    id: 4,
    title: "Early Bird Registration Opens with Special Discounts",
    excerpt:
      "Secure your spot at the 2025 festival with 20% off early bird pricing. Limited tickets available for our most transformative event yet.",
    date: "May 5, 2025",
    readTime: "3 min",
    category: "Festival Updates",
    image: "/registration.jpg",
  },
  {
    id: 5,
    title:
      "From Classroom to Boardroom: Education's Role in Women's Empowerment",
    excerpt:
      "An in-depth analysis of how access to education continues to shape women's leadership trajectories across Africa.",
    date: "April 30, 2025",
    readTime: "10 min",
    category: "Women Empowerment",
    image: "/education.jpg",
  },
  {
    id: 6,
    title:
      "The Resurgence of Igbo Women's Council Systems in Modern Governance",
    excerpt:
      "Exploring how traditional women's leadership structures are informing contemporary approaches to community development.",
    date: "April 18, 2025",
    readTime: "7 min",
    category: "Cultural Heritage",
    image: "/council.jpg",
  },
  {
    id: 7,
    title: "Tech Innovation Workshop: Bridging the Gender Gap in STEM",
    excerpt:
      "How our hands-on technology workshop is equipping women with digital skills for the future economy.",
    date: "April 10, 2025",
    readTime: "5 min",
    category: "Festival Program",
    image: "/tech-workshop.jpg",
  },
  {
    id: 8,
    title:
      "Nwanyị bụ Ife Festival Partners with UN Women for Global Initiative",
    excerpt:
      "Announcing our new partnership to scale women's empowerment programs across West Africa.",
    date: "March 28, 2025",
    readTime: "4 min",
    category: "Partnerships",
    image: "/un-partnership.jpg",
  },
];

// Categories
// const categories: Category[] = [
//   { id: "all", name: "All Articles" },
//   { id: "Festival Updates", name: "Festival Updates" },
//   { id: "Women Empowerment", name: "Women Empowerment" },
//   { id: "Cultural Heritage", name: "Cultural Heritage" },
//   { id: "Awards", name: "Awards & Honors" },
//   { id: "Festival Program", name: "Festival Program" },
// ];

// Popular tags
const popularTags = [
  "WomenInLeadership",
  "IgboCulture",
  "GenderEquality",
  "Empowerment",
  "CulturalPreservation",
  "Entrepreneurship",
  "Education",
  "Trailblazers",
];

export default function NewsPage() {
  const [selectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter articles based on category and search query
  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured article (first featured or first article)
  const featuredArticle =
    articles.find((article) => article.featured) || articles[0];

  // Other articles (excluding featured)
  const otherArticles = filteredArticles.filter(
    (article) => article.id !== featuredArticle.id
  );

  return (
    <div className='relative overflow-hidden'>
      <CulturalPattern />

   

      {/* Glowing Banner */}
      <GlowingBanner
        title='News & Stories'
        subtitle='Empowering narratives, festival updates, and cultural insights'
      />

      {/* Featured Article */}
      <section className='py-16 px-4 max-w-7xl mx-auto'>
        <motion.div
          className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}>
          <div className='relative rounded-2xl overflow-hidden aspect-square'>
            <div className='bg-gray-200 border-2 border-dashed w-full h-full' />
            <div className='absolute top-4 left-4 bg-amber-500 text-white px-4 py-1 rounded-full font-bold'>
              Featured Story
            </div>
          </div>

          <div>
            <div className='flex items-center text-amber-600 mb-4'>
              <span className='bg-amber-100 px-3 py-1 rounded-full text-sm font-medium'>
                {featuredArticle.category}
              </span>
              <div className='flex items-center ml-4'>
                <Calendar className='h-4 w-4 mr-1' />
                <span className='text-sm'>{featuredArticle.date}</span>
              </div>
              <div className='flex items-center ml-4'>
                <Clock className='h-4 w-4 mr-1' />
                <span className='text-sm'>{featuredArticle.readTime} read</span>
              </div>
            </div>

            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              {featuredArticle.title}
            </h2>
            <p className='text-lg text-muted-foreground mb-6'>
              {featuredArticle.excerpt}
            </p>
            <button className='flex items-center text-sky-500 font-bold group'>
              Read Full Article
              <ArrowRight className='h-5 w-5 ml-2 transition-transform group-hover:translate-x-1' />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Content Section */}
      <div className='max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-4 gap-8'>
        {/* Main Content */}
        <div className='lg:col-span-3'>
          {/* Category Filter */}
          {/* <div className='flex flex-wrap gap-4 mb-8'>
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-amber-500 text-white"
                    : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}>
                {category.name}
              </motion.button>
            ))}
          </div> */}

          {/* Search Bar */}
          <div className='relative mb-12'>
            <input
              type='text'
              placeholder='Search articles, stories, and news...'
              className='w-full px-4 py-3 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400' />
          </div>

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {otherArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  className='bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow'
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}>
                  <div className='relative h-56'>
                    <div className='bg-gray-200 border-2 border-dashed w-full h-full' />
                    <div className='absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm'>
                      {article.category}
                    </div>
                  </div>
                  <div className='p-6'>
                    <div className='flex items-center text-muted-foreground text-sm mb-3'>
                      <Calendar className='h-4 w-4 mr-1' />
                      <span>{article.date}</span>
                      <span className='mx-2'>•</span>
                      <Clock className='h-4 w-4 mr-1' />
                      <span>{article.readTime} read</span>
                    </div>
                    <h3 className='text-xl font-bold mb-3'>{article.title}</h3>
                    <p className='text-muted-foreground mb-4 line-clamp-3'>
                      {article.excerpt}
                    </p>
                    <button className='flex items-center text-sky-500 font-medium group'>
                      Continue Reading
                      <ArrowRight className='h-4 w-4 ml-1 transition-transform group-hover:translate-x-1' />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className='text-center py-16'>
              <h3 className='text-2xl font-bold mb-4'>No articles found</h3>
              <p className='text-gray-600'>
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div>
          {/* Newsletter */}
          <motion.div
            className='bg-gradient-to-br from-sky-800 to-purple-600 text-white rounded-2xl p-6 mb-8'
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <h3 className='text-xl font-bold mb-4'>Stay Updated</h3>
            <p className='mb-4 opacity-90'>
              Subscribe to our newsletter for festival updates, inspiring
              stories, and exclusive content.
            </p>
            <form className='space-y-4'>
              <input
                type='email'
                placeholder='Your email address'
                className='w-full px-4 py-2 rounded-full bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white'
                required
              />
              <button
                type='submit'
                className='w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-full transition-colors'>
                Subscribe
              </button>
            </form>
          </motion.div>

          {/* Popular Tags */}
          <motion.div
            className='bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg mb-8'
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            <div className='flex items-center mb-4'>
              <Tag className='text-amber-600 mr-2' />
              <h3 className='text-xl font-bold'>Popular Tags</h3>
            </div>
            <div className='flex flex-wrap gap-2'>
              {popularTags.map((tag, index) => (
                <motion.button
                  key={index}
                  className='bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm hover:bg-purple-200 transition-colors'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  #{tag}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Events */}
          <motion.div
            className='bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg'
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <div className='flex items-center mb-4'>
              <Calendar className='text-amber-500 mr-2' />
              <h3 className='text-xl font-bold'>Upcoming Events</h3>
            </div>

            <div className='space-y-4'>
              <div className='border-l-4 border-amber-500 pl-4 py-1'>
                <div className='text-sm text-sky-500 font-medium'>
                  June 30, 2025
                </div>
                <div className='font-bold'>Speaker Announcement</div>
              </div>

              <div className='border-l-4 border-amber-500 pl-4 py-1'>
                <div className='text-sm text-sky-500 font-medium'>
                  July 15, 2025
                </div>
                <div className='font-bold'>Early Bird Registration Ends</div>
              </div>

              <div className='border-l-4 border-amber-500 pl-4 py-1'>
                <div className='text-sm text-sky-500 font-medium'>
                  August 5, 2025
                </div>
                <div className='font-bold'>Cultural Showcase Preview</div>
              </div>

              <div className='border-l-4 border-amber-500 pl-4 py-1'>
                <div className='text-sm text-sky-500 font-medium'>
                  November 7, 2025
                </div>
                <div className='font-bold'>Nwanyị bụ Ife Festival 2025</div>
              </div>
            </div>

            {/* <button className='mt-6 flex items-center text-purple-700 font-medium group'>
              View Full Calendar
              <ArrowRight className='h-4 w-4 ml-1 transition-transform group-hover:translate-x-1' />
            </button> */}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-amber-50 dark:from-amber-700 to-purple-50 dark:to-sky-800'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className='w-24 h-24 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-8'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-12 w-12 text-sky-700'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
                />
              </svg>
            </div>

            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Share Your Story
            </h2>
            <p className='text-xl max-w-3xl mx-auto mb-10'>
              Are you a woman making an impact in your community? We want to
              feature your journey and inspire others.
            </p>

            <button className='bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg'>
              Submit Your Story
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
