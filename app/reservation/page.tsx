import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Button from "@/components/Button";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book a Table | De La Casa",
  description: "Reserve your table at De La Casa pasta bar in Frogner, Oslo.",
};

export default function ReservationPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6 py-24 pt-40"
      style={{
        backgroundColor: "#DBD2C3",
        backgroundImage: "url('/restaurant-interior.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >

      {/* Card */}
      <div
        className="relative z-10 flex flex-col gap-6 max-w-lg w-full rounded-2xl px-10 py-12"
        style={{
          backgroundColor: "#FFEACD",
          boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          className={`${playfair.className} text-3xl font-bold italic text-[#6C270E]`}
        >
          Welcome to De La Casa
        </h1>

        <p className="text-[#010101] text-sm leading-relaxed">
          We would like to welcome you to our restaurant. Important information
          before you book a table with us. To reserve a table, a credit card
          must be provided as a guarantee. If you cancel less than 24 hours
          before the visit, or do not show up, 200,- nok per person will be
          charged as a NO SHOW amount. For groups of more than 8, please call
          us to make an appointment.
        </p>

        <a
          href="tel:+4792833275"
          className="text-[#6C270E] font-semibold text-sm hover:underline"
        >
          +47 928 33 275
        </a>

        <div>
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
