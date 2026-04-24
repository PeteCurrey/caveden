import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BuildTypeNavigator } from "@/components/homepage/BuildTypeNavigator";

export default function BuildTypesHubPage() {
  return (
    <main className="h-full bg-obsidian">
      <Navbar />

      <section className="pt-40 pb-20 bg-obsidian">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-technical text-brass mb-4 block">BUILD TYPE EXPLORER</span>
            <h1 className="text-[clamp(38px,5vw,68px)] font-bold text-white font-syne uppercase mb-20 leading-tight">
              Choose Your Build.
            </h1>
            <p className="text-xl text-concrete font-dm-sans leading-relaxed">
              From professional workspaces to creative sanctuaries, we provide 
              the technical blueprints and build guides for 12 distinct 
              garden building types.
            </p>
          </div>
        </div>
      </section>

      <BuildTypeNavigator />

      {/* Comparison Section */}
      <section className="bg-slate-900 py-48 border-y border-slate-800">
        <div className="container mx-auto px-6">
           <h2 className="text-3xl font-bold text-white font-syne uppercase mb-12 text-center">Compare Build Characteristics.</h2>
           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-6 text-technical text-brass">BUILD TYPE</th>
                    <th className="py-6 text-technical text-brass">TYPICAL SIZE</th>
                    <th className="py-6 text-technical text-brass">PLANNING</th>
                    <th className="py-6 text-technical text-brass">DIY LEVEL</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Garden Office", size: "12 - 20m²", planning: "Likely PD", diy: "Intermediate" },
                    { name: "Man Cave", size: "15 - 30m²", planning: "Likely PD", diy: "Intermediate" },
                    { name: "Garden Annexe", size: "25 - 50m²", planning: "App Required", diy: "Expert" },
                    { name: "Workshop", size: "15 - 40m²", planning: "Check Height", diy: "Intermediate" },
                  ].map(row => (
                    <tr key={row.name} className="border-b border-slate-800 hover:bg-obsidian/50 transition-colors">
                      <td className="py-6 text-white font-bold font-syne uppercase">{row.name}</td>
                      <td className="py-6 text-concrete font-dm-mono text-sm">{row.size}</td>
                      <td className="py-6 text-concrete font-dm-mono text-sm">{row.planning}</td>
                      <td className="py-6 text-concrete font-dm-mono text-sm">{row.diy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
