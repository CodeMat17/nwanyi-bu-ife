import ContactPage from "@/components/contact/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Nwanyị bụ ịfe Festival | Get Involved",
  description:
    "Reach the Nwanyị bụ ịfe Festival team for partnerships, media inquiries, ticket information, and general questions about celebrating African women's excellence.",
  openGraph: {
    title: "Contact Us | Nwanyị bụ ịfe Festival",
    description:
      "Connect with our team for sponsorship opportunities, press inquiries, and festival participation details",
    images: [
      {
        url: "/contact/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nwanyị bụ ịfe Festival contact team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect With Nwanyị bụ ịfe Festival",
    description:
      "Have questions about the festival? Contact our team for partnerships, media, and participation information",
    images: ["/contact/opengraph-image.jpg"],
  },
  keywords: [
    "contact festival",
    "partnership inquiries",
    "sponsorship opportunities",
    "press contact",
    "media inquiries",
    "festival tickets",
    "event information",
    "get involved",
    "volunteer opportunities",
    "speaker submissions",
    "vendor applications",
  ],
  alternates: {
    canonical: "/contact",
  },
};

const Contact = () => {
  return <ContactPage />;
};

export default Contact;
