import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/homepage/Hero";
import { EditorialIntro } from "@/components/homepage/EditorialIntro";
import { BuildTypeNavigator } from "@/components/homepage/BuildTypeNavigator";
import { BuildSystemsGrid } from "@/components/homepage/BuildSystemsGrid";
import { BlueprintsFeature } from "@/components/homepage/BlueprintsFeature";
import { StorePreview } from "@/components/homepage/StorePreview";
import { PlanningChecker } from "@/components/homepage/PlanningChecker";
import { CommunityShowcase } from "@/components/homepage/CommunityShowcase";
import { BlogPreview } from "@/components/homepage/BlogPreview";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-min-h-screen bg-obsidian">
      <Navbar />
      
      <Hero />
      
      <EditorialIntro />
      
      <BuildTypeNavigator />
      
      <BuildSystemsGrid />
      
      <BlueprintsFeature />
      
      <StorePreview />
      
      {/* Build Planner CTA Section */}
      <section className="bg-slate-900 py-48 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-[clamp(38px,5vw,68px)] font-bold text-white font-syne uppercase mb-8">Plan Your Build.</h2>
          <p className="text-xl text-concrete font-dm-sans leading-relaxed mb-12 max-w-2xl mx-auto">
            Select your build type. Configure your systems. 
            Generate a materials list and cost estimate — 
            before you spend a penny.
          </p>
          <Link
            href="/planner"
            className="bg-brass text-obsidian px-12 py-6 text-technical font-bold hover:bg-amber transition-all transform hover:-translate-y-1 inline-block"
          >
            LAUNCH BUILD PLANNER →
          </Link>
        </div>
      </section>
      
      <CommunityShowcase />
      
      <PlanningChecker />
      
      <BlogPreview />
      
      <Footer />
    </main>
  );
}
