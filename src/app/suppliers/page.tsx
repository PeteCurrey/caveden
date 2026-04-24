import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck, MapPin, ExternalLink, Star } from "lucide-react";
import Image from "next/image";

const SUPPLIERS = [
  {
    name: "SIPs Eco Panels",
    category: "STRUCTURAL SYSTEMS",
    location: "Fife, Scotland",
    rating: 4.9,
    desc: "Leading manufacturer of high-performance structural insulated panels for residential and commercial garden builds.",
    tags: ["High U-Value", "Fast Assembly", "BBA Approved"],
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Express Bi-folds",
    category: "GLAZING & DOORS",
    location: "Leeds, UK",
    rating: 4.8,
    desc: "Bespoke aluminium bi-folding doors and large span structural glazing for contemporary garden offices.",
    tags: ["Aluminium", "Premium Finish", "UK Made"],
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Herschel Infrared",
    category: "HEATING & HVAC",
    location: "Bristol, UK",
    rating: 4.9,
    desc: "Zero-maintenance, energy-efficient infrared heating solutions designed specifically for outdoor rooms.",
    tags: ["Energy Efficient", "Zero Maintenance", "Smart Control"],
    img: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: "RubberBond EPDM",
    category: "ROOFING SYSTEMS",
    location: "National Delivery",
    rating: 5.0,
    desc: "The gold standard in flat roofing. Fleece-backed EPDM that lasts for 50+ years.",
    tags: ["50yr Lifespan", "BBA Approved", "Weatherproof"],
    img: "https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function SupplierDirectoryPage() {
  return (
    <main className="min-h-screen bg-obsidian">
      <Navbar />

      {/* Hero */}
      <section className="pt-48 pb-32 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-technical text-brass mb-6 block">VETTED PARTNERS</span>
            <h1 className="text-[clamp(44px,6vw,84px)] font-bold text-white font-syne uppercase leading-tight tracking-tight mb-8">
              The Engineering<br />Network.
            </h1>
            <p className="text-xl text-concrete font-dm-sans leading-relaxed max-w-xl">
              Don't compromise on materials. We've vetted the best manufacturers 
              and suppliers in the UK to ensure your build lasts for decades.
            </p>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {SUPPLIERS.map((s) => (
              <div key={s.name} className="bg-slate-900 border border-slate-800 p-10 flex flex-col lg:flex-row gap-10 group hover:border-brass/30 transition-all">
                <div className="lg:w-1/3 aspect-square relative bg-slate-800 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.name}
                    fill
                    className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="lg:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-[10px] font-dm-mono text-brass tracking-widest block mb-2">{s.category}</span>
                        <h3 className="text-2xl font-bold text-white font-syne uppercase">{s.name}</h3>
                      </div>
                      <div className="flex items-center gap-1 text-brass">
                        <Star className="w-4 h-4 fill-brass" />
                        <span className="text-xs font-bold">{s.rating}</span>
                      </div>
                    </div>
                    <p className="text-concrete text-sm leading-relaxed mb-6">
                      {s.desc}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {s.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-dm-mono text-steel border border-slate-800 px-2 py-1 uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                    <div className="flex items-center gap-2 text-steel text-xs">
                      <MapPin className="w-3 h-3" />
                      {s.location}
                    </div>
                    <button className="flex items-center gap-2 text-technical text-brass hover:text-white transition-colors">
                      VISIT SUPPLIER <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 p-16 bg-slate-900 border border-brass/20 text-center max-w-4xl mx-auto">
            <ShieldCheck className="w-16 h-16 text-brass mx-auto mb-8" />
            <h2 className="text-3xl font-bold text-white font-syne uppercase mb-6">Become a Vetted Supplier</h2>
            <p className="text-concrete font-dm-sans mb-10 max-w-2xl mx-auto">
              Are you a manufacturer of premium garden build materials? Join our curated 
              directory and connect with high-intent architects and builders.
            </p>
            <button className="bg-brass text-obsidian px-10 py-5 text-technical font-bold hover:bg-amber transition-all">
              APPLY FOR VETTING →
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
