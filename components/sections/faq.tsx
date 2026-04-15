"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "IT苦手でも大丈夫ですか？",
    answer:
      "はい、大丈夫です。LP制作からLINE設定、GAS自動化まで、すべてこちらで構築しますので、専門知識は一切不要です。操作が必要な場合も、画面共有でサポートしますのでご安心ください。",
  },
  {
    question: "どのくらいの期間で完成しますか？",
    answer:
      "プランによって異なりますが、LINEスタートプランは約2週間、集客導線構築プランは約1〜2ヶ月、まるごとお任せプランは約2〜3ヶ月を目安にしています。",
  },
  {
    question: "分割払いはできますか？",
    answer:
      "はい、可能です。2回〜6回の分割に対応しております。詳しくは無料相談時にご案内いたします。",
  },
  {
    question: "サポート期間終了後はどうなりますか？",
    answer:
      "サポート期間中に自走できる状態を目指して構築・レクチャーしますので、卒業後も安心して運用いただけます。追加サポートが必要な場合は、別途ご相談ください。",
  },
  {
    question: "メンタルブロック解除って何ですか？",
    answer:
      "「売ることへの罪悪感」「値上げへの恐怖」「自分には価値がないという思い込み」など、売れない原因となっている内側のブロックを言語化し、書き換えていくセッションです。",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-[1100px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-light text-rose mb-2">
            よくある
            <span className="border-b-2 border-rose pb-0.5">ご質問</span>
          </h2>
          <span className="text-[11px] tracking-[0.25em] text-muted-foreground uppercase font-mono">
            FAQ
          </span>
        </div>

        {/* FAQ List */}
        <div className="max-w-[760px] mx-auto flex flex-col gap-3.5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center gap-3.5 px-7 py-5 text-left cursor-pointer select-none"
              >
                <span className="w-[30px] h-[30px] bg-rose text-white rounded-full flex items-center justify-center font-serif text-lg font-semibold flex-shrink-0">
                  Q
                </span>
                <span className="text-[15px] font-medium flex-1 leading-relaxed">
                  {faq.question}
                </span>
                <Plus
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45 text-rose" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-7 pb-5 pl-[72px]">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
