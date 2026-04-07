import { Playfair_Display } from "next/font/google";
import { GiKnifeFork } from "react-icons/gi";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

const playfair = Playfair_Display({ subsets: ["latin"] });

function ImageGrid() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="w-full aspect-video bg-gray-300 rounded-xl" />
      <div className="grid grid-cols-2 gap-3">
        <div className="aspect-square bg-gray-300 rounded-xl" />
        <div className="aspect-square bg-gray-300 rounded-xl" />
      </div>
    </div>
  );
}

const sections = [
  {
    id: 1,
    title: "The Pasta",
    imageLeft: false,
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
    content: (
      <>
        <p className="text-[#010101] text-lg leading-relaxed">
          By popular demand we now offer a fantastic Brunch menu, full of fresh
          and tasty options to enjoy after a beautiful stroll in the nearby
          Vigeland park in Oslo. Pair your favourite dish with one of our
          vitamin boosting, home made smoothies or a cup of premium colombian
          coffee, and you'll be so satisfied that the traditional Sunday brunch
          will convert to your regular breakfast or lunch all week!
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "A Healthy Choice",
    imageLeft: false,
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
    <main className="min-h-screen pb-20" style={{ backgroundColor: "#FFEACD" }}>
      {/* Header */}
      <div
        className="flex flex-col items-center gap-4 px-8 pb-16"
        style={{ paddingTop: "10rem" }}
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

        <Button href="/BH-2026-03-13_DLC_Menu_pasta_brunch.pdf" label="View Menu" />
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-24 px-16">
        {sections.map((section) => (
          <div key={section.id} className="flex flex-row items-center gap-16">
            {section.imageLeft && (
              <FadeIn className="flex-1">
                <ImageGrid />
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
                <ImageGrid />
              </FadeIn>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
