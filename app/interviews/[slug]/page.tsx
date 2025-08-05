import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { Metadata } from "next";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import CulturalPattern from "@/components/CulturalPattern";

// Create a separate loading component to avoid circular reference
const LoadingSkeleton = () => (
  <div className='max-w-4xl mx-auto px-4 py-8'>
    <CulturalPattern />

    {/* Back Button Skeleton */}
   
      <Skeleton className='h-10 w-32 rounded-full mb-8' />
  

    {/* Header Section */}
    <div
      className='mb-12'>
      <div className='flex flex-col md:flex-row justify-between gap-6 mb-8'>
        <div className='space-y-4'>
          {/* Title Skeleton with gradient effect */}
          <Skeleton className='h-10 w-3/4 rounded-lg bg-gradient-to-r from-amber-100 to-amber-200' />
          {/* Date Skeleton */}
          <Skeleton className='h-4 w-48 rounded-full' />
        </div>
        {/* Share Button Skeleton */}
        <Skeleton className='h-10 w-24 rounded-lg' />
      </div>

      {/* Image Skeleton with shimmer effect */}
      <div className='relative w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100'>
        <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent' />
        <div className='absolute bottom-0 left-0 p-6 space-y-2'>
          <Skeleton className='h-6 w-48 rounded-full bg-white/80' />
          <Skeleton className='h-5 w-64 rounded-full bg-amber-300/80' />
        </div>
      </div>
    </div>

    {/* Content Section */}
    <div
      className='space-y-4'>
      {Array.from({ length: 12 }).map((_, i) => (
        <Skeleton
          key={i}
          className='h-4 w-full rounded-full'
          style={{
            width: `${100 - (i % 3) * 15}%`,
            opacity: 1 - i * 0.05,
            animationDelay: `${i * 0.05}s`,
            animationDuration: "1.5s",
          }}
        />
      ))}
    </div>
  </div>
);

const InterviewSlugPage = dynamic(
  () => import("@/components/interviews/InterviewSlugPage"),
  {
    loading: () => (
      <Suspense fallback={<LoadingSkeleton />}>
        <LoadingSkeleton />
      </Suspense>
    ),
    ssr: true,
  }
);

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const interview = await fetchQuery(api.interviews.getInterviewBySlug, {
    slug,
  });

  if (!interview) {
    return {
      title: "Interview Not Found | Nwanyị bụ ịfe Festival",
      robots: {
        index: false,
        follow: false,
      },
      alternates: {
        canonical: '/interviews/not-found',
      }
    };
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.nwanyi-bu-ife.com.ng";
  const interviewUrl = `${baseUrl}/interviews/${slug}`;

  // Handle potential null image
  const defaultImage = `${baseUrl}/interviews/opengraph-image.jpg`;

  const imageUrl = interview.image
    ? interview.image.startsWith("http")
      ? interview.image
      : `${baseUrl}${interview.image}`
    : defaultImage;


  return {
    title: `${interview.title} | Interview with ${interview.name}`,
    description:
      interview.excerpt ||
      `An in-depth conversation with ${interview.name} about ${interview.title} at the Nwanyị bụ ịfe Festival`,
    alternates: {
      canonical: interviewUrl,
    },
    openGraph: {
      title: `${interview.title} | Nwanyị bụ ịfe Festival Interview`,
      description:
        interview.excerpt ||
        `Read our interview with ${interview.name} about ${interview.category}`,
      url: interviewUrl,
      type: "article",
      publishedTime: interview.date,
      authors: [interview.name],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `Interview with ${interview.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${interview.title} | Interview with ${interview.name}`,
      description:
        interview.excerpt ||
        `Read our conversation with ${interview.name} at Nwanyị bụ ịfe Festival`,
      images: [imageUrl],
    },
    keywords: [
  
      interview.name,
      `${interview.name} interview`,
      interview.title,
      interview.category,
      `African women in ${interview.category}`,
      `Igbo women in ${interview.category}`,
      "Nwanyị bụ ịfe honoree",
    ],
  };
}

export default function Page() {
  return (
  <Suspense fallback={<LoadingSkeleton />}>
    <InterviewSlugPage />;
  </Suspense>
  )
}
