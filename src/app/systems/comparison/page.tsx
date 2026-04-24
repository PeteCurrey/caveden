import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Check, X, ShieldAlert, Zap, ThermometerSnowflake } from "lucide-react";

const COMPARISON_DATA = [
  {
    feature: "Thermal Performance (U-Value)",
    sip: "0.12 - 0.18 (Excellent)",
    timber: "0.18 - 0.24 (Good)",
    steel: "0.22 - 0.28 (Moderate)"
  },
  {
    feature: "Build Speed",
    sip: "Rapid (1-2 days)",
    timber: "Standard (4-7 days)",
    steel: "Moderate (3-5 days)"
  },
  {
    feature: "Structural Strength",
    sip: "High (Load-bearing panels)",
    timber: "Moderate (Frame dependent)",
    steel: "Very High"
  },
  {
    feature: "Acoustic Performance",
    sip: "Moderate (Requires treatment)",
    timber: "Good (Natural dampening)",
    steel: "Low (Requires heavy insulation)"
  },
  {
    feature: "Environmental Impact",
    sip: "Low Waste (Precision cut)",
    timber: "Low (Sustainable source)",
    steel: "Moderate (Energy intensive)"
  },
  {
    feature: "Cost / Value",
    sip: "Premium / Lifetime Value",
    timber: "Competitive / Standard",
    steel: "Premium / Industrial"
  }
];

export default function ComparisonPage() {
  return (
    <main className="min-h-screen bg-obsidian">
      <Navbar />

      <section className="pt-48 pb-32">
        <div className="container mx-auto px-6">
          <span className="text-technical text-brass mb-6 block">SYSTEMS ANALYSIS // 03</span>
          <h1 className="text-[clamp(44px,6vw,84px)] font-bold text-white font-syne uppercase leading-tight mb-20">
            The Material<br />Authority.
          </h1>
          <p className="text-xl text-concrete font-dm-sans leading-relaxed max-w-2xl">
            A technical comparison of the three primary build systems used in 
            modern garden buildings. We've removed the marketing fluff to provide 
            the raw engineering facts.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="py-10 text-technical text-steel">ENGINEERING PARAMETER</th>
                  <th className="py-10">
                    <div className="text-xl font-bold text-white font-syne mb-2">SIPs PANEL</div>
                    <div className="text-[10px] text-brass font-dm-mono uppercase">Structural Insulated</div>
                  </th>
                  <th className="py-10">
                    <div className="text-xl font-bold text-white font-syne mb-2">TIMBER FRAME</div>
                    <div className="text-[10px] text-brass font-dm-mono uppercase">Traditional C16/C24</div>
                  </th>
                  <th className="py-10">
                    <div className="text-xl font-bold text-white font-syne mb-2">LIGHT STEEL</div>
                    <div className="text-[10px] text-brass font-dm-mono uppercase">Cold-Rolled Frame</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm font-dm-sans">
                {COMPARISON_DATA.map((row, i) => (
                  <tr key={i} className="border-b border-slate-900 group hover:bg-white/[0.01] transition-colors">
                    <td className="py-10 pr-10 text-white font-bold uppercase tracking-tight w-1/4">
                      {row.feature}
                    </td>
                    <td className="py-10 text-concrete w-1/4">
                      {row.sip}
                    </td>
                    <td className="py-10 text-concrete w-1/4">
                      {row.timber}
                    </td>
                    <td className="py-10 text-concrete w-1/4">
                      {row.steel}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Recommendation Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-slate-900 p-12 border border-slate-800">
            <ThermometerSnowflake className="w-10 h-10 text-brass mb-8" />
            <h3 className="text-xl font-bold text-white font-syne mb-4 uppercase">FOR MAXIMUM EFFICIENCY</h3>
            <p className="text-concrete text-sm leading-relaxed mb-10">
              Choose SIPs if your primary goal is a year-round garden office with minimal heating costs and a rapid on-site build time.
            </p>
            <button className="text-technical text-brass border-b border-brass pb-1">SIPs TECHNICAL GUIDE →</button>
          </div>
          
          <div className="bg-slate-900 p-12 border border-slate-800">
            <Zap className="w-10 h-10 text-brass mb-8" />
            <h3 className="text-xl font-bold text-white font-syne mb-4 uppercase">FOR DESIGN FLEXIBILITY</h3>
            <p className="text-concrete text-sm leading-relaxed mb-10">
              Traditional timber framing allows for complex internal layouts and easier modifications during the build process.
            </p>
            <button className="text-technical text-brass border-b border-brass pb-1">TIMBER FRAME GUIDE →</button>
          </div>
          
          <div className="bg-slate-900 p-12 border border-brass/30">
            <ShieldAlert className="w-10 h-10 text-brass mb-8" />
            <h3 className="text-xl font-bold text-white font-syne mb-4 uppercase">FOR LARGE SPAN BUILDS</h3>
            <p className="text-concrete text-sm leading-relaxed mb-10">
              Steel framing is the superior choice for large-scale cinema rooms or home gyms requiring wide, column-free internal spans.
            </p>
            <button className="text-technical text-brass border-b border-brass pb-1">STEEL FRAME GUIDE →</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
