const beforeItems = [
  "発信を続けてもなかなか申し込みがない",
  "何をしても自分に自信が持てない",
  "自分のサービスの良さを上手に伝えられない",
  "他の人と比べて落ち込むことが多い",
  "どれだけ情報を集めてもなかなか実践できない",
  "自分が本当にやりたいことがわからない",
];

const afterItems = [
  "想いに共感した、理想のお客様から選ばれる",
  "自分の価値を自分で認め、自信を持って発信できる",
  "自分の言葉で、自然に価値を伝えられる",
  "他人軸ではなく、自分軸で判断できる",
  "必要な情報だけを選び、すぐに実践できる",
  "ワクワクする方向に、一歩踏み出せる",
];

export function BeforeAfterSection() {
  return (
    <section
      id="transform"
      className="py-16 md:py-24 bg-gradient-to-br from-sage to-sage-deep relative overflow-hidden"
    >
      {/* Decorative Wave Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute bottom-0 left-0 w-full h-40"
          viewBox="0 0 1440 160"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C240,120 480,40 720,80 C960,120 1200,40 1440,80 L1440,160 L0,160 Z"
            fill="white"
          />
        </svg>
        <svg
          className="absolute top-0 right-0 w-full h-40"
          viewBox="0 0 1440 160"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C240,40 480,120 720,80 C960,40 1200,120 1440,80 L1440,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-white/80 text-sm mb-2">こんな悩み、ありませんか？</p>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-white">
            心と仕組みを整えると、
            <br className="sm:hidden" />
            <span className="text-cream">こう変わる。</span>
          </h2>
        </div>

        {/* Before/After Lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Before */}
          <div>
            <ul className="space-y-3">
              {beforeItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-coral mt-2" />
                  <span className="text-white/90 text-sm md:text-[15px] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div>
            <ul className="space-y-3">
              {afterItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-cream mt-2" />
                  <span className="text-white text-sm md:text-[15px] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
