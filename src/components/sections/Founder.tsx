"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Quote } from "lucide-react";

const highlights = [
  "메뉴 컨설팅",
  "브랜드 개발",
  "쿠킹클래스",
  "외식업체 운영",
  "10년차 셰프",
];

export function Founder() {
  return (
    <section
      id="founder"
      className="relative py-24 md:py-32 bg-surface overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center mb-6">
            <p className="text-accent-500 font-semibold text-sm tracking-widest uppercase mb-3">
              Founder
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
              현장을 아는 <span className="text-accent-500">셰프</span>가 만듭니다
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-navy-100">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=750&fit=crop&q=80"
                  alt="셰프 대표자"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent-500/20 rounded-2xl -z-10" />
            </div>
          </FadeIn>

          {/* Info */}
          <FadeIn direction="right" delay={0.2}>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-2">
                대표 조재응
              </h3>
              <p className="text-accent-500 font-semibold mb-6">
                10년차 전문 셰프 · 트렌드 펑크 대표
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {highlights.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-navy-50 border border-navy-200 rounded-full text-navy-700 text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-warm-600 leading-relaxed mb-8">
                대기업 외식 브랜드부터 개인 레스토랑까지, 다양한 현장에서 메뉴를
                개발하고 매장을 운영해 온 경험을 바탕으로 트렌드 펑크를
                만들었습니다. 소상공인이 프랜차이즈와 대등하게 경쟁할 수 있는
                환경, 그것이 트렌드 펑크의 목표입니다.
              </p>

              {/* Quote */}
              <div className="relative bg-navy-50 border-l-4 border-accent-500 rounded-r-xl p-6">
                <Quote className="text-accent-300 absolute top-4 right-4" size={24} />
                <p className="text-navy-800 font-medium italic leading-relaxed">
                  &ldquo;이전 실패를 교훈 삼아, 본업의 강점으로 다시
                  도전합니다. 골목 상권에도 트렌드가 흐르게 하겠습니다.&rdquo;
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
