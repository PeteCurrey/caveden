"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Ruler, Shield, Zap, Wind } from "lucide-react";

export function EngineeringAuthority() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".feature-reveal", {
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
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-slate-950 py-32 overflow-hidden border-y border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="lg:w-1/2">
            <span className="text-technical text-brass mb-6 block">ENGINEERING AUTHORITY</span>
            <h2 className="text-[clamp(32px,4.5vw,56px)] font-bold text-white font-syne uppercase leading-none mb-20">
              Beyond the<br />Standard.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { 
                  icon: Ruler, 
                  title: "PRECISION TOLERANCE", 
                  desc: "Our build systems are engineered to ±1.5mm tolerance, ensuring perfect glazing fits and structural longevity." 
                },
                { 
                  icon: Shield, 
                  title: "THERMAL INTEGRITY", 
                  desc: "U-values as low as 0.12 W/m²K. We treat cold-bridging as a structural failure, not a compromise." 
                },
                { 
                  icon: Zap, 
                  title: "ENERGY AUTONOMY", 
                  desc: "Integrated off-grid solar and battery storage specs for complete architectural freedom." 
                },
                { 
                  icon: Wind, 
                  title: "AIR QUALITY", 
                  desc: "Advanced MVHR (Mechanical Ventilation with Heat Recovery) integrated into every core design." 
                }
              ].map((item, i) => (
                <div key={i} className="feature-reveal">
                  <div className="p-3 bg-slate-900 border border-slate-800 w-fit mb-6">
                    <item.icon className="w-5 h-5 text-brass" />
                  </div>
                  <h3 className="text-white font-bold font-syne mb-4 uppercase text-lg">{item.title}</h3>
                  <p className="text-steel text-sm leading-relaxed font-dm-sans">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative aspect-square w-full bg-slate-900 border border-slate-800 overflow-hidden">
              <Image
                src="/images/tech-exploded.png"
                alt="Technical exploded view of CaveDen wall system"
                fill
                className="object-cover opacity-80"
              />
              {/* Hotspot overlays */}
              <div className="absolute top-[20%] left-[30%] group">
                <div className="w-4 h-4 bg-brass rounded-full animate-ping absolute" />
                <div className="w-4 h-4 bg-brass rounded-full relative z-10" />
                <div className="absolute left-6 top-1/2 -translate-y-1/2 w-48 bg-obsidian border border-slate-700 p-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                  <div className="text-[10px] font-dm-mono text-brass uppercase mb-1">VAPOUR BARRIER</div>
                  <div className="text-[9px] text-concrete leading-tight">ISO-Standard moisture management layer.</div>
                </div>
              </div>
              
              <div className="absolute bottom-[40%] right-[25%] group">
                <div className="w-4 h-4 bg-brass rounded-full animate-ping absolute" />
                <div className="w-4 h-4 bg-brass rounded-full relative z-10" />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 w-48 bg-obsidian border border-slate-700 p-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                  <div className="text-[10px] font-dm-mono text-brass uppercase mb-1">PIR INSULATION</div>
                  <div className="text-[9px] text-concrete leading-tight">100mm High-performance rigid foam.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
