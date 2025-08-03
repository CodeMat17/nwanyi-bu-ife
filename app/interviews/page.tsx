"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Filter, MousePointerClick, Search } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import CulturalPattern from "@/components/CulturalPattern";
import GlowingBanner from "@/components/GlowingBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import dayjs from "dayjs";

type Interview = {
  _id: string;
  _creationTime: number;
  name: string;
  title: string;
  position: string;
  excerpt: string;
  image: string;
  imageId: string;
  slug: string;
  category: string;
  date: string;
  content: string;
};

const ITEMS_PER_PAGE = 12;

export default function InterviewsPage() {
  const interviewsData = useQuery(api.interviews.getInterviews);
  const [interviewsError, setInterviewsError] = useState<Error | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Handle query states
  const isLoading = interviewsData === undefined;
  const interviews = useMemo(() => {
    if (interviewsData instanceof Error) {
      setInterviewsError(interviewsData);
      return [];
    }
    return (interviewsData as Interview[]) || [];
  }, [interviewsData]);

  // Get unique categories from interviews
  const categories = useMemo(() => {
    const uniqueCategories = new Set<string>();
    interviews.forEach((interview) => {
      if (interview.category) {
        uniqueCategories.add(interview.category);
      }
    });

    return [
      { value: "all", label: "All Categories" },
      ...Array.from(uniqueCategories).map((category) => ({
        value: category.toLowerCase().replace(/\s+/g, '-'),
        label: category
      }))
    ];
  }, [interviews]);

  // Filter and paginate interviews
  const filteredInterviews = useMemo(() => {
    if (!interviews || isLoading) return [];
    
    const query = searchQuery.toLowerCase();
    const categoryFilter = selectedCategory.toLowerCase();

    return interviews.filter((interview) => {
      const matchesSearch = 
        interview.title.toLowerCase().includes(query) ||
        interview.excerpt.toLowerCase().includes(query) ||
        interview.name.toLowerCase().includes(query) ||
        interview.category.toLowerCase().includes(query);

      const matchesCategory = 
        selectedCategory === "all" || 
        interview.category.toLowerCase().replace(/\s+/g, '-') === categoryFilter;

      return matchesSearch && matchesCategory;
    });
  }, [interviews, searchQuery, selectedCategory, isLoading]);

  const paginatedInterviews = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredInterviews.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredInterviews, currentPage]);

  const totalPages = Math.ceil(filteredInterviews.length / ITEMS_PER_PAGE);

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
    <div className='min-h-screen'>
      <CulturalPattern />

      <GlowingBanner
        title='Exclusive Interviews'
        subtitle='Discover the stories, wisdom, and cultural insights from the people shaping the Nwanyị bụ Ịfe festival.'
      />

      {/* Filter Section */}
      <section id='interview-grid' className='container mx-auto px-4 py-12'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='rounded-xl shadow-sm p-6 mb-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'>
          <div className='flex flex-col md:flex-row gap-4 justify-between items-center'>
            <div className='relative flex-1 max-w-lg w-full'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
              <Input
                type='text'
                placeholder='Search interviews by title, name, or category...'
                className='pl-10 py-6'
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>

            <div className='flex items-center gap-4 w-full md:w-auto'>
              <div className='hidden sm:flex items-center gap-2 text-gray-700 dark:text-gray-300'>
                <Filter className='h-5 w-5' />
                <span>Filter:</span>
              </div>
              <Select
                onValueChange={handleCategoryChange}
                value={selectedCategory}>
                <SelectTrigger className='min-w-[180px] py-6'>
                  <SelectValue placeholder='Category' />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem
                      key={category.value}
                      value={category.value}
                      className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </motion.div>

        {/* Error State */}
        {interviewsError && (
          <div className='text-center py-20'>
            <h3 className='text-2xl font-bold mb-4 dark:text-white'>
              Failed to load interviews
            </h3>
            <p className='text-gray-600 mb-6 dark:text-gray-300'>
              {interviewsError.message}
            </p>
            <Button variant='outline' onClick={() => window.location.reload()}>
              Retry
            </Button>
          </div>
        )}

        {/* Loading State */}
        {isLoading ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[...Array(ITEMS_PER_PAGE)].map((_, index) => (
              <div
                key={index}
                className='rounded-xl overflow-hidden shadow-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'>
                <Skeleton className='h-48 w-full rounded-t-xl' />
                <div className='p-5 space-y-3'>
                  <Skeleton className='h-4 w-32' />
                  <Skeleton className='h-6 w-full' />
                  <Skeleton className='h-4 w-5/6' />
                  <Skeleton className='h-4 w-40' />
                  <Skeleton className='h-10 w-32 mt-4' />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Empty State */}
            {paginatedInterviews.length === 0 ? (
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
              <>
                {/* Interview Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                  {paginatedInterviews.map((interview) => (
                    <div
                      key={interview._id}
                      className='relative group flex flex-col md:flex-row gap-4 border p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800'>
                      {/* Image container - consistent aspect ratio across devices */}
                      <div className='relative w-full md:w-32 h-48 md:h-auto md:aspect-square shrink-0'>
                        <Image
                          alt={`${interview.name}'s interview`}
                          fill
                          src={interview.image}
                          className='object-cover rounded-xl'
                          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        />
                      </div>

                      {/* Content container with flex column and flex-grow */}
                      <div className='flex flex-col flex-1 min-w-0'>
                        {/* Text content with proper spacing */}
                        <div className='flex-1'>
                          <h3 className='text-lg font-semibold line-clamp-2 leading-tight'>
                            {interview.title}
                          </h3>
                          <p className='text-sm text-muted-foreground line-clamp-1 mt-2'>
                            - {interview.name}
                          </p>
                        </div>

                        {/* Bottom aligned meta section */}
                        <div className='flex items-center justify-between gap-2 mt-4 pt-2 border-t'>
                          <p className='text-sm text-muted-foreground whitespace-nowrap'>
                            {dayjs(interview.date).format("MMM D, YYYY")}
                          </p>

                          <Button asChild
                            size='sm'
                            variant='outline'
                            className='border-amber-500 text-amber-500 group-hover:bg-amber-500 group-hover:text-white group-hover:shadow-lg hover:bg-amber-50 transition-colors'
                            aria-label='View interview'>
                            <Link href={`/interviews/${interview.slug}`}>
                                <MousePointerClick className='w-4 h-4 transition-all duration-500 group-hover:rotate-90 group-hover:scale-150' />
                            <span className='sr-only'>View</span>
                            </Link>
                          
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
           

                {/* Pagination */}
                {filteredInterviews.length > ITEMS_PER_PAGE && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className='flex justify-center mt-16'>
                    <div className='flex items-center gap-2 flex-wrap justify-center'>
                      <Button
                        variant='outline'
                        className='gap-2'
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}>
                        <ChevronLeft className='h-4 w-4' />
                        Previous
                      </Button>

                      {Array.from({ length: totalPages }, (_, index) => (
                        <Button
                          key={index}
                          variant={
                            currentPage === index + 1 ? "default" : "outline"
                          }
                          onClick={() => paginate(index + 1)}
                          className='w-10 h-10 p-0'>
                          {index + 1}
                        </Button>
                      ))}

                      <Button
                        variant='outline'
                        className='gap-2'
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}>
                        Next
                        <ChevronRight className='h-4 w-4' />
                      </Button>
                    </div>
                  </motion.div>
                )}
              </>
            )}
          </>
        )}
      </section>

      {/* CTA Section */}
      <section className='bg-gradient-to-r from-amber-500 to-amber-700 py-16 mt-12'>
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
            <div className='flex flex-wrap gap-4 justify-center'>
              <Button variant='secondary' asChild>
                <Link href='/share'>Share Your Story</Link>
              </Button>
              <Button
                variant='outline'
                className='bg-transparent border-white text-white hover:bg-white/10 hover:text-white'>
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}