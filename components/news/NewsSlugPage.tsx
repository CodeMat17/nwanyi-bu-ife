"use client";

import CulturalPattern from "@/components/CulturalPattern";
import NewsBanner from "@/components/news/NewsBanner";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import dayjs from "dayjs";
import { motion, useScroll } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Eye, Share2 } from "lucide-react";
import Image from "next/image";
import { notFound, useParams, useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import { SanitizedArticleContent } from "@/components/SanitizedArticleContent";

export default function NewsSlugPage() {
  const params = useParams() 
  const router = useRouter();
  const { scrollXProgress } = useScroll();

  const slug = useMemo(() => {
    if (!params?.slug) return null;
    return Array.isArray(params.slug) ? params.slug[0] : params.slug;
  }, [params]);

  const article = useQuery(api.news.getBySlug, slug ? { slug } : "skip");
  const allArticles = useQuery(api.news.getAll);

  useEffect(() => {
    // Scroll to top when article loads
    window.scrollTo(0, 0);
  }, [article]);

  if (article === null) {
    return notFound();
  }

  if (!article || !allArticles) {
    // Loading state
    return (
      <div className='relative overflow-hidden'>
        <CulturalPattern />
        <div className='max-w-4xl mx-auto px-4 py-20'>
          <div className='animate-pulse space-y-8'>
            {/* Header skeleton */}
            <div className='h-10 bg-gray-200 dark:bg-gray-700 rounded w-3/4'></div>
            <div className='h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2'></div>

            {/* Image skeleton */}
            <div className='aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-xl'></div>

            {/* Content skeleton */}
            <div className='space-y-4'>
              <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-full'></div>
              <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6'></div>
              <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6'></div>
              <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-full'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Filter related articles (excluding current article)
  const relatedArticles = allArticles
    .filter((a) => a._id !== article._id)
    .slice(0, 2);

  return (
    <div className='relative overflow-hidden'>
      {/* Progress Bar */}
      <motion.div
        className='fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 z-50 shadow-lg'
        style={{ scaleX: scrollXProgress }}
        initial={{ scaleX: 0 }}
      />

      <CulturalPattern />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className='relative z-40 p-4 md:p-6'>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/news")}
            className='flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm'>
            <ArrowLeft size={16} />
            <span className='hidden sm:inline'>Back to News</span>
          </motion.button>

          <div className='flex items-center space-x-2 md:space-x-4'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-3 md:px-4 py-2 text-gray-700 dark:text-gray-300'>
              <Eye size={14} />
              <span className='text-sm'>{"2,300"}</span>
            </motion.div>

            <Button className='group rounded-full bg-amber-500 text-white hover:text-amber-500 transition-all duration-300 hover:scale-105'>
              <Share2 className='w-5 h-5 transition duration-500 group-hover:-rotate-45' />{" "}
              <span className='hidden sm:inline'>share</span>
            </Button>
          </div>
        </div>
      </motion.nav>

      <NewsBanner title={article.title} subtitle={article.excerpt} />

      <div className='max-w-4xl mx-auto px-4 pb-16'>
        {/* Article Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-4 border-t border-b py-2 mt-3'>
          <div className='flex flex-col sm:flex-row'>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              Published on {dayjs(article.date).format("MMM DD, YYYY")}
            </p>
            <p className='hidden sm:block mx-3 text-gray-400'>|</p>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              Updated on {dayjs(article.date).format("MMM DD, YYYY")}
            </p>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='relative rounded-2xl overflow-hidden aspect-video w-full h-96 mb-12 shadow-xl'>
          <Image
            src={article.image}
            alt={article.title}
            fill
            className='object-cover'
            priority
          />
        </motion.div>

        {/* Article Content */}
        <SanitizedArticleContent content={article.content} />

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='mb-16'>
            <h2 className='text-2xl font-bold mb-8'>More from the Festival</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {relatedArticles.map((related) => (
                <motion.div
                  key={related._id}
                  whileHover={{ y: -5 }}
                  className='bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow'>
                  <div className='relative h-48'>
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div className='p-6'>
                    <div className='flex items-center text-muted-foreground text-sm mb-3'>
                      <Calendar className='h-4 w-4 mr-1' />
                      <span>{dayjs(related.date).format("MMM DD, YYYY")}</span>
                    </div>
                    <h3 className='text-xl font-bold mb-3'>{related.title}</h3>
                    <p className='text-muted-foreground mb-4 line-clamp-2'>
                      {related.excerpt}
                    </p>
                    <a
                      href={`/news/${related.slug}`}
                      className='flex items-center text-sky-500 font-medium group'>
                      Read Article
                      <ArrowRight className='h-4 w-4 ml-1 transition-transform group-hover:translate-x-1' />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
