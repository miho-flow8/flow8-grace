import { Heart, Lightbulb, Users } from "lucide-react";

const differences = [
  {
    icon: Heart,
    title: "内面と外側、両方を変える唯一の方法",
    description:
      "他のコンサルやWeb制作は「外側」だけ。私は心のブロックも一緒に解除します。",
    bgColor: "bg-sage-lighter",
  },
  {
    icon: Lightbulb,
    title: "自分でも言語化できる力を身につける",
    description:
      "依存ではなく、自立。あなた自身が課題を言語化できるようになります。",
    bgColor: "bg-cream",
  },
  {
    icon: Users,
    title: "6ヶ月の長期サポート",
    description:
      "単発ではなく、継続的なサポートで確実に変化を定着させます。",
    bgColor: "bg-coral-light",
  },
];

export function DifferenceSection() {
  return (
    <section id="change" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground">
            他と、何が<span className="text-coral">違う</span>のか。
          </h2>
        </div>

        {/* Difference Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {differences.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} rounded-xl p-6 md:p-8 text-center`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-5 shadow-sm">
                <item.icon className="w-7 h-7 text-sage" />
              </div>
              <h3 className="text-sm md:text-base font-medium text-foreground mb-3 leading-relaxed">
                {item.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
