// app/interviews/[slug]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import {
  Share2,
  // Bookmark,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  MousePointerClick,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import Link from "next/link";
import CulturalPattern from "@/components/CulturalPattern";
import { Badge } from "@/components/ui/badge";

// Define TypeScript interfaces
interface RelatedInterview {
  name: string;
  slug: string;
  category: string;
  title: string;
  date: string;
  imageUrl: string;
}

interface Interview {
  slug: string;
  title: string;
  interviewDate: string;
  publishedDate: string;
  updatedDate?: string;
  imageUrl: string;
  excerpt: string;
  body: string;
  intervieweeName: string;
  intervieweeTitle: string;
  relatedInterviews: RelatedInterview[];
}

// Mock data with proper typing
const mockInterview: Interview = {
  slug: "chidimma-okonkwo",
  title: "The Power of Igbo Women in Cultural Preservation",
  interviewDate: "2024-12-15T10:00:00Z",
  publishedDate: "2025-02-20T14:30:00Z",
  updatedDate: "2025-03-05T09:15:00Z",
  imageUrl: "/carousel/img_1.jpg",
  excerpt:
    "Chidimma Okonkwo discusses the vital role of women in preserving Igbo cultural heritage through festivals like Nwanyị bụ Ịfe.",
  intervieweeName: "Chidimma Okonkwo",
  intervieweeTitle: "Cultural Anthropologist",
  body: `
    <p class="mb-4">In the heart of Igbo land, the Nwanyị bụ Ịfe festival stands as a testament to the enduring power and influence of women in our cultural landscape. I sat down with Chidimma Okonkwo, a cultural anthropologist and festival organizer, to discuss the significance of this celebration.</p>
    
    <h2 class="text-xl font-semibold mt-8 mb-4">The Essence of Nwanyị bụ Ịfe</h2>
    
    <p class="mb-4">"Nwanyị bụ Ịfe translates to 'Woman is Light,'" Chidimma begins, her eyes lighting up with passion. "It's more than just a festival—it's a recognition of the divine feminine energy that sustains our communities."</p>
    
    <p class="mb-4">She explains how the festival dates back centuries, originally created to honor the women who preserved cultural knowledge during times of upheaval. "When colonial forces disrupted our traditional ways, it was the women who kept our stories alive, our rituals intact, and our language flourishing."</p>
    
    <blockquote class="border-l-4 border-amber-500 pl-4 py-2 my-6 italic bg-amber-50 dark:bg-amber-700">
      "In Igbo cosmology, the woman is the light that guides the family, the community, and the culture. Without her light, we would wander in darkness."
    </blockquote>
    
    <h2 class="text-xl font-semibold mt-8 mb-4">Modern Interpretations</h2>
    
    <p class="mb-4">When asked about the festival's relevance today, Chidimma leans forward enthusiastically. "The beauty of Nwanyị bụ Ịfe is how it evolves. Today, we celebrate not just traditional roles but all forms of feminine expression—artists, entrepreneurs, scientists, and activists."</p>
    
    <p class="mb-4">She describes how contemporary celebrations incorporate dance competitions, poetry slams, fashion shows featuring modern interpretations of traditional attire, and technology workshops led by Igbo women in STEM fields.</p>
    
    <h2 class="text-xl font-semibold mt-8 mb-4">Challenges and Triumphs</h2>
    
    <p class="mb-4">Organizing the festival hasn't been without challenges. "Funding is always a struggle," Chidimma admits. "But our greatest triumph has been seeing young girls' faces light up when they see role models who look like them excelling in diverse fields."</p>
    
    <p class="mb-4">She shares a touching story about a 12-year-old girl who attended a coding workshop at last year's festival and has since developed a mobile app to teach Igbo language basics. "That's the power of representation. That's why we do this."</p>
  `,
  relatedInterviews: [
    {
      name: "Adaobi Nwafor",
      slug: "adaobi-nwafor",
      category: "Art",
      title: "Reviving Traditional Igbo Weaving Techniques",
      date: "2023-09-18T14:00:00Z",
      imageUrl: "/carousel/img_2.jpg",
    },
    {
      name: "Nneka Eze",
      slug: "nneka-eze",
      category: "Politics",
      title: "Igbo Women in Contemporary Politics",
      date: "2023-11-12T11:30:00Z",
      imageUrl: "/carousel/img_3.jpg",
    },
  ],
};

