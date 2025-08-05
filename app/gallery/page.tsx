import GalleryPage from "@/components/gallery/GalleryPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Nwanyị bụ ịfe Festival Visual Journey",
  description:
    "Explore stunning visuals from past Nwanyị bụ ịfe Festivals - moments of celebration, award ceremonies, cultural performances, and women's empowerment.",
  openGraph: {
    title: "Festival Gallery | Nwanyị bụ ịfe Through the Years",
    description:
      "Photo collection showcasing African women's excellence, cultural displays, and memorable moments from our annual celebrations",
    images: [
      {
        url: "/gallery/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Highlights from Nwanyị bụ ịfe Festival gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nwanyị bụ ịfe Festival Gallery Highlights",
    description:
      "Relive powerful moments from our celebrations of African women's achievements through photography",
    images: ["/gallery/opengraph-image.jpg"],
  },
  keywords: [
    "festival photos",
    "event gallery",
    "cultural celebration images",
    "African women awards",
    "Nwanyị bụ ịfe pictures",
    "past festivals",
    "award ceremony photos",
    "cultural performances",
    "women empowerment visuals",
    "Igbo cultural gallery",
  ],
  alternates: {
    canonical: "/gallery",
  },
};

const Gallery = () => {
  return <GalleryPage />;
};

export default Gallery;
