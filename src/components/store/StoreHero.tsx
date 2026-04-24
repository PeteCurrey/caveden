"use client";

import { useRef } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function StoreHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(contentRef.current?.children || [], {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-[70vh] flex items-center bg-obsidian border-b border-slate-900 overflow-hidden pt-32">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2070&auto=format&fit=crop"
          alt="Premium workshop tools"
          fill
          className="object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={contentRef} className="max-w-3xl">
          <span className="text-technical text-brass mb-6 block">THE CAVEDEN STORE</span>
          <h1 className="text-[clamp(44px,6vw,84px)] font-extrabold text-white leading-tight tracking-tight mb-8 font-syne uppercase">
            Everything Your Build Needs.<br />Nothing It Doesn't.
          </h1>
          <p className="text-xl text-concrete font-dm-sans leading-relaxed mb-12 max-w-xl">
            Editorially curated. Engineer-tested. Build-world approved. 
            Gear that lasts for decades, not seasons.
          </p>
          
          <div className="relative max-w-md group">
            <input
              type="text"
              placeholder="Search equipment, tools & kits..."
              className="w-full bg-slate-900 border border-slate-700 py-5 pl-6 pr-14 text-white font-dm-sans focus:outline-none focus:border-brass transition-colors"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-brass">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
