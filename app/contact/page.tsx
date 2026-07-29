import type { Metadata } from "next";
import ContactHero from "@/components/sections/ContactHero";
import ContactChannels from "@/components/sections/ContactChannels";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ezinwoke Ruth Chika for virtual assistant support — email, phone, and LinkedIn.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactChannels />
      <FaqSection />
    </>
  );
}