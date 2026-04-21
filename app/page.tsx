import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Takeaway from "@/components/Takeaway";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Welcome />
      <Takeaway />
    </main>
  );
}