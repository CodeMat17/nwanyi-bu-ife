"use client";

import CulturalPattern from "@/components/CulturalPattern";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Calendar,
  Tag,
  Search,
  ArrowRight,
  MousePointerClick,
  PenTool,
} from "lucide-react";
import GlowingBanner from "@/components/GlowingBanner";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import dayjs from "dayjs";
import { ShareButton } from "@/components/ShareButton";

type Article = Doc<"news">;
type Category =
  | "All"
  | "Festival Updates"
  | "Cultural Stories"
  | "Women Empowerment"
  | "Entrepreneurship"
  | "Education"
  | "Trailblazers";

const categories: Category[] = [
  "All",
  "Festival Updates",
  "Cultural Stories",
  "Women Empowerment",
  "Entrepreneurship",
  "Education",
  "Trailblazers",
];

const ArticleSkeleton = () => (
  <div className='bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700'>
    <div className='relative h-64 lg:h-48 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 animate-pulse rounded-t-2xl'></div>
    <div className='p-6 space-y-4'>
      <div className='flex items-center space-x-4'>
        <div className='h-4 w-20 bg-gray-200 dark:bg-gray-600 rounded-full animate-pulse'></div>
        <div className='h-4 w-16 bg-gray-200 dark:bg-gray-600 rounded-full animate-pulse'></div>
      </div>
      <div className='h-6 w-full bg-gray-200 dark:bg-gray-600 rounded animate-pulse'></div>
      <div className='h-4 w-full bg-gray-200 dark:bg-gray-600 rounded animate-pulse'></div>
      <div className='h-4 w-3/4 bg-gray-200 dark:bg-gray-600 rounded animate-pulse'></div>
      <div className='h-10 w-32 bg-gray-200 dark:bg-gray-600 rounded-full animate-pulse mt-4'></div>
    </div>
  </div>
);

interface ArticleCardProps {
  article: Article;
  index: number;
  isFeatured?: boolean;
}

