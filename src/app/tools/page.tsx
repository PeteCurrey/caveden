import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calculator, Ruler, Map, Thermometer, ArrowRight } from "lucide-react";
import Link from "next/link";

const TOOLS = [
  { 
    title: "Build Cost Estimator", 
    desc: "Budget your build accurately based on size and spec.", 
    href: "/tools/cost-estimator",
    icon: Calculator
  },
  { 
    title: "Planning Checker", 
    desc: "Permitted development in 60 seconds for English rules.", 
    href: "/planning",
    icon: Map
  },
  { 
    title: "Foundation Calculator", 
    desc: "Choose the right base for your soil type and building weight.", 
    href: "/tools/cost-estimator", // Placeholder
    icon: Ruler
  },
  { 
    title: "Insulation Calculator", 
    desc: "U-value and spec guide for thermal efficiency compliance.", 
    href: "/tools/cost-estimator", // Placeholder
    icon: Thermometer
  },
];

export default function ToolsHubPage() {
  return (
    <main className="min-h-screen bg-obsidian">
      <Navbar />

      <section className="pt-40 pb-20 bg-obsidian">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-technical text-brass mb-4 block">ENGINEERING HUB</span>
            <h1 className="text-[clamp(38px,5vw,68px)] font-bold text-white font-syne uppercase mb-8 leading-tight">
              Tools & Calculators.
            </h1>
            <p className="text-xl text-concrete font-dm-sans leading-relaxed">
              Remove the guesswork from your build. Use our professional-grade 
              calculators to estimate costs, specify foundations, and verify 
              thermal performance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-950 border-y border-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TOOLS.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="group bg-slate-900 p-12 border border-slate-800 hover:border-brass transition-all duration-300 flex items-start gap-10"
              >
                <div className="w-20 h-20 bg-obsidian border border-slate-700 flex items-center justify-center shrink-0 group-hover:bg-brass transition-colors">
                  <tool.icon className="w-10 h-10 text-brass group-hover:text-obsidian transition-colors" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-syne uppercase mb-4 leading-tight group-hover:text-brass transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-concrete text-lg mb-8 max-w-md">
                    {tool.desc}
                  </p>
                  <span className="text-technical text-brass flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    LAUNCH TOOL <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Standards CTA */}
      <section className="bg-obsidian py-48 border-b border-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white font-syne uppercase mb-12">Built to a higher standard.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div>
               <span className="text-technical text-brass mb-4 block">PRECISION</span>
               <p className="text-steel text-sm leading-relaxed">Our calculators use real-world engineering tolerances, not lifestyle approximations.</p>
            </div>
            <div>
               <span className="text-technical text-brass mb-4 block">VALIDATION</span>
               <p className="text-steel text-sm leading-relaxed">Each tool is validated against UK Building Regulations and Eurocodes.</p>
            </div>
            <div>
               <span className="text-technical text-brass mb-4 block">INTEGRATION</span>
               <p className="text-steel text-sm leading-relaxed">Save your tool outputs directly to your build journey in the planner.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
