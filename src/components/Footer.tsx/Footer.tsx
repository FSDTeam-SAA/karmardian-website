import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-8">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and brand */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 bg-white text-black font-bold text-sm">RR</div>
            <span className="text-white font-medium">Rare Routes</span>
          </div>

          {/* Center - Copyright */}
          <div className="text-zinc-400 text-sm">© 2025 Rare Routes. All rights reserved.</div>

          {/* Right side - Links */}
          <div className="flex items-center gap-6">
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
  )
}
