import Image from "next/image";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background image */}
      <Image
        src="/lights.jpg"
        alt="De La Casa atmosphere"
        fill
        className="object-cover hero-flicker"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6 px-8 max-w-xl">
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
          <span>+47 000 00 000</span>
          <span>Frognerveien, Oslo</span>
        </div>
      </div>
    </section>
  );
}
