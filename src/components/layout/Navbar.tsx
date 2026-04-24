"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, Users, ChevronRight, Menu, X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAV_ITEMS = [
  { label: "BUILD TYPES", href: "/build-types", hasMenu: true },
  { label: "BUILD SYSTEMS", href: "/systems", hasMenu: true },
  { label: "BLUEPRINTS", href: "/blueprints", hasMenu: false },
  { label: "STORE", href: "/store", hasMenu: true },
  { label: "TOOLS & PLANNING", href: "/tools", hasMenu: true },
];

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: menuRef });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = contextSafe((label: string) => {
    setActiveMenu(label);
    gsap.to(menuRef.current, {
      height: "auto",
      opacity: 1,
      duration: 0.4,
      ease: "power2.inOut",
      display: "block",
    });
  });

  const closeMenu = contextSafe(() => {
    gsap.to(menuRef.current, {
      height: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => setActiveMenu(null),
    });
  });

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b",
        isScrolled
          ? "backdrop-blur-md bg-obsidian/85 border-slate-700 py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tighter text-white font-syne">
          CAVEDEN
        </Link>

        {/* Primary Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.label}
              onMouseEnter={() => item.hasMenu && openMenu(item.label)}
              onMouseLeave={closeMenu}
              className="relative group"
            >
              <Link
                href={item.href}
                className="text-technical text-white/70 group-hover:text-brass transition-colors py-2"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Nav */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4 text-white/50">
            <Search className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            <Link href="/community" className="hover:text-white transition-colors">
              <Users className="w-5 h-5" />
            </Link>
          </div>
          
          <Link href="/journey" className="hidden lg:block text-technical text-white/70 hover:text-white">
            TRACK MY BUILD
          </Link>
          
          <Link
            href="/planner"
            className="bg-brass text-obsidian px-5 py-2 text-technical font-bold hover:bg-amber transition-colors"
          >
            START PLANNING
          </Link>
          
          <button className="lg:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mega Menu Container */}
      <div
        ref={menuRef}
        className="absolute top-full left-0 w-full bg-obsidian border-b border-slate-700 overflow-hidden hidden opacity-0"
        onMouseEnter={() => activeMenu && openMenu(activeMenu)}
        onMouseLeave={closeMenu}
      >
        <div className="container mx-auto px-6 py-12">
          {activeMenu === "BUILD TYPES" && <BuildTypesMenu />}
          {activeMenu === "BUILD SYSTEMS" && <BuildSystemsMenu />}
          {activeMenu === "STORE" && <StoreMenu />}
          {activeMenu === "TOOLS & PLANNING" && <ToolsMenu />}
        </div>
      </div>
    </header>
  );
}

