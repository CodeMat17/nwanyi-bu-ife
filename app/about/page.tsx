import AboutPage from "@/components/about/AboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Nwanyị bụ ịfe | Our Mission & History",
  description:
    "Discover the story behind Nwanyị bụ ịfe Festival - our mission to celebrate African women's excellence, cultural heritage, and empowerment since our founding.",
  openGraph: {
    title: "About Nwanyị bụ ịfe Festival | Our Journey",
    description:
      "Learn about our vision to honor African women's achievements in technology, arts, and leadership through cultural celebration",
    images: [
      {
        url: "/about/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nwanyị bụ ịfe Festival founders and team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Story of Nwanyị bụ ịfe Festival",
    description:
      "How our festival became a platform for celebrating African women's excellence and Igbo cultural heritage",
    images: ["/about/opengraph-image.jpg"],
  },
  keywords: [
    "festival history",
    "about Nwanyị bụ ịfe",
    "mission statement",
    "African women empowerment",
    "festival founders",
    "Igbo cultural celebration",
    "women's achievement awards",
    "Nigeria cultural festival",
    "our team",
    "festival vision",
  ],
};

const About = () => {
  return <AboutPage />;
};

export default About;
