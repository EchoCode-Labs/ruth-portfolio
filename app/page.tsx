import Hero from "@/components/sections/Hero";
import IntroSection from "@/components/sections/IntroSection";
import ServicePillars from "@/components/sections/ServicePillars";
import FeaturedWork from "@/components/sections/FeaturedWork";
import CtaBanner from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicePillars />
      <FeaturedWork />
      <CtaBanner
        title="Ready to get your inbox and calendar back under control?"
        body="I bring organization, clear communication, and reliable follow-through to every task, from content planning to admin support."
        actionLabel="Start the conversation"
      />
    </>
  );
}