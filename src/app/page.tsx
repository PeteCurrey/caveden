"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// --- DATA ARRAYS ---
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

const PRODUCTS = [
  { id: 1, name: "Herschel Select XL Infrared Heater", brand: "HERSCHEL", spec: "1800W | IP55 | Timer", price: "£285.00", badge: "BUILD ESSENTIAL", img: "/images/hero-main.png" },
  { id: 2, name: "Victron SmartSolar MPPT 100/30", brand: "VICTRON ENERGY", spec: "30A | Bluetooth | 12/24V", price: "£189.00", badge: "OFF-GRID POWER", img: "/images/build-studio.png" },
  { id: 3, name: "Fakro DRL Flat Roof Window", brand: "FAKRO", spec: "80x80cm | Double-glazed | Low-E", price: "£340.00", badge: "EDITOR'S PICK", img: "/images/build-office.png" },
];

const BUILDS = [
  { name: "THE DIRECTORS CUT", type: "GARDEN OFFICE", spec: "6x4m Timber Frame", img: "/images/hero-main.png" },
  { name: "THE LOCKDOWN LEGACY", type: "MAN CAVE", spec: "5x4m SIP Build", img: "/images/build-mancave.png" },
  { name: "THE ALEHOUSE", type: "BAR ROOM", spec: "4x3m with Full Bar", img: "/images/build-office.png" },
  { name: "THE IRON HORSE", type: "WORKSHOP", spec: "8x5m Steel Frame", img: "/images/hero-main.png" },
];

const POSTS = [
  { category: "TECHNICAL", title: "Understanding U-Values: Why Your Insulation Spec Matters", excerpt: "Passive house standards aren't just for main homes. Here's how to achieve year-round thermal comfort in a timber frame build.", date: "OCT 12, 2023" },
  { category: "DESIGN", title: "The Physics of Soundproofing a Music Studio", excerpt: "Mass, decoupling, and absorption. The three pillars of acoustic engineering for garden builds explained by the experts.", date: "OCT 08, 2023" },
  { category: "PLANNING", title: "Article 4 Directions: When Permitted Development Doesn't Apply", excerpt: "Check your local authority restrictions before you buy your blueprints. Everything you need to know about Article 4.", date: "OCT 05, 2023" }
];

