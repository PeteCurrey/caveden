import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-extrabold tracking-tighter text-white font-syne mb-6 block">
              CAVEDEN
            </Link>
            <p className="text-concrete max-w-md leading-relaxed mb-8">
              The authoritative hub for professional-grade garden buildings. 
              We provide the blueprints, technical specifications, and curated 
              gear to help you build a space that lasts for decades.
            </p>
            <div className="flex gap-6">
              {/* Social placeholders */}
              <div className="w-6 h-6 border border-steel hover:border-brass transition-colors cursor-pointer" />
              <div className="w-6 h-6 border border-steel hover:border-brass transition-colors cursor-pointer" />
              <div className="w-6 h-6 border border-steel hover:border-brass transition-colors cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-technical text-white mb-6">RESOURCES</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/build-types" className="text-steel hover:text-brass transition-colors">Build Types</Link></li>
              <li><Link href="/systems" className="text-steel hover:text-brass transition-colors">Build Systems</Link></li>
              <li><Link href="/blueprints" className="text-steel hover:text-brass transition-colors">Blueprints</Link></li>
              <li><Link href="/planning" className="text-steel hover:text-brass transition-colors">Planning Hub</Link></li>
              <li><Link href="/tools" className="text-steel hover:text-brass transition-colors">Engineering Tools</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-technical text-white mb-6">COMMUNITY</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/showcase" className="text-steel hover:text-brass transition-colors">Member Builds</Link></li>
              <li><Link href="/community" className="text-steel hover:text-brass transition-colors">Discussion Hub</Link></li>
              <li><Link href="/blog" className="text-steel hover:text-brass transition-colors">Build Desk Blog</Link></li>
              <li><Link href="/about" className="text-steel hover:text-brass transition-colors">Our Story</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-technical text-white mb-6">SUPPORT</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/contact" className="text-steel hover:text-brass transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="text-steel hover:text-brass transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="text-steel hover:text-brass transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/terms" className="text-steel hover:text-brass transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-technical text-steel">
            © {new Date().getFullYear()} CAVEDEN LTD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-technical text-steel hover:text-white transition-colors">PRIVACY POLICY</Link>
            <Link href="/cookies" className="text-technical text-steel hover:text-white transition-colors">COOKIE SETTINGS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
