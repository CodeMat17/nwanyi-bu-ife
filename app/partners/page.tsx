import { Metadata } from "next";
import PartnersPage from "@/components/partners/PartnersPage";

export const metadata: Metadata = {
  title:
    "Our Partners | Nwanyị bụ ịfe Festival - Celebrating Collaborative Excellence",
  description:
    "Discover the visionary organizations and institutions partnering with Nwanyị bụ ịfe Festival to amplify African women's leadership and cultural impact.",
  openGraph: {
    title: "Strategic Partners | Nwanyị bụ ịfe Festival Alliance Network",
    description:
      "Meet the organizations powering Africa's premier celebration of women's excellence in technology, arts, and community leadership",
    url: "/partners",
    images: [
      {
        url: "/partners/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nwanyị bụ ịfe Festival partner organizations collaboration",
      },
    ],
    type: "website",
    siteName: "Nwanyị bụ ịfe Festival",
  },
  twitter: {
    card: "summary_large_image",
    title: "Festival Partners | Nwanyị bụ ịfe Collaborators",
    description:
      "Celebrating the organizations that make our festival possible",
    images: ["/partners/opengraph-image.jpg"],
    site: "@nwanyi_bu_ife",
  },
  keywords: [
    "festival partners",
    "African women collaborators",
    "Nwanyị bụ ịfe sponsors",
    "cultural festival alliances",
    "women empowerment partners",
    "corporate sponsors Africa",
    "Igbo women initiatives",
    "community leadership networks",
    "arts and technology partners",
    "festival organizational support",
  ],
  alternates: {
    canonical: "/partners",
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
};

const Partners = () => {
  return <PartnersPage />;
};

export default Partners;
