"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe2rksgbA-4sPDVdFgaoV8D8lBHGRt8urDjlsP3qXX3BgqIhw/viewform";

const slogans = [
  "골목 셰프가 만드는 트렌드",
  "검증된 레시피, 검증된 매출",
  "AI가 읽고, 셰프가 만들고, 점주가 팝니다",
];

export function Hero() {
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 800], [0, 200]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.4, 0.7]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-950">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&h=1080&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: backgroundY,
          }}
        />
        <motion.div
          className="absolute inset-0 bg-navy-950"
          style={{ opacity: overlayOpacity }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50" />
      </div>

      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 via-accent-400 to-accent-600 z-20" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* English logo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-accent-500 tracking-[0.4em] uppercase mb-2 text-sm font-semibold"
        >
          AI-Powered Food Content Platform
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-4"
        >
          <span
            className="block text-6xl md:text-8xl lg:text-9xl text-white leading-none tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
            TREND PUNK
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
        >
          골목상권에 <span className="text-accent-500">트렌드</span>를 연결합니다
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-warm-400 text-base md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          전문 셰프의 검증된 레시피를 소상공인에게 연결하는
          <br className="hidden md:block" />
          AI 기반 외식 콘텐츠 플랫폼
        </motion.p>

        {/* Slogan Rotation */}
        <div className="h-8 md:h-10 mb-10 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentSlogan}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-accent-300 text-sm md:text-base tracking-wide"
            >
              &ldquo;{slogans[currentSlogan]}&rdquo;
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-white font-bold rounded-lg hover:bg-accent-600 transition-all hover:shadow-lg hover:shadow-accent-500/30 text-lg"
          >
            파일럿 참여 신청
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#solution"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-medium rounded-lg hover:bg-white/10 hover:border-white/40 transition-all"
          >
            서비스 알아보기
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-warm-500 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <ChevronDown className="text-warm-500" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
