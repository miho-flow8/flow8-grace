const reasons = [
  {
    num: "01",
    title: "売れない原因を\n言語化できる",
    description:
      "「なぜ売れないのか」を一緒に言語化。見えない課題を明確にすることで、最短ルートで解決します。",
  },
  {
    num: "02",
    title: "IT苦手でも\n全部お任せ",
    description:
      "LP制作からLINE設定、GAS自動化まで。専門知識がなくても、あなたの代わりに構築します。",
  },
  {
    num: "03",
    title: "3ヶ月で\n自走できる仕組み",
    description:
      "ずっと依存するのではなく、3ヶ月で自分で運用できる状態を目指します。卒業後も安心。",
  },
];

export function ReasonSection() {
  return (
    <section id="reason" className="py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-light text-rose mb-2">
            選ばれる
            <span className="border-b-2 border-rose pb-0.5">3つの理由</span>
          </h2>
          <span className="text-[11px] tracking-[0.25em] text-muted-foreground uppercase font-mono">
            Reason
          </span>
        </div>

        {/* Reason Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {reasons.map((reason) => (
            <div
              key={reason.num}
              className="p-10 rounded-2xl bg-beige-light relative overflow-hidden"
            >
              <div className="font-serif text-[80px] font-light text-sage/20 leading-none mb-2">
                {reason.num}
              </div>
              <h3 className="text-[15px] font-bold mb-3 leading-relaxed whitespace-pre-line">
                {reason.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
