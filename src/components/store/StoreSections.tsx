import Image from "next/image";
import Link from "next/link";

const PICKS = [
  {
    title: "The Ultimate Off-Grid Kit",
    desc: "A complete solar and battery system specifically designed for remote garden offices and studios.",
    price: "From £2,450.00",
    img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Precision Insulation Pack",
    desc: "Passivhaus-standard vapour barriers and high-performance PIR boards for maximum thermal efficiency.",
    price: "From £420.00",
    img: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Architectural Lighting Set",
    desc: "A curated collection of recessed spot lighting, smart controls and exterior wash lights.",
    price: "From £315.00",
    img: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=2070&auto=format&fit=crop"
  }
];

export function EditorsPicks() {
  return (
    <section className="bg-obsidian py-96">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-technical text-brass mb-4 block">THIS MONTH'S ESSENTIALS</span>
            <h2 className="text-4xl font-bold text-white font-syne uppercase">Editor's Picks.</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {PICKS.map((pick) => (
            <div key={pick.title} className="group cursor-pointer">
              <div className="relative aspect-[4/5] bg-slate-900 border border-slate-800 overflow-hidden mb-8">
                <Image
                  src={pick.img}
                  alt={pick.title}
                  fill
                  className="object-cover opacity-50 grayscale group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-technical text-brass mb-2 block">EDITOR'S SELECTION</span>
                  <h3 className="text-2xl font-bold text-white font-syne uppercase mb-4 leading-tight">{pick.title}</h3>
                  <p className="text-concrete text-sm mb-6 line-clamp-2">{pick.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-white font-syne">{pick.price}</span>
                    <button className="bg-brass text-obsidian px-5 py-2 text-technical font-bold hover:bg-amber transition-colors">
                      VIEW KIT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CATEGORIES = [
  "Power & Heating", "Electrical & Lighting", "Windows & Glazing",
  "Roofing & Weatherproofing", "Insulation & Acoustic", "Interior & Furniture",
  "Cladding & Exterior", "Flooring", "Tools & Fixings"
];

export function CategoryGrid() {
  return (
    <section className="bg-obsidian py-96 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-technical text-steel mb-12 text-center">SHOP BY CATEGORY</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/store/${cat.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
              className="bg-slate-900 border border-slate-800 p-12 flex flex-col items-center justify-center text-center group hover:border-brass transition-all duration-300"
            >
              <div className="w-16 h-16 bg-obsidian border border-slate-700 mb-6 flex items-center justify-center group-hover:bg-brass transition-colors">
                <div className="w-8 h-8 border border-steel group-hover:border-obsidian" />
              </div>
              <h3 className="text-technical text-white group-hover:text-brass transition-colors tracking-[0.2em]">{cat}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
