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
  title:
    "Nwanyị bụ Ife Festival 2025 | Women Empowerment & Cultural Celebration",
  description:
    "Annual festival celebrating Igbo women empowerment, cultural heritage, and excellence. Join us on November 7, 2025 at International Conference Centre, IMT Enugu.",
  keywords: [
    "women empowerment",
    "Igbo culture",
    "festival",
    "cultural heritage",
    "awards",
    "Enugu",
    "Nigeria",
  ],
  openGraph: {
    title: "Nwanyị bụ Ife Festival 2025",
    description:
      "Empowering women, showcasing cultural heritage, and celebrating achievements.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nwanyị bụ Ife Festival",
      },
    ],
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

