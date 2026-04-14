import { Playfair_Display } from "next/font/google";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

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
    question: "I can't find my receipt",
    answer: (
      <>
        Try our{" "}
        <a href="#" className="underline underline-offset-2">
          receipt finder
        </a>
        ! Contact us if you have issues.
      </>
    ),
  },
  {
    question: "Do you offer same-day delivery?",
    answer:
      "Yes! Orders placed before 12pm are eligible for same-day delivery anywhere in Oslo. We deliver 7 days a week.",
  },
  {
    question: "Can I customize my bouquet?",
    answer:
      "Absolutely! Contact us by phone or email to discuss your custom arrangement. Our florists are happy to create something unique for your special occasion.",
  },
  {
    question: "What makes Colombian roses so special?",
    answer:
      "Combined with volcanic soil and cool mountain temperatures, creates roses with larger blooms (6-8cm), more vibrant colors, stronger stems (50-80cm), and exceptional vase life of 2-3 weeks—nearly double that of standard roses.",
  },
  {
    question: "Can I schedule a delivery for a specific date?",
    answer:
      "Yes! When placing your order, you can select any future date for delivery. We recommend ordering at least 1 day in advance. For special occasions like Valentine's Day or Mother's Day, please order early.",
  },
  {
    question: "What if the recipient isn't home?",
    answer:
      "Our delivery drivers will attempt to leave the flowers in a safe, shaded location if possible. They may leave with a neighbor or building reception. If delivery cannot be completed, we'll contact the recipient to arrange a new delivery time.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#DBD2C3" }}>
      {/* Header */}
      <div
        className="flex flex-col items-center gap-6 px-8 pb-16"
        style={{ paddingTop: "12rem" }}
      >
        <div className="flex items-center gap-8">
          <BrickPattern />
          <h1
            className={`${playfair.className} text-5xl font-bold text-[#6C270E] tracking-wide`}
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
        <div className="px-16 pb-16 max-w-5xl mx-auto">
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
            className="grid grid-cols-2 mt-0 rounded-b-xl overflow-hidden"
            style={{ backgroundColor: "#1a0a04" }}
          >
            <div className="px-8 py-6 border-r border-white/10">
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
        <div className="flex flex-col items-center gap-8 px-16 pb-20">
          <h2
            className={`${playfair.className} text-3xl font-bold text-[#6C270E] text-center max-w-2xl`}
          >
            Do You Have Any Question Or Want To Book A Table? Contact Us!
          </h2>

          <div className="flex gap-6">
            <div
              className="flex items-center gap-4 px-8 py-5 rounded-xl"
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
              className="flex items-center gap-4 px-8 py-5 rounded-xl"
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

          <Button href="/reservation" label="Book Table" />
        </div>
      </FadeIn>

      {/* Section 3 — FAQ */}
      <section style={{ backgroundColor: "#A06811" }} className="px-16 py-20">
        <FadeIn>
          <h2
            className={`${playfair.className} text-4xl font-bold text-[#DBD2C3] text-center mb-12`}
          >
            Frequently Asked Questions
          </h2>
        </FadeIn>

        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
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
