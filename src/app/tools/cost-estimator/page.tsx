"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChevronLeft, Calculator, Download, PieChart } from "lucide-react";
import Link from "next/link";

export default function CostEstimatorPage() {
  const [size, setSize] = useState(15);
  const [spec, setSpec] = useState("mid");
  const [structure, setStructure] = useState("timber");

  const basePrice = spec === "budget" ? 800 : spec === "mid" ? 1200 : 1800;
  const structureMultiplier = structure === "sip" ? 1.2 : 1;
  const totalCost = size * basePrice * structureMultiplier;

  const breakdown = [
    { label: "Groundworks", val: totalCost * 0.15 },
    { label: "Structure & Sheathing", val: totalCost * 0.35 },
    { label: "Roofing & Weatherproofing", val: totalCost * 0.1 },
    { label: "Insulation & Electrics", val: totalCost * 0.2 },
    { label: "Interior & Exterior Finish", val: totalCost * 0.2 },
  ];

  return (
    <main className="min-h-screen bg-obsidian">
      <Navbar />

      <section className="pt-40 pb-20 bg-obsidian border-b border-slate-900">
        <div className="container mx-auto px-6">
          <Link href="/tools" className="flex items-center gap-2 text-technical text-steel hover:text-brass transition-colors mb-32">
            <ChevronLeft className="w-4 h-4" /> BACK TO TOOLS HUB
          </Link>

          <div className="max-w-3xl">
            <span className="text-technical text-brass mb-4 block">ENGINEERING TOOL 01 /</span>
            <h1 className="text-[clamp(32px,5vw,68px)] font-bold text-white font-syne uppercase mb-20 leading-tight">
              Build Cost Estimator.
            </h1>
            <p className="text-xl text-concrete font-dm-sans leading-relaxed">
              Generate an itemised budget for your garden building based on current 
              UK material costs and labour rates.
            </p>
          </div>
        </div>
      </section>

      <section className="py-80">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-32">
          {/* Inputs */}
          <div className="lg:w-1/2 space-y-12">
            <div>
              <label className="text-technical text-brass mb-8 block">BUILD SIZE ({size}m²)</label>
              <input
                type="range"
                min="5"
                max="50"
                value={size}
                onChange={(e) => setSize(parseInt(e.target.value))}
                className="w-full accent-brass h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-technical text-steel mt-4">
                <span>5M²</span>
                <span>50M²</span>
              </div>
            </div>

            <div>
              <label className="text-technical text-brass mb-8 block">SPECIFICATION LEVEL</label>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { id: "budget", label: "BUDGET", desc: "Basic spec" },
                  { id: "mid", label: "MID-RANGE", desc: "Professional" },
                  { id: "premium", label: "PREMIUM", desc: "High-end" }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setSpec(item.id)}
                    className={`p-6 border text-left transition-all ${spec === item.id ? "bg-brass text-obsidian border-brass" : "bg-slate-900 text-white border-slate-800 hover:border-steel"}`}
                  >
                    <div className="text-technical font-bold">{item.label}</div>
                    <div className="text-[10px] opacity-70 mt-1">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-technical text-brass mb-8 block">STRUCTURE TYPE</label>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { id: "timber", label: "TIMBER FRAME" },
                  { id: "sip", label: "SIP PANELS" }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setStructure(item.id)}
                    className={`p-6 border text-left transition-all ${structure === item.id ? "bg-brass text-obsidian border-brass" : "bg-slate-900 text-white border-slate-800 hover:border-steel"}`}
                  >
                    <div className="text-technical font-bold">{item.label}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Outputs */}
          <div className="lg:w-1/2">
            <div className="bg-slate-900 border border-brass/30 p-10 sticky top-32">
              <div className="flex justify-between items-start mb-10 border-b border-slate-800 pb-8">
                <div>
                  <h3 className="text-technical text-steel mb-2">ESTIMATED TOTAL</h3>
                  <div className="text-5xl font-bold text-white font-syne tracking-tighter">
                    £{totalCost.toLocaleString()}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-technical text-brass">EST. DURATION</div>
                  <div className="text-lg font-bold text-white font-syne">4 - 6 WEEKS</div>
                </div>
              </div>

              <div className="space-y-6 mb-32">
                {breakdown.map((item) => (
                  <div key={item.label} className="flex justify-between items-end">
                    <span className="text-concrete font-dm-sans text-sm">{item.label}</span>
                    <div className="flex-1 border-b border-dotted border-slate-700 mx-4 mb-1" />
                    <span className="text-white font-dm-mono text-sm">£{item.val.toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-brass text-obsidian py-4 text-technical font-bold hover:bg-amber transition-all flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" /> DOWNLOAD ESTIMATE
                </button>
                <button className="w-16 h-16 bg-slate-800 border border-slate-700 flex items-center justify-center text-white hover:border-brass transition-colors">
                  <PieChart className="w-6 h-6" />
                </button>
              </div>
              
              <p className="text-[10px] text-steel mt-8 text-center uppercase tracking-widest">
                Prices include estimated labour and 20% VAT.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
