import NewsSlugPage from "@/components/news/NewsSlugPage";
import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Fetch news article from Convex
  const news = await fetchQuery(api.news.getBySlug, {
    slug: params.slug,
  });

  if (!news) {
    return {
      title: "Article Not Found | Nwanyị bụ ịfe Festival",
      description: "The requested news article could not be found.",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  // Construct URLs
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.nwanyi-bu-ife.com.ng";
  const articleUrl = `${baseUrl}/news/${params.slug}`;

  // Get inherited metadata
  const previousImages = (await parent).openGraph?.images || [];
  const previousKeywords = (await parent).keywords || [];

  // Prepare metadata
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
        ...previousImages,
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
      ...(Array.isArray(previousKeywords) ? previousKeywords : []),
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

const NewsSlug = () => {
  return <NewsSlugPage />;
};

export default NewsSlug;
