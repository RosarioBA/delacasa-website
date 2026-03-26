import Button from "@/components/Button";

export default function BonitaPromo() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-12 px-8 py-20 bg-[#FCF7EC]">
      {/* Left — Image */}
      <div className="w-full md:w-2/5 aspect-video bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-sm">
        Bonita Café image
      </div>

      {/* Right — Text */}
      <div className="flex flex-col gap-6 max-w-xl">
        <div className="flex items-center gap-3">
          <span className="block w-8 h-px bg-[#6C270E]" />
          <p className="text-sm font-semibold tracking-widest uppercase text-[#6C270E]">
            Also visit our coffee shop
          </p>
        </div>

        <h2 className="text-4xl font-bold text-[#6C270E]">
          Discover Bonita Café
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          Looking for great coffee, smoothies, and fresh bakeries? Check out
          Bonita Café in Briskeby for your daily coffee fix.
        </p>

        <div className="self-start">
          <Button href="/bonita" label="Visit Bonita" />
        </div>
      </div>
    </section>
  );
}
