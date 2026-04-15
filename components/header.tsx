"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#problem", label: "お悩み" },
  { href: "#service", label: "サービスについて" },
  { href: "#difference", label: "こだわり" },
  { href: "#price", label: "料金プラン" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 max-w-6xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start">
          <span className="text-lg sm:text-xl font-serif tracking-wide text-foreground">
            FLOW<span className="text-coral">∞</span>Grace
          </span>
          <span className="text-[10px] text-foreground/60 tracking-wider">
            flow8-grace
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="hidden md:inline-flex items-center bg-coral text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-coral-dark transition-colors"
        >
          無料相談はこちら
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="メニュー"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-foreground/80 py-2 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center bg-coral text-white text-sm font-medium px-5 py-3 rounded-full mt-2 hover:bg-coral-dark transition-colors"
            >
              無料相談はこちら
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
