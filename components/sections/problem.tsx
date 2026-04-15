import Image from "next/image";

const problems = [
  {
    icon: "/images/icon-web.png",
    text: "SNSで発信してもなかなか集客に繋がらない。\n何が原因か自分ではわからない。",
  },
  {
    icon: "/images/icon-search.png",
    text: "自分で作ったLPやホームページの\nどこを直せばいいかわからない。",
  },
  {
    icon: "/images/icon-money.png",
    text: "高いお金をかけて\n制作会社に頼んでも不安。",
  },
  {
    icon: "/images/icon-pc.png",
    text: "Instagram・ブログ・LPなどの\nブランディングがバラバラで統一感がない。",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="py-16 md:py-24 bg-sage-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground">
            こんな<span className="text-coral">悩み</span>、ありませんか？
          </h2>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 md:p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 relative">
                  <Image
                    src={problem.icon}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm md:text-[15px] text-foreground/80 leading-relaxed whitespace-pre-line pt-1">
                  {problem.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
