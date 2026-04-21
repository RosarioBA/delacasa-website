import { Playfair_Display } from "next/font/google";
import Button from "@/components/Button";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section
      style={{
        backgroundColor: "#000",
        backgroundImage: "url('/lights.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Dark overlay */}
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.55)" }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6 px-16 max-w-2xl" style={{ paddingTop: "6rem" }}>

        {/* Heading */}
        <h1 className={`${playfair.className} text-8xl font-bold italic text-white leading-tight`}>
          De La Casa
        </h1>

        <div className="flex items-center gap-3">
          <span className="block w-8 h-px bg-[#A06811]" />
          <p className="text-xs font-semibold tracking-widest uppercase text-[#A06811]">
            Pasta Bar · Oslo
          </p>
        </div>

        {/* Subtext */}
        <p className="text-gray-300 text-lg leading-relaxed max-w-md">
          Make your own perfect pasta. Choose your pasta, sauce and toppings –
          freshly made for you in minutes.
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-4">
          <Button href="/reservation" label="Book Table" />
          <Button href="/menu" label="See Menu" variant="secondary" />
        </div>

        {/* Info */}
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>+47 928 33 275</span>
          <span className="text-gray-600">·</span>
          <span>Frognerveien 35A, 0266 Oslo</span>
        </div>

      </div>
    </section>
  );
}
