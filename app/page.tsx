import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import LatestNews from "@/components/LatestNews";
import BonitaPromo from "@/components/BonitaPromo";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Welcome />
      <LatestNews />
      <BonitaPromo />
    </main>
  );
}