const InterviewPage = () => {
  const { slug } = useParams() as { slug: string };
  const [interview, setInterview] = useState<Interview | null>(null);
  const [loading, setLoading] = useState(true);
  // const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    // Simulate API fetch
    const fetchData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 800));
      setInterview(mockInterview);
      setLoading(false);
    };

    fetchData();
  }, [slug]);

  const handleShare = () => {
    if (navigator.share && interview) {
      navigator
        .share({
          title: interview.title,
          text: `Read this interview from Nwanyị bụ Ịfe Festival: ${interview.excerpt}`,
          url: window.location.href,
        })
        .catch(console.error);
    } else if (interview) {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  // const toggleBookmark = () => {
  //   setIsBookmarked(!isBookmarked);
  //   toast.success(
  //     isBookmarked ? "Removed from bookmarks" : "Interview bookmarked!"
  //   );
  // };

  if (loading) {
    return (
      <div className='max-w-4xl mx-auto px-4 py-8'>
        <Skeleton className='h-10 w-3/4 mb-6' />
        <div className='flex items-center space-x-4 mb-8'>
          <Skeleton className='h-4 w-32' />
          <Skeleton className='h-4 w-32' />
          <Skeleton className='h-4 w-32' />
        </div>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='md:w-1/3'>
            <Skeleton className='h-96 w-full rounded-xl' />
          </div>
          <div className='md:w-2/3 space-y-4'>
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-4 w-5/6' />
            <Skeleton className='h-4 w-4/5' />
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-4 w-3/4' />
            <Skeleton className='h-4 w-5/6 mt-8' />
          </div>
        </div>
      </div>
    );
  }

  if (!interview) {
    return (
      <div className='max-w-4xl mx-auto px-4 py-20 text-center'>
        <h2 className='text-2xl font-bold mb-4'>Interview not found</h2>
        <p>The requested interview could not be found.</p>
        <Button className='mt-6' asChild>
          <Link href='/interviews'>Browse all interviews</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <CulturalPattern />
      {/* Navigation */}
      <div className='mb-8'>
        <Button
          variant='ghost'
          className='text-amber-600 hover:text-amber-700'
          asChild>
          <Link href='/interviews'>
            <ArrowLeft className='mr-2 h-4 w-4' />
            Back to Interviews
          </Link>
        </Button>
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='mb-12'>
        <div className='flex flex-col md:flex-row justify-between gap-6 mb-8'>
          <div>
            <motion.h1
              className='text-3xl md:text-4xl font-bold mb-4'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}>
              {interview.title}
            </motion.h1>

            <div className='flex flex-col sm:flex-row sm:gap-6 text-muted-foreground italic text-sm'>
              <div>
                <span className='font-medium'>Interview Date:</span>{" "}
                {dayjs(interview.interviewDate).format("MMM DD, YYYY")}
              </div>
              <div>
                <span className='font-medium'>Published:</span>{" "}
                {dayjs(interview.publishedDate).format("MMM DD, YYYY")}
              </div>
              {interview.updatedDate && (
                <div>
                  <span className='font-medium'>Updated:</span>{" "}
                  {dayjs(interview.updatedDate).format("MMM DD, YYYY")}
                </div>
              )}
            </div>
          </div>

          <div className=''>
            {/* <Button
              variant='outline'
              className='flex items-center gap-2 border-amber-500 text-amber-600 hover:bg-amber-50'
              onClick={toggleBookmark}>
              <Bookmark
                className={`h-4 w-4 ${isBookmarked ? "fill-amber-500" : ""}`}
              />
              {isBookmarked ? "Bookmarked" : "Bookmark"}
            </Button> */}
            <Button
              variant='outline'
              className='flex items-center gap-2 border-amber-500 text-amber-600 hover:bg-amber-50'
              onClick={handleShare}>
              <Share2 className='h-4 w-4' />
              Share
            </Button>
          </div>
        </div>

        <div className='relative w-full h-96 rounded-2xl overflow-hidden shadow-lg'>
          <Image
            src={interview.imageUrl}
            alt={`${interview.intervieweeName}, ${interview.intervieweeTitle}`}
            fill
            className='object-cover'
            priority
            sizes='(max-width: 768px) 100vw, 80vw'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
          <div className='absolute bottom-0 left-0 p-6 text-white'>
            <h2 className='text-xl font-semibold'>Featured Interviewee</h2>
            <p className='text-amber-300'>
              {interview.intervieweeName}, {interview.intervieweeTitle}
            </p>
          </div>
        </div>
      </motion.header>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className='prose prose-lg max-w-none mb-16'>
        <div dangerouslySetInnerHTML={{ __html: interview.body }} />
      </motion.div>

      {/* Related Interviews */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className='border-t border-gray-200 pt-12'>
        <h2 className='text-2xl font-bold mb-8 text-center'>
          More Interviews You Might Like
        </h2>

       
          {/* ============== */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {interview.relatedInterviews.map((item, index) => (
              <motion.div
                key={item.slug}
                className='h-full'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <motion.div
                  className='group relative h-full bg-gradient-to-br from-white via-white to-amber-200/50 dark:from-gray-700 dark:via-gray-700 dark:to-gray-600 border border-amber-100 dark:border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col'
                  whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(180, 83, 9, 0.25)",
                  }}>
                  <div className='absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-500 opacity-50' />

                  <div className='p-5 flex-1 flex flex-col'>
                    <div className='mb-3'>
                      <div className='flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400 mb-1'>
                        <Calendar className='h-4 w-4' />
                        <span>
                          {new Date(item.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <h3 className='font-bold text-xl text-gray-900 dark:text-white line-clamp-1'>
                        {item.name}
                      </h3>
                      <p className='text-amber-600 dark:text-amber-400 italic line-clamp-1'>
                        {item.title}
                      </p>
                      <Badge variant='outline' className='mt-2 w-fit'>
                        {item.category}
                      </Badge>
                    </div>

                    <div className='flex flex-col md:flex-row gap-4 mb-5'>
                      <div className='relative w-full h-48 md:w-32 md:h-24 rounded-xl overflow-hidden border-2 border-white dark:border-gray-800 shadow-md flex-shrink-0'>
                        <Image
                          alt={`${item.title} interview`}
                          src={interview.imageUrl}
                          fill
                          className='object-cover'
                          sizes='(max-width: 768px) 100vw, 128px'
                          priority={index < 3} // Lazy load after first 3 images
                        />
                        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/30' />
                      </div>
                      <p className='text-sm text-gray-600 dark:text-gray-300 flex-1 line-clamp-4'>
                        {interview.excerpt}
                      </p>
                    </div>

                    <Link
                      href={`/interviews/${interview.slug}`}
                      className='mt-auto group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-amber-600 border border-amber-500 rounded-full py-1.5 px-4 text-center text-sm transition-all duration-500 flex items-center justify-center gap-2'
                      aria-label={`Read full interview with ${item.title}`}>
                      <span className='text-amber-600 dark:text-amber-400 group-hover:text-white dark:group-hover:text-white transition-colors'>
                        Read Full Interview
                      </span>
                      <MousePointerClick className='h-4 w-4 text-amber-600 dark:text-amber-400 group-hover:text-white dark:group-hover:text-white group-hover:rotate-90 transition-all duration-500' />
                    </Link>
                  </div>

                  <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />
                </motion.div>
              </motion.div>
            ))}
          </div>
          {/* ============== */}

          {/* {interview.relatedInterviews.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className='border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow'>
              <div className='relative h-48'>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 50vw, 33vw'
                />
              </div>
              <div className='p-6'>
                <p className='text-gray-500 text-sm mb-2'>
                  {dayjs(item.date).format("MMM DD, YYYY")}
                </p>
                <h3 className='text-xl font-semibold mb-3'>{item.title}</h3>
                <Button variant='link' className='text-amber-600 p-0' asChild>
                  <a href={`/interviews/${item.slug}`}>Read Interview</a>
                </Button>
              </div>
            </motion.div>
          ))} */}
    
      </motion.div>

      {/* Pagination */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className='mt-16 flex justify-between'>
        <Button variant='outline' className='flex items-center gap-2'>
          <ChevronLeft className='h-4 w-4' />
          Previous Interview
        </Button>
        <Button variant='outline' className='flex items-center gap-2'>
          Next Interview
          <ChevronRight className='h-4 w-4' />
        </Button>
      </motion.div>
    </div>
  );
};

export default InterviewPage;
