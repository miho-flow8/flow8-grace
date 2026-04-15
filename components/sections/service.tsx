import Link from "next/link";

const plans = [
  {
    name: "ライトパック",
    description: "まずはLINEから始めたい方向け",
    price: "55,000",
    unit: "円〜",
    features: [
      "LINE公式アカウント初期設定",
      "リッチメニュー作成",
      "自動応答メッセージ設定",
    ],
    bgColor: "bg-white",
    borderColor: "border-sage/20",
  },
  {
    name: "スタンダード",
    description: "LP + LINEで売れる仕組みを作る",
    price: "198,000",
    unit: "円〜",
    features: [
      "LP制作（1ページ）",
      "LINE公式アカウント構築",
      "導線設計コンサル",
      "3ヶ月サポート付き",
    ],
    featured: true,
    bgColor: "bg-sage-light",
    borderColor: "border-sage",
  },
  {
    name: "フルパック",
    description: "心と仕組み、両方から整える",
    price: "330,000",
    unit: "円〜",
    features: [
      "スタンダードの全て",
      "GAS業務自動化",
      "メンタルブロック解除",
      "6ヶ月サポート付き",
    ],
    bgColor: "bg-white",
    borderColor: "border-sage/20",
  },
];

export function ServiceSection() {
  return (
    <section id="service" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground">
            サービスメニュー
          </h2>
        </div>

        <p className="text-sm text-foreground/60 text-center mb-10 max-w-2xl mx-auto">
          あなたのステージに合わせて、最適なプランをお選びください。
          <br className="hidden sm:block" />
          全てのプランに丁寧なサポートが含まれています。
        </p>

        {/* Price Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${plan.bgColor} rounded-xl p-6 md:p-8 border ${plan.borderColor} ${
                plan.featured ? "ring-2 ring-sage" : ""
              }`}
            >
              <h3 className="text-base md:text-lg font-medium text-foreground mb-1">
                {plan.name}
              </h3>
              <p className="text-sm text-foreground/60 mb-4">{plan.description}</p>

              <div className="mb-5">
                <span className="text-2xl md:text-3xl font-medium text-foreground">
                  {plan.price}
                </span>
                <span className="text-sm text-foreground/60">{plan.unit}</span>
              </div>

              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="text-sm text-foreground/80 flex items-start gap-2"
                  >
                    <span className="text-sage flex-shrink-0 mt-0.5">-</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.featured && (
                <Link
                  href="#contact"
                  className="block text-center bg-sage text-white text-sm font-medium py-3 rounded-full hover:bg-sage-deep transition-colors"
                >
                  このプランで相談する
                </Link>
              )}
            </div>
          ))}
        </div>

        <p className="text-xs text-foreground/50 text-center">
          ※価格はすべて税込です
        </p>
      </div>
    </section>
  );
}
