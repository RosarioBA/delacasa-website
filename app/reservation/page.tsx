import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Button from "@/components/Button";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book a Table | De La Casa",
  description: "Reserve your table at De La Casa pasta bar in Frogner, Oslo.",
};

export default function ReservationPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-16 gap-16" style={{ backgroundColor: "#DBD2C3", paddingTop: "10rem", paddingBottom: "6rem" }}>

      {/* Left — Info */}
      <div className="flex flex-col gap-8 max-w-lg">
        <div className="flex items-center gap-3">
          <span className="block w-8 h-px bg-[#6C270E]" />
          <p className="text-xs font-semibold tracking-widest uppercase text-[#6C270E]">
            Reservations
          </p>
        </div>

        <h1 className={`${playfair.className} text-5xl font-bold italic text-[#6C270E]`}>
          Welcome to<br />De La Casa
        </h1>

        <p className="leading-relaxed">
          We would like to welcome you to our restaurant. Important information
          before you book a table with us. To reserve a table, a credit card
          must be provided as a guarantee. If you cancel less than 24 hours
          before the visit, or do not show up, 200,- nok per person will be
          charged as a NO SHOW amount. For groups of more than 8, please call
          us to make an appointment.
        </p>

        <div className="flex items-center gap-6">
          <a href="tel:+4792833275" className="text-[#6C270E] font-semibold hover:underline">
            +47 928 33 275
          </a>
          <Button
            href="https://booking.gastroplanner.no/delacasafrogner/t"
            label="Start booking"
            external
          />
        </div>
      </div>

      {/* Right — Image */}
      <div className="relative rounded-2xl overflow-hidden flex-shrink-0" style={{ width: "35%", aspectRatio: "3/4" }}>
        <Image
          src="/lights.jpg"
          alt="De La Casa restaurant"
          fill
          className="object-cover"
        />
      </div>
    </main>
  );
}