export default function Home() {
  const [propertyType, setPropertyType] = useState<string>("");
  const [isConservation, setIsConservation] = useState<boolean | null>(null);
  const [boundaryDistance, setBoundaryDistance] = useState<string>("");
  const [buildHeight, setBuildHeight] = useState<string>("");
  const [result, setResult] = useState<"permitted" | "review" | "denied" | null>(null);

  const calculateResult = () => {
    if (propertyType === "Flat/Apartment" || propertyType === "Listed Building") return setResult("denied");
    if (isConservation) return setResult("review");
    if (buildHeight === "Over 3m") return setResult("denied");
    if (boundaryDistance === "<1m" && buildHeight === "2.5–3m") return setResult("review");
    setResult("permitted");
  };

  return (
    <main className="bg-[#FAF7F2] min-h-screen text-[#3D3D3D] font-dm-sans overflow-x-hidden">
      <Navbar />

      {/* SECTION 01 - HERO */}
      <section className="relative min-h-[700px] h-[100vh] w-full bg-[#FAF7F2]">
        <Image src="/images/hero-main.png" alt="Hero" fill className="object-cover z-0" priority />
        <div 
          className="absolute inset-0 z-10"
          style={{ background: "linear-gradient(to top right, rgba(250,247,242,0.85) 0%, rgba(250,247,242,0.5) 50%, rgba(250,247,242,0.1) 100%)" }}
        />
        <div className="absolute bottom-0 left-0 right-0 z-20 pb-[80px] px-5 md:px-8">
          <div className="max-w-[1400px] mx-auto w-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-[#8B6F47]" />
              <span className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.2em]">THE GARDEN BUILD AUTHORITY</span>
            </div>
            
            <h1 className="font-syne font-extrabold text-[#1A1A1A] leading-[0.9] tracking-[-0.03em] mb-8 text-[clamp(64px,10vw,128px)] uppercase">
              BUILD YOUR SPACE.
            </h1>
            
            <p className="font-dm-sans text-[18px] text-[#3D3D3D] leading-[1.75] max-w-[560px] mb-12">
              Blueprints, build systems, community and curated gear for garden offices, man caves and outdoor rooms — engineered to a standard you'll be proud of for decades.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/planner" className="bg-[#8B6F47] text-[#FAF7F2] font-dm-mono text-[12px] uppercase tracking-[0.15em] px-10 py-4 hover:bg-[#6B5436] transition-colors">
                START PLANNING →
              </Link>
              <Link href="/systems" className="bg-transparent border border-[#8B6F47] text-[#8B6F47] font-dm-mono text-[12px] uppercase tracking-[0.15em] px-10 py-4 hover:bg-[#8B6F47] hover:text-[#FAF7F2] transition-colors">
                EXPLORE BUILD SYSTEMS
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-12 mt-16 pt-8 border-t border-[#8B6F47]/20">
              <div>
                <span className="font-syne font-bold text-[28px] text-[#1A1A1A]">11</span>
                <span className="font-dm-mono text-[10px] text-[#6B6B6B] uppercase tracking-[0.15em] block mt-1">/ Build Systems Covered</span>
              </div>
              <div>
                <span className="font-syne font-bold text-[28px] text-[#1A1A1A]">120+</span>
                <span className="font-dm-mono text-[10px] text-[#6B6B6B] uppercase tracking-[0.15em] block mt-1">/ Architect Blueprints</span>
              </div>
              <div>
                <span className="font-syne font-bold text-[28px] text-[#1A1A1A]">EXPERT</span>
                <span className="font-dm-mono text-[10px] text-[#6B6B6B] uppercase tracking-[0.15em] block mt-1">/ Technical Guides</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 right-8 z-20 flex items-center gap-2">
          <span className="font-dm-mono text-[10px] text-[#8B6F47] tracking-widest transform rotate-90 origin-right whitespace-nowrap">SCROLL</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#8B6F47] animate-bounce"><path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2"/></svg>
        </div>
      </section>

      {/* SECTION 02 - THIS ISN'T A SHED SHOP */}
      <section className="bg-[#F2EDE5] py-[80px] md:py-[120px] px-5 md:px-8 border-t border-[#D4CFC7]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
          <div>
            <span className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.2em] mb-6 block">ENGINEERING AUTHORITY</span>
            <h2 className="font-syne font-bold text-[#1A1A1A] text-[clamp(36px,5vw,64px)] leading-[1.1] tracking-[-0.02em] mb-8">
              This Isn't a Shed Shop.
            </h2>
            <div className="flex flex-col gap-5">
              <p className="font-dm-sans text-[18px] text-[#3D3D3D] leading-[1.75] max-w-[520px]">
                Forget the flat-pack tongue-and-groove from the garden centre. We're here for the builds that run underfloor heating off a smart thermostat, insulate to passivhaus standard, and look like an architect specified them.
              </p>
              <p className="font-dm-sans text-[18px] text-[#3D3D3D] leading-[1.75] max-w-[520px]">
                This is engineering. This is craft. This is your space — done properly.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col gap-12 lg:pt-16">
            <div>
              <span className="font-syne font-extrabold text-[#8B6F47] text-[clamp(72px,8vw,96px)] leading-[1] block">11</span>
              <span className="font-dm-sans text-[16px] text-[#3D3D3D] mt-2 block">Build systems covered in depth</span>
            </div>
            <div>
              <span className="font-syne font-extrabold text-[#8B6F47] text-[clamp(72px,8vw,96px)] leading-[1] block">400+</span>
              <span className="font-dm-sans text-[16px] text-[#3D3D3D] mt-2 block">Programmatic guide pages</span>
            </div>
            <div className="h-[1px] bg-[#6B6B6B] w-full my-8 opacity-30" />
            <div className="font-dm-mono text-[11px] text-[#6B6B6B] uppercase tracking-widest">
              PART OF THE AVORRIA NETWORK · UK-BUILT PLATFORM · 2026
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 - BUILD TYPES */}
      <section className="bg-[#FAF7F2] py-[80px] md:py-[120px] px-5 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.2em] mb-6 block">BUILD TYPES</span>
              <h2 className="font-syne font-bold text-[#1A1A1A] text-[clamp(36px,5vw,72px)] leading-[1.1]">Choose Your Build.</h2>
            </div>
            <Link href="/build-types" className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.15em] hover:underline pb-1">
              COMPARE ALL BUILD TYPES →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px]">
            {BUILD_TYPES.map((type) => (
              <Link key={type.name} href={`/build-types/${type.name.toLowerCase().replace(" ", "-")}`} className="relative group overflow-hidden aspect-[3/4] bg-[#FFFFFF] cursor-pointer outline outline-0 hover:outline-1 hover:outline-[#8B6F47] outline-offset-[-1px] transition-all duration-300">
                <Image src={type.img} alt={type.name} fill className="object-cover transition-transform duration-600 group-hover:scale-105 z-0" />
                <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to top, rgba(250,247,242,0.95) 0%, rgba(250,247,242,0.4) 50%, rgba(250,247,242,0.0) 100%)" }} />
                
                <div className="absolute top-4 left-4 z-20 font-dm-mono text-[9px] uppercase tracking-[0.15em] bg-[#8B6F47]/15 border border-[#8B6F47]/40 text-[#8B6F47] px-2 py-1">
                  {type.tag}
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="font-syne font-semibold text-[#1A1A1A] text-[20px] mb-1">{type.name}</h3>
                  <p className="font-dm-sans text-[13px] text-[#3D3D3D] mb-4">{type.desc}</p>
                  <span className="font-dm-mono text-[10px] text-[#8B6F47] uppercase tracking-[0.12em] opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 block">
                    VIEW DEEP-DIVE →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 - BUILD SYSTEMS */}
      <section className="bg-[#F2EDE5] py-[80px] md:py-[120px] px-5 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.2em] mb-6 block">BUILD SYSTEMS</span>
              <h2 className="font-syne font-bold text-[#1A1A1A] text-[clamp(36px,5vw,72px)] leading-[1.1]">Every System. Covered in Depth.</h2>
            </div>
            <Link href="/systems" className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.15em] hover:underline pb-1">
              EXPLORE ALL SYSTEMS →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px]">
            {SYSTEMS.map((system) => (
              <Link key={system.id} href={`/systems/${system.name.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`} className="bg-[#FFFFFF] p-10 min-h-[240px] flex flex-col justify-between border border-[#D4CFC7] hover:border-[#8B6F47] transition-colors duration-300 group">
                <div>
                  <div className="font-dm-mono text-[11px] text-[#6B6B6B] uppercase mb-5">{system.id} /</div>
                  <h3 className="font-syne font-semibold text-[20px] text-[#1A1A1A] leading-[1.2] mb-4">{system.name}</h3>
                  <p className="font-dm-sans text-[15px] text-[#3D3D3D] leading-[1.6]">{system.desc}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-[#D4CFC7]">
                  <span className="font-dm-mono text-[10px] text-[#8B6F47] uppercase tracking-[0.12em] group-hover:tracking-[0.18em] transition-all duration-300">
                    EXPLORE DEEP-DIVE →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 - BLUEPRINTS */}
      <section className="bg-[#FAF7F2] py-[80px] md:py-[120px] px-5 md:px-8 border-t border-[#D4CFC7]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[100px] items-center">
          <div className="order-2 lg:order-1">
            <span className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.2em] mb-6 block">BLUEPRINTS & DOCUMENTS</span>
            <h2 className="font-syne font-bold text-[#1A1A1A] text-[clamp(36px,5vw,72px)] leading-[1.1] mb-8">Build With Precision. Not Guesswork.</h2>
            <p className="font-dm-sans text-[18px] text-[#3D3D3D] leading-[1.75] max-w-[520px] mb-10">
              Every blueprint is produced to architectural standard — fully dimensioned floor plans, elevation drawings, materials schedules, foundation specifications and build sequences. Download, print, build with confidence.
            </p>
            
            <div className="flex flex-col gap-5 mb-10">
              {["Fully dimensioned floor plans & elevations", "Materials schedule with supplier notes", "Foundation & groundworks specification", "Permitted development compliance checklist"].map(item => (
                <div key={item} className="flex items-start gap-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#8B6F47] shrink-0 mt-1"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
                  <span className="font-dm-sans text-[16px] text-[#1A1A1A]">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="font-dm-mono text-[12px] text-[#6B6B6B] uppercase tracking-[0.12em] mb-8">
              FROM £12.00 · INSTANT PDF DOWNLOAD
            </div>
            
            <Link href="/blueprints" className="bg-[#8B6F47] text-[#FAF7F2] px-8 py-4 font-dm-mono text-[12px] font-bold uppercase tracking-[0.15em] hover:bg-[#6B5436] transition-colors inline-block">
              BROWSE ALL BLUEPRINTS →
            </Link>
          </div>
          
          <div className="order-1 lg:order-2 bg-[#F2EDE5] border border-[#D4CFC7] min-h-[500px] flex flex-col">
            <div className="p-8 border-b border-[#D4CFC7] flex justify-between items-start">
              <div>
                <div className="font-dm-mono text-[10px] text-[#6B6B6B]">DOC_ID: CV-4X3-TF</div>
                <div className="font-dm-mono text-[10px] text-[#3D3D3D] mt-1">Elevation A-A</div>
              </div>
              <div className="font-dm-mono text-[9px] bg-[#8B6F47] text-[#FAF7F2] px-2 py-1 uppercase">VECTOR PDF</div>
            </div>
            
            <div className="flex-grow p-10 flex items-center justify-center relative overflow-hidden">
              <svg viewBox="0 0 400 300" className="w-[320px] h-[240px] opacity-80">
                <rect x="50" y="50" width="300" height="200" fill="none" stroke="#3D3D3D" strokeWidth="2" />
                <path d="M50 150 L20 150 M350 150 L380 150 M200 50 L200 20 M200 250 L200 280" stroke="#6B6B6B" strokeWidth="1" />
                <text x="200" y="40" fill="#6B6B6B" fontSize="10" fontFamily="monospace" textAnchor="middle">4000</text>
                <text x="35" y="150" fill="#6B6B6B" fontSize="10" fontFamily="monospace" textAnchor="middle" transform="rotate(-90 35 150)">3000</text>
                <path d="M120 250 A 40 40 0 0 1 160 210 L 160 250 Z" fill="none" stroke="#3D3D3D" strokeWidth="1" strokeDasharray="4 4" />
                <rect x="250" y="45" width="60" height="10" fill="none" stroke="#3D3D3D" strokeWidth="1" />
                <path d="M10 290 L40 290 L25 260 Z" fill="none" stroke="#6B6B6B" strokeWidth="1" />
                <text x="25" y="275" fill="#6B6B6B" fontSize="8" fontFamily="monospace" textAnchor="middle">N</text>
              </svg>
            </div>
            
            <div className="p-6 md:px-8 border-t border-[#D4CFC7] bg-[#FAF7F2] flex flex-wrap gap-6 items-center">
              <span className="font-dm-mono text-[9px] text-[#6B6B6B] uppercase">ARCHITECT GRADE</span>
              <span className="text-[#6B6B6B] text-[8px]">·</span>
              <span className="font-dm-mono text-[9px] text-[#8B6F47] uppercase">INSTANT DOWNLOAD</span>
              <span className="text-[#6B6B6B] text-[8px]">·</span>
              <span className="font-dm-mono text-[9px] text-[#6B6B6B] uppercase">PDF + DXF</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 - STORE PREVIEW */}
      <section className="bg-[#F2EDE5] py-[80px] md:py-[120px] px-5 md:px-8 border-t border-[#D4CFC7]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.2em] mb-6 block">THE CAVEDEN STORE</span>
              <h2 className="font-syne font-bold text-[#1A1A1A] text-[clamp(36px,5vw,72px)] leading-[1.1]">Curated Kit for Serious Builds.</h2>
            </div>
            <Link href="/store" className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.15em] hover:underline pb-1">
              BROWSE FULL STORE →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PRODUCTS.map(product => (
              <div key={product.id} className="bg-[#FFFFFF] overflow-hidden group">
                <div className="relative aspect-square overflow-hidden bg-[#FAF7F2]">
                  <Image src={product.img} alt={product.name} fill className="object-cover transition-transform duration-400 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 font-dm-mono text-[9px] uppercase bg-[#8B6F47] text-[#FAF7F2] px-2 py-1 z-10">
                    {product.badge}
                  </div>
                </div>
                <div className="p-7">
                  <div className="font-dm-mono text-[10px] text-[#6B6B6B] uppercase tracking-[0.15em] mb-2">{product.brand}</div>
                  <h3 className="font-syne font-semibold text-[20px] text-[#1A1A1A] leading-[1.2] mb-2">{product.name}</h3>
                  <div className="font-dm-mono text-[12px] text-[#3D3D3D] mb-5">{product.spec}</div>
                  <div className="flex justify-between items-center">
                    <div className="font-syne font-bold text-[22px] text-[#1A1A1A]">{product.price}</div>
                    <Link href="/store" className="font-dm-mono text-[10px] text-[#8B6F47] uppercase">VIEW →</Link>
                  </div>
                  <div className="mt-5 pt-5 border-t border-[#D4CFC7]">
                    <button className="font-dm-mono text-[10px] text-[#6B6B6B] uppercase tracking-[0.1em] hover:text-[#8B6F47] transition-colors w-full text-left">
                      ADD TO BUILD LIST
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 07 - PLANNER CTA */}
      <section className="bg-[#8B6F47] py-[80px] md:py-[120px] px-5 md:px-8">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          <div>
            <h2 className="font-syne font-bold text-[#FAF7F2] text-[clamp(36px,5vw,60px)] leading-[1] mb-4">Plan Your Build.</h2>
            <p className="font-dm-sans text-[18px] text-[#FAF7F2]/70 leading-[1.6] max-w-[520px]">
              Select your build type. Configure your systems. Generate a materials list and cost estimate — before you spend a penny.
            </p>
          </div>
          <Link href="/planner" className="bg-[#FAF7F2] text-[#8B6F47] font-dm-mono text-[12px] uppercase tracking-[0.15em] px-12 py-5 hover:bg-[#FFFFFF] transition-colors shrink-0">
            LAUNCH BUILD PLANNER →
          </Link>
        </div>
      </section>

      {/* SECTION 08 - COMMUNITY SHOWCASE */}
      <section className="bg-[#FAF7F2] py-[80px] md:py-[120px] px-5 md:px-8 border-t border-[#D4CFC7]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.2em] mb-6 block">BUILT BY THE COMMUNITY</span>
              <h2 className="font-syne font-bold text-[#1A1A1A] text-[clamp(36px,5vw,72px)] leading-[1.1]">Builds That Set the Standard.</h2>
            </div>
            <Link href="/showcase" className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.15em] hover:underline pb-1">
              VIEW ALL BUILDS →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px]">
            {BUILDS.map(build => (
              <div key={build.name} className="relative aspect-[4/5] min-h-[480px] overflow-hidden group cursor-pointer bg-[#F2EDE5]">
                <Image src={build.img} alt={build.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105 z-0" />
                <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to top, rgba(250,247,242,0.9) 0%, rgba(250,247,242,0.1) 60%, transparent 100%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-7 z-20">
                  <span className="inline-block font-dm-mono text-[9px] text-[#8B6F47] uppercase bg-[#8B6F47]/15 border border-[#8B6F47]/30 px-2 py-1 mb-3">
                    {build.type}
                  </span>
                  <h3 className="font-syne font-semibold text-[20px] text-[#1A1A1A] leading-tight">{build.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 09 - PLANNING INTELLIGENCE */}
      <section className="bg-[#F2EDE5] py-[80px] md:py-[120px] px-5 md:px-8 border-t border-[#D4CFC7]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <div>
            <span className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.2em] mb-6 block">PLANNING INTELLIGENCE</span>
            <h2 className="font-syne font-bold text-[#1A1A1A] text-[clamp(36px,5vw,72px)] leading-[1.1] mb-8">Know Before You Break Ground.</h2>
            <p className="font-dm-sans text-[18px] text-[#3D3D3D] max-w-[480px] mb-12">
              UK permitted development rules for garden buildings — explained clearly. No jargon. No guesswork. Check your build in 60 seconds.
            </p>
            
            <div className="flex flex-col">
              {["Full UK Permitted Development Guide", "Conservation Area Rules", "Scotland & Wales Rules", "Certificate of Lawfulness — What It Is & When You Need It"].map(link => (
                <Link key={link} href="/planning" className="flex items-center gap-4 py-5 border-b border-[#D4CFC7] group">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#8B6F47] shrink-0 transform group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
                  <span className="font-dm-sans text-[16px] text-[#1A1A1A] group-hover:text-[#8B6F47] transition-colors">{link}</span>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="bg-[#FFFFFF] border border-[#8B6F47] p-8 md:p-12 relative overflow-hidden">
            <h3 className="font-syne font-semibold text-[24px] text-[#1A1A1A] mb-2">Quick PD Check</h3>
            <div className="font-dm-mono text-[10px] text-[#6B6B6B] uppercase tracking-[0.15em] mb-10">ENGLAND — PERMITTED DEVELOPMENT</div>
            
            <div className="flex flex-col gap-7">
              <div>
                <label className="font-dm-mono text-[10px] text-[#6B6B6B] uppercase tracking-[0.12em] mb-3 block">01 / Property type?</label>
                <div className="flex flex-wrap gap-2">
                  {["House", "Flat/Apartment", "Listed Building"].map(type => (
                    <button 
                      key={type} 
                      onClick={() => setPropertyType(type)}
                      className={`font-dm-mono text-[11px] px-5 py-2.5 border transition-colors ${propertyType === type ? 'border-[#8B6F47] text-[#1A1A1A] bg-[#8B6F47]/10' : 'bg-transparent border-[#D4CFC7] text-[#3D3D3D] hover:border-[#6B6B6B]'}`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-dm-mono text-[10px] text-[#6B6B6B] uppercase tracking-[0.12em] mb-3 block">02 / Conservation area / National Park?</label>
                <div className="flex gap-2">
                  {[true, false].map(val => (
                    <button 
                      key={val.toString()} 
                      onClick={() => setIsConservation(val)}
                      className={`font-dm-mono text-[11px] px-8 py-2.5 border transition-colors ${isConservation === val ? 'border-[#8B6F47] text-[#1A1A1A] bg-[#8B6F47]/10' : 'bg-transparent border-[#D4CFC7] text-[#3D3D3D] hover:border-[#6B6B6B]'}`}
                    >
                      {val ? "YES" : "NO"}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-dm-mono text-[10px] text-[#6B6B6B] uppercase tracking-[0.12em] mb-3 block">03 / Distance from boundary?</label>
                <div className="relative">
                  <select 
                    value={boundaryDistance} 
                    onChange={e => setBoundaryDistance(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#D4CFC7] text-[#1A1A1A] font-dm-mono text-[12px] p-3 appearance-none focus:outline-none focus:border-[#8B6F47]"
                  >
                    <option value="">Select distance...</option>
                    <option value="<1m">&lt; 1m</option>
                    <option value="1–2m">1–2m</option>
                    <option value=">2m">&gt; 2m</option>
                  </select>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#8B6F47]"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2"/></svg>
                </div>
              </div>

              <div>
                <label className="font-dm-mono text-[10px] text-[#6B6B6B] uppercase tracking-[0.12em] mb-3 block">04 / Proposed build height?</label>
                <div className="relative">
                  <select 
                    value={buildHeight} 
                    onChange={e => setBuildHeight(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#D4CFC7] text-[#1A1A1A] font-dm-mono text-[12px] p-3 appearance-none focus:outline-none focus:border-[#8B6F47]"
                  >
                    <option value="">Select height...</option>
                    <option value="Under 2.5m">Under 2.5m</option>
                    <option value="2.5–3m">2.5–3m</option>
                    <option value="Over 3m">Over 3m</option>
                  </select>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#8B6F47]"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2"/></svg>
                </div>
              </div>

              <button 
                onClick={calculateResult}
                className="w-full bg-[#8B6F47] text-[#FAF7F2] font-dm-mono text-[12px] font-bold uppercase p-4 mt-2 hover:bg-[#6B5436] transition-colors"
              >
                CHECK NOW
              </button>
            </div>
            
            {result && (
              <div className={`mt-6 pt-5 px-5 pb-5 border-t border-[#D4CFC7] ${result === 'permitted' ? 'border-l-4 border-l-[#8B6F47]' : result === 'review' ? 'border-l-4 border-l-[#6B5436]' : 'border-l-4 border-l-[#6B6B6B]'}`}>
                {result === 'permitted' && (
                  <>
                    <p className="font-dm-sans text-[15px] text-[#3D3D3D] mb-3">Your build is likely within permitted development.</p>
                    <Link href="/planning" className="font-dm-sans text-[15px] text-[#8B6F47] hover:underline">Download compliance checklist →</Link>
                  </>
                )}
                {result === 'review' && (
                  <>
                    <p className="font-dm-sans text-[15px] text-[#3D3D3D] mb-3">Some aspects require checking with your LPA.</p>
                    <Link href="/planning" className="font-dm-sans text-[15px] text-[#8B6F47] hover:underline">Read full guide →</Link>
                  </>
                )}
                {result === 'denied' && (
                  <>
                    <p className="font-dm-sans text-[15px] text-[#3D3D3D] mb-3">A planning application is likely required.</p>
                    <Link href="/planning" className="font-dm-sans text-[15px] text-[#8B6F47] hover:underline">Guide to the planning process →</Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 10 - BLOG PREVIEW */}
      <section className="bg-[#FAF7F2] py-[80px] md:py-[120px] px-5 md:px-8 border-t border-[#D4CFC7]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.2em] mb-6 block">FROM THE BUILD DESK</span>
              <h2 className="font-syne font-bold text-[#1A1A1A] text-[clamp(36px,5vw,72px)] leading-[1.1]">Latest Editorial.</h2>
            </div>
            <Link href="/blog" className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.15em] hover:underline pb-1">
              VIEW ALL ARTICLES →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {POSTS.map(post => (
              <Link key={post.title} href="/blog" className="bg-[#F2EDE5] border border-[#D4CFC7] hover:border-[#8B6F47] transition-colors duration-300 p-9 flex flex-col group">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-dm-mono text-[9px] text-[#8B6F47] uppercase bg-[#8B6F47]/10 border border-[#8B6F47]/30 px-2.5 py-1">
                    {post.category}
                  </span>
                  <span className="font-dm-mono text-[10px] text-[#6B6B6B]">{post.date}</span>
                </div>
                <h3 className="font-syne font-semibold text-[20px] text-[#1A1A1A] leading-[1.3] mb-4 group-hover:text-[#8B6F47] transition-colors">
                  {post.title}
                </h3>
                <p className="font-dm-sans text-[15px] text-[#3D3D3D] leading-[1.6] mb-7 flex-grow">
                  {post.excerpt}
                </p>
                <div className="pt-6 border-t border-[#D4CFC7]">
                  <span className="font-dm-mono text-[10px] text-[#8B6F47] uppercase tracking-[0.12em]">
                    READ MORE →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
