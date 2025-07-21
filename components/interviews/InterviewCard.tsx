// src/components/InterviewCard.tsx
import { motion } from "framer-motion";
import { MousePointerClick, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

interface Interview {
  id: string;
  name: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
  category: string;
  interviewDate: string;
}

interface InterviewCardProps {
  interviews: Interview[];
}

export default function InterviewCard({ interviews }: InterviewCardProps) {
  const Card = ({
    interview,
    index,
  }: {
    interview: Interview;
    index: number;
  }) => (
    <motion.div
      key={interview.id}
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
                {new Date(interview.interviewDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <h3 className='font-bold text-xl text-gray-900 dark:text-white line-clamp-1'>
              {interview.name}
            </h3>
            <p className='text-amber-600 dark:text-amber-400 italic line-clamp-1'>
              {interview.title}
            </p>
            <Badge variant='outline' className='mt-2 w-fit'>
              {interview.category}
            </Badge>
          </div>

          <div className='flex flex-col md:flex-row gap-4 mb-5'>
            <div className='relative w-full h-48 md:w-32 md:h-24 rounded-xl overflow-hidden border-2 border-white dark:border-gray-800 shadow-md flex-shrink-0'>
              <Image
                alt={`${interview.name} interview`}
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
            aria-label={`Read full interview with ${interview.name}`}>
            <span className='text-amber-600 dark:text-amber-400 group-hover:text-white dark:group-hover:text-white transition-colors'>
              Read Full Interview
            </span>
            <MousePointerClick className='h-4 w-4 text-amber-600 dark:text-amber-400 group-hover:text-white dark:group-hover:text-white group-hover:rotate-90 transition-all duration-500' />
          </Link>
        </div>

        <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />
      </motion.div>
    </motion.div>
  );

  return (
    <div className='py-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {interviews.map((interview, index) => (
          <Card key={interview.id} interview={interview} index={index} />
        ))}
      </div>
    </div>
  );
}
