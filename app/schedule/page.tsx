import { Metadata } from "next";
import SchedulePage from "@/components/schedule/SchedulePage";

export const metadata: Metadata = {
  title:
    "Event Schedule | Nwanyị bụ ịfe Festival - Celebrating African Women's Excellence",
  description:
    "Explore the complete program of inspiring talks, cultural performances, and leadership workshops at Africa's premier women's festival. Plan your experience.",
  openGraph: {
    title: "Festival Program | Nwanyị bụ ịfe Schedule",
    description:
      "Discover the lineup of speakers, performers, and events at this year's celebration of African women's achievements",
    url: "/schedule",
    images: [
      {
        url: "/schedule/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nwanyị bụ ịfe Festival event schedule",
      },
    ],
    type: "website",
    siteName: "Nwanyị bụ ịfe Festival",
  },
  twitter: {
    card: "summary_large_image",
    title: "Festival Lineup | Nwanyị bụ ịfe",
    description:
      "See who's speaking and performing at this year's celebration of African women's excellence",
    images: ["/schedule/opengraph-image.jpg"],
    site: "@nwanyi_bu_ife",
  },
  keywords: [
    "festival schedule",
    "Nwanyị bụ ịfe program",
    "African women conference agenda",
    "women leadership events",
    "Igbo cultural performances",
    "speaker lineup",
    "workshop schedule",
    "tech summit agenda",
    "creative arts festival program",
    "event timetable",
  ],
  alternates: {
    canonical: "/schedule",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  themeColor: "#B45309",
  other: {
    "event:schedule_url": "/schedule",
  },
};

const Schedule = () => {
  return <SchedulePage />;
};

export default Schedule;
