import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Takeaway() {
  return (
    <section className="bg-[#DBD2C3] px-6 md:px-16 py-16 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* Image */}
        <FadeIn className="w-full md:w-1/2">
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <Image src="/takeaway.jpg" alt="De La Casa takeaway" fill className="object-cover" />
          </div>
        </FadeIn>

        {/* Text */}
        <FadeIn delay={0.15} className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="block w-8 h-px bg-[#6C270E]" />
            <p className="text-xs font-semibold tracking-widest uppercase text-[#6C270E]">
              Takeaway
            </p>
          </div>

          <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold italic text-[#6C270E]`}>
            Enjoy De La Casa at Home
          </h2>

          <p className="text-[#010101] leading-relaxed">
            Can't make it in? Order your favourite pasta and brunch dishes straight to your door via Wolt, or give us a call and we'll have it ready for pickup.
          </p>

          <div className="flex flex-row gap-4 items-center">
            <div className="w-fit">
              <Button
                href="https://wolt.com/nb/nor/oslo/restaurant/de-la-casa-pasta-bar-by-bonita"
                label="Order on Wolt"
                external
              />
            </div>
            <a href="tel:+4792833275" className="text-[#6C270E] font-semibold hover:underline text-sm">
              +47 928 33 275
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
