"use client";

import { MapPin, Calendar, Video } from "lucide-react";
import { cn } from "@/lib/utils";

export function LandingHero() {
  return (
    <section className="min-h-screen bg-[#3e6a00] pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left: text */}
          <div className="w-full md:w-3/5">
            <span className="inline-block px-3 py-1 rounded-full border border-white/30 text-[10px] sm:text-xs uppercase tracking-widest font-medium text-white mb-4 sm:mb-6">
              #TheRunningBabes 2026
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-normal leading-tight text-white mb-4 sm:mb-6">
              Hành trình thoát vòng lặp
            </h1>
            <p className="text-sm sm:text-base lg:text-xl leading-relaxed text-white/90 mb-6 sm:mb-8" style={{ maxWidth: 512 }}>
              Giải chạy đầu tiên của BABÉ tại Việt Nam — Cùng BABÉ thoát khỏi vòng
              lặp mụn, tái tạo năng lượng cho làn da và tâm trí.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              {[
                { icon: MapPin, text: "Thủ Thiêm, HCM" },
                { icon: Calendar, text: "10/05/2026" },
                { icon: Video, text: "UGC: 03-10/05" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="bg-white/10 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full flex items-center gap-2 border border-white/20 text-white"
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-medium">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#ugc-challenge"
              className={cn(
                "inline-flex items-center justify-center bg-white text-[#3e6a00]",
                "px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base lg:text-lg",
                "hover:scale-105 transition-transform"
              )}
            >
              Tham gia ngay
            </a>
          </div>

          {/* Right: image circle */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full border-[24px] sm:border-[32px] border-white/10 flex items-center justify-center relative overflow-hidden">
              <div className="w-4/5 h-4/5 rounded-full overflow-hidden bg-white/20 flex items-center justify-center">
                <img
                  src="/brand/cleansing-gel.jpg"
                  alt="BABÉ Stop AKN Purifying Cleansing Gel"
                  className="w-full h-full object-cover"
                />
              </div>
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                <circle
                  cx="50%"
                  cy="50%"
                  fill="none"
                  opacity="0.3"
                  r="48%"
                  stroke="white"
                  strokeDasharray="10 20"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial grid lines overlay */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none opacity-10">
        {Array.from({ length: 11 }).map((_, i) => (
          <div key={i} className="border-r border-white h-full" />
        ))}
      </div>
    </section>
  );
}
