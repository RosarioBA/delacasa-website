import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Button from "@/components/Button";

const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"] });

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row" style={{ backgroundColor: "#DBD2C3" }}>

      {/* Left — Text */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-16 pt-40 pb-12 md:pt-36 md:pb-16 gap-6">

        {/* Label */}
        <p className="text-[10px] font-semibold tracking-wider uppercase text-[#6C270E] origin-left scale-75">
          Pasta Bar · Oslo · Est. 2018
        </p>

        {/* Heading */}
        <h1 className={`${playfair.className} text-7xl md:text-8xl font-bold italic text-[#6C270E] leading-none`}>
          Pasta,<br /><span className="text-[#A06811]">made</span><br />yours.
        </h1>

        {/* Subtext */}
        <p className="text-[#010101] text-base md:text-lg leading-relaxed max-w-md">
          Hand-cut pasta, slow sauces, seasonal toppings. Built to order, just the way you like it.
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-3">
          <Button href="/reservation" label="Book a Table" />
          <Button href="/menu" label="See the Menu" variant="secondary" />
        </div>

        {/* Info */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-[#6C270E]/60">
          <span>+47 928 33 275</span>
          <span className="hidden sm:inline">·</span>
          <span>Frognerveien 35A, 0266 Oslo</span>
        </div>

      </div>

      {/* Right — Image */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto md:min-h-screen">
        <Image
          src="/pastas.jpg"
          alt="De La Casa restaurant"
          fill
          className="object-cover object-bottom md:object-center"
          priority
        />
      </div>

    </section>
  );
}
