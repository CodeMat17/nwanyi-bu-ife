"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import { Share2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import Link from "next/link";
import CulturalPattern from "@/components/CulturalPattern";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { SanitizedArticleContent } from "../SanitizedArticleContent";



const InterviewSlugPage = () => {
  const params = useParams();
  const slug = params.slug as string;



  // Fetch the current interview
  const interview = useQuery(api.interviews.getInterviewBySlug, { slug });





  const handleShare = () => {
    if (!interview) return;

    if (navigator.share) {
      navigator
        .share({
          title: interview.title,
          text: `Read this interview from Nwanyị bụ Ịfe Festival: ${interview.excerpt}`,
          url: window.location.href,
        })
        .catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  if (interview === undefined) {
    return (
      <div className='max-w-4xl mx-auto px-4 py-8'>
        <Skeleton className='h-10 w-3/4 mb-6' />
        <div className='flex items-center space-x-4 mb-8'>
          <Skeleton className='h-4 w-32' />
          <Skeleton className='h-4 w-32' />
        </div>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='md:w-1/3'>
            <Skeleton className='h-96 w-full rounded-xl' />
          </div>
          <div className='md:w-2/3 space-y-4'>
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className='h-4 w-full' />
            ))}
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
                <span className='font-medium'>Published:</span>{" "}
                {dayjs(interview._creationTime).format("MMM DD, YYYY")}
              </div>
            </div>
          </div>

          <div>
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
          {interview.image ? (
            <Image
              src={interview.image}
              alt={`${interview.name}, ${interview.position}`}
              fill
              className='object-cover'
              priority
              sizes='(max-width: 768px) 100vw, 80vw'
            />
          ) : (
            <div className='w-full h-full bg-gray-200 flex items-center justify-center'>
              <span className='text-gray-500'>No image available</span>
            </div>
          )}
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
          <div className='absolute bottom-0 left-0 p-6 text-white'>
            <h2 className='text-xl font-semibold'>Featured Interviewee</h2>
            <p className='text-amber-300'>
              {interview.name}, {interview.position}
            </p>
          </div>
        </div>
      </motion.header>

      {/* Content */}
      <SanitizedArticleContent content={ interview.content} />
 
    </div>
  );
};

export default InterviewSlugPage;
