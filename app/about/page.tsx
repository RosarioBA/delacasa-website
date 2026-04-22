import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About Us | De La Casa",
  description: "The story behind De La Casa pasta bar in Oslo, founded by the team behind Bonita Flowers and Bonita Café.",
};

const playfair = Playfair_Display({ subsets: ["latin"] });

function BrickPattern() {
  const layout = [
    [1, 1],
    [1, 1],
    [1, 1],
    [1],
  ];
  return (
    <div className="flex flex-col gap-[3px]">
      {layout.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className="flex gap-[3px]"
          style={{ marginLeft: rowIdx % 2 === 1 ? "20px" : "0" }}
        >
          {row.map((_, colIdx) => (
            <div
              key={colIdx}
              className="rounded-sm"
              style={{
                width: "36px",
                height: "16px",
                backgroundColor: rowIdx % 2 === 0 ? "#D9C4A0" : "#C8B08A",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pb-20" style={{ backgroundColor: "#DBD2C3" }}>
      {/* Header */}
      <div className="flex flex-col items-center gap-6 px-8 pt-40 md:pt-48 pb-12 md:pb-16">
        <div className="flex items-center gap-4 md:gap-8">
          <BrickPattern />
          <h1
            className={`${playfair.className} text-4xl md:text-5xl font-bold text-[#6C270E] tracking-wide text-center`}
          >
            About Us
          </h1>
          <div style={{ transform: "scaleX(-1)" }}>
            <BrickPattern />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16 px-6 md:px-16 max-w-6xl mx-auto">
        {/* Text */}
        <FadeIn className="w-full md:flex-1 flex flex-col gap-6">
          <p className="text-[#010101] text-base md:text-lg leading-relaxed">
            De La Casa is the latest chapter in a story that began over 20 years ago, when the Bonita Handel family first set roots in Oslo.
          </p>
          <p className="text-[#010101] text-base md:text-lg leading-relaxed">
            It all started with flowers.{" "}
            <Link href="/bonita" className="text-[#6C270E] font-semibold underline underline-offset-2">
              Bonita Handel
            </Link>{" "}
            built its reputation as one of Oslo's most loved florists, specialising in premium, long-lasting Colombian roses. Over two decades, the family grew a business known not just for its exceptional flowers, but for the warmth and dedication they brought to every customer. Their Colombian roots have always been at the heart of everything they do, from the care they put into sourcing the finest roses, to the passion they bring to every new venture.
          </p>
          <p className="text-[#010101] text-base md:text-lg leading-relaxed">
            In 2014, that passion blossomed into something new. The family launched Bonita Café, introducing Oslo to some of the world's finest Colombian coffee, paired with delicious homemade treats. What started as a small addition quickly became a neighbourhood favourite in Briskeby, loved for its cosy atmosphere and exceptional quality.
          </p>
          <p className="text-[#010101] text-base md:text-lg leading-relaxed">
            Then came 2018, and with it, the boldest chapter yet. De La Casa, meaning "from home" in Spanish, was born from a simple but heartfelt idea: to create a space where people feel truly welcome, where the food is honest and delicious, and where every meal feels like it was made with love in someone's own kitchen.
          </p>
          <p className="text-[#010101] text-base md:text-lg leading-relaxed">
            At the heart of De La Casa is our pasta bar, a fun, interactive concept where you become the chef. Choose your favourite pasta, pick your base sauce, and select your toppings. We take it from there, preparing your perfect plate freshly in minutes. Simple, satisfying, and made just for you.
          </p>
          <p className="text-[#010101] text-base md:text-lg leading-relaxed">
            Today, De La Casa is proud to be part of the Frogner neighbourhood, carrying forward the same values that have defined the Bonita family for over 20 years: quality, warmth, and a genuine love for bringing people together through great food.
          </p>
        </FadeIn>

        {/* Image */}
        <div className="w-full md:flex-shrink-0 md:w-[35%] order-first md:order-last">
          <FadeIn delay={0.15}>
            <div className="relative rounded-xl overflow-hidden w-full" style={{ aspectRatio: "3/4" }}>
              <Image src="/jerome-sofi-line.png" alt="Jerome and Sofi" fill className="object-cover" />
            </div>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
