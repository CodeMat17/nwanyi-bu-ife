
import Banner from "@/components/Banner";
import CTA from "@/components/CTA";
import HeroComponent from "@/components/HeroComponent";
import LatestInterviewComponent from "@/components/interviews/LatestInterviewComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Celebrating African Women Excellence | Nwanyị bụ ịfe Festival",
  description:
    "Join us in honoring the remarkable achievements of African women at the annual Nwanyị bụ ịfe Festival in Enugu, Nigeria. Discover inspiring stories, register for events, and celebrate cultural heritage.",
  openGraph: {
    title: "Nwanyị bụ ịfe Festival | Celebrating Women's Excellence",
    description:
      "Join the celebration of African women's achievements in technology, arts, and leadership at our annual festival",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nwanyị bụ ịfe Festival Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nwanyị bụ ịfe Festival | Register Now",
    description:
      "Celebrate African women's excellence at our annual festival. Nominations open now!",
    images: ["/opengraph-image.jpg"],
  },
  keywords: [
    "2025 festival",
    "women awards",
    "African women celebration",
    "Nwanyị bụ ịfe 2025",
    "cultural festival",
    "Enugu events",
    "women empowerment Nigeria",
    "register for festival",
  ],
};

export default function Home() {
  return (
    <>
      <HeroComponent />
      <Banner />
      <LatestInterviewComponent />
      <CTA
        title="Join Us in Celebrating Women's Achievements"
        description='Register now for the 2025 Nwanyị bụ Ife Festival and be part of this empowering experience.'
        buttonText='Register Today'
        buttonLink='/register'
      />
    </>
  );
}
