import Image from "next/image";

const profileTags = [
  { icon: "💻", label: "LP/Web制作" },
  { icon: "📱", label: "LINE構築" },
  { icon: "⚙️", label: "GAS自動化" },
  { icon: "🧠", label: "メンタルサポート" },
];

export function ProfileSection() {
  return (
    <section id="profile" className="py-24 bg-background">
      <div className="max-w-[1100px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-light text-rose mb-2">
            <span className="border-b-2 border-rose pb-0.5">プロフィール</span>
          </h2>
          <span className="text-[11px] tracking-[0.25em] text-muted-foreground uppercase font-mono">
            Profile
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-10 md:gap-[72px] items-start">
          {/* Profile Image */}
          <div className="max-w-[260px] md:max-w-none mx-auto md:mx-0">
            <div className="w-full aspect-[3/4] bg-gradient-to-br from-sage-light to-rose-light rounded-[48%_52%_52%_48%/44%_44%_56%_56%] flex items-center justify-center overflow-hidden shadow-xl">
              <Image
                src="/images/miho.png"
                alt="Miho"
                width={340}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Profile Content */}
          <div>
            <h3 className="font-serif text-4xl md:text-[44px] font-light tracking-wide leading-tight mb-1">
              Miho
            </h3>
            <p className="text-sm text-muted-foreground mb-1.5 tracking-wider">
              みほ
            </p>
            <span className="inline-block bg-sage text-white text-xs px-4 py-1 rounded-full mb-7 tracking-wide">
              FLOW∞Grace 代表
            </span>

            <p className="text-[15px] leading-loose text-[#5A5A5A] mb-8">
              元IT企業勤務。結婚・出産を経て独立を決意。
              <br />
              しかし「発信しても反応がない」「値上げできない」「売ることへの罪悪感」に苦しみ、売上ゼロの時期を経験。
              <br />
              <br />
              あるとき「売れない原因は"内側のブロック"にある」と気づき、思考を書き換えながらLINE・LP・GASの集客導線を整えた結果、3ヶ月で安定集客を実現。
              <br />
              <br />
              現在は「心と仕組み、両方から整える」をコンセプトに、ひとり起業家の売れる状態をサポートしています。
            </p>

            <blockquote className="italic text-rose border-l-[3px] border-rose pl-5 mb-8 text-base leading-relaxed">
              &ldquo;がんばらなくても売れる自分になる。
              <br />
              それは、内側を整えた先にある。&rdquo;
            </blockquote>

            <div className="flex flex-wrap gap-2.5">
              {profileTags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-white border border-beige/30 rounded-lg px-4 py-2 text-[13px] font-medium flex items-center gap-1.5"
                >
                  <span className="text-base">{tag.icon}</span>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
