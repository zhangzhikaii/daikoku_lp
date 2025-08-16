import { AboutSection } from "@/components/daikoku/about/AboutSection";
import { SpotSection } from "@/components/daikoku/about/SpotSection";
import { TitleSection } from "@/components/daikoku/about/TitleSection";

export default function AboutPage() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen bg-white">
      <main className="flex flex-col">
        <TitleSection />
        <AboutSection />
        <SpotSection />
      </main>
    </div>
  );
}
