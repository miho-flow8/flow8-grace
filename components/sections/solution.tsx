const solutions = [
  {
    num: "01",
    tag: "Inner — 内側のサポート",
    title: "思考ブロックを\n言語化・解除する",
    description:
      "稼げない理由の多くは「内側のブロック」にあります。自己否定・罪悪感・お金への恐れ。これを言語化して書き換えることで、行動の質が変わります。",
    features: [
      "メンタルブロックの言語化セッション",
      "売れる状態に整える3ステップ",
      "ミホ自身の実体験に基づいたサポート",
    ],
  },
  {
    num: "02",
    tag: "Outer — 外側の仕組み",
    title: "集客の仕組みを\nまるごと構築する",
    description:
      "LP・LINE・GASの3点セットで、プラットフォームに依存しない自走できる集客の仕組みをお任せ制作します。",
    features: [
      "LP・ホームページ制作（コーディング込み）",
      "LINE公式アカウント設定・自動化",
      "GASによる業務自動化システム構築",
    ],
  },
];

export function SolutionSection() {
  return (
    <section id="solution" className="py-24 bg-sage relative overflow-hidden">
      {/* Background Infinity Symbol */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="font-serif text-[500px] text-white/[0.06] leading-none select-none">
          ∞
        </span>
      </div>

      <div className="max-w-[1100px] mx-auto px-5 md:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-light text-white mb-2">
            心と仕組み、
            <span className="border-b-2 border-white/50 pb-0.5">両方から</span>
            整える。
          </h2>
          <span className="text-[11px] tracking-[0.25em] text-white/50 uppercase font-mono">
            Solution
          </span>
          <p className="text-[15px] text-white/85 leading-loose mt-4">
            売れない原因は「内側」と「外側」の両方にあります。
            <br />
            FLOW∞Graceは、その2つを同時に解決できる唯一の存在です。
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {solutions.map((solution) => (
            <div
              key={solution.num}
              className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl p-10 hover:-translate-y-1 hover:bg-white/[0.22] transition-all"
            >
              <div className="font-serif text-5xl font-light text-white/30 leading-none mb-4">
                {solution.num}
              </div>
              <span className="inline-block bg-white/25 text-white text-[11px] font-medium tracking-wider px-3.5 py-1 rounded-full mb-4">
                {solution.tag}
              </span>
              <h3 className="text-xl md:text-[22px] font-light text-white mb-3.5 leading-snug whitespace-pre-line">
                {solution.title}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {solution.description}
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {solution.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-[13px] text-white/75 flex items-center gap-2"
                  >
                    <span className="text-[9px] text-white/50 flex-shrink-0">
                      ✦
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
