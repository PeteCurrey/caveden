"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/image";


const BUILDS = [
  { name: "THE DIRECTORS CUT", type: "GARDEN OFFICE", spec: "6x4m Timber Frame", img: "/images/hero-main.png" },
  { name: "THE LOCKDOWN LEGACY", type: "MAN CAVE", spec: "5x4m SIP Build", img: "/images/build-mancave.png" },
  { name: "THE ALEHOUSE", type: "BAR ROOM", spec: "4x3m with Full Bar", img: "/images/build-office.png" },
  { name: "THE IRON HORSE", type: "WORKSHOP", spec: "8x5m Steel Frame", img: "/images/hero-main.png" },
];

export function CommunityShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);



  return (
    <section ref={containerRef} className="bg-obsidian py-[150px] lg:py-[200px] border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-technical text-brass mb-4 block">BUILT BY THE COMMUNITY</span>
            <h2 className="text-[clamp(28px,3.5vw,46px)] font-bold text-white font-syne uppercase">Builds That Set the Standard.</h2>
          </div>
          <button className="text-technical text-brass hover:text-white transition-colors border-b border-brass pb-1 mb-2">
            VIEW ALL BUILDS →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {BUILDS.map((build) => (
            <div
              key={build.name}
              className="showcase-card group relative aspect-[3/4] bg-slate-900 overflow-hidden cursor-pointer"
            >
              <Image
                src={build.img}
                alt={build.name}
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-10" />
              
              <div className="absolute bottom-6 left-6 z-20">
                <span className="text-[10px] font-dm-mono text-brass tracking-widest block mb-2">{build.type}</span>
                <h3 className="text-xl font-bold text-white font-syne uppercase leading-tight group-hover:text-brass transition-colors">
                  {build.name}
                </h3>
              </div>
              
              <div className="absolute inset-0 border-0 group-hover:border-[1px] border-brass transition-all duration-300 z-30 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
