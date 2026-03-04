"use client";

import { AlertTriangle, TrendingDown, DollarSign, MapPin } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const problems = [
  {
    icon: AlertTriangle,
    title: "메뉴 개발 역량 부족",
    description:
      "소상공인 85%가 새 메뉴 개발에 어려움을 겪고 있습니다. 트렌드를 따라가고 싶지만, 전문 교육이나 R&D 인력이 없는 현실.",
  },
  {
    icon: TrendingDown,
    title: "SNS 레시피의 품질 편차",
    description:
      "유튜브·인스타 레시피를 따라했지만 맛도, 원가도 맞지 않는 경험. 검증 없는 레시피는 매출 하락으로 이어집니다.",
  },
  {
    icon: DollarSign,
    title: "식자재 가격 불안정",
    description:
      "소량 구매로 인한 높은 원가, 불투명한 유통 구조. 원가율 40%를 넘기는 순간 수익성은 무너집니다.",
  },
];

export function Problems() {
  return (
    <section id="problems" className="relative py-24 md:py-32 bg-navy-900">
      {/* Diagonal top */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-navy-950 diagonal-bottom" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-accent-500 font-semibold text-sm tracking-widest uppercase mb-3">
              Problem
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              골목 상권이 직면한 <span className="text-accent-400">현실</span>
            </h2>
            <p className="text-warm-400 text-base md:text-lg max-w-2xl mx-auto">
              대기업 프랜차이즈는 전문 R&D팀이 있지만,
              <br className="hidden md:block" />
              골목 소상공인에게는 그런 여유가 없습니다.
            </p>
          </div>
        </FadeIn>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {problems.map((problem, index) => (
            <FadeIn key={problem.title} delay={index * 0.15}>
              <div className="group relative bg-navy-800/60 backdrop-blur-sm border border-navy-700/50 rounded-2xl p-8 hover:border-accent-500/30 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-accent-500/10 flex items-center justify-center mb-6 group-hover:bg-accent-500/20 transition-colors">
                  <problem.icon className="text-accent-500" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {problem.title}
                </h3>
                <p className="text-warm-400 text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Consumer problem */}
        <FadeIn delay={0.3}>
          <div className="flex items-center justify-center gap-3 py-5 px-6 bg-navy-800/40 border border-navy-700/30 rounded-xl max-w-2xl mx-auto">
            <MapPin className="text-accent-400 shrink-0" size={20} />
            <p className="text-warm-300 text-sm md:text-base">
              <span className="text-accent-400 font-semibold">소비자 역시</span>{" "}
              트렌드 메뉴를 위해 먼 곳까지 이동해야 하는 불편을 겪고 있습니다
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
