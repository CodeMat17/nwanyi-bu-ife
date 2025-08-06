import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { NextResponse } from "next/server";
import { Doc } from "@/convex/_generated/dataModel";

interface SitemapRoute {
  url: string;
  lastmod: string;
  changefreq: string;
  priority: string;
  image?: {
    url: string;
    title?: string;
    caption?: string;
  };
}

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.nwanyi-bu-ife.com.ng";

  // Fetch dynamic data from Convex
  const [interviews, news] = await Promise.all([
    fetchQuery(api.interviews.getInterviews).catch(() => []),
    fetchQuery(api.news.getAll).catch(() => []),
  ]);

  // Static routes with enhanced metadata
  const staticRoutes: SitemapRoute[] = [
    {
      url: baseUrl,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: "1.0",
      image: {
        url: `${baseUrl}/opengraph-image.jpg`,
        title: "Nwanyi Bu Ife Festival Homepage",
        caption: "Celebrating Igbo Women's Heritage and Culture",
      },
    },
    {
      url: `${baseUrl}/about`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: "0.8",
      image: {
        url: `${baseUrl}/about/opengraph-image.jpg`,
        title: "About Nwanyi Bu Ife Festival",
        caption: "Our mission and cultural significance",
      },
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: "0.8",
      image: {
        url: `${baseUrl}/contact/opengraph-image.jpg`,
        title: "Contact Nwanyi Bu Ife Festival",
        caption: "Get in touch with our team",
      },
    },
    {
      url: `${baseUrl}/gallery`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.7",
      image: {
        url: `${baseUrl}/gallery/opengraph-image.jpg`,
        title: "Gallery - Nwanyi Bu Ife Festival",
        caption: "Visual celebration of our cultural heritage",
      },
    },
    {
      url: `${baseUrl}/interviews`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.9",
      image: {
        url: `${baseUrl}/interviews/opengraph-image.jpg`,
        title: "Interviews - Nwanyi Bu Ife Festival",
        caption: "Insights from cultural custodians",
      },
    },
    {
      url: `${baseUrl}/news`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: "0.9",
      image: {
        url: `${baseUrl}/news/opengraph-image.jpg`,
        title: "News - Nwanyi Bu Ife Festival",
        caption: "Latest updates about our festival",
      },
    },
    {
      url: `${baseUrl}/nomination`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.7",
      image: {
        url: `${baseUrl}/nomination/opengraph-image.jpg`,
        title: "Nomination - Nwanyi Bu Ife Festival",
        caption: "Nominate outstanding Igbo women",
      },
    },
    {
      url: `${baseUrl}/partners`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: "0.6",
      image: {
        url: `${baseUrl}/partners/opengraph-image.jpg`,
        title: "Partners - Nwanyi Bu Ife Festival",
        caption: "Our valued sponsors and collaborators",
      },
    },
    {
      url: `${baseUrl}/register`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.9",
      image: {
        url: `${baseUrl}/register/opengraph-image.jpg`,
        title: "Register - Nwanyi Bu Ife Festival",
        caption: "Join our cultural celebration",
      },
    },
    {
      url: `${baseUrl}/schedule`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8",
      image: {
        url: `${baseUrl}/schedule/opengraph-image.jpg`,
        title: "Schedule - Nwanyi Bu Ife Festival",
        caption: "Event timeline and activities",
      },
    },
    {
      url: `${baseUrl}/speakers`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8",
      image: {
        url: `${baseUrl}/speakers/opengraph-image.jpg`,
        title: "Speakers - Nwanyi Bu Ife Festival",
        caption: "Our distinguished guests and presenters",
      },
    },
  ];

  // Dynamic interview routes
  const interviewRoutes: SitemapRoute[] = (
    interviews as Doc<"interviews">[]
  ).map((interview) => ({
    url: `${baseUrl}/interviews/${interview.slug}`,
    lastmod: new Date(interview.date).toISOString(),
    changefreq: "weekly",
    priority: "0.8",
    image: {
      url: interview.image.startsWith("http")
        ? interview.image
        : `${baseUrl}${interview.image}`,
      title: interview.title,
      caption: interview.excerpt,
    },
  }));

  // Dynamic news routes
  const newsRoutes: SitemapRoute[] = (news as Doc<"news">[]).map(
    (newsItem) => ({
      url: `${baseUrl}/news/${newsItem.slug}`,
      lastmod: new Date(newsItem.date).toISOString(),
      changefreq: "daily",
      priority: "0.8",
      image: {
        url: newsItem.image.startsWith("http")
          ? newsItem.image
          : `${baseUrl}${newsItem.image}`,
        title: newsItem.title,
        caption: newsItem.excerpt,
      },
    })
  );

  // Combine all routes
  const allRoutes = [...staticRoutes, ...interviewRoutes, ...newsRoutes];

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      ${allRoutes
        .map(
          (route) => `
        <url>
          <loc>${route.url}</loc>
          <lastmod>${route.lastmod}</lastmod>
          <changefreq>${route.changefreq}</changefreq>
          <priority>${route.priority}</priority>
          ${
            route.image
              ? `
          <image:image>
            <image:loc>${route.image.url}</image:loc>
            ${
              route.image.title
                ? `<image:title><![CDATA[${route.image.title}]]></image:title>`
                : ""
            }
            ${
              route.image.caption
                ? `<image:caption><![CDATA[${route.image.caption}]]></image:caption>`
                : ""
            }
          </image:image>`
              : ""
          }
        </url>`
        )
        .join("")}
    </urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=1800",
    },
  });
}
