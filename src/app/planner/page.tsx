"use client";

import { useState, useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChevronRight, ChevronLeft, Check, LayoutGrid, Ruler, Settings, TrendingUp, Sparkles } from "lucide-react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Step = 1 | 2 | 3 | 4 | 5;

const BUILD_TYPES = [
  "Garden Office", "Man Cave", "Bar Room", "Home Gym",
  "Music Studio", "Cinema Room", "Workshop", "Games Room"
];

const SYSTEMS = [
  "Underfloor Heating", "Air Conditioning", "Acoustic Insulation",
  "Smart Lighting", "Solar Power", "Plumbing / WC", "High-speed Internet"
];

export default function BuildPlannerPage() {
  const [step, setStep] = useState<Step>(1);
  const [buildType, setBuildType] = useState("");
  const [width, setWidth] = useState(4);
  const [depth, setDepth] = useState(3);
  const [selectedSystems, setSelectedSystems] = useState<string[]>([]);
  const [specLevel, setSpecLevel] = useState("mid");
  const containerRef = useRef<HTMLDivElement>(null);

  const nextStep = () => setStep(s => (s < 5 ? (s + 1) as Step : s));
  const prevStep = () => setStep(s => (s > 1 ? (s - 1) as Step : s));

  const toggleSystem = (sys: string) => {
    setSelectedSystems(prev => 
      prev.includes(sys) ? prev.filter(s => s !== sys) : [...prev, sys]
    );
  };

  const totalPrice = (width * depth) * (specLevel === "budget" ? 800 : specLevel === "mid" ? 1200 : 1800) + (selectedSystems.length * 500);

  return (
    <main className="min-h-screen bg-obsidian">
      <Navbar />

      <section className="pt-40 pb-20 bg-obsidian">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-16">
               <div className="flex justify-between mb-4">
                 {[1, 2, 3, 4, 5].map(i => (
                   <div key={i} className={`text-[10px] font-dm-mono tracking-widest ${step >= i ? "text-brass" : "text-steel"}`}>
                     STEP 0{i}
                   </div>
                 ))}
               </div>
               <div className="h-1 bg-slate-800 w-full relative">
                 <div 
                   className="h-full bg-brass transition-all duration-700 ease-out" 
                   style={{ width: `${((step - 1) / 4) * 100}%` }}
                 />
               </div>
            </div>

            {/* Step 1: Build Type */}
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-4xl font-bold text-white font-syne uppercase mb-4 flex items-center gap-4">
                  <LayoutGrid className="text-brass" /> Select Your Build Type.
                </h1>
                <p className="text-concrete text-lg mb-12">What is the primary purpose of your new space?</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {BUILD_TYPES.map(type => (
                    <button
                      key={type}
                      onClick={() => setBuildType(type)}
                      className={`p-10 border text-center transition-all ${buildType === type ? "bg-brass text-obsidian border-brass" : "bg-slate-900 text-white border-slate-800 hover:border-steel"}`}
                    >
                      <div className="text-[10px] font-dm-mono tracking-widest uppercase">{type}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Size */}
            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-4xl font-bold text-white font-syne uppercase mb-4 flex items-center gap-4">
                  <Ruler className="text-brass" /> Define Dimensions.
                </h1>
                <p className="text-concrete text-lg mb-12">Set the footprint of your build. Live area: {width * depth}m²</p>
                <div className="space-y-12 bg-slate-900 p-12 border border-slate-800">
                  <div>
                    <label className="text-technical text-brass mb-8 block">WIDTH: {width}M</label>
                    <input type="range" min="2" max="10" value={width} onChange={(e) => setWidth(parseInt(e.target.value))} className="w-full accent-brass h-1 bg-obsidian" />
                  </div>
                  <div>
                    <label className="text-technical text-brass mb-8 block">DEPTH: {depth}M</label>
                    <input type="range" min="2" max="10" value={depth} onChange={(e) => setDepth(parseInt(e.target.value))} className="w-full accent-brass h-1 bg-obsidian" />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Systems */}
            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-4xl font-bold text-white font-syne uppercase mb-4 flex items-center gap-4">
                  <Settings className="text-brass" /> Configure Systems.
                </h1>
                <p className="text-concrete text-lg mb-12">Select the technical requirements for your build.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SYSTEMS.map(sys => (
                    <button
                      key={sys}
                      onClick={() => toggleSystem(sys)}
                      className={`p-6 border text-left transition-all flex justify-between items-center ${selectedSystems.includes(sys) ? "bg-brass/10 border-brass text-brass" : "bg-slate-900 text-white border-slate-800 hover:border-steel"}`}
                    >
                      <span className="text-technical font-bold uppercase">{sys}</span>
                      {selectedSystems.includes(sys) && <Check className="w-4 h-4" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Spec Level */}
            {step === 4 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-4xl font-bold text-white font-syne uppercase mb-4 flex items-center gap-4">
                  <TrendingUp className="text-brass" /> Specification Level.
                </h1>
                <p className="text-concrete text-lg mb-12">Choose the quality level for finishes and materials.</p>
                <div className="grid grid-cols-1 gap-10">
                  {[
                    { id: "budget", label: "BUDGET (£)", desc: "Functional materials, standard finishes, focused on value." },
                    { id: "mid", label: "MID-RANGE (££)", desc: "High-quality architectural finishes, energy-efficient spec." },
                    { id: "premium", label: "PREMIUM (£££)", desc: "Passivhaus standard, bespoke cladding, smart-home integration." }
                  ].map(lvl => (
                    <button
                      key={lvl.id}
                      onClick={() => setSpecLevel(lvl.id)}
                      className={`p-10 border text-left transition-all flex items-center justify-between ${specLevel === lvl.id ? "bg-brass text-obsidian border-brass" : "bg-slate-900 text-white border-slate-800 hover:border-steel"}`}
                    >
                      <div>
                        <div className="text-technical font-bold text-lg mb-2">{lvl.label}</div>
                        <div className="opacity-80 text-sm max-w-md">{lvl.desc}</div>
                      </div>
                      {specLevel === lvl.id && <Check className="w-6 h-6" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Results */}
            {step === 5 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="text-center mb-16">
                  <Sparkles className="w-12 h-12 text-brass mx-auto mb-8" />
                  <h1 className="text-5xl font-bold text-white font-syne uppercase mb-4">Your Build Plan.</h1>
                  <p className="text-concrete text-lg">We've generated a configuration based on your requirements.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                   <div className="bg-slate-900 border border-slate-800 p-12">
                      <h4 className="text-technical text-brass mb-20">CONFIG SUMMARY</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between border-b border-slate-800 pb-4">
                           <span className="text-steel">TYPE</span>
                           <span className="text-white font-bold">{buildType || "NOT SELECTED"}</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-800 pb-4">
                           <span className="text-steel">FOOTPRINT</span>
                           <span className="text-white font-bold">{width}M X {depth}M ({width * depth}M²)</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-800 pb-4">
                           <span className="text-steel">SYSTEMS</span>
                           <span className="text-white font-bold">{selectedSystems.length} SELECTED</span>
                        </div>
                        <div className="flex justify-between">
                           <span className="text-steel">SPEC</span>
                           <span className="text-white font-bold uppercase">{specLevel}</span>
                        </div>
                      </div>
                   </div>
                   <div className="bg-brass p-12 flex flex-col justify-center items-center text-center">
                      <h4 className="text-technical text-obsidian/70 mb-4">ESTIMATED INVESTMENT</h4>
                      <div className="text-5xl font-extrabold text-obsidian font-syne mb-2 tracking-tighter">
                        £{totalPrice.toLocaleString()}
                      </div>
                      <p className="text-obsidian/60 text-xs font-dm-mono uppercase tracking-widest">Base build cost estimate</p>
                   </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-brass text-obsidian py-6 text-technical font-bold hover:bg-amber transition-all">
                    SAVE PLAN TO MY ACCOUNT
                  </button>
                  <button className="flex-1 border border-brass text-brass py-6 text-technical font-bold hover:bg-brass hover:text-obsidian transition-all">
                    DOWNLOAD PDF SPECS
                  </button>
                </div>
              </div>
            )}

            {/* Controls */}
            {step < 5 && (
              <div className="mt-20 flex justify-between">
                <button
                  onClick={prevStep}
                  disabled={step === 1}
                  className="flex items-center gap-2 text-technical text-steel hover:text-white transition-colors disabled:opacity-0"
                >
                  <ChevronLeft className="w-4 h-4" /> PREVIOUS STEP
                </button>
                <button
                  onClick={nextStep}
                  disabled={step === 1 && !buildType}
                  className="bg-brass text-obsidian px-10 py-5 text-technical font-bold hover:bg-amber transition-all flex items-center gap-2 disabled:opacity-30"
                >
                  NEXT STEP <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
