import { AboutSection } from "@/components/AboutSection";
import { SpotSection } from "@/components/SpotSection";
import { TitleSection } from "@/components/TitleSection";

export default function Home() {
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
