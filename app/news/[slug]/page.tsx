import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Create a loading component
const LoadingSkeleton = () => (
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

// Dynamic import with proper loading state
const NewsSlugPage = dynamic(() => import("@/components/news/NewsSlugPage"), {
  loading: () => (
    <Suspense fallback={<LoadingSkeleton />}>
      <LoadingSkeleton />
    </Suspense>
  ),
  ssr: true,
});


export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;

  // Fetch news article from Convex
  const news = await fetchQuery(api.news.getBySlug, { slug });

  if (!news) {
    return {
      title: "Article Not Found | Nwanyị bụ ịfe Festival",
      description: "The requested news article could not be found.",
      robots: {
        index: false,
        follow: false,
      },
      alternates: {
        canonical: "/news/not-found",
      },
    };
  }

  // Construct URLs
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.nwanyi-bu-ife.com.ng";
  const articleUrl = `${baseUrl}/news/${slug}`;

  return {
    title: `${news.title} | Nwanyị bụ ịfe Festival News`,
    description:
      news.excerpt || `Latest update from the Nwanyị bụ ịfe Festival`,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: `${news.title} | Festival News`,
      description:
        news.excerpt ||
        `Important announcement from the Nwanyị bụ ịfe Festival`,
      url: articleUrl,
      type: "article",
      publishedTime: news.date,
      authors: ["Nwanyị bụ ịfe Editorial Team"],
      section: news.category,
      images: [
        {
          url: news.image,
          width: 1200,
          height: 630,
          alt: `${news.title} featured image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${news.title} | Festival News`,
      description:
        news.excerpt || `Breaking update from Nwanyị bụ ịfe Festival`,
      images: news.image,
      site: "@nwanyi_bu_ife",
      creator: "@nwanyi_bu_ife",
    },
    keywords: [
      "Nwanyị bụ ịfe news",
      "festival updates",
      "African cultural events",
      news.category.toLowerCase(),
      `Igbo ${news.category.toLowerCase()} events`,
      "women's festival announcements",
      ...news.title.toLowerCase().split(" "),
    ],
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "article:published_time": news.date,
      "article:author": "Nwanyị bụ ịfe Editorial Team",
      "article:section": news.category,
    },
    category: news.category,
  };
}

export default function Page() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <NewsSlugPage />
    </Suspense>
  );
}
