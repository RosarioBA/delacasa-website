import type { Metadata } from "next";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Contact | De La Casa",
  description: "Find us at Frognerveien 35A, Oslo. Call +47 92 83 32 75 or book a table online.",
};

function BrickPattern() {
  const layout = [
    [1, 1],
    [1, 1],
    [1, 1],
    [1],
  ];
  return (
    <div className="flex flex-col gap-[3px]">
      {layout.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className="flex gap-[3px]"
          style={{ marginLeft: rowIdx % 2 === 1 ? "20px" : "0" }}
        >
          {row.map((_, colIdx) => (
            <div
              key={colIdx}
              className="rounded-sm"
              style={{
                width: "36px",
                height: "16px",
                backgroundColor: rowIdx % 2 === 0 ? "#D9C4A0" : "#C8B08A",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

const faqs = [
  {
    question: "Is De La Casa a café or a restaurant?",
    answer:
      "De La Casa is a pasta bar restaurant! We serve freshly made pasta, brunch, and more. If you're looking for a cosy café experience, check out our sister spot Bonita Café — it's small, relaxed, and perfect for a coffee and a treat.",
  },
  {
    question: "Do I need a reservation?",
    answer:
      "We recommend booking in advance, especially on weekends. You can reserve a table online or by calling us on +47 928 33 275.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "A credit card is required to guarantee your reservation. If you cancel less than 24 hours before your visit or do not show up, a no-show fee of 200 NOK per person will be charged.",
  },
  {
    question: "Can I book for a large group?",
    answer:
      "For groups of more than 8 people, please contact us directly by phone so we can make the best arrangements for you.",
  },
  {
    question: "Does Bonita Café take reservations?",
    answer:
      "Bonita Café is a small, cosy spot — we don't take reservations there, just come in and enjoy! It's the perfect place for a great coffee and a bite.",
  },
  {
    question: "I can't find my receipt",
    answer: (
      <>
        Use our{" "}
        <a href="https://receipts.bonitahandel.no/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
          receipt finder
        </a>
        {" "}to locate your receipt. Still having trouble? Drop us an email at info@delacasa.no.
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#DBD2C3" }}>
      {/* Header */}
      <div className="flex flex-col items-center gap-6 px-8 pt-40 md:pt-48 pb-12 md:pb-16">
        <div className="flex items-center gap-4 md:gap-8">
          <BrickPattern />
          <h1
            className="text-4xl md:text-5xl font-bold text-[#6C270E] tracking-wide text-center"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Contact Us
          </h1>
          <div style={{ transform: "scaleX(-1)" }}>
            <BrickPattern />
          </div>
        </div>
      </div>

      {/* Section 1 — Map + Address */}
      <FadeIn>
        <div className="px-6 md:px-16 pb-16 max-w-5xl mx-auto w-full">
          <iframe
            src="https://maps.google.com/maps?q=Frognerveien+35A,+0264+Oslo,+Norway&output=embed"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div
            className="grid grid-cols-1 md:grid-cols-2 mt-0 rounded-b-xl overflow-hidden"
            style={{ backgroundColor: "#1a0a04" }}
          >
            <div className="px-8 py-6 border-b md:border-b-0 md:border-r border-white/20">
              <p className="text-white font-bold text-lg mb-2">
                De La Casa Frogner
              </p>
              <p className="text-gray-300 text-sm">• Frognerveien 35A, 0264 Oslo</p>
            </div>
            <div className="px-8 py-6">
              <p className="text-white font-bold text-lg mb-2">Opening Hours</p>
              <p className="text-gray-300 text-sm">• Monday - Sunday: 11:00 - 22:00</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Section 2 — Contact info */}
      <FadeIn>
        <div className="flex flex-col items-center gap-8 px-6 md:px-16 pb-20">
          <h2
            className="text-3xl font-bold text-[#6C270E] text-center max-w-2xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Do You Have Any Question Or Want To Book A Table? Contact Us!
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
            <div
              className="flex items-center gap-4 px-8 py-5 rounded-xl w-full sm:flex-1"
              style={{ backgroundColor: "#E8D5B5" }}
            >
              <FaEnvelope className="text-[#6C270E] text-2xl flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[#6C270E] mb-1">
                  e-post
                </p>
                <p className="text-[#010101] font-medium">info@delacasa.no</p>
              </div>
            </div>

            <div
              className="flex items-center gap-4 px-8 py-5 rounded-xl w-full sm:flex-1"
              style={{ backgroundColor: "#E8D5B5" }}
            >
              <FaPhone className="text-[#6C270E] text-2xl flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[#6C270E] mb-1">
                  telephone
                </p>
                <p className="text-[#010101] font-medium">+47 93 81 32 71</p>
              </div>
            </div>
          </div>

          <div className="w-fit"><Button href="/reservation" label="Book Table" /></div>
        </div>
      </FadeIn>

      {/* Section 3 — Business Customer */}
      <FadeIn>
        <div className="px-6 md:px-16 py-10 max-w-5xl mx-auto">
          <div className="border-t border-[#6C270E]/20 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-[#6C270E] tracking-wide">Become a Business Customer</p>
              <p className="text-sm text-[#010101]/70 max-w-lg leading-relaxed">
                Pay via invoices and set up a business account — complete the form and we&apos;ll be in touch.
              </p>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc3y8Z8iY5j7MWD1ovfsfa0viYvEOIIjWpKYSrpd06CjQFcdw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold underline underline-offset-4 whitespace-nowrap"
              style={{ color: "#6C270E" }}
            >
              Complete the form →
            </a>
          </div>
        </div>
      </FadeIn>

      {/* Section 4 — FAQ */}
      <section style={{ backgroundColor: "#A06811" }} className="px-6 md:px-16 py-14 md:py-20">
        <FadeIn>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#DBD2C3] text-center mb-10 md:mb-12"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Frequently Asked Questions
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                className="rounded-xl p-6 flex flex-col gap-3"
                style={{ backgroundColor: "#8A4F2A" }}
              >
                <p className="text-white font-bold text-base leading-snug">
                  {faq.question}
                </p>
                <p className="text-[#DBD2C3] text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
