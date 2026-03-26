export default function Welcome() {
  return (
    <section className="bg-[#010101] px-8 py-20 flex flex-col items-center text-center gap-6">
      <div className="flex items-center gap-3">
        <span className="block w-8 h-px bg-[#A06811]" />
        <p className="text-sm font-semibold tracking-widest uppercase text-[#A06811]">
          Welcome
        </p>
        <span className="block w-8 h-px bg-[#A06811]" />
      </div>

      <h2 className="text-4xl font-bold text-white max-w-xl">
        Welcome to De La Casa
      </h2>

      <div className="text-gray-400 text-lg leading-relaxed max-w-2xl flex flex-col gap-4">
        <p>
          Experience delicious pasta in the heart of Oslo. Our pasta bar brings
          Italian recipes with a modern twist, using fresh local ingredients and
          time-honored techniques. Our brunch is also so delicious.
        </p>
        <p>
          Located in Frognerveien, we offer a warm, welcoming atmosphere perfect
          for lunch, dinner, or a casual meal with friends and family.
        </p>
      </div>
    </section>
  );
}
