import { Check, Lock, Download, FileText, ShieldCheck } from "lucide-react";
import Image from "next/image";

export function BlueprintViewer() {
  return (
    <div className="space-y-12">
      {/* Main Preview */}
      <div className="bg-slate-900 border border-slate-800 p-8 md:p-16 relative overflow-hidden">
        <div className="absolute top-8 left-8 text-technical text-steel">PAGE 01 / 08 — FLOOR PLAN & ELEVATIONS</div>
        <div className="aspect-[4/3] w-full border border-brass/20 relative flex items-center justify-center p-8">
          <div className="w-full h-full border border-steel/10 flex flex-col items-center justify-center relative">
            {/* Drawing mockup */}
            <div className="w-3/4 h-1/2 border-2 border-brass/40 relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-dm-mono text-steel uppercase">4000mm</div>
              <div className="absolute top-1/2 -left-12 -translate-y-1/2 -rotate-90 text-[10px] font-dm-mono text-steel uppercase">3000mm</div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 w-3/4">
              <div className="h-20 border border-steel/20" />
              <div className="h-20 border border-steel/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Blurred Previews */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {[2, 3, 4, 5].map(page => (
          <div key={page} className="relative aspect-[3/4] bg-slate-900 border border-slate-800 overflow-hidden group">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-brass/20 to-transparent blur-sm" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <Lock className="w-6 h-6 text-steel mb-2" />
              <span className="text-[10px] font-dm-mono text-steel uppercase">PAGE 0{page} LOCKED</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PurchasePanel() {
  return (
    <div className="bg-slate-900 border border-brass/30 p-8 sticky top-32">
      <div className="mb-8">
        <span className="text-technical text-brass mb-2 block">INSTANT PDF DOWNLOAD</span>
        <div className="text-4xl font-bold text-white font-syne mb-2">£18.00</div>
        <p className="text-steel text-sm font-dm-sans">Secure payment via Stripe. Instant access.</p>
      </div>

      <button className="w-full bg-brass text-obsidian py-5 text-technical font-bold hover:bg-amber transition-all mb-6">
        DOWNLOAD BLUEPRINT →
      </button>

      <div className="space-y-4 mb-10">
        {[
          "Vector PDF format (Lossless scaling)",
          "Printable at A1, A2, or A3",
          "Full materials schedule included",
          "Permitted development checklist"
        ].map(item => (
          <div key={item} className="flex items-center gap-3 text-sm text-concrete">
            <Check className="w-4 h-4 text-brass shrink-0" />
            {item}
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-slate-800">
        <div className="flex items-center gap-3 text-steel mb-4">
          <ShieldCheck className="w-5 h-5 text-brass" />
          <span className="text-technical text-[10px]">100% SATISFACTION GUARANTEED</span>
        </div>
        <div className="flex gap-4 opacity-40">
           <div className="w-10 h-6 bg-white/20" />
           <div className="w-10 h-6 bg-white/20" />
           <div className="w-10 h-6 bg-white/20" />
        </div>
      </div>
    </div>
  );
}
