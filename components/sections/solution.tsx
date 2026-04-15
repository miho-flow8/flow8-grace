import Image from "next/image";

export function SolutionSection() {
  return (
    <section id="vision" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground">
            心と仕組み、<span className="text-coral">両方</span>から整える。
          </h2>
        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {/* Inner Card */}
          <div className="bg-sage-light rounded-xl p-6 md:p-8">
            <span className="inline-block bg-sage text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
              Inner
            </span>
            <h3 className="text-base md:text-lg font-medium text-foreground mb-3">
              思考ブロックを言語化・解除する
            </h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
              売れない原因は「仕組み」だけではありません。自分の中にある思い込みやブロックを言語化し、解除することで、自然と行動が変わります。
            </p>
            <div className="mt-6 flex justify-center">
              <div className="w-32 h-32 relative">
                <Image
                  src="/images/illust-woman.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Outer Card */}
          <div className="bg-cream rounded-xl p-6 md:p-8">
            <span className="inline-block bg-coral text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
              Outer
            </span>
            <h3 className="text-base md:text-lg font-medium text-foreground mb-3">
              集客の仕組みを まるごと整理する
            </h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
              LP、LINE、Instagram、ブログ...バラバラになった集客ツールを整理し、一貫性のある導線を作ります。
            </p>
            <div className="mt-6 flex justify-center">
              <div className="w-32 h-32 bg-cream-dark/30 rounded-lg flex items-center justify-center">
                <Image
                  src="/images/icon-pc.png"
                  alt=""
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
