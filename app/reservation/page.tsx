import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Book a Table | De La Casa",
  description: "Reserve your table at De La Casa pasta bar in Frogner, Oslo.",
};

export default function ReservationPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: "#DBD2C3" }}>
      <Button
        href="https://booking.gastroplanner.no/delacasafrogner/t"
        label="Book a Table"
        external
      />
    </main>
  );
}