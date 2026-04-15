import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sage/55 via-sage-deep/45 to-beige-base/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20 max-w-[860px] mx-auto">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm border border-white/50 rounded-full px-5 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 bg-white rounded-full" />
          <span className="text-[11px] font-medium tracking-[0.2em] text-white uppercase font-mono">
            For Freelancers & Solopreneurs
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-relaxed text-white mb-7 tracking-wide drop-shadow-lg text-balance">
          売れない原因を言語化し、
          <br />
          心と仕組み、
          <br />
          両方から売れる自分をつくる。
        </h1>

        {/* Subheadline */}
        <p className="text-sm md:text-base text-white/90 leading-loose mb-4 drop-shadow">
          AIの効率と、人のぬくもりを掛け合わせた「愛のあるWeb制作」を提供しています。
        </p>

        <p className="text-[13px] text-white/75 leading-relaxed mb-11">
          集客できないのは、あなたのせいじゃない。
          <br />
          LP・LINE・GASの仕組みを整える前に、
          <br className="md:hidden" />
          「売れない理由」を一緒に言語化しましょう。
        </p>

        {/* CTA */}
        <div className="flex items-center justify-center flex-wrap gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-rose text-white text-base font-bold px-12 py-4 rounded-full transition-all shadow-lg shadow-rose/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose/50 tracking-wide"
          >
            ▶ LINEで無料相談してみる
          </Link>
        </div>

        <p className="text-xs text-white/65 mt-4">※</p>

        {/* Illustration */}
        <div className="mt-7 mx-auto w-[min(240px,55vw)] drop-shadow-2xl">
          <Image
            src="/images/illust-woman.png"
            alt="女性のイラスト"
            width={240}
            height={300}
            className="w-full h-auto opacity-[0.98]"
          />
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20 leading-[0]">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            fill="#EFEBE0"
          />
        </svg>
      </div>
    </section>
  );
}