function BuildTypesMenu() {
  return (
    <div className="flex gap-12">
      <div className="w-[40%]">
        <div className="relative aspect-video bg-slate-800 border border-slate-700 overflow-hidden group">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
          <div className="absolute bottom-6 left-6">
            <h3 className="text-2xl font-bold text-white mb-2">Featured Build Type</h3>
            <p className="text-concrete text-sm mb-4">Explore our most popular garden office layouts.</p>
            <Link href="/build-types/garden-office" className="text-brass flex items-center gap-2 text-sm font-bold">
              VIEW DEEP-DIVE <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[60%] grid grid-cols-3 gap-y-8 gap-x-12">
        {[
          "Garden Office", "Man Cave", "Bar Room", "Home Gym",
          "Music Studio", "Cinema Room", "Workshop", "Games Room",
          "She Shed", "Annexe", "Pub Shed", "Art Studio"
        ].map((type) => (
          <Link key={type} href={`/build-types/${type.toLowerCase().replace(" ", "-")}`} className="group flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-slate-800 flex items-center justify-center group-hover:bg-brass transition-colors">
              <div className="w-4 h-4 border border-concrete group-hover:border-obsidian" />
            </div>
            <span className="text-technical text-white/70 group-hover:text-brass transition-colors">{type}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function BuildSystemsMenu() {
  return (
    <div className="flex gap-12">
      <div className="w-[60%] grid grid-cols-2 gap-y-6">
        {[
          "01 / Foundations & Groundworks",
          "02 / Timber Frame Construction",
          "03 / SIP Panel Builds",
          "04 / Roofing & Weatherproofing",
          "05 / Insulation & Ventilation",
          "06 / Electrical & Lighting",
          "07 / Heating & HVAC",
          "08 / Interior & Fit-out",
          "09 / Cladding & Exterior",
          "10 / Windows & Glazing",
          "11 / Landscaping & Decking"
        ].map((system) => (
          <Link key={system} href="/systems" className="group">
            <h4 className="text-technical text-white group-hover:text-brass transition-colors">{system}</h4>
            <p className="text-steel text-xs mt-1">Professional specs and build guides.</p>
          </Link>
        ))}
      </div>
      <div className="w-[40%] bg-slate-900 p-8 border border-slate-800">
        <h4 className="text-technical text-brass mb-4">ESSENTIAL BLUEPRINT</h4>
        <div className="aspect-[4/3] bg-slate-800 mb-6 flex items-center justify-center">
          <span className="text-steel text-xs uppercase tracking-widest">Blueprint Preview</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">4x3m Garden Office</h3>
        <p className="text-concrete text-sm mb-6">Full architectural plans for timber frame construction.</p>
        <Link href="/blueprints" className="bg-brass text-obsidian px-6 py-3 text-technical font-bold block text-center">
          DOWNLOAD →
        </Link>
      </div>
    </div>
  );
}

function StoreMenu() {
  return (
    <div className="grid grid-cols-3 gap-12">
      <div className="col-span-1">
        <h4 className="text-technical text-brass mb-6">FEATURED PRODUCT</h4>
        <div className="aspect-square bg-slate-800 mb-4" />
        <h3 className="text-lg font-bold text-white">Herschel Infrared Heater</h3>
        <p className="text-concrete text-sm mt-2 mb-4">Energy-efficient heating for outdoor workspaces.</p>
        <Link href="/store" className="text-brass text-sm font-bold hover:underline">SHOP NOW →</Link>
      </div>
      <div className="col-span-1 flex flex-col gap-6">
        <h4 className="text-technical text-steel mb-2">CATEGORIES</h4>
        {[
          "Power & Heating", "Lighting & Electrical", "Windows & Glazing",
          "Roofing & Weatherproofing", "Interior & Furniture", "Tools & Fixings"
        ].map(cat => (
          <Link key={cat} href="/store" className="text-technical text-white/70 hover:text-brass transition-colors">
            {cat}
          </Link>
        ))}
      </div>
      <div className="col-span-1 flex flex-col gap-8">
        <h4 className="text-technical text-steel mb-2">NEW ARRIVALS</h4>
        {[1, 2].map(i => (
          <div key={i} className="flex gap-4 group cursor-pointer">
            <div className="w-20 h-20 bg-slate-800 shrink-0" />
            <div>
              <h5 className="text-white text-sm font-bold group-hover:text-brass transition-colors">Victron SmartSolar MPPT</h5>
              <p className="text-brass text-sm mt-1">£189.00</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ToolsMenu() {
  return (
    <div className="grid grid-cols-2 gap-12">
      <div className="flex flex-col gap-8">
        <h4 className="text-technical text-steel mb-4">ENGINEERING TOOLS</h4>
        {[
          { title: "Cost Estimator", desc: "Budget your build accurately" },
          { title: "Planning Checker", desc: "Permitted development in 60 seconds" },
          { title: "Foundation Calculator", desc: "Choose the right base" },
          { title: "Insulation Calculator", desc: "U-value and spec guide" }
        ].map(tool => (
          <Link key={tool.title} href="/tools" className="group">
            <h4 className="text-lg font-bold text-white group-hover:text-brass transition-colors">{tool.title}</h4>
            <p className="text-concrete text-sm">{tool.desc}</p>
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-8">
        <h4 className="text-technical text-steel mb-4">PLANNING GUIDES</h4>
        {[
          "UK Planning Guide", "Scotland Planning", "Building Regs", "Conservation Areas"
        ].map(guide => (
          <Link key={guide} href="/planning" className="flex items-center justify-between group py-2 border-b border-slate-800">
            <span className="text-concrete group-hover:text-white transition-colors">{guide}</span>
            <ChevronRight className="w-4 h-4 text-brass" />
          </Link>
        ))}
        <Link href="/planner" className="mt-4 bg-brass/10 border border-brass text-brass py-4 text-center text-technical font-bold hover:bg-brass hover:text-obsidian transition-all">
          LAUNCH BUILD PLANNER →
        </Link>
      </div>
    </div>
  );
}
