"use client";

import Link from "next/link";
import CulturalPattern from "../CulturalPattern";
import { Button } from "../ui/button";
import InterviewCard from "./InterviewCard";

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

const interviews: Interview[] = [
  {
    id: "1",
    name: "Chidimma Okonkwo",
    title: "The Power of Igbo Women in Cultural Preservation",
    excerpt:
      "Chidimma discusses the vital role of women in preserving Igbo cultural heritage through festivals.",
    imageUrl: "/carousel/img_5.jpg",
    slug: "chidimma-okonkwo",
    category: "Culture",
    interviewDate: "2023-10-15",
  },
  {
    id: "2",
    name: "Adaobi Nwafor",
    title: "Reviving Traditional Igbo Weaving Techniques",
    excerpt:
      "Adaobi shares her journey in preserving and modernizing ancient Igbo textile arts.",
    imageUrl: "/carousel/img_6.jpg",
    slug: "adaobi-nwafor",
    category: "Art",
    interviewDate: "2023-09-18",
  },
  {
    id: "3",
    name: "Nneka Eze",
    title: "Igbo Women in Contemporary Politics",
    excerpt:
      "Nneka discusses the challenges and opportunities for Igbo women in modern political leadership.",
    imageUrl: "/carousel/img_7.jpg",
    slug: "nneka-eze",
    category: "Politics",
    interviewDate: "2023-11-12",
  },
];

const LatestInterviewComponent = () => {
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
