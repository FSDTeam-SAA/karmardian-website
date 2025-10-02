import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-8">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-0">
          {/* Left side - Logo and brand */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 bg-white text-black font-bold text-sm">RR</div>
            <span className="text-white font-medium text-sm md:text-base">Rare Routes</span>
          </div>

          {/* Center - Copyright */}
          <div className="text-zinc-400 text-sm text-center md:text-center">
            © 2025 Rare Routes. All rights reserved.
          </div>

          {/* Right side - Links */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-6">
            <Link href="https://instagram.com" className="text-zinc-400 hover:text-white transition-colors text-sm">
              Instagram
            </Link>
            <Link href="/newsletter" className="text-zinc-400 hover:text-white transition-colors text-sm">
              Newsletter
            </Link>
            <Link href="/legal" className="text-zinc-400 hover:text-white transition-colors text-sm">
              Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
