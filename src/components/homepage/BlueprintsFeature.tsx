"use client";

import { useRef } from "react";
import Link from "next/link";
import { Check, Download, FileText } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function BlueprintsFeature() {
  const containerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".blueprint-content > *", {
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

    gsap.from(visualRef.current, {
      x: 100,
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
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-32">
        <div className="lg:w-[55%] blueprint-content">
          <span className="text-technical text-brass mb-4 block">BLUEPRINTS & DOCUMENTS</span>
          <h2 className="text-[clamp(28px,3.5vw,46px)] font-bold text-white font-syne uppercase mb-20 leading-tight">
            Build With Precision.<br />Not Guesswork.
          </h2>
          <p className="text-xl text-concrete font-dm-sans leading-relaxed mb-10 max-w-xl">
            Every blueprint is produced to architectural standard — 
            fully dimensioned floor plans, elevation drawings, 
            materials schedules, foundation specifications and 
            build sequences. Download, print, build with confidence.
          </p>

          <ul className="flex flex-col gap-4 mb-12">
            {[
              "Fully dimensioned floor plans & elevations",
              "Materials schedule with supplier notes",
              "Foundation & groundworks specification",
              "Permitted development compliance checklist"
            ].map(item => (
              <li key={item} className="flex items-center gap-3 text-white font-dm-sans">
                <div className="w-5 h-5 bg-brass flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-obsidian" />
                </div>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-12">
            <div>
              <div className="text-technical text-steel mb-1">PRICE RANGE</div>
              <div className="text-2xl font-bold text-white font-syne">FROM £12.00</div>
            </div>
            <Link href="/blueprints" className="bg-brass text-obsidian px-8 py-4 text-technical font-bold hover:bg-amber transition-all">
              BROWSE ALL BLUEPRINTS →
            </Link>
          </div>
        </div>

        <div className="lg:w-[45%] relative">
          <div ref={visualRef} className="relative aspect-square bg-slate-900 border border-slate-800 p-12 overflow-hidden">
            {/* Architectural Drawing Mockup */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-12 h-full w-full">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="border-r border-white h-full" />
                ))}
              </div>
              <div className="grid grid-rows-12 h-full w-full absolute inset-0">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="border-b border-white w-full" />
                ))}
              </div>
            </div>

            <div className="relative z-10 w-full h-full border border-brass/30 p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <div className="w-32 h-[1px] bg-brass" />
                  <div className="w-24 h-[1px] bg-brass" />
                </div>
                <div className="text-technical text-brass">DOC_ID: CV-4X3-TF</div>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-full h-full border border-steel/20">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-3/5 border-2 border-brass/50" />
                  <div className="absolute top-[20%] left-[10%] text-[8px] font-dm-mono text-steel uppercase">Elevation A-A</div>
                  <div className="absolute bottom-[20%] right-[10%] text-[8px] font-dm-mono text-steel uppercase">Plan View</div>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-800 flex items-center justify-center border border-slate-700">
                    <FileText className="w-6 h-6 text-brass" />
                  </div>
                  <div className="w-12 h-12 bg-slate-800 flex items-center justify-center border border-slate-700">
                    <Download className="w-6 h-6 text-brass" />
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-technical text-steel">FILE FORMAT</div>
                  <div className="text-technical text-white">VECTOR PDF</div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute top-8 right-8 bg-brass text-obsidian px-3 py-1 text-[10px] font-bold tracking-widest z-20">
              ARCHITECT GRADE
            </div>
            <div className="absolute bottom-8 left-8 bg-slate-800 border border-slate-700 text-white px-4 py-2 flex items-center gap-2 z-20">
              <span className="w-2 h-2 rounded-full bg-brass animate-pulse" />
              <span className="text-technical text-[10px]">INSTANT DOWNLOAD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
