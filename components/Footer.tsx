import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#010101] text-white px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Column 1 — Brand */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-[#A06811]">De La Casa</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Authentic Italian pasta bar in the heart of Oslo. Fresh ingredients,
            traditional recipes, warm atmosphere.
          </p>
        </div>

        {/* Column 2 — Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold tracking-widest uppercase text-[#A06811]">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li>
              <Link href="/menu" className="hover:text-white transition-colors">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/bonita" className="hover:text-white transition-colors">
                Bonita Café
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 — Visit Us */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold tracking-widest uppercase text-[#A06811]">
            Visit Us
          </h3>
          <div className="flex flex-col gap-3 text-sm text-gray-400">
            <div>
              <p className="text-white font-medium">De La Casa Pasta Bar</p>
              <p>Frognerveien 35A, 0266 Oslo</p>
            </div>
            <div>
              <p className="text-white font-medium">Bonita Café</p>
              <p>Briskeby, Oslo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-600">
        © 2026 De La Casa. All rights reserved.
      </div>
    </footer>
  );
}
