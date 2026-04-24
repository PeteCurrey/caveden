"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ChevronRight, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Step = 1 | 2 | 3 | 4;

export function PlanningChecker() {
  const [propertyType, setPropertyType] = useState<string>("");
  const [isConservation, setIsConservation] = useState<boolean | null>(null);
  const [boundaryDistance, setBoundaryDistance] = useState<string>("");
  const [buildHeight, setBuildHeight] = useState<string>("");
  const [result, setResult] = useState<"permitted" | "review" | "denied" | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const calculateResult = () => {
    if (propertyType === "Flat/Apartment" || propertyType === "Listed Building") {
      setResult("denied");
      return;
    }

    if (isConservation) {
      setResult("review");
      return;
    }

    if (buildHeight === "Over 3m") {
      setResult("denied");
      return;
    }

    if (boundaryDistance === "<1m" && buildHeight === "2.5–3m") {
      setResult("review");
      return;
    }

    setResult("permitted");
  };

  useGSAP(() => {
    gsap.from(".planning-content > *", {
      x: -40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
    });

    gsap.from(".planning-card", {
      x: 40,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-obsidian py-32 border-t border-slate-900 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-32">
        <div className="lg:w-1/2 planning-content">
          <span className="text-technical text-brass mb-4 block">PLANNING INTELLIGENCE</span>
          <h2 className="text-[clamp(28px,3.5vw,46px)] font-bold text-white font-syne uppercase mb-20 leading-tight">
            Know Before You<br />Break Ground.
          </h2>
          <p className="text-xl text-concrete font-dm-sans leading-relaxed mb-10">
            UK permitted development rules for garden buildings — 
            explained clearly. No jargon. No guesswork. 
            Check your build in 60 seconds.
          </p>

          <div className="flex flex-col gap-10">
            {[
              "Full UK Permitted Development Guide",
              "Conservation Area Rules",
              "Scotland & Wales Rules",
              "Certificate of Lawfulness — What It Is & When You Need It"
            ].map(link => (
              <Link key={link} href="/planning" className="group flex items-center justify-between text-white font-dm-sans py-4 border-b border-slate-800 hover:text-brass transition-colors">
                <span>{link}</span>
                <ChevronRight className="w-5 h-5 text-brass transform group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="planning-card bg-slate-900 border border-brass/30 p-10 relative">
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-white font-syne uppercase mb-1">Quick PD Check</h3>
              <p className="text-technical text-steel">ENGLAND — PERMITTED DEVELOPMENT</p>
            </div>

            <div className="space-y-8">
              {/* Q1 */}
              <div>
                <label className="text-technical text-concrete mb-4 block">01 / Property type?</label>
                <div className="grid grid-cols-2 gap-4">
                  {["House", "Flat/Apartment", "Listed Building"].map(type => (
                    <button
                      key={type}
                      onClick={() => setPropertyType(type)}
                      className={`px-4 py-3 text-technical border transition-all ${propertyType === type ? "bg-brass text-obsidian border-brass" : "bg-obsidian text-concrete border-slate-700 hover:border-steel"}`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q2 */}
              <div>
                <label className="text-technical text-concrete mb-4 block">02 / In conservation area / National Park?</label>
                <div className="flex gap-4">
                  {[true, false].map(val => (
                    <button
                      key={val.toString()}
                      onClick={() => setIsConservation(val)}
                      className={`px-8 py-3 text-technical border transition-all ${isConservation === val ? "bg-brass text-obsidian border-brass" : "bg-obsidian text-concrete border-slate-700 hover:border-steel"}`}
                    >
                      {val ? "YES" : "NO"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q3 */}
              <div>
                <label className="text-technical text-concrete mb-4 block">03 / Distance from boundary?</label>
                <select
                  value={boundaryDistance}
                  onChange={(e) => setBoundaryDistance(e.target.value)}
                  className="w-full bg-obsidian border border-slate-700 px-4 py-3 text-technical text-white focus:outline-none focus:border-brass"
                >
                  <option value="">Select distance...</option>
                  <option value="<1m">&lt; 1m</option>
                  <option value="1–2m">1–2m</option>
                  <option value=">2m">&gt; 2m</option>
                </select>
              </div>

              {/* Q4 */}
              <div>
                <label className="text-technical text-concrete mb-4 block">04 / Proposed build height?</label>
                <select
                  value={buildHeight}
                  onChange={(e) => setBuildHeight(e.target.value)}
                  className="w-full bg-obsidian border border-slate-700 px-4 py-3 text-technical text-white focus:outline-none focus:border-brass"
                >
                  <option value="">Select height...</option>
                  <option value="Under 2.5m">Under 2.5m</option>
                  <option value="2.5–3m">2.5–3m</option>
                  <option value="Over 3m">Over 3m</option>
                </select>
              </div>

              <button
                onClick={calculateResult}
                disabled={!propertyType || isConservation === null || !boundaryDistance || !buildHeight}
                className="w-full bg-brass text-obsidian py-5 text-technical font-bold hover:bg-amber transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                CHECK NOW
              </button>
            </div>

            {/* Results Panel */}
            {result && (
              <div className="absolute inset-0 bg-slate-900 p-10 flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
                {result === "permitted" && (
                  <>
                    <CheckCircle className="w-16 h-16 text-brass mb-8" />
                    <h3 className="text-2xl font-bold text-white font-syne mb-2 uppercase">LIKELY PERMITTED</h3>
                    <p className="text-concrete mb-20 max-w-sm">Your build is likely permitted development based on standard English rules.</p>
                    <Link href="/planning" className="text-technical text-brass border-b border-brass pb-1">DOWNLOAD COMPLIANCE CHECKLIST →</Link>
                  </>
                )}
                {result === "review" && (
                  <>
                    <AlertTriangle className="w-16 h-16 text-amber mb-8" />
                    <h3 className="text-2xl font-bold text-white font-syne mb-2 uppercase">REVIEW REQUIRED</h3>
                    <p className="text-concrete mb-20 max-w-sm">Some aspects need professional checking, particularly regarding conservation status or heights.</p>
                    <Link href="/planning" className="text-technical text-brass border-b border-brass pb-1">READ FULL GUIDE →</Link>
                  </>
                )}
                {result === "denied" && (
                  <>
                    <Info className="w-16 h-16 text-steel mb-8" />
                    <h3 className="text-2xl font-bold text-white font-syne mb-2 uppercase">PERMISSION REQUIRED</h3>
                    <p className="text-concrete mb-20 max-w-sm">A full planning application is likely required for this project type or property.</p>
                    <Link href="/planning" className="text-technical text-brass border-b border-brass pb-1">GUIDE TO THE PROCESS →</Link>
                  </>
                )}
                <button
                  onClick={() => setResult(null)}
                  className="mt-12 text-[10px] font-dm-mono text-steel uppercase tracking-widest hover:text-white transition-colors"
                >
                  START OVER
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
