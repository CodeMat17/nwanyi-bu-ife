"use client";

import Banner from "@/components/Banner";
import CTA from "@/components/CTA";
import HeroComponent from "@/components/HeroComponent";
import LatestInterviewComponent from "@/components/interviews/LatestInterviewComponent";

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
