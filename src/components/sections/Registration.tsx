"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight, MapPin, Phone, Store } from "lucide-react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe2rksgbA-4sPDVdFgaoV8D8lBHGRt8urDjlsP3qXX3BgqIhw/viewform";

export function Registration() {
  return (
    <section
      id="register"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #E8530E 0%, #c2410c 50%, #9a3412 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="mx-auto max-w-4xl px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-white/70 font-semibold text-sm tracking-widest uppercase mb-3">
              Pilot Program
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              골목상권 파일럿에
              <br />
              참여하세요
            </h2>
            <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              지금 사전 등록하시면 파일럿 프로그램 우선 참여 기회와
              <br className="hidden md:block" />
              첫 달 무료 혜택을 드립니다
            </p>
          </div>
        </FadeIn>

        {/* Info cards */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4">
              <Store className="text-white/90 shrink-0" size={20} />
              <div>
                <p className="text-white/60 text-xs">필요 정보</p>
                <p className="text-white font-medium text-sm">매장명</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4">
              <Phone className="text-white/90 shrink-0" size={20} />
              <div>
                <p className="text-white/60 text-xs">필요 정보</p>
                <p className="text-white font-medium text-sm">연락처</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4">
              <MapPin className="text-white/90 shrink-0" size={20} />
              <div>
                <p className="text-white/60 text-xs">필요 정보</p>
                <p className="text-white font-medium text-sm">지역</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* CTA Button */}
        <FadeIn delay={0.2}>
          <div className="text-center">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-accent-600 font-bold rounded-xl hover:bg-navy-950 hover:text-white transition-all duration-300 text-lg shadow-2xl shadow-black/20 hover:shadow-navy-950/30"
            >
              파일럿 참여 신청하기
              <ArrowRight
                size={22}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <p className="text-white/50 text-xs mt-4">
              * 신청서 작성은 1분이면 충분합니다
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
