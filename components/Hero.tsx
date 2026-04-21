import { Playfair_Display } from "next/font/google";
import Button from "@/components/Button";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section
      className="md:min-h-screen"
      style={{
        backgroundColor: "#000",
        backgroundImage: "url('/lights.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      {/* Dark overlay */}
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.55)" }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6 px-6 md:px-16 max-w-2xl w-full pt-40 pb-16 md:pt-48 md:pb-24">

        {/* Heading */}
        <h1 className={`${playfair.className} text-6xl md:text-8xl font-bold italic text-white leading-tight`}>
          De La Casa
        </h1>

        <div className="flex items-center gap-3">
          <span className="block w-8 h-px bg-[#A06811]" />
          <p className="text-xs font-semibold tracking-widest uppercase text-[#A06811]">
            Pasta Bar · Oslo
          </p>
        </div>

        {/* Subtext */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-md">
          Make your own perfect pasta. Choose your pasta, sauce and toppings –
          freshly made for you in minutes.
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-3">
          <Button href="/reservation" label="Book Table" />
          <Button href="/menu" label="See Menu" variant="secondary" />
        </div>

        {/* Info */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-gray-400">
          <span>+47 928 33 275</span>
          <span className="hidden sm:inline text-gray-600">·</span>
          <span>Frognerveien 35A, 0266 Oslo</span>
        </div>

      </div>
    </section>
  );
}
