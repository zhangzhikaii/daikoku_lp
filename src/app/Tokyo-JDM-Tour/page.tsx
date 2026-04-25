import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { SpotSection } from "@/components/SpotSection";
import { TitleSection } from "@/components/TitleSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book your next JDM Tour",
};

export default function AboutPage() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen bg-white">
      <main className="flex flex-col">
        <TitleSection />
        <AboutSection />
        <SpotSection />
        <Footer />
      </main>
    </div>
  );
}
