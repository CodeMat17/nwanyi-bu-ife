import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const InterviewSlugPage = dynamic(
  () => import("@/components/interviews/InterviewSlugPage"),
  {
    loading: () => <InterviewSlugPage />,
    ssr: true,
  }
);

export async function generateMetadata(
  { params }: {
    params: Promise<{ slug: string }>
  }): Promise<Metadata> {
  const { slug } = await params;
  const interview = await fetchQuery(api.interviews.getInterviewBySlug, {
    slug,
  });

  if (!interview) {
    return {
      title: "Interview Not Found | Nwanyị bụ ịfe Festival",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.nwanyi-bu-ife.com.ng";
  const interviewUrl = `${baseUrl}/interviews/${slug}`;

  // Handle potential null image
  const defaultImage = `${baseUrl}/images/default-interview.jpg`;
  const imageUrl = interview.image
    ? interview.image.startsWith("http")
      ? interview.image
      : `${baseUrl}${interview.image}`
    : defaultImage;


  return {
    title: `${interview.title} | Interview with ${interview.name}`,
    description:
      interview.excerpt ||
      `An in-depth conversation with ${interview.name} about ${interview.title} at the Nwanyị bụ ịfe Festival`,
    alternates: {
      canonical: interviewUrl,
    },
    openGraph: {
      title: `${interview.title} | Nwanyị bụ ịfe Festival Interview`,
      description:
        interview.excerpt ||
        `Read our interview with ${interview.name} about ${interview.category}`,
      url: interviewUrl,
      type: "article",
      publishedTime: interview.date,
      authors: [interview.name],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `Interview with ${interview.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${interview.title} | Interview with ${interview.name}`,
      description:
        interview.excerpt ||
        `Read our conversation with ${interview.name} at Nwanyị bụ ịfe Festival`,
      images: [imageUrl],
    },
    keywords: [
  
      interview.name,
      `${interview.name} interview`,
      interview.title,
      interview.category,
      `African women in ${interview.category}`,
      `Igbo women in ${interview.category}`,
      "Nwanyị bụ ịfe honoree",
    ],
  };
}

export default function Page() {
  return <InterviewSlugPage />;
}
