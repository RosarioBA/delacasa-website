import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Contact | De La Casa",
  description: "Find us at Frognerveien 35A, Oslo. Call +47 92 83 32 75 or book a table online.",
};

const playfair = Playfair_Display({ subsets: ["latin"] });

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
            className={`${playfair.className} text-4xl md:text-5xl font-bold text-[#6C270E] tracking-wide text-center`}
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
            className={`${playfair.className} text-3xl font-bold text-[#6C270E] text-center max-w-2xl`}
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

      {/* Section 3 — FAQ */}
      <section style={{ backgroundColor: "#A06811" }} className="px-6 md:px-16 py-14 md:py-20">
        <FadeIn>
          <h2
            className={`${playfair.className} text-3xl md:text-4xl font-bold text-[#DBD2C3] text-center mb-10 md:mb-12`}
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
                <p className="text-[#DBD2C3] font-bold text-base leading-snug">
                  {faq.question}
                </p>
                <p className="text-[#DBD2C3]/80 text-sm leading-relaxed">
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
