import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { fetchQuery } from "convex/nextjs";

type SitemapEntry = {
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
  images?: {
    url: string;
    caption?: string;
    title?: string;
    geoLocation?: string;
    license?: string;
  }[];
};

export async function generateSitemaps() {
  return [{ id: 0 }];
}

export default async function sitemap(): Promise<SitemapEntry[]> {
  const baseUrl = "https://www.nwanyi-bu-ife.com.ng";
  const now = new Date();

  // Static pages configuration
  const staticPages: SitemapEntry[] = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
      images: [
        {
          url: `${baseUrl}/opengraph-image.jpg`,
          title: "Nwanyi Bu Ife Festival Homepage",
        },
      ],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        {
          url: `${baseUrl}/about/opengraph-image.jpg`,
          title: "About Nwanyi Bu Ife Festival",
        },
      ],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        {
          url: `${baseUrl}/contact/opengraph-image.jpg`,
          title: "Contact Nwanyi Bu Ife Festival",
        },
      ],
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
      images: [
        {
          url: `${baseUrl}/gallery/opengraph-image.jpg`,
          title: "Gallery - Nwanyi Bu Ife Festival",
        },
      ],
    },
    {
      url: `${baseUrl}/interviews`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        {
          url: `${baseUrl}/interviews/opengraph-image.jpg`,
          title: "Interviews - Nwanyi Bu Ife Festival",
        },
      ],
    },
    {
      url: `${baseUrl}/news`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
      images: [
        {
          url: `${baseUrl}/news/opengraph-image.jpg`,
          title: "News - Nwanyi Bu Ife Festival",
        },
      ],
    },
    {
      url: `${baseUrl}/nomination`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
      images: [
        {
          url: `${baseUrl}/nomination/opengraph-image.jpg`,
          title: "Nomination - Nwanyi Bu Ife Festival",
        },
      ],
    },
    {
      url: `${baseUrl}/partners`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
      images: [
        {
          url: `${baseUrl}/partners/opengraph-image.jpg`,
          title: "Partners - Nwanyi Bu Ife Festival",
        },
      ],
    },
    {
      url: `${baseUrl}/register`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        {
          url: `${baseUrl}/register/opengraph-image.jpg`,
          title: "Register - Nwanyi Bu Ife Festival",
        },
      ],
    },
    {
      url: `${baseUrl}/schedule`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      images: [
        {
          url: `${baseUrl}/schedule/opengraph-image.jpg`,
          title: "Schedule - Nwanyi Bu Ife Festival",
        },
      ],
    },
    {
      url: `${baseUrl}/speakers`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      images: [
        {
          url: `${baseUrl}/speakers/opengraph-image.jpg`,
          title: "Speakers - Nwanyi Bu Ife Festival",
        },
      ],
    },
  ];

  try {
    // Fetch with proper error handling and timeouts
    const [interviews, news] = await Promise.all([
      fetchQuery(api.interviews.getInterviews, {}).catch(() => []),
      fetchQuery(api.news.getAll, {}).catch(() => []),
    ]);

    // Dynamic entries with production safeguards
    const dynamicEntries = [
      ...(interviews ?? []).map((interview: Doc<"interviews">) => ({
        url: `${baseUrl}/interviews/${interview.slug}`,
        lastModified: new Date(interview.date),
        changeFrequency: "weekly" as const,
        priority: 0.8,
        images: interview.image
          ? [
              {
                url: interview.image.startsWith("http")
                  ? interview.image
                  : `${baseUrl}${interview.image}`,
                title: interview.title,
              },
            ]
          : [],
      })),
      ...(news ?? []).map((newsItem: Doc<"news">) => ({
        url: `${baseUrl}/news/${newsItem.slug}`,
        lastModified: new Date(newsItem.date),
        changeFrequency: "daily" as const,
        priority: 0.8,
        images: newsItem.image
          ? [
              {
                url: newsItem.image.startsWith("http")
                  ? newsItem.image
                  : `${baseUrl}${newsItem.image}`,
                title: newsItem.title,
              },
            ]
          : [],
      })),
    ];

    return [...staticPages, ...dynamicEntries];
  } catch (error) {
    console.error("Error generating dynamic sitemap entries:", error);
    return staticPages;
  }
}
