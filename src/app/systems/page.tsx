import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BuildSystemsGrid } from "@/components/homepage/BuildSystemsGrid";

export default function SystemsHubPage() {
  return (
    <main className="min-h-screen bg-obsidian">
      <Navbar />

      <section className="pt-32 pb-20 bg-obsidian">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-technical text-brass mb-4 block">TECHNICAL KNOWLEDGE BASE</span>
            <h1 className="text-[clamp(38px,5vw,68px)] font-bold text-white font-syne uppercase mb-20 leading-tight">
              Build Systems.
            </h1>
            <p className="text-xl text-concrete font-dm-sans leading-relaxed">
              Our comprehensive guide to every major system in a garden build. 
              From the ground up, we break down the engineering, the 
              specifications, and the best practices used by professional builders.
            </p>
          </div>
        </div>
      </section>

      <BuildSystemsGrid />

      {/* Engineering Philosophy Section */}
      <section className="bg-slate-900 py-32 border-y border-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
             <h2 className="text-3xl font-bold text-white font-syne uppercase mb-20 leading-tight">
               Built to Last.
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <p className="text-concrete text-lg leading-relaxed">
                 We don't believe in "good enough". Every system we specify is designed 
                 to exceed standard building regulations. We focus on moisture management, 
                 thermal performance, and structural integrity to ensure your build 
                 remains a comfortable, healthy space for decades.
               </p>
               <p className="text-steel leading-relaxed">
                 Whether you're self-building or hiring a team, understanding these 
                 systems is the key to a successful project. Each guide is produced 
                 by experienced engineers and builders who know exactly what can go 
                 wrong — and how to prevent it.
               </p>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
