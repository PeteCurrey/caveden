"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const BUILDS = [
  { name: "THE DIRECTORS CUT", type: "GARDEN OFFICE", spec: "6x4m Timber Frame", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" },
  { name: "THE LOCKDOWN LEGACY", type: "MAN CAVE", spec: "5x4m SIP Build", img: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop" },
  { name: "THE ALEHOUSE", type: "BAR ROOM", spec: "4x3m with Full Bar", img: "https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=2070&auto=format&fit=crop" },
  { name: "THE IRON HORSE", type: "WORKSHOP", spec: "8x5m Steel Frame", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" },
];

export function CommunityShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".showcase-card", {
      y: 40,
      
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
    });
  }, { scope: containerRef });

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
