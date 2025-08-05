import RegisterPage from "@/components/register/RegisterPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Register Now | Nwanyị bụ ịfe Festival - Celebrating African Women's Excellence",
  description:
    "Secure your spot at Africa's premier celebration of women's leadership. Join us for inspiring talks, cultural showcases, and transformative networking.",
  openGraph: {
    title: "Festival Registration | Nwanyị bụ ịfe 2024",
    description:
      "Register today for the most anticipated celebration of African women in technology, arts, and community leadership",
    url: "/register",
    images: [
      {
        url: "/register/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nwanyị bụ ịfe Festival registration portal",
      },
    ],
    type: "website",
    siteName: "Nwanyị bụ ịfe Festival",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Us | Nwanyị bụ ịfe Festival Registration",
    description:
      "Limited spots available for Africa's premier women's leadership event",
    images: ["/register/opengraph-image.jpg"],
    site: "@nwanyi_bu_ife",
  },
  keywords: [
    "festival registration",
    "Nwanyị bụ ịfe tickets",
    "African women conference",
    "women leadership event",
    "Igbo cultural festival",
    "register for awards",
    "women in tech summit",
    "creative arts festival",
    "networking event Africa",
    "early bird registration",
  ],
  alternates: {
    canonical: "/register",
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
    "event:register_url": "/register",
    "event:location": "Enugu, Nigeria",
  },
};

const Register = () => {
  return <RegisterPage />;
};

export default Register;
