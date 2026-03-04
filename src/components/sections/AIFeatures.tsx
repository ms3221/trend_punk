"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { Sparkles, TrendingUp, MessageCircle, FileText } from "lucide-react";

const aiFeatures = [
  {
    icon: Sparkles,
    title: "SNS 트렌드 자동 분석",
    description:
      "인스타그램, 틱톡, 블로그 데이터를 AI가 실시간 수집·분석하여 다음 달 뜰 메뉴를 예측합니다.",
    effect: "트렌드 예측 정확도 82%",
    color: "from-purple-500/20 to-purple-600/5",
  },
  {
    icon: TrendingUp,
    title: "식자재 수요 예측",
    description:
      "과거 주문 데이터와 트렌드를 결합하여 필요 식자재량을 예측. 재고 낭비를 줄이고 원가를 절감합니다.",
    effect: "식자재 폐기율 25% 감소",
    color: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    icon: MessageCircle,
    title: "점주 상담 챗봇",
    description:
      "메뉴 선택, 조리법 질문, 원가 계산까지 24시간 AI 챗봇이 점주를 지원합니다. 전화 상담 대기 없이 즉시 답변.",
    effect: "상담 응답시간 90% 단축",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: FileText,
    title: "매출 보고서 자동 생성",
    description:
      "도입 메뉴별 매출 기여도, 고객 피드백, 재주문율을 자동 집계하여 주간/월간 리포트를 생성합니다.",
    effect: "경영 분석 시간 70% 절감",
    color: "from-amber-500/20 to-amber-600/5",
  },
];

export function AIFeatures() {
  return (
    <section id="ai" className="relative py-24 md:py-32 bg-surface overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-accent-500 font-semibold text-sm tracking-widest uppercase mb-3">
              AI Technology
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
              <span className="text-accent-500">AI</span>가 만드는 차이
            </h2>
            <p className="text-warm-500 text-base md:text-lg max-w-2xl mx-auto">
              4가지 AI 기술로 소상공인의 의사결정을 지원합니다
            </p>
          </div>
        </FadeIn>

        {/* AI Feature Cards - 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
          {aiFeatures.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative bg-white border border-warm-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-navy-100/30 transition-all duration-300 overflow-hidden h-full"
              >
                {/* Gradient accent */}
                <div
                  className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${feature.color} rounded-bl-full opacity-60 group-hover:opacity-100 transition-opacity`}
                />

                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-navy-600 flex items-center justify-center mb-6 group-hover:bg-accent-500 transition-colors duration-300">
                    <feature.icon className="text-white" size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-warm-500 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent-50 border border-accent-200 rounded-full">
                    <TrendingUp className="text-accent-500" size={14} />
                    <span className="text-accent-600 text-xs font-semibold">
                      {feature.effect}
                    </span>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Disclaimer */}
        <FadeIn delay={0.3}>
          <p className="text-center text-warm-400 text-xs">
            * AI는 셰프의 전문성을 보조하는 도구입니다. 최종 레시피 품질은 전문
            셰프의 검증을 거칩니다.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
