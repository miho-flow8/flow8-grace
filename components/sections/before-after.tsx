const beforeItems = [
  "なぜ売れないか分からない",
  "SNSを頑張っても反応なし",
  "プラットフォーム依存から抜け出せない",
  "ITが怖くて仕組みが作れない",
  "値上げできない・自信がない",
];

const afterItems = [
  "売れない原因が言語化できて、行動できる",
  "LINEから自然に問い合わせが入る",
  "自分で集客できる仕組みがある",
  "LP/LINE/GASの知識がついた",
  "内側が変わって値上げできた",
];

export function BeforeAfterSection() {
  return (
    <section id="benefit" className="py-24 bg-sage-light">
      <div className="max-w-[1100px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-light text-rose mb-2">
            こんな風に<span className="border-b-2 border-rose pb-0.5">変われる</span>。
          </h2>
          <span className="text-[11px] tracking-[0.25em] text-muted-foreground uppercase font-mono">
            Before / After
          </span>
        </div>

        {/* Before/After Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_80px_1fr] gap-0">
          {/* Before Column */}
          <div className="bg-white rounded-2xl md:rounded-r-none p-10 shadow-md">
            <span className="inline-block bg-gray-100 text-gray-500 text-[11px] font-bold tracking-[0.2em] uppercase px-5 py-1.5 rounded-full mb-7">
              Before
            </span>
            <ul className="flex flex-col gap-3.5">
              {beforeItems.map((item, index) => (
                <li
                  key={index}
                  className="text-sm leading-relaxed flex items-start gap-2.5 text-gray-400 line-through py-2.5 border-b border-black/[0.04] last:border-b-0"
                >
                  <span className="text-gray-300 flex-shrink-0 text-base mt-0.5">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow Column */}
          <div className="hidden md:flex items-center justify-center bg-beige-light text-3xl text-beige font-serif py-5 md:py-0">
            →
          </div>
          <div className="flex md:hidden items-center justify-center bg-beige-light text-3xl text-beige font-serif py-5">
            ↓
          </div>

          {/* After Column */}
          <div className="bg-white rounded-2xl md:rounded-l-none p-10 shadow-md">
            <span className="inline-block bg-sage text-white text-[11px] font-bold tracking-[0.2em] uppercase px-5 py-1.5 rounded-full mb-7">
              After
            </span>
            <ul className="flex flex-col gap-3.5">
              {afterItems.map((item, index) => (
                <li
                  key={index}
                  className="text-sm leading-relaxed flex items-start gap-2.5 text-foreground font-medium py-2.5 border-b border-black/[0.04] last:border-b-0"
                >
                  <span className="text-sage flex-shrink-0 text-base mt-0.5 font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
