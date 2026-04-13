import { Playfair_Display } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function BonitaPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#FFEACD" }}>

      {/* Section 1 — Hero intro */}
      <section
        className="flex flex-row items-center gap-16 px-16"
        style={{ paddingTop: "10rem", paddingBottom: "5rem" }}
      >
        {/* Left column */}
        <FadeIn className="flex-1 flex flex-col gap-6">
          {/* Heading + logo badge */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <h1
                className={`${playfair.className} text-6xl font-bold italic text-[#6C270E]`}
              >
                Bonita Cafe
              </h1>
              {/* Circular logo placeholder */}
              <div
                className="rounded-full flex-shrink-0 flex items-center justify-center"
                style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "#C8B08A",
                  border: "3px solid #6C270E",
                }}
              >
                <span className="text-[#6C270E] text-xs font-bold text-center leading-tight">
                  B
                </span>
              </div>
            </div>
            {/* Decorative underline */}
            <div className="flex items-center gap-2">
              <span className="block h-[2px] w-32 bg-[#6C270E]" />
              <span className="block h-[2px] w-8 bg-[#6C270E]/40" />
            </div>
          </div>

          <p className="text-[#010101] text-lg leading-relaxed max-w-md">
            Check out our cosy cafe in Briskeby! Try our delicious grilled
            sandwiches, bowls and more, perfect for breakfast or a late lunch.
            Drop in :)
          </p>

          <a
            href="/menu"
            className="inline-flex items-center gap-2 text-[#6C270E] font-bold text-base"
          >
            See Menu <FaArrowRight className="text-sm" />
          </a>

          {/* Info row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#6C270E]">
            <span>🕐 08:00 - 17:00</span>
            <span className="text-[#6C270E]/30">|</span>
            <span>📍 Briskebyvein, Oslo</span>
            <span className="text-[#6C270E]/30">|</span>
            <span>+47 92 67 12 26</span>
          </div>
        </FadeIn>

        {/* Right column — image placeholder */}
        <div className="flex-1">
          <FadeIn delay={0.15}>
            <div
              className="bg-gray-300 rounded-2xl w-full"
              style={{ aspectRatio: "4/3" }}
            />
          </FadeIn>
        </div>
      </section>

      {/* Section 2 — Full menu */}
      <section
        className="flex flex-col items-center gap-8 px-16 py-20"
        style={{ backgroundColor: "#F5E6CC" }}
      >
        <FadeIn className="flex flex-col items-center gap-3 text-center">
          <h2
            className={`${playfair.className} text-6xl font-bold italic text-[#C8A882]`}
          >
            Bonita cafe
          </h2>
          <div className="flex items-center gap-4">
            <span className="block w-12 h-px bg-[#6C270E]" />
            <p className="text-sm font-semibold tracking-widest uppercase text-[#6C270E]">
              Colombian Coffee and Juice Menu
            </p>
            <span className="block w-12 h-px bg-[#6C270E]" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Button href="#" label="Se Full Menu (PDF)" />
        </FadeIn>

        {/* 3 photo placeholders */}
        <FadeIn delay={0.15} className="grid grid-cols-3 gap-6 w-full max-w-4xl">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="bg-gray-300 rounded-xl w-full"
              style={{ aspectRatio: "1" }}
            />
          ))}
        </FadeIn>
      </section>

      {/* Section 3 — Order Takeaway */}
      <section
        className="relative flex flex-col items-center justify-center gap-8 px-16 py-24 overflow-hidden"
        style={{ backgroundColor: "#FFEACD" }}
      >
        {/* Wheat/grain SVG decorations */}
        <svg
          className="absolute left-8 top-1/2 -translate-y-1/2 opacity-20"
          width="120"
          height="200"
          viewBox="0 0 120 200"
          fill="none"
        >
          <line x1="60" y1="200" x2="60" y2="0" stroke="#6C270E" strokeWidth="2" />
          {[20, 40, 60, 80, 100, 120, 140, 160, 180].map((y, i) => (
            <ellipse
              key={i}
              cx={i % 2 === 0 ? 40 : 80}
              cy={y}
              rx="14"
              ry="8"
              fill="#6C270E"
              transform={`rotate(${i % 2 === 0 ? -30 : 30} ${i % 2 === 0 ? 40 : 80} ${y})`}
            />
          ))}
        </svg>
        <svg
          className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20"
          width="120"
          height="200"
          viewBox="0 0 120 200"
          fill="none"
          style={{ transform: "translateY(-50%) scaleX(-1)" }}
        >
          <line x1="60" y1="200" x2="60" y2="0" stroke="#6C270E" strokeWidth="2" />
          {[20, 40, 60, 80, 100, 120, 140, 160, 180].map((y, i) => (
            <ellipse
              key={i}
              cx={i % 2 === 0 ? 40 : 80}
              cy={y}
              rx="14"
              ry="8"
              fill="#6C270E"
              transform={`rotate(${i % 2 === 0 ? -30 : 30} ${i % 2 === 0 ? 40 : 80} ${y})`}
            />
          ))}
        </svg>

        <FadeIn className="flex flex-col items-center gap-6 text-center relative z-10">
          <h2
            className={`${playfair.className} text-6xl font-bold italic text-[#6C270E]/50`}
          >
            Order Takeaway!
          </h2>

          <p className="text-[#010101] text-lg leading-relaxed max-w-lg">
            Multiple options for take away from our coffee shop. Check out our
            online shop
          </p>

          <div className="flex items-center gap-8 text-[#6C270E] font-semibold text-base">
            <a href="#" className="underline underline-offset-2 hover:opacity-70 transition-opacity">
              Order Wolt
            </a>
            <a href="#" className="underline underline-offset-2 hover:opacity-70 transition-opacity">
              Order Foodora
            </a>
          </div>

          <Button href="#" label="Order takeaway" />
        </FadeIn>
      </section>

    </main>
  );
}
