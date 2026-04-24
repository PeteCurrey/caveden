"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="min-h-screen bg-obsidian flex flex-col pt-20">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center py-24 px-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white font-syne uppercase mb-4">Welcome Back.</h1>
            <p className="text-concrete font-dm-sans">Sign in to access your build plans and journey.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-10">
            <div className="space-y-6">
              <div>
                <label className="text-technical text-brass mb-2 block">EMAIL ADDRESS</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-obsidian border border-slate-700 py-4 px-6 text-white focus:outline-none focus:border-brass transition-colors"
                  placeholder="pete@example.com"
                />
              </div>
              <div>
                <label className="text-technical text-brass mb-2 block">PASSWORD</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-obsidian border border-slate-700 py-4 px-6 text-white focus:outline-none focus:border-brass transition-colors"
                  placeholder="••••••••"
                />
              </div>
              <button className="w-full bg-brass text-obsidian py-4 text-technical font-bold hover:bg-amber transition-all">
                SIGN IN →
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-800 text-center">
              <p className="text-steel text-sm font-dm-sans mb-4">Don't have an account?</p>
              <Link href="/register" className="text-technical text-brass border-b border-brass pb-1">
                CREATE ACCOUNT
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/forgot-password" className="text-[10px] font-dm-mono text-steel uppercase tracking-widest hover:text-white transition-colors">
              FORGOT PASSWORD?
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
