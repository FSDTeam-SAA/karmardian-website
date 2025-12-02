import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-8">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-0">
          
          {/* Left side - Logo */}
          <div className="relative flex justify-center md:justify-start">
            <div className="absolute inset-0 bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            <Image
              width={200}
              height={200}
              src="/images/logoadd.png"
              alt="Rare Routes Logo"
              className="w-12 h-12 object-contain transition-all duration-300 group-hover:scale-110 relative z-10"
            />
          </div>

          {/* Center */}
          <div className="text-zinc-400 text-sm text-center">
            © 2025 Rare Routes. All rights reserved.
          </div>

          {/* Right side - Links */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-6">
            <Link
              href="https://www.instagram.com/accounts/login/?next=%2Ftherareroutes%2F&source=omni_redirect"
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

        {/* Certification Section */}
        <div className="flex justify-center mt-6 md:mt-8">
          <div className="space-y-2 text-center lg:mr-[100px] mr-0">
            <p className="inline-block px-6 py-2 text-white rounded-md shadow-md transition-all duration-200">
              SOT: 2166950-40
            </p>
            <p className="inline-block px-6 py-2 text-white rounded-md shadow-md transition-all duration-200">
              TCRC ID: 710089
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
