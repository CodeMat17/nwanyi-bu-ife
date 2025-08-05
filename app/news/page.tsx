import { Metadata } from "next";
import NewsPage from "@/components/news/NewsPage";

export const metadata: Metadata = {
  title:
    "News & Updates | Nwanyị bụ ịfe Festival - Celebrating African Women's Excellence",
  description:
    "Stay informed about groundbreaking announcements, festival developments, and inspiring stories from the Nwanyị bụ ịfe community.",
  openGraph: {
    title:
      "Festival News | Nwanyị bụ ịfe - Celebrating African Women's Achievements",
    description:
      "Latest updates and announcements from Africa's premier women's leadership and cultural festival",
    images: [
      {
        url: "/news/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nwanyị bụ ịfe Festival news and announcements",
      },
    ],
    url: "/news",
    type: "website",
    siteName: "Nwanyị bụ ịfe Festival",
  },
  twitter: {
    card: "summary_large_image",
    title: "Festival News | Nwanyị bụ ịfe Updates",
    description:
      "Breaking news and important announcements from Africa's celebration of women's excellence",
    images: ["/news/opengraph-image.jpg"],
    site: "@nwanyi_bu_ife",
    creator: "@nwanyi_bu_ife",
  },
  keywords: [
    "festival news",
    "African women events",
    "Nwanyị bụ ịfe updates",
    "women empowerment news",
    "cultural festival announcements",
    "Igbo women events",
    "award ceremony updates",
    "women leadership news",
    "African creative community",
    "festival press releases",
  ],
  alternates: {
    canonical: "/news",
  },
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  category: "cultural festival",
};

export default function NewsHome() {
  return <NewsPage />;
}
