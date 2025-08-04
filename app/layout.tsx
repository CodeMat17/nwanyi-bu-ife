import type { Metadata } from "next";
import { Inter, Joti_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";

import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import ConvexClientProvider from "@/lib/convex-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const joti = Joti_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-joti",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nwanyi-bu-ife.com.ng"),
  title: {
    default: "Nwanyị bụ ịfe - Celebrating African Women Excellence",
    template: "%s | Nwanyị bụ ịfe",
  },

  description:
    "Annual award festival celebrating the achievements of African women in various fields including technology, arts, and leadership.",
  keywords: [
    "African women",
    "women empowerment",
    "Igbo culture",
    "Culture",
    "festival",
    "cultural heritage",
    "awards",
    "Enugu",
    "empowerment",
    "Nigeria",
    "Nwanyị bụ ịfe",
    "nwanyi-bu-ife",
    "Nwanyi bụ ife",
  ],
  openGraph: {
    title: "Nwanyị bụ ịfe - Celebrating African Women Excellence'",
    description: "Annual award festival celebrating African women achievements",
    url: "https://www.nwanyi-bu-ife.com.ng",
    siteName: "Nwanyị bụ ịfe",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nwanyị bụ ịfe festival",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nwanyị bụ ịfe - Celebrating African Women Excellence",
    description: "Annual award festival celebrating African women achievements",
    images: ["/images/twitter-card.jpg"],
    site: "@nwanyibuife",
    creator: "@nwanyibuife",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  authors: [
    { name: "Nwanyị bụ ịfe Team", url: "https://nwanyi-bu-ife.com.ng" },
  ],
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${inter.variable} ${joti.variable}`}>
      <body className='bg-gradient-to-b from-white to-amber-50 dark:from-gray-900 dark:to-gray-800 min-h-screen flex flex-col'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <Header />
          <main className='flex-grow'>
            <ConvexClientProvider>{children}</ConvexClientProvider>
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

