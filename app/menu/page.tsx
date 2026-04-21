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
      <div
        className="flex flex-col items-center gap-4 px-8 pb-16"
        style={{ paddingTop: "12rem" }}
      >
        <div className="flex items-center gap-6">
          <GiKnifeFork className="text-[#6C270E] text-4xl -rotate-12" />
          <h1
            className={`${playfair.className} text-5xl font-bold text-[#6C270E] tracking-wide`}
          >
            DE LA CASA
          </h1>
          <GiKnifeFork className="text-[#6C270E] text-4xl rotate-12 scale-x-[-1]" />
        </div>

        <div className="flex items-center gap-4">
          <span className="block w-16 h-px bg-[#6C270E]" />
          <p className="text-sm font-semibold tracking-widest uppercase text-[#6C270E]">
            Pasta Bar Menus
          </p>
          <span className="block w-16 h-px bg-[#6C270E]" />
        </div>

        <Button href="https://www.delacasapastabar.com/_files/ugd/430aec_4fe63c2d79264965a4e57cdf6a42fdcd.pdf" label="View Menu" external />
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-24 px-16">
        {sections.map((section) => (
          <div key={section.id} className="flex flex-row items-center gap-16">
            {section.imageLeft && (
              <FadeIn className="flex-1">
                <ImageGrid wide={section.wide} sq1={section.sq1} sq2={section.sq2} />
              </FadeIn>
            )}

            <FadeIn delay={0.15} className="flex-1 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="block w-8 h-px bg-[#6C270E]" />
                <p className="text-xs font-semibold tracking-widest uppercase text-[#6C270E]">
                  Menu
                </p>
              </div>
              <h2
                className={`${playfair.className} text-4xl font-bold text-[#6C270E]`}
              >
                {section.title}
              </h2>
              {section.content}
            </FadeIn>

            {!section.imageLeft && (
              <FadeIn delay={0.15} className="flex-1">
                <ImageGrid wide={section.wide} sq1={section.sq1} sq2={section.sq2} />
              </FadeIn>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
