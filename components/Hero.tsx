import Image from "next/image";
import Button from "@/components/Button";

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
        paddingTop: "10rem",
      }}
    >
      {/* Dark overlay */}
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.4)" }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "0 3rem", gap: "3rem" }}>
        {/* Left — Text */}
        <div className="flex flex-col gap-6 max-w-lg">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="block w-8 h-px bg-[#A06811]" />
              <p className="text-sm font-semibold tracking-widest uppercase text-[#A06811]">
                Pasta Bar
              </p>
            </div>
            <h1 className="text-6xl font-bold tracking-tight text-white">
              DE LA CASA
            </h1>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">
            Make your own perfect pasta. Choose your favorite pasta, sauce and
            toppings – made for you in minutes.
          </p>

          <div className="flex flex-row gap-4">
            <Button href="/reservation" label="Book Table" />
            <Button href="/menu" label="See Menu" variant="secondary" />
          </div>

          <div className="flex flex-col gap-1 text-sm text-gray-400 mt-2">
            <span>+47 928 33 275</span>
            <span>Frognerveien 35A, 0266 Oslo</span>
          </div>
        </div>

        {/* Right — Image */}
        <div style={{ position: "relative", width: "40%", aspectRatio: "1", borderRadius: "1rem", overflow: "hidden" }}>
          <Image src="/burmesehero.jpg" alt="De La Casa restaurant" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
