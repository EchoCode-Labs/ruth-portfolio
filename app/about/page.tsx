import type { Metadata } from "next";
import AboutMe from "@/components/sections/AboutMe";
import SkillsExpertise from "@/components/sections/SkillsExpertise";
import ToolsPlatforms from "@/components/sections/ToolsPlatforms";
import Certifications from "@/components/sections/Certifications";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Ezinwoke Ruth Chika — a detail-oriented Virtual Assistant with training in executive support, and see the tools and skills she works in daily.",
};

export default function AboutPage() {
  return (
    <>
      <AboutMe />
      <SkillsExpertise />
      <ToolsPlatforms />
      <Certifications />
      <CtaBanner
        title="Have a role in mind?"
        body="Tell me what your business needs support with, and I'll tell you exactly how I can help."
      />
    </>
  );
}