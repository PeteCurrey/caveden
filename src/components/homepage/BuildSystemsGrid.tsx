"use client";

import { useRef } from "react";
import Link from "next/link";


const SYSTEMS = [
  { id: "01", name: "FOUNDATIONS & GROUNDWORKS", desc: "Concrete slabs, ground screws, timber frame bases and drainage — every foundation type compared and specified." },
  { id: "02", name: "TIMBER FRAME CONSTRUCTION", desc: "The most common build method, done properly from sole plate to ridge beam." },
  { id: "03", name: "SIP PANEL BUILDS", desc: "Structural insulated panels: faster, stronger, better insulated." },
  { id: "04", name: "ROOFING & WEATHERPROOFING", desc: "Flat roof EPDM, felt, standing seam metal — each method specified." },
  { id: "05", name: "INSULATION & VENTILATION", desc: "U-values, vapour barriers, cold bridges and breathability." },
  { id: "06", name: "ELECTRICAL & LIGHTING", desc: "Consumer units, circuits, Part P compliance and smart control." },
  { id: "07", name: "HEATING & HVAC", desc: "Infrared, air source heat pumps, underfloor heating — year-round comfort." },
  { id: "08", name: "INTERIOR & FIT-OUT", desc: "Stud walls, boarding, skirting, flooring and the finishing details." },
  { id: "09", name: "CLADDING & EXTERIOR", desc: "Timber, composite, metal cladding — performance and aesthetics." },
  { id: "10", name: "WINDOWS & GLAZING", desc: "Aluminium bifolding, casement, rooflights and structural glass." },
  { id: "11", name: "LANDSCAPING & DECKING", desc: "Connecting the build to the garden properly." },
];

export function BuildSystemsGrid() {
  const containerRef = useRef<HTMLDivElement>(null);



  return (
    <section ref={containerRef} className="bg-obsidian py-[150px] lg:py-[200px] border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-technical text-brass mb-4 block">BUILD SYSTEMS</span>
            <h2 className="text-[clamp(28px,3.5vw,46px)] font-bold text-white font-syne uppercase">Every System. Covered in Depth.</h2>
          </div>
          <Link href="/systems" className="text-technical text-brass hover:text-white transition-colors border-b border-brass pb-1 mb-2">
            EXPLORE ALL SYSTEMS →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SYSTEMS.map((system) => (
            <Link
              key={system.id}
              href={`/systems/${system.name.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
              className="system-card group bg-slate-900 p-10 border border-slate-800 hover:border-brass transition-all duration-300"
            >
              <div className="text-4xl font-dm-mono text-steel group-hover:text-brass transition-colors mb-20">
                {system.id} /
              </div>
              <h3 className="text-xl font-bold text-white font-syne mb-4 uppercase leading-tight group-hover:text-brass transition-colors">
                {system.name}
              </h3>
              <p className="text-concrete text-sm leading-relaxed mb-20 font-dm-sans">
                {system.desc}
              </p>
              <span className="text-technical text-brass flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                EXPLORE DEEP-DIVE →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
