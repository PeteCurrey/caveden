"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const BUILD_TYPES = [
  { name: "Garden Office", desc: "The professional workspace", tag: "FROM 12m²", img: "/images/build-office.png" },
  { name: "Man Cave", desc: "Your rules. Your space.", tag: "CUSTOM SIZE", img: "/images/build-mancave.png" },
  { name: "Bar Room", desc: "Entertain properly", tag: "FROM 15m²", img: "/images/hero-main.png" },
  { name: "Home Gym", desc: "Train without the commute", tag: "FROM 10m²", img: "/images/build-gym.png" },
  { name: "Music Studio", desc: "Soundproofed and serious", tag: "ACOUSTIC SPEC", img: "/images/build-studio.png" },
  { name: "Cinema Room", desc: "Immersive, year-round", tag: "DARK ROOM", img: "/images/hero-main.png" },
  { name: "Workshop", desc: "Built for making things", tag: "HEAVY DUTY", img: "/images/hero-main.png" },
  { name: "Games Room", desc: "Go big or go inside", tag: "LARGE SPAN", img: "/images/hero-main.png" },
  { name: "She Shed", desc: "Creative sanctuary", tag: "FROM 8m²", img: "/images/build-studio.png" },
  { name: "Garden Annexe", desc: "Habitable space done right", tag: "BUILD REGS", img: "/images/build-office.png" },
  { name: "Pub Shed", desc: "The neighbourhood favourite", tag: "SOCIAL HUB", img: "/images/build-mancave.png" },
  { name: "Art Studio", desc: "Light, space, focus", tag: "NORTH LIGHT", img: "/images/build-studio.png" },
];

export function BuildTypeNavigator() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".build-card", {
      y: 40,
      opacity: 0,
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
    <section ref={containerRef} className="bg-obsidian py-96 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-technical text-brass mb-4 block">BUILD TYPES</span>
            <h2 className="text-[clamp(28px,3.5vw,46px)] font-bold text-white font-syne uppercase">Choose Your Build.</h2>
          </div>
          <Link href="/build-types" className="text-technical text-brass hover:text-white transition-colors border-b border-brass pb-1 mb-2">
            COMPARE ALL BUILD TYPES →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {BUILD_TYPES.map((type) => (
            <Link
              key={type.name}
              href={`/build-types/${type.name.toLowerCase().replace(" ", "-")}`}
              className="build-card group relative aspect-[4/5] bg-slate-900 overflow-hidden border border-slate-800"
            >
              <Image
                src={type.img}
                alt={type.name}
                fill
                className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-10" />
              
              <div className="absolute top-4 left-4 z-20">
                <span className="text-[10px] font-dm-mono bg-brass text-obsidian px-2 py-1 tracking-widest font-bold">
                  {type.tag}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-20 transform group-hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white font-syne mb-1 uppercase">{type.name}</h3>
                <p className="text-concrete text-sm mb-4 font-dm-sans">{type.desc}</p>
                <span className="text-technical text-brass opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  VIEW DEEP-DIVE →
                </span>
              </div>
              
              <div className="absolute inset-0 border-0 group-hover:border-[1px] border-brass transition-all duration-300 z-30 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
