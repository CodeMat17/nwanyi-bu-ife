import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { MetadataRoute } from "next";

type Interview = {
  _id: string;
  _creationTime: number;
  slug: string;
  date: string;
  image: string;
  title: string;
};

type News = {
  _id: string;
  _creationTime: number;
  slug: string;
  date: string;
  image: string;
  title: string;
};

export async function generateSitemaps() {
  return [{ id: 0 }];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.nwanyi-bu-ife.com.ng";

  // Static pages configuration
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/interviews`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nomination`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/partners`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/register`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/schedule`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/speakers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];

  try {
    const interviews = await fetchQuery(api.interviews.getInterviews, {});
    const news = await fetchQuery(api.news.getAll, {});

    // Convert images to string array format
    const interviewEntries = (interviews as Interview[]).map((interview) => ({
      url: `${baseUrl}/interviews/${interview.slug}`,
      lastModified: new Date(interview.date),
      changeFrequency: "weekly" as const,
      priority: 0.7,
      images: [
        interview.image.startsWith("http")
          ? interview.image
          : `${baseUrl}${interview.image}`,
      ],
    }));

    const newsEntries = (news as News[]).map((newsItem) => ({
      url: `${baseUrl}/news/${newsItem.slug}`,
      lastModified: new Date(newsItem.date),
      changeFrequency: "daily" as const,
      priority: 0.8,
      images: [
        newsItem.image.startsWith("http")
          ? newsItem.image
          : `${baseUrl}${newsItem.image}`,
      ],
    }));

    return [...staticPages, ...interviewEntries, ...newsEntries];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return staticPages;
  }
}
