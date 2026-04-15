import Link from "next/link";

export function FinalCTASection() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-br from-sage-light to-sage/30 relative overflow-hidden"
    >
      {/* Decorative Wave Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="absolute bottom-0 left-0 w-full h-40"
          viewBox="0 0 1440 160"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C360,120 720,40 1080,80 C1260,100 1350,60 1440,80 L1440,160 L0,160 Z"
            fill="#8FAF8A"
          />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground mb-4 leading-relaxed">
          想いをカタチにする第一歩を、
          <br />
          一緒に踏み出しませんか？
        </h2>

        <p className="text-sm md:text-base text-foreground/70 leading-relaxed mb-8 max-w-xl mx-auto">
          「何から始めればいいかわからない」
          <br className="sm:hidden" />
          その状態からでも大丈夫です。
          <br />
          まずはお気軽にお話しください。
        </p>

        <Link
          href="#"
          className="inline-flex items-center justify-center bg-coral text-white text-sm md:text-base font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 hover:bg-coral-dark"
        >
          無料相談・お問い合わせはこちら
        </Link>
      </div>
    </section>
  );
}
