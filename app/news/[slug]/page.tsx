"use client";

import CulturalPattern from "@/components/CulturalPattern";
import NewsBanner from "@/components/news/NewsBanner";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import { motion, useScroll } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Eye, Share2 } from "lucide-react";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";

interface Article {
  id: number;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  //   author: {
  //     name: string;
  //     role: string;
  //     avatar: string;
  //   };
  //   tags: string[];
}

// Mock data - in a real app this would come from an API or CMS
const articles: Article[] = [
  {
    id: 1,
    slug: "2025-festival-theme-announcement",
    title: "2025 Festival Theme Announcement: 'A Woman and Her Dream'",
    content: `<p>The Nwanyị bụ Ife Festival is proud to announce our 2025 theme: <strong>"A Woman and Her Dream"</strong>. This year's theme explores the intersection of women's aspirations and cultural identity in contemporary society.</p>
              <p>Through a series of keynote addresses, workshops, and cultural performances, we'll examine how women across Africa are turning their dreams into reality while preserving their heritage.</p>
              <h2>What to Expect</h2>
              <p>The festival will feature:</p>
              <ul>
                <li>Inspiring keynote speeches from female leaders</li>
                <li>Hands-on skill-building workshops</li>
                <li>Cultural exhibitions showcasing traditional arts</li>
                <li>Networking opportunities with like-minded women</li>
              </ul>`,
    excerpt:
      "Discover the profound meaning behind our 2025 festival theme and how it addresses the critical question 'Where Are Our Women?' in leadership spaces.",
    date: "June 15, 2025",
    readTime: "4 min",
    category: "Festival Updates",
    image: "/carousel/img_15.jpg",
    // author: {
    //   name: "Amina Okeke",
    //   role: "Festival Director",
    //   avatar: "/authors/amina.jpg",
    // },
    // tags: ["Theme", "Announcement", "WomenEmpowerment"],
  },
  {
    id: 2,
    title: "Meet the Trailblazing Women Receiving Nwanyị bụ Ife Awards",
    content: `<p>The Nwanyị bụ Ife Festival is proud to announce our 2025 theme: <strong>"A Woman and Her Dream"</strong>. This year's theme explores the intersection of women's aspirations and cultural identity in contemporary society.</p>
              <p>Through a series of keynote addresses, workshops, and cultural performances, we'll examine how women across Africa are turning their dreams into reality while preserving their heritage.</p>
              <h2>What to Expect</h2>
              <p>The festival will feature:</p>
              <ul>
                <li>Inspiring keynote speeches from female leaders</li>
                <li>Hands-on skill-building workshops</li>
                <li>Cultural exhibitions showcasing traditional arts</li>
                <li>Networking opportunities with like-minded women</li>
              </ul>`,
    excerpt:
      "Get to know the extraordinary women being honored at this year's festival for their groundbreaking work in technology, cultural preservation, and social justice.",
    date: "May 28, 2025",
    readTime: "6 min",
    category: "Awards",
    image: "/carousel/img_14.jpg",
    slug: "meet-the-trailblazing-women-receiving-nwanyi-bu-ife-awards",
  },
  {
    id: 3,
    title: "Preserving Igbo Textile Traditions: The Women Weavers of Nsukka",
    content: `<p>The Nwanyị bụ Ife Festival is proud to announce our 2025 theme: <strong>"A Woman and Her Dream"</strong>. This year's theme explores the intersection of women's aspirations and cultural identity in contemporary society.</p>
              <p>Through a series of keynote addresses, workshops, and cultural performances, we'll examine how women across Africa are turning their dreams into reality while preserving their heritage.</p>
              <h2>What to Expect</h2>
              <p>The festival will feature:</p>
              <ul>
                <li>Inspiring keynote speeches from female leaders</li>
                <li>Hands-on skill-building workshops</li>
                <li>Cultural exhibitions showcasing traditional arts</li>
                <li>Networking opportunities with like-minded women</li>
              </ul>`,
    excerpt:
      "How a collective of women artisans are reviving ancient weaving techniques while creating economic opportunities in rural communities.",
    date: "May 20, 2025",
    readTime: "8 min",
    category: "Cultural Heritage",
    image: "/carousel/img_13.jpg",
    slug: "preserving-igbo-textile-traditions-the-women-weavers-of-nsukka",
  },
  {
    id: 4,
    title: "Early Bird Registration Opens with Special Discounts",
    content: `<p>The Nwanyị bụ Ife Festival is proud to announce our 2025 theme: <strong>"A Woman and Her Dream"</strong>. This year's theme explores the intersection of women's aspirations and cultural identity in contemporary society.</p>
              <p>Through a series of keynote addresses, workshops, and cultural performances, we'll examine how women across Africa are turning their dreams into reality while preserving their heritage.</p>
              <h2>What to Expect</h2>
              <p>The festival will feature:</p>
              <ul>
                <li>Inspiring keynote speeches from female leaders</li>
                <li>Hands-on skill-building workshops</li>
                <li>Cultural exhibitions showcasing traditional arts</li>
                <li>Networking opportunities with like-minded women</li>
              </ul>`,
    excerpt:
      "Secure your spot at the 2025 festival with 20% off early bird pricing. Limited tickets available for our most transformative event yet.",
    date: "May 5, 2025",
    readTime: "3 min",
    category: "Festival Updates",
    image: "/carousel/img_12.jpg",
    slug: "early-bird-registration-opens-with-special-discounts",
  },
  {
    id: 5,
    title:
      "From Classroom to Boardroom: Education's Role in Women's Empowerment",
    content: `<p>The Nwanyị bụ Ife Festival is proud to announce our 2025 theme: <strong>"A Woman and Her Dream"</strong>. This year's theme explores the intersection of women's aspirations and cultural identity in contemporary society.</p>
              <p>Through a series of keynote addresses, workshops, and cultural performances, we'll examine how women across Africa are turning their dreams into reality while preserving their heritage.</p>
              <h2>What to Expect</h2>
              <p>The festival will feature:</p>
              <ul>
                <li>Inspiring keynote speeches from female leaders</li>
                <li>Hands-on skill-building workshops</li>
                <li>Cultural exhibitions showcasing traditional arts</li>
                <li>Networking opportunities with like-minded women</li>
              </ul>`,
    excerpt:
      "An in-depth analysis of how access to education continues to shape women's leadership trajectories across Africa.",
    date: "April 30, 2025",
    readTime: "10 min",
    category: "Women Empowerment",
    image: "/carousel/img_11.jpg",
    slug: "from-classroom-to-boardroom-educations-role-in-womens-empowerment",
  },
  {
    id: 6,
    title:
      "The Resurgence of Igbo Women's Council Systems in Modern Governance",
    content: `<p>The Nwanyị bụ Ife Festival is proud to announce our 2025 theme: <strong>"A Woman and Her Dream"</strong>. This year's theme explores the intersection of women's aspirations and cultural identity in contemporary society.</p>
              <p>Through a series of keynote addresses, workshops, and cultural performances, we'll examine how women across Africa are turning their dreams into reality while preserving their heritage.</p>
              <h2>What to Expect</h2>
              <p>The festival will feature:</p>
              <ul>
                <li>Inspiring keynote speeches from female leaders</li>
                <li>Hands-on skill-building workshops</li>
                <li>Cultural exhibitions showcasing traditional arts</li>
                <li>Networking opportunities with like-minded women</li>
              </ul>`,
    excerpt:
      "Exploring how traditional women's leadership structures are informing contemporary approaches to community development.",
    date: "April 18, 2025",
    readTime: "7 min",
    category: "Cultural Heritage",
    image: "/carousel/img_10.jpg",
    slug: "the-resurgence-of-igbo-womens-council-systems-in-modern-governance",
  },
  {
    id: 7,
    title: "Tech Innovation Workshop: Bridging the Gender Gap in STEM",
    content: `<p>The Nwanyị bụ Ife Festival is proud to announce our 2025 theme: <strong>"A Woman and Her Dream"</strong>. This year's theme explores the intersection of women's aspirations and cultural identity in contemporary society.</p>
              <p>Through a series of keynote addresses, workshops, and cultural performances, we'll examine how women across Africa are turning their dreams into reality while preserving their heritage.</p>
              <h2>What to Expect</h2>
              <p>The festival will feature:</p>
              <ul>
                <li>Inspiring keynote speeches from female leaders</li>
                <li>Hands-on skill-building workshops</li>
                <li>Cultural exhibitions showcasing traditional arts</li>
                <li>Networking opportunities with like-minded women</li>
              </ul>`,
    excerpt:
      "How our hands-on technology workshop is equipping women with digital skills for the future economy.",
    date: "April 10, 2025",
    readTime: "5 min",
    category: "Festival Program",
    image: "/carousel/img_9.jpg",
    slug: "tech-innovation-workshop-bridging-the-gender-gap-in-stem",
  },
  {
    id: 8,
    title:
      "Nwanyị bụ Ife Festival Partners with UN Women for Global Initiative",
    content: `<p>The Nwanyị bụ Ife Festival is proud to announce our 2025 theme: <strong>"A Woman and Her Dream"</strong>. This year's theme explores the intersection of women's aspirations and cultural identity in contemporary society.</p>
              <p>Through a series of keynote addresses, workshops, and cultural performances, we'll examine how women across Africa are turning their dreams into reality while preserving their heritage.</p>
              <h2>What to Expect</h2>
              <p>The festival will feature:</p>
              <ul>
                <li>Inspiring keynote speeches from female leaders</li>
                <li>Hands-on skill-building workshops</li>
                <li>Cultural exhibitions showcasing traditional arts</li>
                <li>Networking opportunities with like-minded women</li>
              </ul>`,
    excerpt:
      "Announcing our new partnership to scale women's empowerment programs across West Africa.",
    date: "March 28, 2025",
    readTime: "4 min",
    category: "Partnerships",
    image: "/carousel/img_8.jpg",
    slug: "nwanyi-bu-ife-festival-partners-with-un-women-for-global-initiative",
  },
];

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const { scrollXProgress } = useScroll();

  const article = articles.find((article) => article.slug === params.slug);

  if (!article) {
    return notFound();
  }

  return (
    <div className='relative overflow-hidden'>
      {/* Progess Bar */}
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

      <NewsBanner title={article.title} subtitle={article.excerpt}  />

    

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
        <div className='relative rounded-2xl overflow-hidden aspect-video w-full h-96 mb-12'>
          <Image
            src={article.image}
            alt={article.title}
            fill
            className='object-cover'
            priority
          />
        </div>

        {/* Article Content */}
        <article className='prose prose-lg dark:prose-invert max-w-none mb-16'>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>

        {/* Related Articles */}
        <section className='mb-16'>
          <h2 className='text-2xl font-bold mb-8'>More from the Festival</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {articles
              .filter((a) => a.id !== article.id)
              .slice(0, 2)
              .map((related) => (
                <div
                  key={related.id}
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
                      <span>{related.date}</span>
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
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
