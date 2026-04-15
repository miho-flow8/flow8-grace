import Link from "next/link";

const plans = [
  {
    label: "Light",
    name: "LINEスタートプラン",
    description: "まずはLINEから始めたい方向け",
    price: "¥55,000",
    originalPrice: "通常 ¥77,000",
    features: [
      "LINE公式アカウント初期設定",
      "リッチメニュー作成",
      "自動応答メッセージ設定",
      "運用マニュアル",
    ],
    featured: false,
    buttonType: "outline",
  },
  {
    label: "Standard",
    name: "集客導線構築プラン",
    description: "LP + LINEで売れる仕組みを作る",
    price: "¥198,000",
    originalPrice: "通常 ¥275,000",
    features: [
      "LP制作（1ページ）",
      "LINE公式アカウント構築",
      "導線設計コンサル",
      "3ヶ月サポート付き",
    ],
    featured: true,
    buttonType: "primary",
  },
  {
    label: "Premium",
    name: "まるごとお任せプラン",
    description: "心と仕組み、両方から整える",
    price: "¥330,000",
    originalPrice: "通常 ¥440,000",
    features: [
      "Standardプランの全て",
      "GAS業務自動化",
      "メンタルブロック解除セッション",
      "6ヶ月サポート付き",
    ],
    featured: false,
    buttonType: "outline",
  },
];

export function PriceSection() {
  return (
    <section id="price" className="py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-light text-rose mb-2">
            <span className="border-b-2 border-rose pb-0.5">料金プラン</span>
          </h2>
          <span className="text-[11px] tracking-[0.25em] text-muted-foreground uppercase font-mono">
            Price
          </span>
        </div>

        {/* Monitor Banner */}
        <div className="bg-gradient-to-r from-sage/10 to-beige/10 border border-sage rounded-2xl px-9 py-5 text-center mb-12 text-sm">
          <strong className="text-rose">期間限定モニター価格</strong>
          で提供中！この機会にぜひご検討ください。
        </div>

        {/* Price Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-10 relative hover:-translate-y-1 transition-all ${
                plan.featured
                  ? "bg-foreground text-white"
                  : "bg-beige-light text-foreground"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-rose text-white text-[11px] font-bold px-6 py-1.5 rounded-full whitespace-nowrap">
                  おすすめ
                </span>
              )}

              <span
                className={`text-[11px] font-semibold tracking-[0.2em] uppercase block mb-3 ${
                  plan.featured ? "text-sage" : "text-sage"
                } font-mono`}
              >
                {plan.label}
              </span>

              <h3 className="text-lg font-bold mb-2">{plan.name}</h3>

              <p
                className={`text-[13px] leading-relaxed pb-6 mb-6 border-b ${
                  plan.featured
                    ? "text-white/60 border-white/10"
                    : "text-muted-foreground border-black/[0.06]"
                }`}
              >
                {plan.description}
              </p>

              <div
                className={`font-mono text-4xl font-semibold leading-none mb-1 ${
                  plan.featured ? "text-white" : "text-rose"
                }`}
              >
                {plan.price}
                <span className="text-sm font-normal">（税込）</span>
              </div>

              <p
                className={`text-xs mb-6 ${
                  plan.featured ? "text-white/40" : "text-muted-foreground"
                }`}
              >
                {plan.originalPrice}
              </p>

              <ul className="flex flex-col gap-2.5 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`text-[13px] flex items-center gap-2 ${
                      plan.featured ? "text-white/80" : ""
                    }`}
                  >
                    <span className="text-[9px] text-sage flex-shrink-0">
                      ✦
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`block text-center text-sm font-bold py-3.5 rounded-full transition-all ${
                  plan.buttonType === "primary"
                    ? "bg-rose text-white hover:bg-rose-dark hover:-translate-y-0.5"
                    : "border border-rose text-rose hover:bg-rose hover:text-white"
                }`}
              >
                相談する
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
