import NominationPage from "@/components/nomination/NominationPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Nominations | Nwanyị bụ ịfe Festival - Honoring African Women's Excellence",
  description:
    "Nominate extraordinary African women for recognition at the Nwanyị bụ ịfe Festival. Celebrate leadership, creativity, and cultural impact.",
  openGraph: {
    title: "Submit Nominations | Nwanyị bụ ịfe Festival Awards",
    description:
      "Help us honor African women making remarkable contributions in technology, arts, and community leadership",
    url: "/nominations",
    images: [
      {
        url: "/nomination/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nwanyị bụ ịfe Festival nomination process for honorees",
      },
    ],
    type: "website",
    siteName: "Nwanyị bụ ịfe Festival",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nominate African Women Leaders | Nwanyị bụ ịfe Festival",
    description:
      "Recognize outstanding African women making a difference in their fields",
    images: ["/nomination/opengraph-image.jpg"],
    site: "@nwanyi_bu_ife",
  },
  keywords: [
    "African women nominations",
    "women leadership awards",
    "Nwanyị bụ ịfe honorees",
    "nominate Igbo women",
    "women in tech awards",
    "female artists recognition",
    "community leadership nominations",
    "cultural impact awards",
    "women empowerment recognition",
    "festival award submission",
  ],
  alternates: {
    canonical: "/nominations",
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
  themeColor: "#B45309", // Your brand amber color
  category: "cultural awards",
};

const Nomination = () => {
  return (
    <div className='min-h-screen'>
      {/* Your nomination page content */}
     <NominationPage />
    </div>
  );
};

export default Nomination;
