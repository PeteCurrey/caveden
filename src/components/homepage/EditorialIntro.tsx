"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function EditorialIntro() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".gsap-reveal", {
      y: 60,
      
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-obsidian py-[150px] lg:py-[200px] relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="lg:w-3/5 relative z-10">
          <h2 className="gsap-reveal text-[clamp(38px,5vw,68px)] font-bold text-white mb-20 font-syne leading-tight">
            This Isn't a Shed Shop.
          </h2>
          <p className="gsap-reveal text-xl md:text-2xl text-concrete font-dm-sans leading-relaxed max-w-2xl mb-12">
            Forget the flat-pack tongue-and-groove from the garden 
            centre. We're here for the builds that run underfloor 
            heating off a smart thermostat, insulate to passivhaus 
            standard, and look like an architect specified them.
          </p>
          <p className="gsap-reveal text-lg text-steel font-dm-sans leading-relaxed max-w-2xl">
            This is engineering. This is craft. This is your space — 
            done properly.
          </p>

          <div className="flex gap-16 mt-16">
            <div className="gsap-reveal">
              <div className="text-6xl font-bold text-brass font-syne mb-2">11</div>
              <div className="text-technical text-steel">Build systems covered in depth</div>
            </div>
            <div className="gsap-reveal">
              <div className="text-6xl font-bold text-brass font-syne mb-2">400+</div>
              <div className="text-technical text-steel">Programmatic guide pages</div>
            </div>
          </div>
        </div>

        <div className="lg:w-2/5 relative">
          <div className="relative aspect-[3/4] w-full bg-slate-900 border border-slate-700 overflow-hidden gsap-reveal">
            <Image
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop"
              alt="Build detail"
              fill
              className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
