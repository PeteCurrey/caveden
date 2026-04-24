"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  LogOut, 
  ChevronRight, 
  Bell, 
  Search,
  Tool,
  Library
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SIDEBAR_ITEMS = [
  { label: "DASHBOARD", href: "/admin", icon: LayoutDashboard },
  { label: "LEAD CRM", href: "/admin/leads", icon: Users },
  { label: "CONTENT ENGINE", href: "/admin/content", icon: FileText },
  { label: "SYSTEMS HUB", href: "/admin/systems", icon: Settings },
  { label: "BLUEPRINTS", href: "/admin/blueprints", icon: Library },
  { label: "TOOLS ADMIN", href: "/admin/tools", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [activeItem, setActiveItem] = useState("DASHBOARD");

  return (
    <div className="flex h-screen bg-obsidian text-concrete font-dm-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
        <div className="p-8 border-b border-slate-800">
          <Link href="/" className="text-xl font-extrabold tracking-tighter text-white font-syne flex items-center gap-2">
            CAVEDEN <span className="text-[10px] bg-brass text-obsidian px-2 py-0.5 font-dm-mono">ADMIN</span>
          </Link>
        </div>

        <nav className="flex-1 p-6 space-y-2">
          {SIDEBAR_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setActiveItem(item.label)}
              className={cn(
                "flex items-center gap-4 px-4 py-3 text-technical font-bold transition-all group",
                activeItem === item.label 
                  ? "bg-brass text-obsidian" 
                  : "text-steel hover:text-white hover:bg-slate-800"
              )}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
              {activeItem === item.label && <ChevronRight className="ml-auto w-4 h-4" />}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-800">
          <button className="flex items-center gap-4 px-4 py-3 text-technical text-steel hover:text-white transition-all w-full text-left">
            <LogOut className="w-4 h-4" />
            <span>LOG OUT</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-slate-900/50 border-b border-slate-800 flex items-center justify-between px-10">
          <div className="relative w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-steel" />
            <input 
              type="text" 
              placeholder="Search leads, projects, content..."
              className="w-full bg-slate-800 border border-slate-700 py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:border-brass transition-colors"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-steel hover:text-white">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-brass" />
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm font-bold text-white">PETE ARCHITECT</div>
                <div className="text-[10px] text-brass font-dm-mono uppercase">Master Admin</div>
              </div>
              <div className="w-10 h-10 bg-slate-800 border border-slate-700" />
            </div>
          </div>
        </header>

        {/* Viewport */}
        <div className="flex-1 overflow-y-auto p-10 bg-[#070708]">
          {children}
        </div>
      </main>
    </div>
  );
}
