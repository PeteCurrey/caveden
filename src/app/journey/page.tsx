import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2, Circle, Clock, Camera, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";

const PHASES = [
  { name: "Planning & Permissions", status: "completed", tasks: ["Check PD compliance", "Submit Lawful Development Certificate", "Consult structural engineer"] },
  { name: "Design & Blueprints", status: "completed", tasks: ["Select build type", "Purchase 4x3m Timber Frame blueprint", "Customise materials schedule"] },
  { name: "Groundworks & Foundation", status: "current", tasks: ["Mark out site", "Install ground screws", "Verify level and drainage"] },
  { name: "Structure", status: "upcoming", tasks: ["Erect sole plate", "Build wall frames", "Install roof joists"] },
  { name: "Roofing & Weatherproofing", status: "upcoming", tasks: ["Apply EPDM membrane", "Install fascia and soffits", "Fit breather membrane"] },
  { name: "Insulation & Electrics", status: "upcoming", tasks: ["First-fix electrics", "Install PIR insulation", "Fit vapour barrier"] },
  { name: "Interior Fit-out", status: "upcoming", tasks: ["Board walls and ceiling", "Plaster and paint", "Install flooring"] },
  { name: "Exterior & Landscaping", status: "upcoming", tasks: ["Install timber cladding", "Build decking", "External lighting"] },
];

export default function BuildJourneyPage() {
  const currentPhase = PHASES.find(p => p.status === "current");
  const progress = (PHASES.filter(p => p.status === "completed").length / PHASES.length) * 100;

  return (
    <main className="min-h-screen bg-obsidian">
      <Navbar />

      <section className="pt-40 pb-20 bg-obsidian">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
             {/* Left: Progress Sidebar */}
             <div className="lg:w-1/3 bg-slate-900 border border-slate-800 p-10 sticky top-32">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <span className="text-technical text-brass mb-2 block">YOUR BUILD JOURNEY</span>
                    <h2 className="text-2xl font-bold text-white font-syne uppercase">4x3m Garden Office</h2>
                  </div>
                  <div className="text-technical text-brass font-bold">{Math.round(progress)}%</div>
                </div>
                
                <div className="h-1 bg-obsidian w-full mb-10 relative">
                  <div className="h-full bg-brass" style={{ width: `${progress}%` }} />
                </div>

                <div className="space-y-6">
                  {PHASES.map((phase, i) => (
                    <div key={phase.name} className="flex gap-4 group">
                      <div className="flex flex-col items-center">
                         {phase.status === "completed" ? (
                           <CheckCircle2 className="w-5 h-5 text-brass" />
                         ) : phase.status === "current" ? (
                           <Clock className="w-5 h-5 text-brass animate-pulse" />
                         ) : (
                           <Circle className="w-5 h-5 text-steel" />
                         )}
                         {i < PHASES.length - 1 && (
                           <div className={`w-[1px] h-10 my-2 ${phase.status === "completed" ? "bg-brass" : "bg-slate-800"}`} />
                         )}
                      </div>
                      <div>
                        <h4 className={`text-sm font-bold font-syne uppercase ${phase.status === "upcoming" ? "text-steel" : "text-white"}`}>
                          {phase.name}
                        </h4>
                        <span className="text-[10px] font-dm-mono text-steel uppercase">{phase.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
             </div>

             {/* Right: Active Phase Content */}
             <div className="lg:w-2/3">
                <div className="bg-slate-900 border border-brass/20 p-12 mb-32">
                   <span className="text-technical text-brass mb-4 block">ACTIVE PHASE</span>
                   <h1 className="text-4xl font-bold text-white font-syne uppercase mb-20">{currentPhase?.name}</h1>
                   
                   <div className="space-y-6 mb-32">
                      {currentPhase?.tasks.map(task => (
                        <div key={task} className="flex items-center gap-4 bg-obsidian/50 p-6 border border-slate-800 group cursor-pointer hover:border-brass transition-colors">
                           <div className="w-6 h-6 border border-slate-700 flex items-center justify-center shrink-0 group-hover:border-brass transition-colors">
                              {/* Checkbox logic here */}
                           </div>
                           <span className="text-concrete font-dm-sans">{task}</span>
                        </div>
                      ))}
                   </div>

                   <div className="flex flex-col md:flex-row gap-4 pt-12 border-t border-slate-800">
                      <button className="flex-1 bg-slate-800 text-white py-4 text-technical font-bold flex items-center justify-center gap-3 hover:bg-slate-700 transition-colors">
                         <Camera className="w-5 h-5 text-brass" /> ADD PHOTO LOG
                      </button>
                      <button className="flex-1 bg-slate-800 text-white py-4 text-technical font-bold flex items-center justify-center gap-3 hover:bg-slate-700 transition-colors">
                         <FileText className="w-5 h-5 text-brass" /> VIEW PHASE SPECS
                      </button>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="bg-slate-900 border border-slate-800 p-8">
                      <h4 className="text-technical text-white mb-8">RECOMMENDED GUIDE</h4>
                      <div className="aspect-video bg-obsidian mb-4 relative overflow-hidden group">
                         <div className="absolute inset-0 bg-brass/20 group-hover:bg-brass/40 transition-colors" />
                         <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-technical text-white font-bold">SYSTEM 01 GUIDE →</span>
                         </div>
                      </div>
                      <h5 className="text-white font-bold mb-2">Groundworks Deep-Dive</h5>
                      <p className="text-steel text-sm">Everything you need to know about installing ground screws correctly.</p>
                   </div>
                   <div className="bg-slate-900 border border-slate-800 p-8">
                      <h4 className="text-technical text-white mb-8">PHASE EQUIPMENT</h4>
                      <div className="space-y-4">
                         {[1, 2].map(i => (
                           <div key={i} className="flex gap-4 items-center group cursor-pointer">
                              <div className="w-16 h-16 bg-obsidian shrink-0" />
                              <div>
                                 <div className="text-xs font-bold text-white group-hover:text-brass transition-colors">LASER LEVEL PRO-40</div>
                                 <div className="text-[10px] text-steel">£120.00 | SHOP NOW</div>
                              </div>
                           </div>
                         ))}
                      </div>
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
