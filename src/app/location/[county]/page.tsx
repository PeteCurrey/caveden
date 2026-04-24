import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const COUNTIES = ["Surrey", "Hertfordshire", "Essex", "Kent", "Sussex", "Oxfordshire"];

export async function generateStaticParams() {
  return COUNTIES.map((county) => ({
    county: county.toLowerCase(),
  }));
}

export default async function LocationCountyPage({ params }: { params: { county: string } }) {
  const { county } = await params;
  const countyName = county.charAt(0).toUpperCase() + county.slice(1);
  
  return (
    <main className="min-h-screen bg-obsidian">
      <Navbar />

      <section className="pt-40 pb-20 bg-obsidian">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-technical text-brass mb-4 block">REGIONAL BUILD GUIDES</span>
            <h1 className="text-[clamp(32px,5vw,68px)] font-bold text-white font-syne uppercase mb-8 leading-tight">
              Garden Office Builds in {countyName}.
            </h1>
            <p className="text-xl text-concrete font-dm-sans leading-relaxed">
              Specific planning considerations, local ground conditions, and 
              build trends for garden offices and studios in {countyName}.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="prose prose-invert prose-concrete max-w-4xl">
            <h2 className="text-2xl font-bold font-syne uppercase">Planning in {countyName}</h2>
            <p className="text-steel leading-relaxed">
              While the general Permitted Development rules apply across England, many local 
              authorities in {countyName} have specific Article 4 directions or conservation 
              area requirements that you should be aware of before starting your build.
            </p>
            
            <h3 className="text-xl font-bold font-syne uppercase mt-12">Ground Conditions</h3>
            <p className="text-steel leading-relaxed">
              Typical soil types in {countyName} can range from heavy clay to chalky flint. 
              We recommend a site assessment to determine if ground screws or a reinforced 
              concrete slab is the most stable foundation for your garden room.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
