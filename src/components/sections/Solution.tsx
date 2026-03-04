"use client";

import {
  ChefHat,
  Package,
  Brain,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";

const features = [
  {
    icon: ChefHat,
    title: "검증된 레시피 제공",
    description:
      "전문 셰프가 개발하고, 실매장에서 검증한 레시피를 제공합니다. 원가율, 조리 난이도까지 최적화.",
  },
  {
    icon: Package,
    title: "식자재 원스톱 공급",
    description:
      "레시피에 맞는 식자재를 합리적 가격에 한 번에 공급. 소량 주문도 가능한 유통 구조.",
  },
  {
    icon: Brain,
    title: "AI 트렌드 분석",
    description:
      "SNS·검색 데이터를 실시간 분석하여 다음 달 뜰 메뉴를 예측. 선제적 메뉴 도입이 가능합니다.",
  },
  {
    icon: BarChart3,
    title: "매출 데이터 리포트",
    description:
      "도입 메뉴의 매출 기여도, 고객 반응, 재주문율을 한눈에. 데이터 기반 의사결정을 지원합니다.",
  },
];

const flowSteps = [
  { label: "전문 셰프", sub: "레시피 개발·검증", emoji: "👨‍🍳" },
  { label: "트렌드 링크", sub: "AI 분석·매칭·공급", emoji: "🚀" },
  { label: "골목 점주", sub: "메뉴 도입·판매", emoji: "🏪" },
  { label: "소비자", sub: "동네에서 트렌드 경험", emoji: "😋" },
];

export function Solution() {
  return (
    <section
      id="solution"
      className="relative py-24 md:py-32 bg-surface overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-accent-500 font-semibold text-sm tracking-widest uppercase mb-3">
              Solution
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
              트렌드 링크가 <span className="text-accent-500">연결</span>합니다
            </h2>
            <p className="text-warm-500 text-base md:text-lg max-w-2xl mx-auto">
              셰프의 전문성과 AI 기술을 결합하여
              <br className="hidden md:block" />
              골목 상권의 메뉴 경쟁력을 높입니다
            </p>
          </div>
        </FadeIn>

        {/* 4 Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-20">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.1}>
              <div className="group relative bg-white border border-warm-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-navy-100/50 hover:border-accent-200 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-navy-600 flex items-center justify-center mb-6 group-hover:bg-accent-500 transition-colors duration-300">
                  <feature.icon className="text-white" size={26} />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-warm-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Service Flow Diagram */}
        <FadeIn>
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-2">
              서비스 흐름
            </h3>
            <p className="text-warm-500 text-sm">
              셰프에서 소비자까지, 하나의 파이프라인으로 연결됩니다
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          {flowSteps.map((step, index) => (
            <FadeIn key={step.label} delay={index * 0.15}>
              <div className="flex items-center gap-4 md:gap-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center w-40"
                >
                  <div className="w-20 h-20 rounded-2xl bg-navy-600 flex items-center justify-center text-3xl mb-3 shadow-lg shadow-navy-200/50">
                    {step.emoji}
                  </div>
                  <h4 className="font-bold text-navy-900 text-base mb-1">
                    {step.label}
                  </h4>
                  <p className="text-warm-500 text-xs leading-snug">
                    {step.sub}
                  </p>
                </motion.div>

                {index < flowSteps.length - 1 && (
                  <div className="hidden md:flex items-center mx-4">
                    <div className="w-8 h-[2px] bg-accent-300" />
                    <ArrowRight className="text-accent-500" size={20} />
                  </div>
                )}
                {index < flowSteps.length - 1 && (
                  <div className="flex md:hidden items-center justify-center my-1">
                    <ArrowRight
                      className="text-accent-500 rotate-90"
                      size={20}
                    />
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
