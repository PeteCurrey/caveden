import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StoreHero } from "@/components/store/StoreHero";
import { EditorsPicks, CategoryGrid } from "@/components/store/StoreSections";
import { StorePreview } from "@/components/homepage/StorePreview";
import Link from "next/link";

export default function StorePage() {
  return (
    <main className="min-h-screen bg-obsidian">
      <Navbar />
      
      <StoreHero />
      
      <EditorsPicks />
      
      {/* Build Planner Store CTA */}
      <section className="bg-slate-900 py-24 border-y border-slate-800">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-white font-syne uppercase mb-4 leading-tight">
              Not sure what you need for your build?
            </h2>
            <p className="text-concrete text-lg font-dm-sans">
              Launch the Build Planner. It'll configure your systems and 
              generate a curated list of gear specifically for your project.
            </p>
          </div>
          <Link
            href="/planner"
            className="bg-brass text-obsidian px-10 py-5 text-technical font-bold hover:bg-amber transition-all whitespace-nowrap"
          >
            LAUNCH BUILD PLANNER →
          </Link>
        </div>
      </section>

      <CategoryGrid />
      
      <StorePreview /> {/* Reusing the featured products grid as a 'Top Sellers' section */}

      <section className="bg-obsidian py-48 border-t border-slate-900">
        <div className="container mx-auto px-6 text-center">
          <span className="text-technical text-brass mb-6 block">BUILDER SUPPORT</span>
          <h2 className="text-4xl font-bold text-white font-syne uppercase mb-12">Expert Advice on Every Product.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div>
              <h4 className="text-technical text-white mb-4">ENGINEER TESTED</h4>
              <p className="text-steel text-sm leading-relaxed">Every item in our store has been tested in real-world garden builds for durability and performance.</p>
            </div>
            <div>
              <h4 className="text-technical text-white mb-4">BUILD COMPLIANCE</h4>
              <p className="text-steel text-sm leading-relaxed">We only stock gear that meets UK building regulations and permitted development standards.</p>
            </div>
            <div>
              <h4 className="text-technical text-white mb-4">DIRECT SUPPORT</h4>
              <p className="text-steel text-sm leading-relaxed">Need help with installation? Our build desk team is available for technical support on all purchases.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
