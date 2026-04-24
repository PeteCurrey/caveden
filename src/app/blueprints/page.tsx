"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlueprintCard, Blueprint } from "@/components/blueprints/BlueprintCard";
import { Search, Filter } from "lucide-react";

const MOCK_BLUEPRINTS: Blueprint[] = [
  { id: "1", slug: "4x3m-garden-office-timber-frame", title: "4x3m Garden Office — Timber Frame", type: "GARDEN OFFICE", size: "12m²", structure: "TIMBER FRAME", price: "£18.00", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" },
  { id: "2", slug: "5x4m-man-cave-sip-build", title: "5x4m Man Cave — SIP Build", type: "MAN CAVE", size: "20m²", structure: "SIP PANEL", price: "£24.00", img: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop" },
  { id: "3", slug: "3x3m-bar-room-timber-frame", title: "3x3m Bar Room — Timber Frame", type: "BAR ROOM", size: "9m²", structure: "TIMBER FRAME", price: "£15.00", img: "https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=2070&auto=format&fit=crop" },
  { id: "4", slug: "6x4m-home-gym-timber-frame", title: "6x4m Home Gym — Timber Frame", type: "HOME GYM", size: "24m²", structure: "TIMBER FRAME", price: "£22.00", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" },
  { id: "5", slug: "4x4m-music-studio-acoustic-spec", title: "4x4m Music Studio — Acoustic Spec", type: "MUSIC STUDIO", size: "16m²", structure: "TIMBER FRAME", price: "£28.00", img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop" },
  { id: "6", slug: "8x5m-workshop-heavy-duty", title: "8x5m Workshop — Heavy Duty", type: "WORKSHOP", size: "40m²", structure: "TIMBER FRAME", price: "£35.00", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" },
];

export default function BlueprintsLibraryPage() {
  const [filterType, setFilterType] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlueprints = MOCK_BLUEPRINTS.filter(bp => {
    const matchesType = filterType === "ALL" || bp.type === filterType;
    const matchesSearch = bp.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <main className="h-full bg-obsidian">
      <Navbar />

      <section className="pt-40 pb-20 bg-obsidian border-b border-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-technical text-brass mb-4 block">ARCHITECTURAL PLANS</span>
            <h1 className="text-[clamp(38px,5vw,68px)] font-bold text-white font-syne uppercase mb-20 leading-tight">
              Blueprint Library.
            </h1>
            <p className="text-xl text-concrete font-dm-sans leading-relaxed">
              Professional, dimensioned plans for every garden building scenario. 
              Each pack includes floor plans, elevations, section drawings, and 
              a full materials schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[80px] z-30 bg-obsidian/95 backdrop-blur-md border-b border-slate-800 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex gap-4 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {["ALL", "GARDEN OFFICE", "MAN CAVE", "BAR ROOM", "HOME GYM", "WORKSHOP"].map(type => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`text-[10px] font-dm-mono px-4 py-2 border transition-all whitespace-nowrap ${filterType === type ? "bg-brass text-obsidian border-brass" : "bg-transparent text-steel border-slate-700 hover:border-steel"}`}
              >
                {type}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search blueprints..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-brass transition-colors"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-steel" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredBlueprints.length > 0 ? (
              filteredBlueprints.map((bp) => (
                <BlueprintCard key={bp.id} blueprint={bp} />
              ))
            ) : (
              <div className="col-span-full py-40 text-center border border-dashed border-slate-800">
                <p className="text-steel font-dm-sans">No blueprints found matching your criteria.</p>
                <button onClick={() => {setFilterType("ALL"); setSearchQuery("");}} className="text-brass text-technical mt-4">RESET FILTERS</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blueprint Quality CTA */}
      <section className="bg-slate-900 py-48 border-y border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white font-syne uppercase mb-20">What's in the box?</h2>
              <p className="text-concrete mb-10 leading-relaxed">
                When you purchase a CaveDen blueprint, you're getting more than just a drawing. 
                You're getting a complete engineering package designed for confidence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-technical text-brass mb-2">ARCHITECTURAL VIEWS</h4>
                  <p className="text-steel text-sm">Elevations, floor plans and section drawings at 1:50 or 1:20 scale.</p>
                </div>
                <div>
                  <h4 className="text-technical text-brass mb-2">MATERIALS SCHEDULE</h4>
                  <p className="text-steel text-sm">Itemised list of every timber, panel, and fixing required with SKU references.</p>
                </div>
                <div>
                  <h4 className="text-technical text-brass mb-2">BUILD SEQUENCE</h4>
                  <p className="text-steel text-sm">Step-by-step logic flow for the construction process.</p>
                </div>
                <div>
                  <h4 className="text-technical text-brass mb-2">PD COMPLIANCE</h4>
                  <p className="text-steel text-sm">Specific notes on how the build complies with UK permitted development.</p>
                </div>
              </div>
            </div>
            <div className="aspect-[4/3] bg-obsidian border border-slate-800 p-12 relative overflow-hidden">
               <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2000&auto=format&fit=crop')] bg-cover grayscale" />
               <div className="relative z-10 w-full h-full border-2 border-brass/30 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl font-bold text-brass font-syne block mb-4">PDF</span>
                    <span className="text-technical text-white tracking-widest">VECTOR OPTIMIZED</span>
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
