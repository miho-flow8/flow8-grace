import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-14">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 py-20 max-w-3xl mx-auto">
        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-relaxed md:leading-[1.6] text-foreground mb-8 tracking-wide text-balance">
          売れない原因を言語化し、
          <br />
          心と仕組み、
          <br />
          両方から売れる自分をつくる。
        </h1>

        {/* Subheadline */}
        <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-10 max-w-xl mx-auto">
          AIの効率と、人のぬくもりを掛け合わせた「愛のあるWeb制作」を提供しています。
          <br className="hidden sm:block" />
          LP・LINE・GASの仕組みを整える前に、「売れない理由」を一緒に言語化しましょう。
        </p>

        {/* CTA */}
        <Link
          href="#contact"
          className="inline-flex items-center justify-center bg-white text-foreground text-sm md:text-base font-medium px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
        >
          まずは無料相談はこちら
        </Link>
      </div>
    </section>
  );
}
