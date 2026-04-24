import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PlanningChecker } from "@/components/homepage/PlanningChecker";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

const SCENARIOS = [
  { title: "Standard Permitted Development", desc: "The basic rules for buildings under 2.5m in height." },
  { title: "Conservation Area Rules", desc: "Special restrictions for areas of architectural interest." },
  { title: "Listed Building Restrictions", desc: "When you need full planning permission regardless of size." },
  { title: "Scotland Planning Rules", desc: "Differences in PD thresholds across the border." },
  { title: "Large Builds (>30m²)", desc: "When Building Regulations mandatory threshold is triggered." },
  { title: "Annexe / Habitable Space", desc: "Converting a garden building into a living area." },
];

export default function PlanningHubPage() {
  return (
    <main className="h-full bg-obsidian">
      <Navbar />

      <section className="pt-40 pb-20 bg-obsidian">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-technical text-brass mb-4 block">REGULATORY INTELLIGENCE</span>
            <h1 className="text-[clamp(38px,5vw,68px)] font-bold text-white font-syne uppercase mb-20 leading-tight">
              Know Your Rights.<br />Build With Confidence.
            </h1>
            <p className="text-xl text-concrete font-dm-sans leading-relaxed">
              Navigating UK planning law for garden buildings doesn't have to 
              be complex. We've distilled thousands of pages of legislation 
              into clear, actionable guides for every scenario.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950 border-y border-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SCENARIOS.map((scenario) => (
              <Link
                key={scenario.title}
                href="/planning"
                className="group bg-slate-900 p-10 border border-slate-800 hover:border-brass transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white font-syne uppercase mb-4 leading-tight group-hover:text-brass transition-colors">
                  {scenario.title}
                </h3>
                <p className="text-concrete text-sm leading-relaxed mb-20">
                  {scenario.desc}
                </p>
                <span className="text-technical text-brass flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  READ GUIDE <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PlanningChecker />

      {/* Lead Magnet Section */}
      <section className="bg-brass py-48 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-obsidian/10 -skew-x-12 transform translate-x-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-12">
             <div className="flex-1 text-obsidian">
               <span className="text-technical font-bold mb-4 block opacity-80">FREE DOWNLOAD</span>
               <h2 className="text-4xl font-bold font-syne uppercase mb-8 leading-tight">
                 Permitted Development<br />Compliance Checklist.
               </h2>
               <p className="text-lg font-dm-sans opacity-90 mb-20">
                 A one-page PDF to verify your build against UK law. Essential 
                 for your building records and future property sales.
               </p>
             </div>
             <div className="w-full lg:w-96">
               <div className="bg-obsidian p-10 border border-obsidian/20">
                 <label className="text-technical text-steel mb-4 block">EMAIL ADDRESS</label>
                 <input
                   type="email"
                   placeholder="pete@example.com"
                   className="w-full bg-slate-900 border border-slate-800 py-4 px-6 text-white mb-8 focus:outline-none focus:border-brass"
                 />
                 <button className="w-full bg-brass text-obsidian py-4 text-technical font-bold hover:bg-amber transition-all flex items-center justify-center gap-2">
                   <Download className="w-4 h-4" /> SEND ME THE PDF
                 </button>
               </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
