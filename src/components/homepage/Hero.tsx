"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax effect on image
    gsap.to(imageRef.current, {
      y: 100,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
      },
    });

    // Content reveal
    gsap.from(contentRef.current?.children || [], {
      y: 40,
      
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.5,
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-obsidian">
      {/* Background Image with Parallax */}
      <div ref={imageRef} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <div className="absolute inset-0 bg-gradient-to-tr from-obsidian via-obsidian/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-obsidian/40 z-10" />
        <Image
          src="/images/hero-main.png"
          alt="Bespoke CaveDen architectural garden office"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 min-h-screen flex flex-col justify-center pt-32 pb-20">
        <div ref={contentRef} className="max-w-3xl">
          <span className="text-technical text-brass mb-8 md:mb-12 block tracking-widest">
            THE GARDEN BUILD AUTHORITY
          </span>
          
          <h1 className="text-[clamp(48px,8vw,104px)] font-extrabold text-white leading-tight tracking-[-0.03em] mb-8 md:mb-12 font-syne uppercase">
            BUILD YOUR<br />SPACE.
          </h1>
          
          <p className="text-xl md:text-2xl text-concrete mb-10 md:mb-16 leading-relaxed font-dm-sans max-w-2xl">
            Blueprints, build systems, community and curated gear 
            for garden offices, man caves and outdoor rooms — 
            engineered to a standard you'll be proud of for decades.
          </p>
          
          <div className="flex flex-wrap gap-6 md:gap-12 mb-12 md:mb-16">
            <Link
              href="/planner"
              className="bg-brass text-obsidian px-10 py-5 text-technical font-bold hover:bg-amber transition-all transform hover:-translate-y-1"
            >
              START PLANNING →
            </Link>
            <Link
              href="/systems"
              className="border border-brass text-brass px-10 py-5 text-technical font-bold hover:bg-brass hover:text-obsidian transition-all transform hover:-translate-y-1"
            >
              EXPLORE BUILD SYSTEMS
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-12 pt-12 border-t border-white/10">
            <div>
              <div className="text-2xl font-bold text-white mb-1 font-syne">11</div>
              <div className="text-technical text-steel">Build Systems Covered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1 font-syne">120+</div>
              <div className="text-technical text-steel">Architect Blueprints</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1 font-syne">EXPERT</div>
              <div className="text-technical text-steel">Technical Guides</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="w-[1px] h-12 bg-gradient-to-b from-brass to-transparent animate-bounce" />
      </div>
    </section>
  );
}
