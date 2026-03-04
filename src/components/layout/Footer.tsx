import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-warm-400 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3
              className="text-accent-500 text-2xl mb-3 tracking-wider"
              style={{ fontFamily: "var(--font-display)" }}
            >
              TREND LINK
            </h3>
            <p className="text-sm text-warm-500 leading-relaxed">
              전문 셰프의 검증된 레시피를 소상공인에게 연결하는
              <br />
              AI 기반 외식 콘텐츠 플랫폼
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">연락처</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-accent-500 shrink-0" />
                <a
                  href="mailto:trendlink@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  trendlink@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-bold mb-4">사업 정보</h4>
            <ul className="space-y-2 text-sm text-warm-500">
              <li>기업명: 트렌드 링크(Trend Link)</li>
              <li>대표: 조재응</li>
              <li className="text-accent-400 font-medium mt-3">
                2026 재도전성공패키지 지원사업
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-warm-600">
          <p>&copy; 2026 Trend Link. All rights reserved.</p>
          <p className="text-xs">
            중소벤처기업부 재도전성공패키지 지원사업
          </p>
        </div>
      </div>
    </footer>
  );
}
