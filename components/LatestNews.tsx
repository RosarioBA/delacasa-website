const cards = [
  {
    id: 1,
    tag: "New Dish",
    title: "Truffle Carbonara",
    description: "A rich and creamy carbonara with black truffle shavings, freshly made pasta and crispy guanciale.",
  },
  {
    id: 2,
    tag: "News",
    title: "Spring Menu is Here",
    description: "We've updated our menu for spring with fresh seasonal ingredients sourced from local Norwegian farms.",
  },
  {
    id: 3,
    tag: "Event",
    title: "Sunday Brunch",
    description: "Join us every Sunday for our special brunch menu. Pasta, coffee, and good vibes from 11am.",
  },
];

export default function LatestNews() {
  return (
    <section className="bg-[#FCF7EC] px-8 py-20">
      <div className="flex items-center gap-3 mb-10">
        <span className="block w-8 h-px bg-[#6C270E]" />
        <p className="text-sm font-semibold tracking-widest uppercase text-[#6C270E]">
          Latest News & Dishes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div key={card.id} className="flex flex-col gap-4">
            {/* Image placeholder */}
            <div className="w-full aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-sm">
              Image
            </div>

            <span className="text-xs font-semibold tracking-widest uppercase text-[#6C270E]">
              {card.tag}
            </span>
            <h3 className="text-xl font-bold text-black">{card.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
