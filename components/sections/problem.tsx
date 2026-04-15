import Image from "next/image";

const problems = [
  {
    icon: "/images/icon-web.png",
    title: "SNSで発信してるのに全然反応がない。\n何を投稿しても「いいね」だけで問い合わせが来ない",
    description: "毎日発信しても売上につながらず、何が正解か分からなくなっている。",
  },
  {
    icon: "/images/icon-pc.png",
    title: "ITが苦手でどこから手をつければいいか不明。\nLPもLINEも作りたいけど、全部自分でやるには限界",
    description: "ツールがたくさんあって何を使えばいいか分からない。",
  },
  {
    icon: "/images/icon-money.png",
    title: "値上げしたいのになぜかできない。\n断られたら…という不安が先に来てしまう",
    description: "自分の価値を信じられず、いつも安売りになってしまう。",
  },
  {
    icon: "/images/icon-search.png",
    title: "Hotpepper・紹介だけに依存している。\nプラットフォームをやめたら集客がゼロになる恐怖",
    description: "自分で集客する仕組みがなく、いつも不安な状態が続いている。",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-background">
      <div className="max-w-[1100px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-light text-rose mb-2">
            こんな<span className="border-b-2 border-rose pb-0.5">悩み</span>、ありませんか？
          </h2>
          <span className="text-[11px] tracking-[0.25em] text-muted-foreground uppercase font-mono">
            Problem
          </span>
        </div>

        {/* Illustration */}
        <div className="text-center mb-10">
          <div className="w-[100px] h-[100px] bg-rose-light rounded-full mx-auto flex items-center justify-center overflow-hidden">
            <Image
              src="/images/illust-woman.png"
              alt=""
              width={72}
              height={72}
              className="object-contain"
            />
          </div>
        </div>

        {/* Problem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 flex items-start gap-4 border-l-4 border-beige shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className="w-11 h-11 bg-beige-light rounded-xl flex items-center justify-center flex-shrink-0">
                <Image
                  src={problem.icon}
                  alt=""
                  width={26}
                  height={26}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold mb-1.5 leading-relaxed whitespace-pre-line">
                  {problem.title}
                </h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
