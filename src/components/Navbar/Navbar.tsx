"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["home", "experiences", "destinations", "membership", "about"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "experiences", label: "Experiences" },
    { id: "destinations", label: "Destinations" },
    { id: "membership", label: "Membership" },
    { id: "about", label: "About" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/50"
          : "bg-black/80 backdrop-blur-sm border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section with Animation */}
          <Button
            variant="ghost"
            onClick={() => handleScroll("home")}
            className="flex items-center gap-3 group hover:bg-transparent p-0 h-auto"
          >
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
            <span className="text-white font-semibold text-xl tracking-tight hidden sm:block group-hover:text-gray-300 transition-all duration-300">
              Rare Routes
            </span>
          </Button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => handleScroll(link.id)}
                className={`relative text-sm font-light px-4 py-2 transition-all duration-300 hover:bg-transparent group ${
                  activeSection === link.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {/* Active indicator */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
                    activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
                {/* Hover background */}
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </Button>
            ))}
          </div>

          {/* CTA Button - Black Theme */}
          <div className="hidden lg:block">
            <Button
              onClick={() => handleScroll("start-planning")}
              className="relative overflow-hidden bg-white text-black hover:bg-gray-200 transition-all duration-300 rounded-full px-8 py-2.5 text-sm font-medium shadow-lg shadow-white/10 hover:shadow-white/20 hover:scale-105 group border-0"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Planning
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/10 transition-all duration-300 rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen
                    ? "top-3 rotate-45"
                    : "top-1.5 rotate-0"
                }`}
              />
              <span
                className={`absolute top-3 w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen
                    ? "top-3 -rotate-45"
                    : "top-4.5 rotate-0"
                }`}
              />
            </div>
          </Button>
        </div>

        {/* Mobile Menu with Slide Animation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-6 space-y-3 border-t border-white/10">
            {navLinks.map((link, index) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => handleScroll(link.id)}
                className={`w-full justify-start text-left px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white/5 ${
                  activeSection === link.id
                    ? "text-white bg-white/5 border-l-2 border-white"
                    : "text-gray-400 hover:text-white"
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {link.label}
              </Button>
            ))}
            <Button
              onClick={() => handleScroll("start-planning")}
              className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 rounded-full px-6 py-3 text-sm font-medium shadow-lg shadow-white/10 mt-4"
            >
              Start Planning
              <svg
                className="w-4 h-4 ml-2 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}