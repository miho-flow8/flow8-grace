"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#problem", label: "お悩み" },
  { href: "#service", label: "サービス" },
  { href: "#price", label: "料金" },
  { href: "#profile", label: "プロフィール" },
  { href: "#faq", label: "よくある質問" },
  { href: "#contact", label: "お問合せ" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-beige-base/90 backdrop-blur-md border-b border-beige/20">
      <div className="flex items-center justify-between px-6 py-4 max-w-[1440px] mx-auto md:px-12">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-serif text-xl font-semibold tracking-wide text-foreground">
            FLOW<span className="text-sage">∞</span>Grace
          </span>
          <span className="text-[10px] text-beige tracking-widest font-mono">
            flow8-grace
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground tracking-wide hover:text-rose transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 right-0 h-px bg-rose scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-rose text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-rose-dark transition-all shadow-lg shadow-rose/30 hover:-translate-y-0.5"
        >
          <span>💬</span>
          無料相談
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
        <div className="md:hidden bg-beige-base/95 backdrop-blur-lg border-t border-beige/20">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-foreground py-2 hover:text-rose transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 bg-rose text-white text-sm font-medium px-6 py-3 rounded-full mt-2"
            >
              <span>💬</span>
              無料相談
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
