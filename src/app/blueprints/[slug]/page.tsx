import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlueprintViewer, PurchasePanel } from "@/components/blueprints/BlueprintDetails";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function BlueprintDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  
  // In a real app, fetch data from Supabase using slug
  const title = slug.replace(/-/g, " ").toUpperCase();

  return (
    <main className="h-full bg-obsidian">
      <Navbar />

      <section className="pt-40 pb-20 bg-obsidian">
        <div className="container mx-auto px-6">
          <Link href="/blueprints" className="flex items-center gap-2 text-technical text-steel hover:text-brass transition-colors mb-12">
            <ChevronLeft className="w-4 h-4" /> BACK TO LIBRARY
          </Link>

          <div className="flex flex-col lg:flex-row gap-32">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <span className="text-technical text-brass mb-4 block">GARDEN OFFICE // TIMBER FRAME</span>
              <h1 className="text-[clamp(32px,4vw,56px)] font-bold text-white font-syne uppercase mb-20 leading-tight">
                {title}
              </h1>
              
              <div className="prose prose-invert prose-concrete max-w-none mb-16">
                <p className="text-xl text-concrete font-dm-sans leading-relaxed">
                  Our most popular garden office blueprint. This 4x3m design provides 
                  a spacious professional workspace while remaining under the 2.5m 
                  height threshold for standard UK permitted development.
                </p>
                <p className="text-steel font-dm-sans leading-relaxed mt-6">
                  The timber frame construction method is optimized for speed and thermal efficiency, 
                  utilizing 4x2 CLS framing and PIR insulation. The document package includes 
                  everything required for a self-build or to provide to a contractor.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                <div>
                  <div className="text-technical text-steel mb-1">BUILDING SIZE</div>
                  <div className="text-lg font-bold text-white font-syne">4000 X 3000MM</div>
                </div>
                <div>
                  <div className="text-technical text-steel mb-1">STRUCTURE</div>
                  <div className="text-lg font-bold text-white font-syne">TIMBER FRAME</div>
                </div>
                <div>
                  <div className="text-technical text-steel mb-1">ROOF TYPE</div>
                  <div className="text-lg font-bold text-white font-syne">EPDM FLAT</div>
                </div>
                <div>
                  <div className="text-technical text-steel mb-1">COMPLIANCE</div>
                  <div className="text-lg font-bold text-white font-syne">UK PD / REGS</div>
                </div>
              </div>

              <h3 className="text-technical text-white mb-20 border-b border-slate-800 pb-4">DOCUMENT PREVIEW</h3>
              <BlueprintViewer />
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <PurchasePanel />
              
              <div className="mt-12 bg-slate-900/50 border border-slate-800 p-8">
                <h4 className="text-technical text-white mb-8">WHAT'S INCLUDED?</h4>
                <ul className="space-y-4">
                   {[
                     "Dimensioned floor plans (1:50)",
                     "Exterior elevations (all sides)",
                     "Section drawing with layer details",
                     "Foundation & groundworks plan",
                     "Electrical & lighting circuit layout",
                     "Itemised materials schedule (Excel/PDF)",
                     "Supplier sourcing notes",
                     "Construction sequence guide"
                   ].map(item => (
                     <li key={item} className="flex items-start gap-3 text-sm text-steel">
                       <span className="w-1.5 h-1.5 bg-brass mt-1.5 shrink-0" />
                       {item}
                     </li>
                   ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Blueprints */}
      <section className="py-[150px] lg:py-[200px] border-t border-slate-900 bg-obsidian">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-white font-syne uppercase mb-12">Also available in:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
             {/* Mock related cards */}
             <div className="bg-slate-900 border border-slate-800 p-6 flex gap-10 group cursor-pointer hover:border-brass transition-all">
                <div className="w-24 h-24 bg-obsidian shrink-0" />
                <div>
                  <h4 className="text-white font-bold font-syne uppercase group-hover:text-brass transition-colors">4x3m SIP Build Variant</h4>
                  <p className="text-steel text-sm mt-2">Same footprint, Structural Insulated Panel construction.</p>
                  <div className="text-brass font-bold mt-2">£18.00</div>
                </div>
             </div>
             <div className="bg-slate-900 border border-slate-800 p-6 flex gap-10 group cursor-pointer hover:border-brass transition-all">
                <div className="w-24 h-24 bg-obsidian shrink-0" />
                <div>
                  <h4 className="text-white font-bold font-syne uppercase group-hover:text-brass transition-colors">5x3m Timber Frame Variant</h4>
                  <p className="text-steel text-sm mt-2">Increased depth for larger desk configurations.</p>
                  <div className="text-brass font-bold mt-2">£20.00</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
