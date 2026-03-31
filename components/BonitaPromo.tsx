import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";

export default function BonitaPromo() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-12 px-8 py-20 bg-[#FCF7EC]">
      {/* Left — Image */}
      <FadeIn className="w-full md:w-2/5">
        <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-sm">
          Bonita Café image
        </div>
      </FadeIn>

      {/* Right — Text */}
      <div className="flex flex-col gap-6 max-w-xl">
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3">
            <span className="block w-8 h-px bg-[#6C270E]" />
            <p className="text-sm font-semibold tracking-widest uppercase text-[#6C270E]">
              Also visit our coffee shop
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-4xl font-bold text-[#6C270E]">
            Discover Bonita Café
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-gray-600 text-lg leading-relaxed">
            Looking for great coffee, smoothies, and fresh bakeries? Check out
            Bonita Café in Briskeby for your daily coffee fix.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="self-start">
            <Button href="/bonita" label="Visit Bonita" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
