import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChevronLeft, Info, FileText, ShoppingBag, Calculator } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default async function SystemDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const name = slug.replace(/-/g, " ").toUpperCase();
  
  // Mock system data based on slug
  const systemNumber = "01"; // Logic to derive from slug in real app

  return (
    <main className="min-h-screen bg-obsidian">
      <Navbar />

      <section className="pt-40 pb-20 bg-obsidian border-b border-slate-900">
        <div className="container mx-auto px-6">
          <Link href="/systems" className="flex items-center gap-2 text-technical text-steel hover:text-brass transition-colors mb-20">
            <ChevronLeft className="w-4 h-4" /> BACK TO SYSTEMS HUB
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-32">
            <div className="lg:w-3/5">
              <span className="text-technical text-brass mb-4 block">SYSTEM {systemNumber} /</span>
              <h1 className="text-[clamp(32px,5vw,68px)] font-bold text-white font-syne uppercase mb-12 leading-tight">
                {name}
              </h1>
              <p className="text-xl text-concrete font-dm-sans leading-relaxed max-w-2xl">
                The foundation of any successful build. We compare concrete slabs, 
                ground screws, timber frame bases and drainage systems to ensure 
                your build stays level, dry, and structurally sound.
              </p>
            </div>
            <div className="lg:w-2/5 aspect-video bg-slate-900 border border-slate-700 relative overflow-hidden">
               <Image
                 src="https://images.unsplash.com/photo-1541888941255-202191b54354?q=80&w=2070&auto=format&fit=crop"
                 alt={name}
                 fill
                 className="object-cover opacity-40 grayscale"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="p-8 border border-brass/30 bg-obsidian/40 backdrop-blur-sm">
                   <span className="text-technical text-brass">TECHNICAL DIAGRAM PREVIEW</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* At a Glance Spec Grid */}
      <section className="py-48 bg-slate-950">
        <div className="container mx-auto px-6">
          <h3 className="text-technical text-steel mb-10">AT A GLANCE</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
             {[
               { label: "METHOD TYPE", val: "CONCRETE / SCREW" },
               { label: "TYP. COST", val: "£800 - £2,500" },
               { label: "DIY LEVEL", val: "INTERMEDIATE" },
               { label: "TIME REQ.", val: "1 - 3 DAYS" },
               { label: "PERFORMANCE", val: "STRUCTURAL" },
               { label: "LIFESPAN", val: "50+ YEARS" }
             ].map(spec => (
               <div key={spec.label} className="bg-slate-900 p-6 border border-slate-800">
                 <div className="text-[10px] font-dm-mono text-steel mb-2 uppercase">{spec.label}</div>
                 <div className="text-xs font-bold text-white font-syne uppercase">{spec.val}</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Content */}
      <section className="py-64">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-32">
          <div className="lg:w-2/3 prose prose-invert prose-concrete max-w-none">
            <h2 className="text-3xl font-bold font-syne uppercase mb-12">Engineering Principles</h2>
            <p className="text-xl leading-relaxed text-concrete">
              A garden building foundation must perform three critical tasks: distribute the structural 
              load, prevent moisture ingress (rising damp), and provide a level platform for the build.
            </p>
            <p className="text-steel leading-relaxed mt-6">
              In the UK, ground conditions vary wildly. A site in London (heavy clay) requires a different 
              approach to a site in the Peak District (rocky). We recommend ground screws for 90% of modern 
              garden builds due to their speed, low environmental impact, and immediate load-bearing capacity.
            </p>

            <h2 className="text-3xl font-bold font-syne uppercase mt-16 mb-12">Comparison of Methods</h2>
            <div className="not-prose space-y-8 mt-8">
              {[
                { title: "Concrete Slabs", desc: "The traditional choice. Maximum stability but high cost, high carbon footprint, and requires dry weather for curing." },
                { title: "Ground Screws", desc: "The modern standard. Fast, can be installed in any weather, and avoids large excavations. Excellent for sloping sites." },
                { title: "Timber Frame Base", desc: "Most cost-effective for smaller builds. Must be raised off the ground using pillars or screws to prevent rot." }
              ].map(method => (
                <div key={method.title} className="bg-slate-900/50 border-l-2 border-brass p-8">
                   <h4 className="text-white font-bold font-syne uppercase mb-2">{method.title}</h4>
                   <p className="text-concrete text-sm leading-relaxed">{method.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold font-syne uppercase mt-16 mb-12">Technical Specifications</h2>
            <p className="text-steel leading-relaxed">
              When specifying a concrete base, a minimum thickness of 100mm is required for standard 
              garden offices, increasing to 150mm for larger gyms or workshops. A DPM (Damp Proof Membrane) 
              of 1200 gauge is essential below the concrete to prevent moisture from the ground tracking 
              into your floor structure.
            </p>
          </div>

          {/* Sidebar Recommendations */}
          <div className="lg:w-1/3">
            <div className="space-y-12 sticky top-32">
              {/* Related Blueprints */}
              <div className="bg-slate-900 border border-slate-800 p-8">
                <div className="flex items-center gap-3 mb-8">
                  <FileText className="w-5 h-5 text-brass" />
                  <h4 className="text-technical text-white">RELATED BLUEPRINTS</h4>
                </div>
                <div className="space-y-4">
                  {[1, 2].map(i => (
                    <div key={i} className="flex gap-4 items-center group cursor-pointer">
                      <div className="w-16 h-16 bg-obsidian shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-brass transition-colors">4x3m FOUNDATION PLAN</div>
                        <div className="text-[10px] text-steel">£12.00</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Products */}
              <div className="bg-slate-900 border border-slate-800 p-8">
                <div className="flex items-center gap-3 mb-8">
                  <ShoppingBag className="w-5 h-5 text-brass" />
                  <h4 className="text-technical text-white">REQUIRED GEAR</h4>
                </div>
                <div className="space-y-4">
                  {[1, 2].map(i => (
                    <div key={i} className="flex gap-4 items-center group cursor-pointer">
                      <div className="w-16 h-16 bg-obsidian shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-brass transition-colors">1200 GAUGE DPM (25M)</div>
                        <div className="text-[10px] text-steel">£45.00</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Tool */}
              <Link href="/tools/foundation-calculator" className="bg-brass text-obsidian p-8 flex flex-col items-center text-center group hover:bg-amber transition-all">
                <Calculator className="w-8 h-8 mb-4" />
                <h4 className="text-technical font-bold">FOUNDATION CALCULATOR</h4>
                <p className="text-sm font-dm-sans mt-2 opacity-80">Choose the right base for your soil type.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
