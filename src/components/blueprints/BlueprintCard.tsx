import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export interface Blueprint {
  id: string;
  slug: string;
  title: string;
  type: string;
  size: string;
  structure: string;
  price: string;
  img: string;
}

export function BlueprintCard({ blueprint }: { blueprint: Blueprint }) {
  return (
    <div className="group bg-slate-900 border border-slate-800 hover:border-brass transition-all duration-300">
      <div className="relative aspect-[4/3] bg-obsidian overflow-hidden border-b border-slate-800 p-8">
        {/* Blueprint-style drawing preview */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-6 h-full w-full">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border-r border-white h-full" />
            ))}
          </div>
          <div className="grid grid-rows-6 h-full w-full absolute inset-0">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border-b border-white w-full" />
            ))}
          </div>
        </div>
        
        <div className="relative z-10 w-full h-full border border-steel/20 flex flex-col justify-center items-center">
          <div className="w-2/3 h-1/2 border border-brass/40" />
          <div className="text-[8px] font-dm-mono text-steel mt-4 uppercase">PLAN VIEW PREVIEW</div>
        </div>
        
        <Image
          src={blueprint.img}
          alt={blueprint.title}
          fill
          className="object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-700"
        />
      </div>

      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-[10px] font-dm-mono bg-slate-800 text-steel px-2 py-1 uppercase">{blueprint.type}</span>
          <span className="text-[10px] font-dm-mono bg-slate-800 text-steel px-2 py-1 uppercase">{blueprint.structure}</span>
          <span className="text-[10px] font-dm-mono bg-slate-800 text-steel px-2 py-1 uppercase">{blueprint.size}</span>
        </div>

        <h3 className="text-xl font-bold text-white font-syne uppercase mb-6 group-hover:text-brass transition-colors leading-tight">
          {blueprint.title}
        </h3>

        <ul className="flex flex-col gap-2 mb-8">
          {["Floor plan & elevations", "Materials schedule", "Foundation specification"].map(item => (
            <li key={item} className="flex items-center gap-2 text-xs text-concrete font-dm-sans">
              <Check className="w-3 h-3 text-brass" />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-6 border-t border-slate-800">
          <div className="text-2xl font-bold text-white font-syne">{blueprint.price}</div>
          <Link
            href={`/blueprints/${blueprint.slug}`}
            className="text-technical text-brass font-bold group-hover:translate-x-1 transition-transform"
          >
            PREVIEW & DOWNLOAD →
          </Link>
        </div>
      </div>
    </div>
  );
}
