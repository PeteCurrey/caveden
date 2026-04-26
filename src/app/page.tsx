"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- DATA ARRAYS ---
const BUILD_TYPES = [
  { name: "Garden Office", desc: "The professional workspace", tag: "FROM 12m²", img: "/images/build-office.png" },
  { name: "Man Cave", desc: "Your rules. Your space.", tag: "CUSTOM SIZE", img: "/images/build-mancave.png" },
  { name: "Bar Room", desc: "Entertain properly", tag: "FROM 15m²", img: "/images/hero-main.png" },
  { name: "Home Gym", desc: "Train without the commute", tag: "FROM 10m²", img: "/images/build-gym.png" },
];

const SYSTEMS = [
  { id: "01", name: "FOUNDATIONS & GROUNDWORKS", desc: "Concrete slabs, ground screws, timber frame bases and drainage — every foundation type compared and specified." },
  { id: "02", name: "TIMBER FRAME CONSTRUCTION", desc: "The most common build method, done properly from sole plate to ridge beam." },
  { id: "03", name: "SIP PANEL BUILDS", desc: "Structural insulated panels: faster, stronger, better insulated." },
  { id: "04", name: "ROOFING & WEATHERPROOFING", desc: "Flat roof EPDM, felt, standing seam metal — each method specified." },
  { id: "05", name: "INSULATION & VENTILATION", desc: "U-values, vapour barriers, cold bridges and breathability." },
  { id: "06", name: "ELECTRICAL & LIGHTING", desc: "Consumer units, circuits, Part P compliance and smart control." },
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

  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reveal Animations
    const reveals = gsap.utils.toArray('.gsap-reveal');
    reveals.forEach((elem: any) => {
      gsap.fromTo(elem, 
        { y: 50, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
          }
        }
      );
    });

    // Horizontal Scroll
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const horizontalLength = trackRef.current?.scrollWidth || 0;
      const windowWidth = window.innerWidth;
      
      gsap.to(trackRef.current, {
        x: -(horizontalLength - windowWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${horizontalLength}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      ctx.revert();
    };
  }, []);

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
          style={{ background: "linear-gradient(to top, rgba(250,247,242,0.95) 0%, rgba(250,247,242,0.6) 50%, rgba(250,247,242,0.2) 100%)" }}
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-5 md:px-8 text-center pt-20">
          <div className="max-w-[1000px] mx-auto flex flex-col items-center gsap-reveal">
            <div className="flex items-center gap-3 mb-8">
              <span className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.2em]">THE GARDEN BUILD AUTHORITY</span>
            </div>
            
            <h1 className="font-syne font-extrabold text-[#1A1A1A] leading-[0.9] tracking-[-0.03em] mb-8 text-[clamp(64px,10vw,128px)] uppercase">
              BUILD YOUR SPACE.
            </h1>
            
            <p className="font-dm-sans text-[18px] text-[#3D3D3D] leading-[1.75] max-w-[680px] mx-auto mb-12">
              Blueprints, build systems, community and curated gear for garden offices, man caves and outdoor rooms — engineered to a standard you'll be proud of for decades.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/planner" className="bg-[#8B6F47] text-[#FAF7F2] font-dm-mono text-[12px] uppercase tracking-[0.15em] px-10 py-4 hover:bg-[#6B5436] transition-colors">
                START PLANNING →
              </Link>
              <Link href="/systems" className="bg-[#FAF7F2] border border-[#8B6F47] text-[#8B6F47] font-dm-mono text-[12px] uppercase tracking-[0.15em] px-10 py-4 hover:bg-[#8B6F47] hover:text-[#FAF7F2] transition-colors">
                EXPLORE BUILD SYSTEMS
              </Link>
            </div>
          </div>
          
          <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-12 sm:gap-24 px-8 border-t border-[#D4CFC7] pt-8 max-w-[1000px] mx-auto gsap-reveal" style={{ animationDelay: '0.2s' }}>
            <div className="text-center">
              <span className="font-syne font-bold text-[32px] text-[#1A1A1A]">11</span>
              <span className="font-dm-mono text-[10px] text-[#6B6B6B] uppercase tracking-[0.15em] block mt-1">Build Systems</span>
            </div>
            <div className="text-center">
              <span className="font-syne font-bold text-[32px] text-[#1A1A1A]">120+</span>
              <span className="font-dm-mono text-[10px] text-[#6B6B6B] uppercase tracking-[0.15em] block mt-1">Blueprints</span>
            </div>
            <div className="text-center">
              <span className="font-syne font-bold text-[32px] text-[#1A1A1A]">EXPERT</span>
              <span className="font-dm-mono text-[10px] text-[#6B6B6B] uppercase tracking-[0.15em] block mt-1">Technical Guides</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 - THIS ISN'T A SHED SHOP */}
      <section className="bg-[#F2EDE5] py-[120px] md:py-[180px] px-5 md:px-8 border-t border-[#D4CFC7] text-center">
        <div className="max-w-[800px] mx-auto flex flex-col items-center gsap-reveal">
            <span className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.2em] mb-6 block">ENGINEERING AUTHORITY</span>
            <h2 className="font-syne font-bold text-[#1A1A1A] text-[clamp(40px,5vw,72px)] leading-[1.1] tracking-[-0.02em] mb-10">
              This Isn't a Shed Shop.
            </h2>
            <p className="font-dm-sans text-[20px] text-[#3D3D3D] leading-[1.8] mb-8">
              Forget the flat-pack tongue-and-groove from the garden centre. We're here for the builds that run underfloor heating off a smart thermostat, insulate to passivhaus standard, and look like an architect specified them.
            </p>
            <p className="font-dm-sans text-[20px] text-[#3D3D3D] leading-[1.8] mb-12">
              This is engineering. This is craft. This is your space — done properly.
            </p>
            <div className="h-[1px] bg-[#D4CFC7] w-full max-w-[200px] my-10" />
            <div className="font-dm-mono text-[11px] text-[#6B6B6B] uppercase tracking-widest">
              PART OF THE AVORRIA NETWORK · UK-BUILT PLATFORM · 2026
            </div>
        </div>
      </section>

      {/* SECTION 03 - BUILD TYPES (HORIZONTAL SCROLL) */}
      <section ref={containerRef} className="relative overflow-hidden bg-[#FAF7F2]">
        <div ref={trackRef} className="flex flex-nowrap w-fit h-screen">
          
          <div className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center text-center px-8 bg-[#FAF7F2]">
            <div className="gsap-reveal max-w-[800px] mx-auto">
              <span className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.2em] mb-8 block">BUILD TYPES</span>
              <h2 className="font-syne font-bold text-[#1A1A1A] text-[clamp(48px,8vw,100px)] leading-[1.0] mb-8">
                Choose Your Build.
              </h2>
              <p className="font-dm-sans text-[20px] text-[#3D3D3D]">
                Scroll to explore structural types.
              </p>
              <div className="mt-16 animate-pulse">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mx-auto text-[#8B6F47]"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
              </div>
            </div>
          </div>

          {BUILD_TYPES.map((type, i) => (
            <div key={i} className="w-screen h-screen flex-shrink-0 flex flex-col lg:flex-row relative bg-[#FAF7F2]">
              <div className="w-full lg:w-[55%] h-[40%] lg:h-full relative overflow-hidden">
                <Image src={type.img} alt={type.name} fill className="object-cover" sizes="60vw" />
              </div>
              <div className="w-full lg:w-[45%] h-[60%] lg:h-full flex flex-col justify-center p-12 md:p-24 lg:p-32 bg-[#F2EDE5]">
                <span className="font-dm-mono text-[12px] text-[#6B6B6B] mb-12 uppercase tracking-[0.2em]">0{i+1} / 0{BUILD_TYPES.length}</span>
                <span className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.15em] mb-6 block">{type.tag}</span>
                <h2 className="font-syne font-bold text-[#1A1A1A] text-[clamp(40px,5vw,72px)] leading-[1.1] mb-8">
                  {type.name}
                </h2>
                <p className="font-dm-sans text-[20px] text-[#3D3D3D] mb-16 leading-[1.75]">
                  {type.desc}
                </p>
                <Link href={`/build-types/${type.name.toLowerCase().replace(" ", "-")}`} className="font-dm-mono text-[12px] font-bold text-[#8B6F47] uppercase tracking-[0.15em] hover:text-[#6B5436] transition-colors inline-block w-fit pb-1 border-b border-[#8B6F47]">
                  VIEW DEEP-DIVE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 04 - BUILD SYSTEMS */}
      <section className="bg-[#FAF7F2] py-[120px] md:py-[180px] px-5 md:px-8 border-t border-[#D4CFC7]">
        <div className="max-w-[1400px] mx-auto text-center gsap-reveal">
          <span className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.2em] mb-6 block">BUILD SYSTEMS</span>
          <h2 className="font-syne font-bold text-[#1A1A1A] text-[clamp(40px,5vw,72px)] leading-[1.1] mb-16">
            Every System.<br/>Covered in Depth.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {SYSTEMS.map((system) => (
              <Link key={system.id} href={`/systems/${system.name.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`} className="bg-[#FFFFFF] p-12 min-h-[280px] flex flex-col justify-between border border-[#D4CFC7] hover:border-[#8B6F47] hover:shadow-xl transition-all duration-400 group gsap-reveal">
                <div>
                  <div className="font-dm-mono text-[11px] text-[#6B6B6B] uppercase mb-6">{system.id} /</div>
                  <h3 className="font-syne font-semibold text-[24px] text-[#1A1A1A] leading-[1.2] mb-4">{system.name}</h3>
                  <p className="font-dm-sans text-[16px] text-[#3D3D3D] leading-[1.6]">{system.desc}</p>
                </div>
                <div className="mt-10 pt-6 border-t border-[#D4CFC7]">
                  <span className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.12em] group-hover:tracking-[0.18em] transition-all duration-300">
                    EXPLORE DEEP-DIVE →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 text-center gsap-reveal">
            <Link href="/systems" className="bg-[#F2EDE5] border border-[#D4CFC7] text-[#1A1A1A] font-dm-mono text-[12px] uppercase tracking-[0.15em] px-10 py-5 hover:border-[#8B6F47] transition-colors inline-block">
              EXPLORE ALL SYSTEMS
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 05 - BLUEPRINTS */}
      <section className="bg-[#F2EDE5] py-[120px] md:py-[180px] px-5 md:px-8 border-t border-[#D4CFC7]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[100px] items-center">
          <div className="order-2 lg:order-1 gsap-reveal">
            <span className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.2em] mb-6 block">BLUEPRINTS & DOCUMENTS</span>
            <h2 className="font-syne font-bold text-[#1A1A1A] text-[clamp(40px,5vw,72px)] leading-[1.1] mb-8">Build With Precision.<br/>Not Guesswork.</h2>
            <p className="font-dm-sans text-[20px] text-[#3D3D3D] leading-[1.75] max-w-[520px] mb-12">
              Every blueprint is produced to architectural standard — fully dimensioned floor plans, elevation drawings, materials schedules, foundation specifications and build sequences. Download, print, build with confidence.
            </p>
            
            <div className="flex flex-col gap-6 mb-12">
              {["Fully dimensioned floor plans & elevations", "Materials schedule with supplier notes", "Foundation & groundworks specification", "Permitted development compliance checklist"].map(item => (
                <div key={item} className="flex items-start gap-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#8B6F47] shrink-0 mt-1"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
                  <span className="font-dm-sans text-[18px] text-[#1A1A1A]">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="font-dm-mono text-[12px] text-[#6B6B6B] uppercase tracking-[0.12em] mb-8">
              FROM £12.00 · INSTANT PDF DOWNLOAD
            </div>
            
            <Link href="/blueprints" className="bg-[#8B6F47] text-[#FAF7F2] px-10 py-5 font-dm-mono text-[12px] font-bold uppercase tracking-[0.15em] hover:bg-[#6B5436] transition-colors inline-block">
              BROWSE ALL BLUEPRINTS →
            </Link>
          </div>
          
          <div className="order-1 lg:order-2 bg-[#FAF7F2] border border-[#D4CFC7] min-h-[600px] flex flex-col gsap-reveal shadow-2xl">
            <div className="p-8 border-b border-[#D4CFC7] flex justify-between items-start">
              <div>
                <div className="font-dm-mono text-[11px] text-[#6B6B6B]">DOC_ID: CV-4X3-TF</div>
                <div className="font-dm-mono text-[11px] text-[#3D3D3D] mt-1">Elevation A-A</div>
              </div>
              <div className="font-dm-mono text-[10px] bg-[#8B6F47] text-[#FAF7F2] px-3 py-1.5 uppercase">VECTOR PDF</div>
            </div>
            
            <div className="flex-grow p-10 flex items-center justify-center relative overflow-hidden">
              <svg viewBox="0 0 400 300" className="w-[380px] h-[280px] opacity-80">
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
            
            <div className="p-8 md:px-10 border-t border-[#D4CFC7] bg-[#F2EDE5] flex flex-wrap gap-6 items-center">
              <span className="font-dm-mono text-[10px] text-[#6B6B6B] uppercase">ARCHITECT GRADE</span>
              <span className="text-[#6B6B6B] text-[10px]">·</span>
              <span className="font-dm-mono text-[10px] text-[#8B6F47] uppercase">INSTANT DOWNLOAD</span>
              <span className="text-[#6B6B6B] text-[10px]">·</span>
              <span className="font-dm-mono text-[10px] text-[#6B6B6B] uppercase">PDF + DXF</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 - STORE PREVIEW */}
      <section className="bg-[#FAF7F2] py-[120px] md:py-[180px] px-5 md:px-8 border-t border-[#D4CFC7]">
        <div className="max-w-[1400px] mx-auto text-center gsap-reveal">
          <span className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.2em] mb-6 block">THE CAVEDEN STORE</span>
          <h2 className="font-syne font-bold text-[#1A1A1A] text-[clamp(40px,5vw,72px)] leading-[1.1] mb-16">
            Curated Kit.<br/>Serious Builds.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            {PRODUCTS.map(product => (
              <div key={product.id} className="bg-[#FFFFFF] border border-[#D4CFC7] overflow-hidden group hover:border-[#8B6F47] transition-all duration-400 gsap-reveal">
                <div className="relative aspect-square overflow-hidden bg-[#F2EDE5]">
                  <Image src={product.img} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-6 left-6 font-dm-mono text-[10px] uppercase bg-[#8B6F47] text-[#FAF7F2] px-3 py-1.5 z-10">
                    {product.badge}
                  </div>
                </div>
                <div className="p-10">
                  <div className="font-dm-mono text-[11px] text-[#6B6B6B] uppercase tracking-[0.15em] mb-3">{product.brand}</div>
                  <h3 className="font-syne font-semibold text-[24px] text-[#1A1A1A] leading-[1.2] mb-3">{product.name}</h3>
                  <div className="font-dm-mono text-[13px] text-[#3D3D3D] mb-8">{product.spec}</div>
                  <div className="flex justify-between items-center mb-8">
                    <div className="font-syne font-bold text-[28px] text-[#1A1A1A]">{product.price}</div>
                  </div>
                  <div className="pt-6 border-t border-[#D4CFC7]">
                    <button className="font-dm-mono text-[11px] text-[#6B6B6B] uppercase tracking-[0.1em] hover:text-[#8B6F47] transition-colors w-full text-left flex justify-between items-center">
                      ADD TO BUILD LIST
                      <span className="text-[#8B6F47]">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center gsap-reveal">
            <Link href="/store" className="font-dm-mono text-[12px] text-[#8B6F47] uppercase tracking-[0.15em] hover:text-[#6B5436] border-b border-[#8B6F47] pb-1 transition-colors">
              BROWSE FULL STORE
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 07 - PLANNER CTA */}
      <section className="bg-[#8B6F47] py-[120px] md:py-[180px] px-5 md:px-8 text-center">
        <div className="max-w-[800px] mx-auto flex flex-col items-center gsap-reveal">
          <h2 className="font-syne font-bold text-[#FAF7F2] text-[clamp(48px,6vw,80px)] leading-[1] mb-8">
            Plan Your Build.
          </h2>
          <p className="font-dm-sans text-[20px] text-[#FAF7F2]/90 leading-[1.6] mb-12">
            Select your build type. Configure your systems. Generate a materials list and cost estimate — before you spend a penny.
          </p>
          <Link href="/planner" className="bg-[#FAF7F2] text-[#8B6F47] font-dm-mono text-[13px] font-bold uppercase tracking-[0.15em] px-12 py-6 hover:bg-[#FFFFFF] transition-colors">
            LAUNCH BUILD PLANNER
          </Link>
        </div>
      </section>

      {/* SECTION 08 - COMMUNITY SHOWCASE */}
      <section className="bg-[#F2EDE5] py-[120px] md:py-[180px] px-5 md:px-8 border-t border-[#D4CFC7]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center text-center mb-16 gsap-reveal">
            <span className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.2em] mb-6">BUILT BY THE COMMUNITY</span>
            <h2 className="font-syne font-bold text-[#1A1A1A] text-[clamp(40px,5vw,72px)] leading-[1.1] mb-8">Builds That Set the Standard.</h2>
            <Link href="/showcase" className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.15em] border-b border-[#8B6F47] pb-1 hover:text-[#6B5436]">
              VIEW ALL BUILDS
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUILDS.map((build, i) => (
              <div key={build.name} className="relative aspect-[4/5] min-h-[520px] overflow-hidden group cursor-pointer bg-[#FFFFFF] gsap-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <Image src={build.img} alt={build.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105 z-0" />
                <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to top, rgba(250,247,242,0.95) 0%, rgba(250,247,242,0.1) 60%, transparent 100%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-center">
                  <span className="inline-block font-dm-mono text-[10px] text-[#8B6F47] uppercase bg-[#8B6F47]/10 border border-[#8B6F47]/20 px-3 py-1.5 mb-4">
                    {build.type}
                  </span>
                  <h3 className="font-syne font-semibold text-[22px] text-[#1A1A1A] leading-tight">{build.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 09 - PLANNING INTELLIGENCE */}
      <section className="bg-[#FAF7F2] py-[120px] md:py-[180px] px-5 md:px-8 border-t border-[#D4CFC7]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          <div className="gsap-reveal">
            <span className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.2em] mb-6 block">PLANNING INTELLIGENCE</span>
            <h2 className="font-syne font-bold text-[#1A1A1A] text-[clamp(40px,5vw,72px)] leading-[1.1] mb-10">Know Before You Break Ground.</h2>
            <p className="font-dm-sans text-[20px] text-[#3D3D3D] max-w-[500px] mb-16 leading-[1.75]">
              UK permitted development rules for garden buildings — explained clearly. No jargon. No guesswork. Check your build in 60 seconds.
            </p>
            
            <div className="flex flex-col">
              {["Full UK Permitted Development Guide", "Conservation Area Rules", "Scotland & Wales Rules", "Certificate of Lawfulness — What It Is & When You Need It"].map(link => (
                <Link key={link} href="/planning" className="flex items-center gap-6 py-6 border-b border-[#D4CFC7] group">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#8B6F47] shrink-0 transform group-hover:translate-x-2 transition-transform duration-400"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
                  <span className="font-dm-sans text-[18px] text-[#1A1A1A] group-hover:text-[#8B6F47] transition-colors">{link}</span>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="bg-[#FFFFFF] border border-[#D4CFC7] p-10 md:p-16 relative overflow-hidden shadow-xl gsap-reveal">
            <h3 className="font-syne font-semibold text-[32px] text-[#1A1A1A] mb-3">Quick PD Check</h3>
            <div className="font-dm-mono text-[11px] text-[#6B6B6B] uppercase tracking-[0.15em] mb-12">ENGLAND — PERMITTED DEVELOPMENT</div>
            
            <div className="flex flex-col gap-8">
              <div>
                <label className="font-dm-mono text-[11px] text-[#6B6B6B] uppercase tracking-[0.12em] mb-4 block">01 / Property type?</label>
                <div className="flex flex-wrap gap-3">
                  {["House", "Flat/Apartment", "Listed Building"].map(type => (
                    <button 
                      key={type} 
                      onClick={() => setPropertyType(type)}
                      className={`font-dm-mono text-[12px] px-6 py-3 border transition-all duration-300 ${propertyType === type ? 'border-[#8B6F47] text-[#1A1A1A] bg-[#8B6F47]/10' : 'bg-transparent border-[#D4CFC7] text-[#3D3D3D] hover:border-[#6B6B6B]'}`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-dm-mono text-[11px] text-[#6B6B6B] uppercase tracking-[0.12em] mb-4 block">02 / Conservation area / National Park?</label>
                <div className="flex gap-3">
                  {[true, false].map(val => (
                    <button 
                      key={val.toString()} 
                      onClick={() => setIsConservation(val)}
                      className={`font-dm-mono text-[12px] px-10 py-3 border transition-all duration-300 ${isConservation === val ? 'border-[#8B6F47] text-[#1A1A1A] bg-[#8B6F47]/10' : 'bg-transparent border-[#D4CFC7] text-[#3D3D3D] hover:border-[#6B6B6B]'}`}
                    >
                      {val ? "YES" : "NO"}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-dm-mono text-[11px] text-[#6B6B6B] uppercase tracking-[0.12em] mb-4 block">03 / Distance from boundary?</label>
                <div className="relative">
                  <select 
                    value={boundaryDistance} 
                    onChange={e => setBoundaryDistance(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#D4CFC7] text-[#1A1A1A] font-dm-mono text-[14px] p-4 appearance-none focus:outline-none focus:border-[#8B6F47] cursor-pointer"
                  >
                    <option value="">Select distance...</option>
                    <option value="<1m">&lt; 1m</option>
                    <option value="1–2m">1–2m</option>
                    <option value=">2m">&gt; 2m</option>
                  </select>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#8B6F47]"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2"/></svg>
                </div>
              </div>

              <div>
                <label className="font-dm-mono text-[11px] text-[#6B6B6B] uppercase tracking-[0.12em] mb-4 block">04 / Proposed build height?</label>
                <div className="relative">
                  <select 
                    value={buildHeight} 
                    onChange={e => setBuildHeight(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#D4CFC7] text-[#1A1A1A] font-dm-mono text-[14px] p-4 appearance-none focus:outline-none focus:border-[#8B6F47] cursor-pointer"
                  >
                    <option value="">Select height...</option>
                    <option value="Under 2.5m">Under 2.5m</option>
                    <option value="2.5–3m">2.5–3m</option>
                    <option value="Over 3m">Over 3m</option>
                  </select>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#8B6F47]"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2"/></svg>
                </div>
              </div>

              <button 
                onClick={calculateResult}
                className="w-full bg-[#8B6F47] text-[#FAF7F2] font-dm-mono text-[13px] font-bold uppercase p-5 mt-4 hover:bg-[#6B5436] transition-colors"
              >
                CHECK NOW
              </button>
            </div>
            
            {result && (
              <div className={`mt-8 pt-6 px-6 pb-6 border-t border-[#D4CFC7] ${result === 'permitted' ? 'border-l-4 border-l-[#8B6F47]' : result === 'review' ? 'border-l-4 border-l-[#6B5436]' : 'border-l-4 border-l-[#6B6B6B]'}`}>
                {result === 'permitted' && (
                  <>
                    <p className="font-dm-sans text-[16px] text-[#3D3D3D] mb-4">Your build is likely within permitted development.</p>
                    <Link href="/planning" className="font-dm-sans text-[16px] font-medium text-[#8B6F47] hover:underline">Download compliance checklist →</Link>
                  </>
                )}
                {result === 'review' && (
                  <>
                    <p className="font-dm-sans text-[16px] text-[#3D3D3D] mb-4">Some aspects require checking with your LPA.</p>
                    <Link href="/planning" className="font-dm-sans text-[16px] font-medium text-[#8B6F47] hover:underline">Read full guide →</Link>
                  </>
                )}
                {result === 'denied' && (
                  <>
                    <p className="font-dm-sans text-[16px] text-[#3D3D3D] mb-4">A planning application is likely required.</p>
                    <Link href="/planning" className="font-dm-sans text-[16px] font-medium text-[#8B6F47] hover:underline">Guide to the planning process →</Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 10 - BLOG PREVIEW */}
      <section className="bg-[#F2EDE5] py-[120px] md:py-[180px] px-5 md:px-8 border-t border-[#D4CFC7]">
        <div className="max-w-[1400px] mx-auto text-center gsap-reveal">
          <span className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.2em] mb-6 block">FROM THE BUILD DESK</span>
          <h2 className="font-syne font-bold text-[#1A1A1A] text-[clamp(40px,5vw,72px)] leading-[1.1] mb-16">Latest Editorial.</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            {POSTS.map((post, i) => (
              <Link key={post.title} href="/blog" className="bg-[#FFFFFF] border border-[#D4CFC7] hover:border-[#8B6F47] transition-colors duration-400 p-12 flex flex-col group gsap-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex justify-between items-center mb-8">
                  <span className="font-dm-mono text-[10px] text-[#8B6F47] uppercase bg-[#8B6F47]/10 px-3 py-1.5">
                    {post.category}
                  </span>
                  <span className="font-dm-mono text-[11px] text-[#6B6B6B]">{post.date}</span>
                </div>
                <h3 className="font-syne font-semibold text-[24px] text-[#1A1A1A] leading-[1.3] mb-5 group-hover:text-[#8B6F47] transition-colors">
                  {post.title}
                </h3>
                <p className="font-dm-sans text-[16px] text-[#3D3D3D] leading-[1.7] mb-10 flex-grow">
                  {post.excerpt}
                </p>
                <div className="pt-8 border-t border-[#D4CFC7]">
                  <span className="font-dm-mono text-[11px] text-[#8B6F47] uppercase tracking-[0.12em] group-hover:tracking-[0.18em] transition-all duration-300">
                    READ MORE →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 text-center gsap-reveal">
            <Link href="/blog" className="font-dm-mono text-[12px] text-[#8B6F47] uppercase tracking-[0.15em] hover:text-[#6B5436] border-b border-[#8B6F47] pb-1 transition-colors">
              VIEW ALL ARTICLES
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
