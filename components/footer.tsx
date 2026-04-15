import Link from "next/link";

const footerLinks = {
  service: [
    { href: "#service", label: "LINE構築" },
    { href: "#service", label: "LP制作" },
    { href: "#service", label: "GAS自動化" },
    { href: "#price", label: "料金プラン" },
  ],
  support: [
    { href: "#faq", label: "よくある質問" },
    { href: "#contact", label: "お問い合わせ" },
    { href: "#profile", label: "プロフィール" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#222] px-6 pt-16 pb-8 md:px-12">
      <div className="max-w-[1100px] mx-auto">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-12 pb-12 border-b border-white/[0.07] mb-7">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-normal text-white mb-1.5">
              FLOW<span className="text-sage">∞</span>Grace
            </h3>
            <p className="text-xs text-white/40 leading-relaxed mb-5">
              売れない原因を言語化し、
              <br />
              心と仕組み、両方から売れる自分をつくる。
            </p>
            <div className="flex gap-2.5">
              <Link
                href="#"
                className="w-[34px] h-[34px] border border-white/10 rounded-full flex items-center justify-center text-sm text-white/50 hover:border-sage hover:text-sage transition-all"
                aria-label="Instagram"
              >
                📷
              </Link>
              <Link
                href="#"
                className="w-[34px] h-[34px] border border-white/10 rounded-full flex items-center justify-center text-sm text-white/50 hover:border-sage hover:text-sage transition-all"
                aria-label="LINE"
              >
                💬
              </Link>
            </div>
          </div>

          {/* Service Links */}
          <div>
            <h4 className="text-xs font-bold text-white/80 mb-4 tracking-wider uppercase">
              Service
            </h4>
            <nav className="flex flex-col gap-2.5">
              {footerLinks.service.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-[13px] text-white/45 hover:text-sage transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-xs font-bold text-white/80 mb-4 tracking-wider uppercase">
              Support
            </h4>
            <nav className="flex flex-col gap-2.5">
              {footerLinks.support.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-[13px] text-white/45 hover:text-sage transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} FLOW∞Grace. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link
              href="#"
              className="text-xs text-white/25 hover:text-white/50 transition-colors"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="#"
              className="text-xs text-white/25 hover:text-white/50 transition-colors"
            >
              特定商取引法に基づく表記
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
