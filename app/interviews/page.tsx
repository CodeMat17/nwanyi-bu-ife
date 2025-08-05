import InterviewsPage from "@/components/interviews/InterviewsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Interviews | Nwanyị bụ ịfe Festival - Inspiring African Women's Stories",
  description:
    "Discover in-depth interviews with award-winning African women from technology, arts, and leadership at the Nwanyị bụ ịfe Festival.",
  openGraph: {
    title: "Inspiring Interviews | Nwanyị bụ ịfe Festival Honorees",
    description:
      "Exclusive conversations with African women leaders and creatives celebrated at our annual festival",
    images: [
      {
        url: "/interviews/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nwanyị bụ ịfe Festival interview sessions with honorees",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "African Women's Stories | Nwanyị bụ ịfe Interviews",
    description:
      "Hear directly from the extraordinary women recognized at our annual celebration of excellence",
    images: ["/interviews/opengraph-image.jpg"],
  },
  keywords: [
    "African women interviews",
    "women leaders stories",
    "festival honorees",
    "Nwanyị bụ ịfe conversations",
    "women in tech interviews",
    "female artists profiles",
    "women empowerment stories",
    "Igbo women leaders",
    "award winners interviews",
    "inspirational African women",
  ],
  alternates: {
    canonical: "/interviews",
  },
};

const Interviews = () => {
  return <InterviewsPage />;
};

export default Interviews;
