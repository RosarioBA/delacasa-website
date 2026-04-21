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
    <main className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 gap-10 md:gap-16 pt-40 md:pt-40 pb-16 md:pb-24" style={{ backgroundColor: "#DBD2C3" }}>

      {/* Image — top on mobile, right on desktop */}
      <div className="relative rounded-2xl overflow-hidden w-full md:flex-shrink-0 md:w-[35%] order-first md:order-last" style={{ aspectRatio: "3/4" }}>
        <Image
          src="/lights.jpg"
          alt="De La Casa restaurant"
          fill
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-8 w-full md:max-w-lg">
        <div className="flex items-center gap-3">
          <span className="block w-8 h-px bg-[#6C270E]" />
          <p className="text-xs font-semibold tracking-widest uppercase text-[#6C270E]">
            Reservations
          </p>
        </div>

        <h1 className={`${playfair.className} text-4xl md:text-5xl font-bold italic text-[#6C270E] text-center md:text-left`}>
          Welcome to<br />De La Casa
        </h1>

        <p className="leading-relaxed">
          We would like to welcome you to our restaurant. Important information
          before you book a table with us. To reserve a table, a credit card
          must be provided as a guarantee. If you cancel less than 24 hours
          before the visit, or do not show up, 200,- nok per person will be
          charged as a NO SHOW amount. For groups of more than 8, please call us on{" "}
          <a href="tel:+4792833275" className="text-[#6C270E] font-semibold hover:underline">
            +47 928 33 275
          </a>
          {" "}to make an appointment.
        </p>

        <div className="flex justify-center md:justify-start">
          <Button
            href="https://booking.gastroplanner.no/delacasafrogner/t"
            label="Start booking"
            external
          />
        </div>
      </div>
    </main>
  );
}
