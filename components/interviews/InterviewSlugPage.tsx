"use client";

import CulturalPattern from "@/components/CulturalPattern";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { SanitizedArticleContent } from "../SanitizedArticleContent";
import { ShareButton } from "../ShareButton";

const InterviewSlugPage = () => {
  const params = useParams();

  const slug = useMemo(() => {
    if (!params?.slug) return null;
    return Array.isArray(params.slug) ? params.slug[0] : params.slug;
  }, [params]);

  const interview = useQuery(
    api.interviews.getInterviewBySlug,
    slug ? { slug } : "skip"
  );

 

  if (interview === undefined) {
    return (
      <div className='max-w-4xl mx-auto px-4 py-8'>
        <CulturalPattern />
        <div className='mb-8'>
          <Skeleton className='h-10 w-32 rounded-full' />
        </div>
        <div className='mb-12 space-y-6'>
          <div className='flex justify-between gap-6'>
            <div className='space-y-4'>
              <Skeleton className='h-10 w-3/4 rounded-lg' />
              <Skeleton className='h-4 w-48 rounded-full' />
            </div>
            <Skeleton className='h-10 w-24 rounded-lg' />
          </div>
          <div className='relative w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse'>
            <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent' />
            <div className='absolute bottom-0 left-0 p-6 space-y-2'>
              <Skeleton className='h-6 w-48 rounded-full' />
              <Skeleton className='h-5 w-64 rounded-full' />
            </div>
          </div>
        </div>
        <div className='space-y-4'>
          {Array.from({ length: 12 }).map((_, i) => (
            <Skeleton
              key={i}
              className='h-4 w-full rounded-full'
              style={{
                width: `${100 - (i % 3) * 15}%`,
                opacity: 1 - i * 0.05,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (!interview) {
    return (
      <div className='max-w-4xl mx-auto px-4 py-20 text-center'>
        <CulturalPattern />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <h2 className='text-3xl font-bold mb-4'>Interview Not Found</h2>
          <p className='text-lg mb-8'>
            The requested interview could not be found.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className='mt-6' asChild>
              <Link href='/interviews'>Browse All Interviews</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <CulturalPattern />

      <motion.div
        className='mb-8'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}>
        <Button
          variant='ghost'
          className='text-amber-600 hover:text-amber-700 group'
          asChild>
          <Link href='/interviews'>
            <ArrowLeft className='mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1' />
            Back to Interviews
          </Link>
        </Button>
      </motion.div>

      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='mb-12'>
        <div className='flex flex-col md:flex-row justify-between gap-6 mb-8'>
          <div>
            <motion.h1
              className='text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}>
              {interview.title}
            </motion.h1>
            <div className='flex flex-col sm:flex-row sm:gap-6 text-muted-foreground'>
              <div className='flex items-center gap-2'>
                <span className='font-medium'>Published:</span>
                {dayjs(interview._creationTime).format("MMM DD, YYYY")}
              </div>
            </div>
          </div>
          {interview && (
            <ShareButton
              title={interview.title}
              text={`Read this interview from Nwanyị bụ ịfe festival: ${interview.excerpt}`}
              url={window.location.href}
            />
          )}
        </div>

        <motion.div
          className='relative w-full h-96 rounded-2xl overflow-hidden shadow-xl'
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          {interview.image ? (
            <Image
              src={interview.image}
              alt={`${interview.name}, ${interview.position}`}
              fill
              className='object-cover transition-transform duration-700 hover:scale-105'
              priority
              sizes='(max-width: 768px) 100vw, 80vw'
            />
          ) : (
            <div className='w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center'>
              <span className='text-gray-500'>No image available</span>
            </div>
          )}
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent' />
          <div className='absolute bottom-0 left-0 p-6 text-white'>
            <h2 className='text-xl font-semibold'>{ interview.name }</h2>
            <p className='text-amber-300 font-medium'>
             {interview.position}
            </p>
          </div>
        </motion.div>
      </motion.header>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}>
        <SanitizedArticleContent content={interview.content} />
      </motion.div>
    </div>
  );
};

export default InterviewSlugPage;
