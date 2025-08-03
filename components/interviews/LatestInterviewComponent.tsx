"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Link from "next/link";
import CulturalPattern from "../CulturalPattern";
import { Button } from "../ui/button";
import InterviewCard from "./InterviewCard";

const LatestInterviewComponent = () => {
  const interviews = useQuery(api.interviews.latestInterviews);

  if (interviews === undefined) {
    return (
      <div className='flex gap-6 overflow-x-auto pb-4'>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className='min-w-[300px] bg-gray-100 dark:bg-gray-800 rounded-xl p-4 animate-pulse'>
            <div className='h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4'></div>
            <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2'></div>
            <div className='h-6 bg-gray-200 dark:bg-gray-700 rounded w-full mb-3'></div>
            <div className='h-3 bg-gray-200 dark:bg-gray-700 rounded w-full mb-1'></div>
            <div className='h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6'></div>
          </div>
        ))}
      </div>
    );
  }

  if (interviews.length === 0) { 
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold font-playfair text-gray-900 dark:text-white'>
          No Interviews Found
        </h2>
        <p className='text-gray-600 dark:text-gray-300 mt-4 max-w-xl mx-auto'>
          Check back later for new interviews
        </p>
      </div>;
  }

  return (
    <div className='py-16 dark:to-gray-800 relative'>
      <CulturalPattern />
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center mb-10'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold font-playfair text-gray-900 dark:text-white'>
              Latest Interviews
            </h2>
            <p className='text-gray-600 dark:text-gray-300 mt-2 max-w-xl'>
              Discover inspiring stories from the people shaping the Nwanyị bụ
              Ịfe festival
            </p>
          </div>
          <Button
            asChild
            className='mt-4 md:mt-0 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg px-6 py-5 rounded-xl'>
            <Link href='/interviews'>
              View All Interviews
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 ml-2'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </Link>
          </Button>
        </div>

        {/* Horizontal Scrolling Container with Snap Points */}
        <InterviewCard interviews={interviews} />
      </div>
    </div>
  );
};

export default LatestInterviewComponent;
