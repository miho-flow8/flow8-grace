const services = [
  {
    color: "green",
    icon: "💬",
    title: "LINE公式アカウント構築",
    price: "¥55,000〜",
    priceNote: "税込",
    description:
      "友だち追加〜自動返信〜リッチメニューまで、お客様が迷わない導線を設計・構築します。",
    tags: ["初期設定", "リッチメニュー", "自動応答"],
  },
  {
    color: "rose",
    icon: "🖥️",
    title: "LP・ホームページ制作",
    price: "¥110,000〜",
    priceNote: "税込",
    description:
      "「売れる流れ」を意識した構成で、あなたの想いが伝わるLPを制作。レスポンシブ対応。",
    tags: ["デザイン", "コーディング", "スマホ対応"],
  },
  {
    color: "beige",
    icon: "⚙️",
    title: "GAS業務自動化",
    price: "¥33,000〜",
    priceNote: "税込",
    description:
      "予約管理・顧客管理・メール自動送信など、日々の作業を自動化して時間を生み出します。",
    tags: ["予約管理", "顧客管理", "メール自動化"],
  },
];

export function ServiceSection() {
  return (
    <section id="service" className="py-24 bg-background">
      <div className="max-w-[1100px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-light text-rose mb-2">
            提供
            <span className="border-b-2 border-rose pb-0.5">サービス</span>
          </h2>
          <span className="text-[11px] tracking-[0.25em] text-muted-foreground uppercase font-mono">
            Service
          </span>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 hover:-translate-y-1 hover:shadow-xl transition-all border-t-[3px] ${
                service.color === "green"
                  ? "border-t-sage"
                  : service.color === "rose"
                    ? "border-t-rose"
                    : "border-t-beige"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 ${
                  service.color === "green"
                    ? "bg-sage-light"
                    : service.color === "rose"
                      ? "bg-rose-light"
                      : "bg-[#F5F0E8]"
                }`}
              >
                {service.icon}
              </div>

              <h3 className="text-[15px] font-bold mb-1.5 leading-snug">
                {service.title}
              </h3>

              <div className="text-xl font-medium text-rose mb-3 font-mono">
                {service.price}
                <span className="text-xs text-muted-foreground ml-1">
                  {service.priceNote}
                </span>
              </div>

              <p className="text-[13px] leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-3.5">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-beige-light text-muted-foreground text-[11px] px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
