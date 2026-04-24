import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

const SIZES = ["3x3m", "4x3m", "5x3m", "5x4m", "6x4m"];

export async function generateStaticParams() {
  return SIZES.map((size) => ({
    size: size,
  }));
}

export default async function GardenOfficeSizePage({ params }: { params: { size: string } }) {
  const { size } = await params;
  
  return (
    <main className="min-min-h-screen bg-obsidian">
      <Navbar />

      <section className="pt-40 pb-20 bg-obsidian">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-technical text-brass mb-4 block">BUILD TYPE // GARDEN OFFICE</span>
            <h1 className="text-[clamp(32px,5vw,68px)] font-bold text-white font-syne uppercase mb-8 leading-tight">
              {size} Garden Office Guide.
            </h1>
            <p className="text-xl text-concrete font-dm-sans leading-relaxed">
              Complete technical specifications, build costs, and planning 
              requirements for a {size} garden office structure.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose prose-invert prose-concrete max-w-none">
              <h2 className="text-2xl font-bold font-syne uppercase">Why choose the {size} footprint?</h2>
              <p className="text-steel leading-relaxed">
                The {size} garden office is one of our most requested sizes. It offers 
                a perfect balance between internal floor area and garden footprint, 
                typically fitting within permitted development rules for most UK properties.
              </p>
              
              <h3 className="text-xl font-bold font-syne uppercase mt-12">Estimated Build Costs</h3>
              <p className="text-steel leading-relaxed">
                For a {size} build, you can expect an investment range of £10,000 to £18,000 
                depending on the specification level and whether you choose a self-build 
                or professional installation.
              </p>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 p-8 h-fit">
              <h4 className="text-technical text-white mb-6">RELEVANT BLUEPRINTS</h4>
              <div className="space-y-6">
                <div className="p-4 bg-obsidian border border-slate-700 hover:border-brass transition-colors cursor-pointer">
                   <div className="text-xs font-bold text-white">{size} Timber Frame Plan</div>
                   <div className="text-brass text-sm mt-1">£18.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
