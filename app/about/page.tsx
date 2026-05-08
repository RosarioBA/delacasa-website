import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About Us | De La Casa",
  description: "The story behind De La Casa pasta bar in Oslo, founded by the team behind Bonita Flowers and Bonita Café.",
};

const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"] });
const lora = Lora({ subsets: ["latin"] });

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#DBD2C3" }}>

      {/* ── Magazine two-column spread ── */}
      <div className="px-6 md:px-20 pt-40 md:pt-48 pb-28 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-start">

        <FadeIn className={`${lora.className} flex-1 flex flex-col gap-7`}
          style={{ fontSize: "1.125rem", lineHeight: "1.9", color: "#3a1a08" }}>

          <div>
            <p className="text-xs tracking-[0.35em] uppercase mb-6" style={{ color: "#B8860B", fontVariant: "small-caps" }}>
              Chapter 01 — The Family
            </p>
            <h1
              className={`${playfair.className} font-bold`}
              style={{ color: "#6B3410", fontSize: "clamp(48px, 6.5vw, 80px)", lineHeight: "1.05" }}
            >
              A Story From <span style={{ color: "#A06811" }}>Home.</span>
            </h1>
            <div className="mt-8 h-px w-24" style={{ backgroundColor: "#B8860B" }} />
          </div>

          <p style={{ textAlign: "justify" }}>
            <span
              className={`${playfair.className} font-bold float-left mr-3`}
              style={{ fontSize: "5.5rem", lineHeight: "0.72", color: "#6B3410" }}
            >
              D
            </span>
            e La Casa is the latest chapter in a story that began over 20 years ago, when the Bonita Handel family first set roots in Oslo.
          </p>

          <p style={{ textAlign: "justify" }}>
            It all started with flowers.{" "}
            <Link href="/bonita" className="font-semibold underline underline-offset-4" style={{ color: "#6B3410" }}>
              Bonita Handel
            </Link>{" "}
            built its reputation as one of Oslo&apos;s most loved florists, specialising in premium, long-lasting Colombian roses. Over two decades, the family grew a business known not just for its exceptional flowers, but for the warmth and dedication they brought to every customer. Their Colombian roots have always been at the heart of everything they do — from the care they put into sourcing the finest roses, to the passion they bring to every new venture.
          </p>

          {/* Pull quote */}
          <blockquote
            className={`${playfair.className} my-2 pl-6`}
            style={{ borderLeft: "3px solid #B8860B" }}
          >
            <p className="italic" style={{ fontSize: "1.35rem", lineHeight: "1.7", color: "#6B3410" }}>
              &ldquo;Their Colombian roots have always been at the heart of everything they do.&rdquo;
            </p>
          </blockquote>

          <p style={{ textAlign: "justify" }}>
            In 2014, that passion blossomed into something new. The family launched Bonita Café, introducing Oslo to some of the world&apos;s finest Colombian coffee, paired with delicious homemade treats. What started as a small addition quickly became a neighbourhood favourite in Briskeby, loved for its cosy atmosphere and exceptional quality.
          </p>

          <p style={{ textAlign: "justify" }}>
            Then came 2018, and with it, the boldest chapter yet. De La Casa, meaning &ldquo;from home&rdquo; in Spanish, was born from a simple but heartfelt idea: to create a space where people feel truly welcome, where the food is honest and delicious, and where every meal feels like it was made with love in someone&apos;s own kitchen.
          </p>
        </FadeIn>

        {/* Right column: sticky image */}
        <FadeIn delay={0.15} className="w-full md:w-[42%] sticky top-28 flex-shrink-0">
          <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <Image
              src="/dlc-inside.jpg"
              alt="Inside De La Casa pasta bar"
              fill
              className="object-cover"
            />
          </div>
        </FadeIn>

      </div>

    </main>
  );
}
