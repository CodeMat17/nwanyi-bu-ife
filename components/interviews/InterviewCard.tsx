// src/components/InterviewCard.tsx
import { Id } from "@/convex/_generated/dataModel";
import dayjs from "dayjs";
import { MousePointerClick } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface Interview {
  _id: Id<"interviews">;
  name: string;
  title: string;
  position: string;
  excerpt: string;
  image: string;
  slug: string;
  category: string;
  date: string;
  content: string;
}

interface InterviewCardProps {
  interviews: Interview[] | undefined;
}

export default function InterviewCard({ interviews = [] }: InterviewCardProps) {
  return (
    <div className='py-4'>
      <div className='relative'>
        {/* Scrollable container with snap features */}
        <div
          className='flex overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth 
                        hide-scrollbar gap-4 sm:gap-6 px-4 lg:justify-center'>
          {interviews.map((interview) => (
            <div
              key={interview._id}
              className='flex-shrink-0 w-[220px] md:w-[260px] lg:w-[300px] snap-center group rounded-xl 
                        overflow-hidden shadow-md hover:shadow-lg transition-all duration-300
                        transform hover:-translate-y-1 flex flex-col h-full'>
              {/* Image container */}
              <div className='relative w-full aspect-video'>
                <Image
                  alt={`${interview.name} interview`}
                  fill
                  src={interview.image}
                  className='object-cover transition-all duration-300 group-hover:opacity-90 group-hover:scale-105'
                  sizes='(max-width: 640px) 220px, (max-width: 768px) 260px, 300px'
                />
              </div>

              {/* Content container - flex-col with flex-1 for proper spacing */}
              <div className='flex flex-col flex-1 px-4 py-3 bg-white dark:bg-gray-700'>
                <div className='flex-1'>
                  {" "}
                  {/* This pushes the button down */}
                  <h3 className='font-semibold text-lg line-clamp-1'>
                    {interview.name}
                  </h3>
                  <p className='text-sm line-clamp-3 text-muted-foreground mt-1 h-16'>
                    {interview.title}
                  </p>
                  {/* <p className='text-xs line-clamp-2 text-muted-foreground mt-1'>
                    {interview.excerpt}
                  </p> */}
                  <div className='flex items-center justify-between py-2 mt-2'>
                    <p className='text-xs text-muted-foreground'>
                      {dayjs(interview.date).format("MMM D, YYYY")}
                    </p>
                    <Badge variant='outline' className='text-xs capitalize'>
                      {interview.category}
                    </Badge>
                  </div>
                </div>

                {/* Button with mt-auto to stick to bottom */}
                <Button
                  asChild
                  variant='link'
                  className='mt-auto w-full text-amber-500 transition-all duration-300
                            group-hover:scale-[1.02] hover:no-underline py-2'
                  aria-label={`Read full interview with ${interview.name}`}>
                  <Link href={`/interviews/${interview.slug}`}>
                    Read Full Interview
                    <MousePointerClick
                      className='w-4 h-4 ml-2 transition-all duration-300 
                                              group-hover:ml-3 group-hover:rotate-90'
                    />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient fade effect on sides */}
        <div className='absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-amber-50 dark:from-slate-800 to-transparent pointer-events-none' />
        <div className='absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-amber-50 dark:from-slate-800 to-transparent pointer-events-none' />
      </div>
    </div>
  );
}
