// app/interviews/page.tsx
"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import InterviewCard from "@/components/interviews/InterviewCard";
import GlowingBanner from "@/components/GlowingBanner";
import CulturalPattern from "@/components/CulturalPattern";

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

const mockInterviews: Interview[] = [
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
  {
    id: "4",
    name: "Chioma Adebayo",
    title: "Culinary Traditions of the Igbo People",
    excerpt:
      "Chioma explores the rich culinary heritage and its significance in Igbo culture.",
    imageUrl: "/carousel/img_8.jpg",
    slug: "chioma-adebayo",
    category: "Food",
    interviewDate: "2023-08-22",
  },
  {
    id: "5",
    name: "Ifeoma Uzoamaka",
    title: "The Role of Music in Igbo Festivals",
    excerpt:
      "Ifeoma explains how traditional music forms the heartbeat of Igbo cultural celebrations.",
    imageUrl: "/carousel/img_9.jpg",
    slug: "ifeoma-uzoamaka",
    category: "Music",
    interviewDate: "2023-07-30",
  },
  {
    id: "6",
    name: "Amara Chukwu",
    title: "Igbo Women Entrepreneurs: Breaking Barriers",
    excerpt:
      "Amara shares insights on how Igbo women are transforming the business landscape.",
    imageUrl: "/carousel/img_10.jpg",
    slug: "amara-chukwu",
    category: "Business",
    interviewDate: "2023-06-15",
  },
  {
    id: "7",
    name: "Ifeoma Uzoamaka",
    title: "The Role of Music in Igbo Festivals",
    excerpt:
      "Ifeoma explains how traditional music forms the heartbeat of Igbo cultural celebrations.",
    imageUrl: "/carousel/img_9.jpg",
    slug: "ifeoma-uzoamaka",
    category: "Music",
    interviewDate: "2023-07-30",
  },
  {
    id: "8",
    name: "Amara Chukwu",
    title: "Igbo Women Entrepreneurs: Breaking Barriers",
    excerpt:
      "Amara shares insights on how Igbo women are transforming the business landscape.",
    imageUrl: "/carousel/img_10.jpg",
    slug: "amara-chukwu",
    category: "Business",
    interviewDate: "2023-06-15",
  },
];

const categories = [
  { value: "all", label: "All Categories" },
  { value: "Culture", label: "Culture" },
  { value: "Art", label: "Art" },
  { value: "Politics", label: "Politics" },
  { value: "Food", label: "Food" },
  { value: "Music", label: "Music" },
  { value: "Business", label: "Business" },
];

export default function InterviewsPage() {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredInterviews = useMemo(() => {
    let result = [...interviews];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (interview) =>
          interview.title.toLowerCase().includes(query) ||
          interview.excerpt.toLowerCase().includes(query) ||
          interview.name.toLowerCase().includes(query) ||
          interview.category.toLowerCase().includes(query)
      );
    }

    if (selectedCategory !== "all") {
      result = result.filter(
        (interview) => interview.category === selectedCategory
      );
    }

    return result;
  }, [interviews, searchQuery, selectedCategory]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentInterviews = filteredInterviews.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredInterviews.length / itemsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 800));
      setInterviews(mockInterviews);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const paginate = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className='min-h-screen '>
     <CulturalPattern />

      <GlowingBanner
        title='Exclusive Interviews'
        subtitle='  Discover the stories, wisdom, and cultural insights from the
              people shaping the Nwanyị bụ Ịfe festival.'
       
      />

      {/* Filter Section */}
      <div id='interview-grid' className='container mx-auto px-4 py-12'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='rounded-xl shadow-md p-6 mb-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'>
          <div className='flex flex-col md:flex-row gap-4 justify-between'>
            <div className='relative flex-1 max-w-lg'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
              <Input
                type='text'
                placeholder='Search interviews by title, name, or category...'
                className='pl-10 py-6'
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>

            <div className='flex gap-4'>
              <div className='flex items-center gap-2'>
                <Filter className='h-5 w-5' />
                <span className='text-gray-700 dark:text-gray-300'>
                  Filter:
                </span>
              </div>
              <Select
                onValueChange={handleCategoryChange}
                value={selectedCategory}>
                <SelectTrigger className='w-[180px] py-6'>
                  <SelectValue placeholder='Category' />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </motion.div>

        {/* Interview Grid */}
        {loading ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className='rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-800'>
                <Skeleton className='h-48 w-full rounded-t-xl' />
                <div className='p-5'>
                  <Skeleton className='h-4 w-32 mb-3' />
                  <Skeleton className='h-6 w-full mb-3' />
                  <Skeleton className='h-4 w-5/6 mb-4' />
                  <Skeleton className='h-4 w-40 mb-4' />
                  <Skeleton className='h-10 w-32' />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {currentInterviews.length === 0 ? (
              <div className='text-center py-20'>
                <h3 className='text-2xl font-bold mb-4 dark:text-white'>
                  No interviews found
                </h3>
                <p className='text-gray-600 mb-6 dark:text-gray-300'>
                  Try adjusting your search or filter criteria
                </p>
                <Button
                  variant='outline'
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <InterviewCard interviews={currentInterviews} />
            )}
          </>
        )}

        {/* Pagination */}
        {filteredInterviews.length > itemsPerPage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className='flex justify-center mt-16'>
            <div className='flex items-center gap-2'>
              <Button
                variant='outline'
                className='flex items-center gap-2'
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}>
                <ChevronLeft className='h-4 w-4' />
                Previous
              </Button>

              {[...Array(totalPages)].map((_, index) => (
                <Button
                  key={index}
                  variant={currentPage === index + 1 ? "default" : "outline"}
                  onClick={() => paginate(index + 1)}
                  className='w-10 h-10 p-0'>
                  {index + 1}
                </Button>
              ))}

              <Button
                variant='outline'
                className='flex items-center gap-2'
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}>
                Next
                <ChevronRight className='h-4 w-4' />
              </Button>
            </div>
          </motion.div>
        )}
      </div>

      {/* CTA Section */}
      <div className='bg-gradient-to-r from-amber-500 to-amber-700 py-16 mt-12'>
        <div className='container mx-auto px-4 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='max-w-3xl mx-auto'>
            <h2 className='text-3xl font-bold text-white mb-4'>
              Share Your Story
            </h2>
            <p className='text-amber-100 text-xl mb-8'>
              Are you part of the Nwanyị bụ Ịfe festival? We&apos;d love to
              feature your journey and experiences.
            </p>
            <div className='flex gap-4 justify-center'>
              <Button variant='secondary' asChild>
                <Link href='/share'>Share Your Story</Link>
              </Button>
              <Button
                variant='outline'
                className='bg-transparent border-white text-white hover:bg-white/10'>
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
