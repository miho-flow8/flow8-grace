const steps = [
  {
    num: "01",
    title: "ヒアリング",
    subtitle: "無料相談",
    description: "現状の課題やご希望をお聞きします。LINEまたはZoomでお気軽にどうぞ。",
  },
  {
    num: "02",
    title: "ご提案",
    subtitle: "お見積り",
    description: "ヒアリング内容をもとに、最適なプランをご提案いたします。",
  },
  {
    num: "03",
    title: "制作",
    subtitle: "サポート開始",
    description: "ご契約後、制作やセッションを開始します。進捗は随時共有いたします。",
  },
  {
    num: "04",
    title: "納品",
    subtitle: "運用開始",
    description: "完成したものをお渡しし、運用方法をレクチャーします。",
  },
];

export function ServiceFlowSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground">
            ご依頼からお渡しまで
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-4 md:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-px bg-sage/30" />
              )}
              
              <div className="bg-cream rounded-xl p-6 text-center relative">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm mb-4">
                  <span className="text-sage font-medium text-lg">{step.num}</span>
                </div>
                
                <p className="text-xs text-foreground/50 mb-1">{step.subtitle}</p>
                <h3 className="text-base font-medium text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
