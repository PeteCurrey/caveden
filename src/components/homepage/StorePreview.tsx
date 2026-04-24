"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const PRODUCTS = [
  {
    id: 1,
    name: "Herschel Select XL Infrared Heater",
    brand: "HERSCHEL",
    spec: "1800W | IP55 | Timer",
    price: "£285.00",
    badge: "BUILD ESSENTIAL",
    img: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Victron SmartSolar MPPT 100/30",
    brand: "VICTRON ENERGY",
    spec: "30A | Bluetooth | 12/24V",
    price: "£189.00",
    badge: "OFF-GRID POWER",
    img: "https://images.unsplash.com/photo-1592833159155-c62df1b35624?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Fakro DRL Flat Roof Window",
    brand: "FAKRO",
    spec: "80x80cm | Double-glazed | Low-E",
    price: "£340.00",
    badge: "EDITOR'S PICK",
    img: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=2000&auto=format&fit=crop"
  },
];

export function StorePreview() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".product-card", {
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
    <section ref={containerRef} className="bg-obsidian py-48 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-technical text-brass mb-4 block">THE CAVEDEN STORE</span>
            <h2 className="text-[clamp(28px,3.5vw,46px)] font-bold text-white font-syne uppercase">Curated Kit for Serious Builds.</h2>
          </div>
          <Link href="/store" className="text-technical text-brass hover:text-white transition-colors border-b border-brass pb-1 mb-2">
            BROWSE FULL STORE →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="product-card group cursor-pointer">
              <div className="relative aspect-square bg-slate-900 border border-slate-800 overflow-hidden mb-8">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-dm-mono bg-brass text-obsidian px-2 py-1 tracking-widest font-bold">
                    {product.badge}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 border-0 group-hover:border-[1px] border-brass transition-all duration-300 pointer-events-none" />
              </div>

              <div className="flex flex-col">
                <span className="text-technical text-steel mb-2">{product.brand}</span>
                <h3 className="text-xl font-bold text-white font-syne mb-1 group-hover:text-brass transition-colors">
                  {product.name}
                </h3>
                <p className="text-technical text-concrete mb-4">{product.spec}</p>
                <div className="text-2xl font-bold text-white font-syne">{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
