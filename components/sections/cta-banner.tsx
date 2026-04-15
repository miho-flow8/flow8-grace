import Link from "next/link";

interface CTABannerProps {
  variant?: "rose" | "dark";
}

export function CTABanner({ variant = "rose" }: CTABannerProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`py-20 px-6 text-center relative overflow-hidden ${
        isDark
          ? "bg-[#3A3A3A]"
          : "bg-gradient-to-br from-rose via-[#C07870] to-rose-dark"
      }`}
    >
      {/* Background Decoration */}
      {isDark ? (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-serif text-[500px] text-white/[0.03] leading-none select-none">
            ∞
          </span>
        </div>
      ) : (
        <div className="absolute -top-24 -right-24 w-[400px] h-[400px] bg-white/5 rounded-full" />
      )}

      <div className="relative z-10 max-w-2xl mx-auto">
        {isDark && (
          <span className="text-[11px] tracking-[0.25em] text-sage uppercase block mb-6 font-mono">
            Get Started
          </span>
        )}

        <h2
          className={`font-serif text-2xl md:text-4xl font-light mb-4 leading-relaxed ${
            isDark ? "text-white" : "text-white"
          }`}
        >
          {isDark ? (
            <>
              まずは、<em className="italic text-beige">ひとつ</em>
              聞かせてください。
            </>
          ) : (
            "まずは無料で相談してみませんか？"
          )}
        </h2>

        <p
          className={`text-[15px] leading-loose mb-9 ${
            isDark ? "text-white/65" : "text-white/85"
          }`}
        >
          {isDark
            ? "「何から始めればいいか分からない」それで構いません。\nあなたの現状をお聞かせください。"
            : "「何から始めればいいか分からない」そんな方でも大丈夫。\nお気軽にLINEでご相談ください。"}
        </p>

        <div
          className={`flex items-center justify-center flex-wrap gap-4 ${
            isDark ? "flex-col md:flex-row" : ""
          }`}
        >
          <Link
            href="#contact"
            className={`inline-flex items-center gap-2.5 text-base font-bold px-12 py-5 rounded-full transition-all shadow-lg ${
              isDark
                ? "bg-[#06C755] text-white shadow-[#06C755]/35 hover:shadow-[#06C755]/45"
                : "bg-white text-rose shadow-black/15 hover:shadow-black/20"
            } hover:-translate-y-1`}
          >
            {isDark ? "LINE登録で無料相談" : "LINEで無料相談"}
          </Link>

          {isDark && (
            <Link
              href="#service"
              className="inline-flex items-center gap-2 border border-white/25 text-white/65 text-sm px-9 py-4 rounded-full hover:border-white/50 hover:text-white transition-all"
            >
              詳しく見る
            </Link>
          )}
        </div>

        <p
          className={`text-xs mt-4 ${
            isDark ? "text-white/30" : "text-white/60"
          }`}
        >
          ※ 押し売りは一切しません。お気軽にどうぞ。
        </p>
      </div>
    </section>
  );
}
