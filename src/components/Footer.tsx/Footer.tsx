import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-8">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-0">
          {/* Left side - Logo and brand */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            <Image
              width={200}
              height={200}
              src="/images/logoadd.png"
              alt="Rare Routes Logo"
              className="w-12 h-12 object-contain transition-all duration-300 group-hover:scale-110 relative z-10"
            />
          </div>

          {/* Center - Copyright */}
          <div className="text-zinc-400 text-sm text-center md:text-center">
            © 2025 Rare Routes. All rights reserved.
          </div>

          {/* Right side - Links */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-6">
            <Link
              href="https://instagram.com"
              className="text-zinc-400 hover:text-white transition-colors text-sm"
            >
              Instagram
            </Link>
            <Link
              href="/newsletter"
              className="text-zinc-400 hover:text-white transition-colors text-sm"
            >
              Newsletter
            </Link>
            <Link
              href="/legal"
              className="text-zinc-400 hover:text-white transition-colors text-sm"
            >
              Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
