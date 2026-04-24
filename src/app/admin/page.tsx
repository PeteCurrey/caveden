"use client";

import { 
  Users, 
  TrendingUp, 
  Clock, 
  ArrowUpRight, 
  MessageSquare,
  FileText,
  ShoppingBag
} from "lucide-react";

const STATS = [
  { label: "TOTAL LEADS", val: "1,284", change: "+12.5%", icon: Users, color: "text-brass" },
  { label: "ARCHITECT CHATS", val: "4,912", change: "+24.8%", icon: MessageSquare, color: "text-blue-400" },
  { label: "PLAN DOWNLOADS", val: "412", change: "+5.2%", icon: FileText, color: "text-green-400" },
  { label: "STORE REVENUE", val: "£42.5k", change: "+18.3%", icon: ShoppingBag, color: "text-amber-400" },
];

const RECENT_LEADS = [
  { name: "John Doe", intent: "Garden Office", status: "New", time: "2m ago" },
  { name: "Sarah Smith", intent: "Music Studio", status: "In AI Chat", time: "15m ago" },
  { name: "Mike Johnson", intent: "Man Cave", status: "Plan Downloaded", time: "1h ago" },
  { name: "Emily Brown", intent: "Gym Room", status: "Quote Sent", time: "3h ago" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-10">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white font-syne uppercase">Admin Dashboard</h1>
          <p className="text-steel mt-2 font-dm-sans">Real-time intelligence from the CaveDen platform.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-slate-900 border border-slate-800 px-6 py-2.5 text-technical text-white hover:bg-slate-800 transition-colors">
            EXPORT REPORTS
          </button>
          <button className="bg-brass text-obsidian px-6 py-2.5 text-technical font-bold hover:bg-amber transition-colors">
            VIEW LIVE SITE
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-slate-900 p-8 border border-slate-800 group hover:border-brass/30 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 bg-slate-800 ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-1 text-green-400 text-xs font-dm-mono">
                <TrendingUp className="w-3 h-3" />
                {stat.change}
              </div>
            </div>
            <div className="text-technical text-steel mb-1">{stat.label}</div>
            <div className="text-3xl font-bold text-white font-syne">{stat.val}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Leads */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-10">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-xl font-bold text-white font-syne uppercase">Recent Intent Leads</h3>
            <button className="text-technical text-brass hover:text-white transition-colors border-b border-brass pb-1">
              VIEW ALL LEADS
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-technical text-steel border-b border-slate-800">
                  <th className="pb-6">NAME</th>
                  <th className="pb-6">INTENT</th>
                  <th className="pb-6">STATUS</th>
                  <th className="pb-6">TIME</th>
                  <th className="pb-6 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="text-sm font-dm-sans">
                {RECENT_LEADS.map((lead, i) => (
                  <tr key={i} className="border-b border-slate-800/50 group hover:bg-white/[0.02]">
                    <td className="py-6 text-white font-bold">{lead.name}</td>
                    <td className="py-6 text-concrete">{lead.intent}</td>
                    <td className="py-6">
                      <span className="bg-brass/10 text-brass px-3 py-1 text-[10px] font-dm-mono uppercase">
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-6 text-steel">{lead.time}</td>
                    <td className="py-6 text-right">
                      <button className="p-2 text-steel hover:text-brass transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* System Health */}
        <div className="bg-slate-900 border border-slate-800 p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white font-syne uppercase mb-2">Platform Health</h3>
            <p className="text-steel text-sm font-dm-sans mb-10">All systems are operational.</p>
            
            <div className="space-y-8">
              {[
                { name: "CLAUDE 3.5 API", status: "Normal", latency: "1.2s" },
                { name: "SUPABASE DB", status: "Optimal", latency: "42ms" },
                { name: "STRIPE GATEWAY", status: "Live", latency: "120ms" },
                { name: "IMAGE OPTIMIZER", status: "Active", latency: "240ms" }
              ].map(sys => (
                <div key={sys.name} className="flex items-center justify-between">
                  <div>
                    <div className="text-white text-sm font-bold">{sys.name}</div>
                    <div className="text-xs text-steel font-dm-mono">{sys.latency}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-green-500 font-dm-mono uppercase">{sys.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 p-6 bg-obsidian border border-slate-800">
            <div className="text-technical text-brass mb-2">QUICK TIP</div>
            <p className="text-xs text-concrete leading-relaxed">
              Claude detected a 15% increase in user intent for "Acoustic Insulation" this week. Consider featuring an article on soundproofing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
