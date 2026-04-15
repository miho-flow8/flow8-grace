import Image from "next/image";

export function ProfileSection() {
  return (
    <section id="profile" className="py-16 md:py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">
          {/* Profile Image */}
          <div className="mx-auto md:mx-0">
            <div className="w-48 md:w-full aspect-square bg-gradient-to-br from-sage-light to-coral-light rounded-full overflow-hidden shadow-lg">
              <Image
                src="/images/miho.png"
                alt="大久保 美穂"
                width={280}
                height={280}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Profile Content */}
          <div>
            <div className="mb-4">
              <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-1">
                大久保 美穂
              </h3>
              <p className="text-sm text-foreground/60">Miho Okubo</p>
            </div>

            <p className="text-sm md:text-[15px] leading-loose text-foreground/80 mb-6">
              元IT企業勤務。結婚・出産を経て独立を決意。
              しかし「発信しても反応がない」「値上げできない」「売ることへの罪悪感」に苦しみ、売上ゼロの時期を経験。
            </p>

            <p className="text-sm md:text-[15px] leading-loose text-foreground/80 mb-6">
              あるとき「売れない原因は"内側のブロック"にある」と気づき、思考を書き換えながらLINE・LP・GASの集客導線を整えた結果、3ヶ月で安定集客を実現。
            </p>

            <p className="text-sm md:text-[15px] leading-loose text-foreground/80">
              現在は「心と仕組み、両方から整える」をコンセプトに、ひとり起業家の売れる状態をサポートしています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
