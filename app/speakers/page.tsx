import { Metadata } from "next";
import SpeakersPage from "@/components/speakers/SpeakersPage";

export const metadata: Metadata = {
  title: "Speakers | Nwanyị bụ ịfe Festival - Africa's Leading Women Voices",
  description:
    "Meet the visionary speakers and change-makers headlining Nwanyị bụ ịfe Festival. Discover leaders in technology, arts, and community transformation.",
  openGraph: {
    title: "Featured Speakers | Nwanyị bụ ịfe Festival",
    description:
      "Explore the brilliant minds and cultural innovators gracing this year's celebration of African women's excellence",
    url: "/speakers",
    images: [
      {
        url: "/speakers/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nwanyị bụ ịfe Festival featured speakers lineup",
      },
    ],
    type: "website",
    siteName: "Nwanyị bụ ịfe Festival",
  },
  twitter: {
    card: "summary_large_image",
    title: "Speaker Lineup | Nwanyị bụ ịfe",
    description:
      "The visionary women shaping Africa's future through technology, arts, and leadership",
    images: ["/speakers/opengraph-image.jpg"],
    site: "@nwanyi_bu_ife",
  },
  keywords: [
    "festival speakers",
    "Nwanyị bụ ịfe presenters",
    "African women leaders",
    "women in tech speakers",
    "Igbo thought leaders",
    "keynote speakers",
    "cultural innovators",
    "community transformation speakers",
    "female artists lineup",
    "inspirational African women",
  ],
  alternates: {
    canonical: "/speakers",
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
  other: {
    "speakers:count": "12+", // Update with actual number
    "speakers:categories": "technology,arts,leadership", // Update with your categories
  },
};

const Speakers = () => {
  return <SpeakersPage />;
};

export default Speakers;
