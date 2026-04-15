import Link from "next/link";

interface CTABannerProps {
  variant?: "coral" | "sage";
}

export function CTABanner({ variant = "coral" }: CTABannerProps) {
  const isCoral = variant === "coral";

  return (
    <section
      className={`py-16 md:py-20 px-4 sm:px-6 text-center relative overflow-hidden ${
        isCoral
          ? "bg-gradient-to-br from-coral to-coral-dark"
          : "bg-gradient-to-br from-sage to-sage-deep"
      }`}
    >
      {/* Decorative Wave Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute bottom-0 left-0 w-full h-32"
          viewBox="0 0 1440 128"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,96 480,32 720,64 C960,96 1200,32 1440,64 L1440,128 L0,128 Z"
            fill="white"
          />
        </svg>
        <svg
          className="absolute top-0 right-0 w-full h-32"
          viewBox="0 0 1440 128"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,32 480,96 720,64 C960,32 1200,96 1440,64 L1440,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-xl mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-4 leading-relaxed">
          まず、話してみてください。
          <br />
          無料相談受付中。
        </h2>

        <p className="text-sm md:text-base text-white/80 leading-relaxed mb-8">
          「何から始めればいいか分からない」そんな方でも大丈夫。
          <br className="hidden sm:block" />
          お気軽にLINEでご相談ください。
        </p>

        <Link
          href="#contact"
          className="inline-flex items-center justify-center bg-white text-foreground text-sm md:text-base font-medium px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
        >
          無料相談・お問い合わせはこちら
        </Link>
      </div>
    </section>
  );
}