const ArticleCard = ({
  article,
  index,
  isFeatured = false,
}: ArticleCardProps) => (
  <motion.div
    className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border ${
      isFeatured
        ? "border-amber-300 dark:border-amber-500"
        : "border-gray-100 dark:border-gray-700"
    }`}
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}>
    <div className='relative h-64 sm:h-48'>
      <Image
        alt={article.title}
        fill
        src={article.image}
        className='object-cover transition-transform duration-500 group-hover:scale-105'
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        priority={isFeatured}
      />
      {isFeatured && (
        <div className='absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm flex items-center z-10'>
          <span className='mr-1'>✨</span> Featured
        </div>
      )}
      <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent' />
      <div className='absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm flex items-center'>
        <Tag className='h-3 w-3 mr-1' />
        {article.category}
      </div>
    </div>
    <div className='px-6 py-3'>
      <div className='flex items-center text-muted-foreground text-sm mb-2'>
        <Calendar className='h-4 w-4 mr-1' />
        <span>{dayjs(article.date).format("MMM D, YYYY")}</span>
      </div>

      <h3 className='text-xl font-semibold mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 line-clamp-2 transition-colors'>
        {article.title}
      </h3>
      <p className='text-muted-foreground mb-4 line-clamp-2'>
        {article.excerpt}
      </p>
      <div className='flex items-center justify-between'>
        <Button
          asChild
          size={"sm"}
          variant={"outline"}
          className='border-amber-500 text-amber-500 group-hover:bg-amber-500 group-hover:text-white'>
          <Link href={`/news/${article.slug}`}>
            Read
            <MousePointerClick className='h-4 w-4 ml-1 transition-transform duration-500 group-hover:ml-3 group-hover:rotate-90 group-hover:scale-200' />
          </Link>
        </Button>
        <ShareButton
          path={`/news/${article.slug}`}
          title={article.title || ""}
          description={article.excerpt || ""}
        />
      </div>
    </div>
  </motion.div>
);

interface NoResultsProps {
  resetFilters: () => void;
}

const NoResults = ({ resetFilters }: NoResultsProps) => (
  <div className='text-center py-16'>
    <div className='w-24 h-24 mx-auto bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mb-6'>
      <Search className='h-10 w-10 text-amber-600 dark:text-amber-400' />
    </div>
    <h3 className='text-2xl font-bold mb-4'>No articles found</h3>
    <p className='text-gray-600 dark:text-gray-400 max-w-md mx-auto'>
      Try adjusting your search or filter criteria.
    </p>
    <Button
      variant='outline'
      className='mt-6 border-amber-500 text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/30'
      onClick={resetFilters}>
      Reset Filters
    </Button>
  </div>
);

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Fetch data separately
  const featuredArticle = useQuery(api.news.getFeatured);
  const allArticles = useQuery(api.news.getNonFeatured);
  const displayArticle = featuredArticle || allArticles?.[0];

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Filter articles
  const filteredArticles =
    allArticles?.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;
      if (!debouncedQuery) return matchesCategory;

      const query = debouncedQuery.toLowerCase();
      return (
        matchesCategory &&
        (article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.content.toLowerCase().includes(query))
      );
    }) || [];

  // Loading state
  if (featuredArticle === undefined || allArticles === undefined) {
    return (
      <div className='relative overflow-hidden'>
        <CulturalPattern />
        <GlowingBanner
          title='News & Stories'
          subtitle='Empowering narratives, festival updates, and cultural insights'
        />

        <section className='py-16 px-4 max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='relative rounded-2xl overflow-hidden aspect-video w-full md:max-w-xl mx-auto h-96 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 animate-pulse'></div>
            <div className='space-y-4'>
              <div className='h-6 w-24 bg-gray-200 dark:bg-gray-600 rounded-full animate-pulse'></div>
              <div className='h-8 w-full bg-gray-200 dark:bg-gray-600 rounded animate-pulse'></div>
              <div className='h-4 w-full bg-gray-200 dark:bg-gray-600 rounded animate-pulse'></div>
              <div className='h-4 w-3/4 bg-gray-200 dark:bg-gray-600 rounded animate-pulse'></div>
              <div className='h-10 w-32 bg-gray-200 dark:bg-gray-600 rounded-full animate-pulse mt-6'></div>
            </div>
          </div>
        </section>

        <div className='max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-4 gap-8'>
          <div className='lg:col-span-3'>
            <div className='relative mb-12'>
              <div className='w-full h-12 bg-gray-200 dark:bg-gray-600 rounded-full animate-pulse'></div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
              {[...Array(6)].map((_, i) => (
                <ArticleSkeleton key={i} />
              ))}
            </div>
          </div>
          <div className='space-y-8'>
            <div className='bg-gradient-to-br from-sky-800 to-purple-600 rounded-2xl p-6 h-64 animate-pulse'></div>
            <div className='bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg h-64 animate-pulse'></div>
            <div className='bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg h-64 animate-pulse'></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='relative overflow-hidden'>
      <CulturalPattern />
      <GlowingBanner
        title='News & Stories'
        subtitle='Empowering narratives, festival updates, and cultural insights'
      />

      {/* Featured Article */}
      {displayArticle && (
        <section className='py-16 px-4 max-w-7xl mx-auto'>
          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            <div className='relative rounded-2xl overflow-hidden aspect-video w-full md:max-w-xl mx-auto h-96 shadow-2xl'>
              <Image
                src={displayArticle.image}
                alt={displayArticle.title}
                fill
                className='object-cover transition-transform duration-700 group-hover:scale-105'
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
              {featuredArticle && (
                <div className='absolute top-4 left-4 bg-amber-500 text-white px-4 py-1 rounded-full font-bold flex items-center z-10'>
                  <span className='mr-1'>🌟</span> Featured Story
                </div>
              )}
            </div>

            <div>
              <div className='flex items-center space-x-4 mb-4'>
                <span className='bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100 px-3 py-1 rounded-full text-sm font-medium'>
                  {displayArticle.category}
                </span>
                <div className='flex items-center text-muted-foreground'>
                  <Calendar className='h-4 w-4 mr-1' />
                  <span className='text-sm'>
                    {dayjs(displayArticle.date).format("MMM D, YYYY")}
                  </span>
                </div>
                <div>
                  <ShareButton
                    path={`/news/${displayArticle.slug}`}
                    title={displayArticle.title || ""}
                    description={displayArticle.excerpt || ""}
                    showText
                  />
                </div>
              </div>

              <h2 className='mb-4 text-3xl lg:text-4xl font-bold line-clamp-2 hover:text-[#f59e0b]'>
                {" "}
                {displayArticle.title}
              </h2>
              <p className='text-lg text-muted-foreground mb-6 line-clamp-4'>
                {displayArticle.excerpt}
              </p>
              <div className='flex items-center space-x-4'>
                <Link
                  href={`/news/${displayArticle.slug}`}
                  className='flex items-center text-sky-600 dark:text-sky-400 font-bold group'>
                  Read Full Article
                  <ArrowRight className='h-5 w-5 ml-2 transition-transform group-hover:translate-x-1' />
                </Link>
                <span className='text-muted-foreground hidden sm:inline'>
                  •
                </span>
                <span className='text-muted-foreground text-sm hidden sm:inline'>
                  {Math.ceil(displayArticle.content.split(" ").length / 200)}{" "}
                  min read
                </span>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Content Section */}
      <div className='max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-4 gap-8'>
        <div className='lg:col-span-3'>
          {/* Search and Filter Bar */}
          <div className='relative mb-12'>
            <div className='flex flex-col md:flex-row gap-4 items-start md:items-center'>
              <div className='relative flex-1 w-full lg:max-w-2xl'>
                <input
                  type='text'
                  placeholder='Search stories, news, and updates...'
                  className='w-full px-4 py-3 pl-12 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-800'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label='Search articles'
                />
                <Search className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400' />
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
              {filteredArticles.map((article, index) => (
                <ArticleCard
                  key={article._id}
                  article={article}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <NoResults
              resetFilters={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
            />
          )}
        </div>

        {/* Sidebar */}
        <div className='space-y-8'>
          {/* Newsletter */}
          <motion.div
            className='bg-gradient-to-br from-sky-800 to-purple-600 text-white rounded-2xl p-6 mb-8 shadow-xl'
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <div className='flex items-center mb-4'>
              <div className='bg-white/20 p-2 rounded-full mr-3'>
                <PenTool className='h-5 w-5' />
              </div>
              <h3 className='text-xl font-bold'>Stay Updated</h3>
            </div>
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
                aria-label='Email address'
              />
              <motion.button
                type='submit'
                className='w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-full transition-colors flex items-center justify-center'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label='Subscribe'>
                Subscribe
                <ArrowRight className='h-4 w-4 ml-2' />
              </motion.button>
            </form>
          </motion.div>

          {/* Popular Categories */}
          <motion.div
            className='bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg mb-8'
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            <div className='flex items-center mb-4'>
              <div className='bg-amber-100 dark:bg-amber-900 p-2 rounded-full mr-3'>
                <Tag className='h-5 w-5 text-amber-600 dark:text-amber-400' />
              </div>
              <h3 className='text-xl font-bold'>Popular Categories</h3>
            </div>
            <div className='space-y-3'>
              {categories
                .filter((cat) => cat !== "All")
                .map((category) => (
                  <motion.button
                    key={category}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between transition-colors ${
                      selectedCategory === category
                        ? "bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300"
                        : "bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    aria-label={`View ${category} articles`}>
                    <span>{category}</span>
                    <ArrowRight className='h-4 w-4 text-muted-foreground' />
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
              <div className='bg-purple-100 dark:bg-purple-900 p-2 rounded-full mr-3'>
                <Calendar className='h-5 w-5 text-purple-600 dark:text-purple-400' />
              </div>
              <h3 className='text-xl font-bold'>Upcoming Events</h3>
            </div>

            <div className='space-y-4'>
              {[
                { date: "June 30, 2025", title: "Speaker Announcement" },
                {
                  date: "July 15, 2025",
                  title: "Early Bird Registration Ends",
                },
                { date: "August 5, 2025", title: "Cultural Showcase Preview" },
                {
                  date: "November 7, 2025",
                  title: "Nwanyị bụ Ife Festival 2025",
                },
              ].map((event, index) => (
                <motion.div
                  key={index}
                  className='border-l-4 border-amber-500 pl-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-r-lg transition-colors cursor-pointer'
                  whileHover={{ scale: 1.01 }}
                  onClick={() => (window.location.href = "/events")}
                  aria-label={`Learn more about ${event.title}`}>
                  <div className='text-sm text-sky-600 dark:text-sky-400 font-medium'>
                    {event.date}
                  </div>
                  <div className='font-bold'>{event.title}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-amber-50 dark:from-amber-900/30 to-purple-50 dark:to-sky-900/30 relative overflow-hidden'>
        <div className='absolute inset-0 opacity-10 dark:opacity-5'>
          <div className='absolute top-0 left-0 w-64 h-64 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob'></div>
          <div className='absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000'></div>
          <div className='absolute bottom-0 left-1/2 w-64 h-64 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000'></div>
        </div>

        <div className='max-w-4xl mx-auto px-4 text-center relative z-10'>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className='w-24 h-24 mx-auto bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-8 shadow-lg'>
              <PenTool className='h-12 w-12 text-purple-600 dark:text-purple-400' />
            </div>

            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Share Your Story
            </h2>
            <p className='text-xl max-w-3xl mx-auto mb-10'>
              Are you a woman making an impact in your community? We want to
              feature your journey and inspire others.
            </p>

            <motion.button
              className='bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg relative overflow-hidden group'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/submit-story")}
              aria-label='Submit your story'>
              <span className='relative z-10'>Submit Your Story</span>
              <span className='absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
