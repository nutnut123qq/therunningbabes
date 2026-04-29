"use client";

import { Video, Footprints, ArrowLeftRight } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    step: "Step 01",
    Icon: Video,
    title: "7 ngày vận động — UGC Challenge",
    desc: "Chia sẻ hành trình chăm da và luyện tập mỗi ngày cùng BABÉ.",
    href: "#ugc-challenge",
    variant: "outline" as const,
  },
  {
    step: "Step 02",
    Icon: Footprints,
    title: "Marathon The Running Babes",
    desc: "Đường chạy tiếp sức tinh thần và làn da tại trung tâm Thủ Thiêm.",
    href: "#marathon",
    variant: "filled" as const,
  },
  {
    step: "Step 03",
    Icon: ArrowLeftRight,
    title: "Trade-in tại đích — Reset Skin",
    desc: "Đổi sản phẩm cũ lấy lộ trình BABÉ Stop AKN chuyên nghiệp.",
    href: "#trade-in",
    variant: "outline" as const,
  },
];

export function LandingJourneySteps() {
  return (
    <section className="py-12 md:py-[96px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 md:mb-24">
        <h2 className="text-2xl sm:text-[32px] lg:text-[48px] font-normal text-[#3e6a00] mb-4 leading-tight">
          Hành trình của bạn bắt đầu từ đây
        </h2>
        <div className="w-24 h-1 bg-[#3e6a00] mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {steps.map((s) => (
          <a
            key={s.href}
            href={s.href}
            className={cn(
              "group block p-6 sm:p-10 rounded-xl transition-all duration-500 overflow-hidden relative",
              s.variant === "filled"
                ? "bg-[#3e6a00] hover:shadow-2xl"
                : "bg-white border border-[#c3c9b5] hover:bg-[#3e6a00]"
            )}
          >
            <div className="relative z-10">
              <span
                className={cn(
                  "text-[10px] sm:text-[12px] uppercase tracking-[0.2em] font-medium block",
                  s.variant === "filled"
                    ? "text-white/70"
                    : "text-[#6FA234] group-hover:text-white transition-colors"
                )}
              >
                {s.step}
              </span>
              <div
                className={cn(
                  "my-6 sm:my-8 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-colors",
                  s.variant === "filled"
                    ? "bg-white/20"
                    : "bg-[#6FA234]/10 group-hover:bg-white/20"
                )}
              >
                <s.Icon
                  className={cn(
                    "w-6 h-6 sm:w-8 sm:h-8 transition-colors",
                    s.variant === "filled"
                      ? "text-white"
                      : "text-[#6FA234] group-hover:text-white"
                  )}
                />
              </div>
              <h3
                className={cn(
                  "text-lg sm:text-[20px] lg:text-[32px] font-medium mb-4 leading-tight transition-colors",
                  s.variant === "filled"
                    ? "text-white"
                    : "text-[#181d26] group-hover:text-white"
                )}
              >
                {s.title}
              </h3>
              <p
                className={cn(
                  "text-sm sm:text-[16px] leading-relaxed transition-colors",
                  s.variant === "filled"
                    ? "text-white/80"
                    : "text-[#41454d] group-hover:text-white/80"
                )}
              >
                {s.desc}
              </p>
            </div>
            {/* Background icon */}
            <div
              className={cn(
                "absolute -right-8 -bottom-8 transform group-hover:scale-150 transition-transform",
                s.variant === "filled" ? "opacity-10 text-white" : "opacity-5 text-[#181d26]"
              )}
            >
              <s.Icon className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px]" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
