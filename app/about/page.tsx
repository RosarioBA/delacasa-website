import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
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
      <div
        className="flex flex-col items-center gap-6 px-8 pb-16"
        style={{ paddingTop: "12rem" }}
      >
        <div className="flex items-center gap-8">
          <BrickPattern />
          <h1
            className={`${playfair.className} text-5xl font-bold text-[#6C270E] tracking-wide`}
          >
            About Us
          </h1>
          <div style={{ transform: "scaleX(-1)" }}>
            <BrickPattern />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-row items-start gap-16 px-16 max-w-6xl mx-auto">
        {/* Text */}
        <FadeIn className="flex-1 flex flex-col gap-6">
          <p className="text-[#010101] text-lg leading-relaxed">
            De La Casa was created by the founders of{" "}
            <Link href="/bonita" className="text-[#6C270E] font-semibold underline underline-offset-2">
              Bonita Flowers
            </Link>
            , who have successfully run a florist business in Oslo over the past
            10 years, specialising in Colombian, long lasting roses. The
            business literally blossomed into a steady success, thanks to the
            high quality products and great customer focus the Bonita team has
            always provided to their loyal customers. Since 2014, the family
            business launched their newest edition "Bonita Café", introducing
            some of the worlds best, Colombian coffee served with delicious home
            made treats.
          </p>
          <p className="text-[#010101] text-lg leading-relaxed">
            2018 has brought upon change and new challenges which have
            translated into the new "De La Casa" concept. The literal meaning is
            "from home" and the idea was to create a cosy space, where people
            can feel welcome and enjoy a delicious, unpretentious meal, as
            though made in their own home.
          </p>
          <p className="text-[#010101] text-lg leading-relaxed">
            The Pasta bar is a simple solution where you can create your own
            favourite combination, selecting your pasta, base sauce and toppings
            of choice, which will be prepared freshly for you within minutes.
          </p>
        </FadeIn>

        {/* Image placeholder */}
        <div className="flex-shrink-0" style={{ width: "35%" }}>
          <FadeIn delay={0.15}>
            <div
              className="bg-gray-300 rounded-xl w-full"
              style={{ aspectRatio: "3/4" }}
            />
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
