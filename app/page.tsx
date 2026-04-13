import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import BonitaPromo from "@/components/BonitaPromo";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Welcome />
      <BonitaPromo />
    </main>
  );
}