import { AboutSection } from "@/components/daikoku/about/AboutSection";
import { CoverSection } from "@/components/daikoku/about/CoverSection";

export default function AboutPage() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen bg-white">
      <main className="flex flex-col items-center sm:items-start">
        <CoverSection />

        <AboutSection />
      </main>
    </div>
  );
}
