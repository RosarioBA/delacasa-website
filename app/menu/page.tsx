import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { GiKnifeFork } from "react-icons/gi";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Menu | De La Casa",
  description: "Explore our pasta bar menu and brunch options at De La Casa, Frognerveien 35A Oslo.",
};

const playfair = Playfair_Display({ subsets: ["latin"] });

function ImageGrid({ wide, sq1, sq2 }: { wide: string; sq1: string; sq2: string }) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden">
        <Image src={wide} alt="" fill className="object-cover" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="relative aspect-square rounded-xl overflow-hidden">
          <Image src={sq1} alt="" fill className="object-cover" />
        </div>
        <div className="relative aspect-square rounded-xl overflow-hidden">
          <Image src={sq2} alt="" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}

const sections = [
  {
    id: 1,
    title: "The Pasta",
    imageLeft: false,
    wide: "/pastainstove.jpg",
    sq1: "/pollo-mozzarella.jpg",
    sq2: "/burmese.jpg",
    content: (
      <p className="text-[#010101] text-lg leading-relaxed">
        At "De la Casa" you can enjoy a delicious home made meal with fresh
        ingredients, created by yourself. Start by selecting your favourite type
        of pasta, followed by the preferred base sauce and finally, your choice
        of toppings from the provided menu. Your order will be prepared by us
        instantly, while you make yourself comfortable in our cosy space.
      </p>
    ),
  },
  {
    id: 2,
    title: "De La Casa Brunch",
    imageLeft: true,
    wide: "/brunch.jpg",
    sq1: "/coffee1.jpg",
    sq2: "/omelet1.jpg",
    content: (
      <p className="text-[#010101] text-lg leading-relaxed">
        By popular demand we now offer a fantastic Brunch menu, full of fresh
        and tasty options to enjoy after a beautiful stroll in the nearby
        Vigeland park in Oslo. Pair your favourite dish with one of our
        vitamin boosting, home made smoothies or a cup of premium colombian
        coffee, and you'll be so satisfied that the traditional Sunday brunch
        will convert to your regular breakfast or lunch all week!
      </p>
    ),
  },
  {
    id: 3,
    title: "A Healthy Choice",
    imageLeft: false,
    wide: "/primavera-salad2.jpg",
    sq1: "/avocado-toast.jpg",
    sq2: "/halloumi.jpg",
    content: (
      <p className="text-[#010101] text-lg leading-relaxed">
        Our cuisine is rich in nutritious delicacies to encourage a healthy
        lifestyle without compromising the pleasure of enjoying delicious food.
        We prepare all dishes fresh and with great care.
      </p>
    ),
  },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen pb-20" style={{ backgroundColor: "#DBD2C3" }}>
      {/* Header */}
      <div className="flex flex-col items-center gap-4 px-8 pt-40 md:pt-48 pb-12 md:pb-16">
        <div className="flex items-center gap-4">
          <GiKnifeFork className="text-[#6C270E] text-2xl md:text-4xl -rotate-12" />
          <h1
            className={`${playfair.className} text-3xl md:text-5xl font-bold text-[#6C270E] tracking-wide text-center`}
          >
            DE LA CASA
          </h1>
          <GiKnifeFork className="text-[#6C270E] text-2xl md:text-4xl rotate-12 scale-x-[-1]" />
        </div>

        <div className="flex items-center justify-center gap-4 w-full">
          <span className="block w-10 md:w-16 h-px bg-[#6C270E]" />
          <p className="text-sm font-semibold tracking-widest uppercase text-[#6C270E] text-center">
            Pasta Bar Menus
          </p>
          <span className="block w-10 md:w-16 h-px bg-[#6C270E]" />
        </div>

        <div className="w-fit">
          <Button href="https://www.delacasapastabar.com/_files/ugd/430aec_4fe63c2d79264965a4e57cdf6a42fdcd.pdf" label="View Menu" external />
        </div>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-16 md:gap-24 px-6 md:px-16">
        {sections.map((section) => (
          <div key={section.id} className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Image always on top on mobile; left/right on desktop */}
            <FadeIn className={`w-full md:flex-1 ${!section.imageLeft ? "md:order-last" : ""}`}>
              <ImageGrid wide={section.wide} sq1={section.sq1} sq2={section.sq2} />
            </FadeIn>

            <FadeIn delay={0.15} className="w-full md:flex-1 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="block w-8 h-px bg-[#6C270E]" />
                <p className="text-xs font-semibold tracking-widest uppercase text-[#6C270E]">
                  Menu
                </p>
              </div>
              <h2 className={`${playfair.className} text-4xl font-bold text-[#6C270E]`}>
                {section.title}
              </h2>
              {section.content}
            </FadeIn>
          </div>
        ))}
      </div>
    </main>
  );
}
