"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Button
            variant="ghost"
            onClick={() => handleScroll("home")}
            className="flex items-center gap-2 group hover:bg-transparent"
          >
            <div className="w-2 h-2 bg-white rounded-sm group-hover:bg-teal-500 transition-colors" />
            <span className="text-white font-medium text-lg tracking-tight">Rare Routes</span>
          </Button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Button
              variant="ghost"
              onClick={() => handleScroll("experiences")}
              className="text-gray-300 hover:text-white transition-colors text-sm font-light hover:bg-transparent"
            >
              Experiences
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleScroll("destinations")}
              className="text-gray-300 hover:text-white transition-colors text-sm font-light hover:bg-transparent"
            >
              Destinations
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleScroll("membership")}
              className="text-gray-300 hover:text-white transition-colors text-sm font-light hover:bg-transparent"
            >
              Membership
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleScroll("about")}
              className="text-gray-300 hover:text-white transition-colors text-sm font-light hover:bg-transparent"
            >
              About
            </Button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              onClick={() => handleScroll("start-planning")}
              className="bg-transparent border border-white/20 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 rounded-full px-6 text-sm font-light"
            >
              Start planning
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-transparent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col gap-4">
              <Button
                variant="ghost"
                onClick={() => handleScroll("experiences")}
                className="text-gray-300 hover:text-white transition-colors text-sm font-light hover:bg-transparent justify-start"
              >
                Experiences
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleScroll("destinations")}
                className="text-gray-300 hover:text-white transition-colors text-sm font-light hover:bg-transparent justify-start"
              >
                Destinations
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleScroll("membership")}
                className="text-gray-300 hover:text-white transition-colors text-sm font-light hover:bg-transparent justify-start"
              >
                Membership
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleScroll("about")}
                className="text-gray-300 hover:text-white transition-colors text-sm font-light hover:bg-transparent justify-start"
              >
                About
              </Button>
              <Button
                variant="outline"
                onClick={() => handleScroll("start-planning")}
                className="bg-transparent border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full px-6 text-sm font-light w-full"
              >
                Start planning
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
