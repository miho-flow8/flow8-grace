"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "大丈夫です！大歓迎です？",
    answer:
      "はい、大丈夫です。LP制作からLINE設定、GAS自動化まで、すべてこちらで構築しますので、専門知識は一切不要です。操作が必要な場合も、画面共有でサポートしますのでご安心ください。",
  },
  {
    question: "個人からの相談も可能ですか？",
    answer:
      "もちろん可能です。個人事業主の方、これから起業を考えている方、副業で始めたい方など、どなたでもお気軽にご相談ください。",
  },
  {
    question: "対面での面談は可能ですか？",
    answer:
      "基本的にはオンライン（Zoom）での対応となりますが、東京近郊の場合は対面での面談も可能です。詳しくはお問い合わせください。",
  },
  {
    question: "相談内容がまとまっていなくても大丈夫ですか？",
    answer:
      "大丈夫です。「何から始めればいいか分からない」という状態からでも、一緒に整理していきますのでご安心ください。",
  },
  {
    question: "お支払い方法は何がありますか？",
    answer:
      "銀行振込、クレジットカード決済に対応しています。分割払いも2回〜6回まで可能です。詳しくは無料相談時にご案内いたします。",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground">
            よくあるご質問
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-cream rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-4 text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-coral text-white rounded-full flex items-center justify-center text-sm font-medium">
                    Q
                  </span>
                  <span className="text-sm md:text-[15px] font-medium text-foreground">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-foreground/50 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-5 md:px-6 pb-4 pl-[52px] md:pl-[60px]">
                  <p className="text-sm text-foreground/70 leading-relaxed">
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
