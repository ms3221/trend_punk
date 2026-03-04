"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import {
  Receipt,
  Truck,
  CreditCard,
  Megaphone,
  Crown,
} from "lucide-react";

const revenueStreams = [
  {
    icon: Receipt,
    title: "레시피 수수료",
    description: "셰프 레시피 도입 시 건당 수수료",
  },
  {
    icon: Truck,
    title: "식자재 연계",
    description: "식자재 유통 마진 수익",
  },
  {
    icon: CreditCard,
    title: "월정액 구독",
    description: "프리미엄 기능 구독 모델",
  },
  {
    icon: Megaphone,
    title: "광고 수익",
    description: "식자재 업체 광고 배너",
  },
  {
    icon: Crown,
    title: "프리미엄 컨설팅",
    description: "1:1 맞춤 메뉴 컨설팅",
  },
];

export function BusinessModel() {
  return (
    <section className="relative py-24 md:py-32 bg-navy-900 overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-accent-500 font-semibold text-sm tracking-widest uppercase mb-3">
              Business Model
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              지속 가능한 <span className="text-accent-400">수익 구조</span>
            </h2>
            <p className="text-warm-400 text-base md:text-lg max-w-xl mx-auto">
              다각화된 수익 모델로 안정적인 성장을 추구합니다
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {revenueStreams.map((stream, index) => (
            <FadeIn key={stream.title} delay={index * 0.1}>
              <div className="group bg-navy-800/60 border border-navy-700/50 rounded-2xl p-6 text-center hover:border-accent-500/30 transition-all duration-300 h-full flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center mb-4 group-hover:bg-accent-500/20 transition-colors">
                  <stream.icon className="text-accent-400" size={22} />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">
                  {stream.title}
                </h3>
                <p className="text-warm-500 text-xs leading-snug">
                  {stream.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
