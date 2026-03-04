"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { TrendingUp, Users, Share2, Cookie } from "lucide-react";

interface CounterProps {
  end: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
}

function Counter({ end, suffix, prefix = "", decimals = 0 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: TrendingUp,
    value: 15.4,
    prefix: "+",
    suffix: "%",
    decimals: 1,
    label: "매출 증가율",
    description: "트렌드 메뉴 도입 매장 평균",
  },
  {
    icon: Users,
    value: 60,
    prefix: "",
    suffix: "%",
    decimals: 0,
    label: "2030세대 신규 방문",
    description: "기존 대비 젊은 고객층 유입",
  },
  {
    icon: Share2,
    value: 30,
    prefix: "+",
    suffix: "%",
    decimals: 0,
    label: "SNS 유입 증가",
    description: "인스타그램·블로그 노출 증가",
  },
];

export function Results() {
  return (
    <section
      id="results"
      className="relative py-24 md:py-32 bg-navy-950 overflow-hidden grain-overlay"
    >
      {/* Accent gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-6">
            <p className="text-accent-500 font-semibold text-sm tracking-widest uppercase mb-3">
              Proven Results
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              실증으로 <span className="text-accent-400">증명</span>했습니다
            </h2>
            <p className="text-warm-400 text-base md:text-lg max-w-2xl mx-auto">
              2026년 1~2월 실증 검증 완료
            </p>
          </div>
        </FadeIn>

        {/* Case badge */}
        <FadeIn delay={0.1}>
          <div className="flex justify-center mb-14">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-500/10 border border-accent-500/20 rounded-full">
              <Cookie className="text-accent-400" size={18} />
              <span className="text-accent-300 text-sm font-medium">
                &ldquo;두바이 쫀득 쿠키&rdquo; 도입 사례 기반
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -4 }}
                className="relative bg-navy-900/60 backdrop-blur-sm border border-navy-700/50 rounded-2xl p-8 text-center hover:border-accent-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent-500/10 flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="text-accent-500" size={28} />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  <Counter
                    end={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    decimals={stat.decimals}
                  />
                </div>
                <h3 className="text-lg font-bold text-accent-400 mb-1">
                  {stat.label}
                </h3>
                <p className="text-warm-500 text-sm">{stat.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
