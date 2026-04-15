const differences = [
  {
    icon: "🧠",
    title: "内側と外側、\n両方できる唯一の存在",
    description:
      "メンタルブロック解除 × LP/Web/集客導線構築を同時にできるのはFLOW∞Graceだけ。根本から売れる状態を作ります。",
  },
  {
    icon: "💻",
    title: "IT苦手でも\n全部お任せできる",
    description:
      "LP設計からLINE設定、GAS自動化まで。「何から始めればいいか分からない」方でも全部まるごとお任せできます。",
  },
  {
    icon: "🕊️",
    title: "3ヶ月で卒業できる\n自走サポート",
    description:
      "ずっとサポートに依存するのではなく、3ヶ月で自分で動かせる集客の仕組みを完成させます。",
  },
];

export function DifferenceSection() {
  return (
    <section id="difference" className="py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-light text-rose mb-2">
            他と、何が<span className="border-b-2 border-rose pb-0.5">違う</span>
            のか。
          </h2>
          <span className="text-[11px] tracking-[0.25em] text-muted-foreground uppercase font-mono">
            Why Us
          </span>
        </div>

        {/* Difference Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {differences.map((item, index) => (
            <div
              key={index}
              className="text-center p-11 rounded-2xl bg-beige-light hover:-translate-y-1.5 hover:shadow-xl transition-all"
            >
              <div className="w-[72px] h-[72px] mx-auto mb-6 bg-white rounded-full flex items-center justify-center text-3xl shadow-md">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg font-normal mb-3.5 leading-relaxed text-foreground whitespace-pre-line">
                {item.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
