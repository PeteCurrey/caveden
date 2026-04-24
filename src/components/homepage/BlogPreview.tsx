"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const POSTS = [
  {
    category: "TECHNICAL",
    title: "Understanding U-Values: Why Your Insulation Spec Matters",
    excerpt: "Passive house standards aren't just for main homes. Here's how to achieve year-round thermal comfort in a timber frame build.",
    date: "OCT 12, 2023"
  },
  {
    category: "DESIGN",
    title: "The Physics of Soundproofing a Music Studio",
    excerpt: "Mass, decoupling, and absorption. The three pillars of acoustic engineering for garden builds explained by the experts.",
    date: "OCT 08, 2023"
  },
  {
    category: "PLANNING",
    title: "Article 4 Directions: When Permitted Development Doesn't Apply",
    excerpt: "Check your local authority restrictions before you buy your blueprints. Everything you need to know about Article 4.",
    date: "OCT 05, 2023"
  }
];

export function BlogPreview() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".blog-post", {
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
            <span className="text-technical text-brass mb-4 block">FROM THE BUILD DESK</span>
            <h2 className="text-[clamp(28px,3.5vw,46px)] font-bold text-white font-syne uppercase">Latest Editorial.</h2>
          </div>
          <Link href="/blog" className="text-technical text-brass hover:text-white transition-colors border-b border-brass pb-1 mb-2">
            VIEW ALL ARTICLES →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {POSTS.map((post) => (
            <Link key={post.title} href="/blog" className="blog-post group">
              <span className="text-technical text-brass mb-4 block">{post.category}</span>
              <h3 className="text-2xl font-bold text-white font-syne uppercase mb-4 leading-tight group-hover:text-brass transition-colors">
                {post.title}
              </h3>
              <p className="text-concrete font-dm-sans leading-relaxed mb-8">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between border-t border-slate-800 pt-6">
                <span className="text-technical text-steel">{post.date}</span>
                <span className="text-technical text-brass group-hover:translate-x-2 transition-transform duration-300">READ MORE →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
