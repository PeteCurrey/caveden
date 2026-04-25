import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChevronLeft, Info, FileText, ShoppingBag, Ruler, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default async function BuildTypeDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const name = slug.replace(/-/g, " ").toUpperCase();

  return (
    <main className="h-full bg-obsidian">
      <Navbar />

      <section className="pt-40 pb-20 bg-obsidian border-b border-slate-900">
        <div className="container mx-auto px-6">
          <Link href="/build-types" className="flex items-center gap-2 text-technical text-steel hover:text-brass transition-colors mb-12">
            <ChevronLeft className="w-4 h-4" /> BACK TO ALL TYPES
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-32">
            <div className="lg:w-3/5">
              <span className="text-technical text-brass mb-4 block">BUILD TYPE // DEEP-DIVE</span>
              <h1 className="text-[clamp(32px,5vw,68px)] font-bold text-white font-syne uppercase mb-20 leading-tight">
                {name}.
              </h1>
              <p className="text-xl text-concrete font-dm-sans leading-relaxed max-w-2xl">
                The definitive guide to planning, specifying, and building a professional-grade 
                {name.toLowerCase()}. From structural requirements to interior finishes, 
                we cover every detail.
              </p>
            </div>
            <div className="lg:w-2/5 aspect-[4/5] bg-slate-900 border border-slate-700 relative overflow-hidden">
               <Image
                 src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
                 alt={name}
                 fill
                 className="object-cover opacity-60 grayscale"
               />
            </div>
          </div>
        </div>
      </section>

      {/* The Essentials Spec Grid */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <h3 className="text-technical text-steel mb-10">THE ESSENTIALS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
             {[
               { label: "TYPICAL SIZE", val: "12m² - 30m²" },
               { label: "PLANNING", val: "PERMITTED DEV" },
               { label: "COST RANGE", val: "£8k - £25k" },
               { label: "BUILD TIME", val: "4 - 8 WEEKS" }
             ].map(spec => (
               <div key={spec.label} className="bg-slate-900 p-8 border border-slate-800">
                 <div className="text-[10px] font-dm-mono text-steel mb-2 uppercase">{spec.label}</div>
                 <div className="text-lg font-bold text-white font-syne uppercase">{spec.val}</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-[150px] lg:py-[200px]">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-32">
          <div className="lg:w-2/3 prose prose-invert prose-concrete max-w-none">
            <h2 className="text-3xl font-bold font-syne uppercase mb-20">Architectural Overview</h2>
            <p className="text-xl leading-relaxed text-concrete">
              A {name.toLowerCase()} requires a specific set of engineering parameters to ensure 
              it meets its intended purpose. Unlike a standard garden shed, this structure 
              is designed for year-round habitation and professional use.
            </p>
            <p className="text-steel leading-relaxed mt-6">
              The primary focus for this build type is thermal regulation and moisture management. 
              We utilize a multi-layer wall build-up including vapour barriers, structural 
              sheathing, and high-performance PIR insulation to achieve U-values that exceed 
              current residential building regulations.
            </p>

            <h3 className="text-2xl font-bold font-syne uppercase mt-16 mb-20">Structural Systems</h3>
            <p className="text-steel leading-relaxed">
              For most {name.toLowerCase()} projects, we recommend a Timber Frame or SIP 
              (Structural Insulated Panel) approach. Both offer excellent strength-to-weight 
              ratios and allow for rapid construction on-site.
            </p>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
             <div className="space-y-12 sticky top-32">
                <div className="bg-slate-900 border border-slate-800 p-8">
                   <h4 className="text-technical text-brass mb-8">REQUIRED SYSTEMS</h4>
                   <ul className="space-y-4">
                      {["Foundations", "Insulation", "Electrics", "Heating"].map(sys => (
                        <Link key={sys} href="/systems" className="flex items-center justify-between group py-2 border-b border-slate-800">
                           <span className="text-white group-hover:text-brass transition-colors">{sys}</span>
                           <ChevronRight className="w-4 h-4 text-steel group-hover:text-brass" />
                        </Link>
                      ))}
                   </ul>
                </div>

                <div className="bg-slate-900 border border-brass/30 p-8">
                   <h4 className="text-technical text-white mb-8">RECOMMENDED PLANS</h4>
                   <div className="aspect-video bg-obsidian mb-8 border border-slate-800 flex items-center justify-center">
                      <FileText className="w-10 h-10 text-brass opacity-20" />
                   </div>
                   <h5 className="text-white font-bold mb-2">4x3m {name} Plan</h5>
                   <p className="text-steel text-sm mb-8">Fully dimensioned architectural blueprints.</p>
                   <Link href="/blueprints" className="block text-center bg-brass text-obsidian py-4 text-technical font-bold hover:bg-amber transition-all">
                      DOWNLOAD PLAN →
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
