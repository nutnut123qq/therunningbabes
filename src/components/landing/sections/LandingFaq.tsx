"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Làm sao để tham gia UGC Challenge?",
    a: "Bạn chỉ cần thực hiện 3 bước: Đăng ký tại website, nhận sample kit và quay ít nhất 3 video vận động/chăm da trong tuần lễ từ 03/05 đến 10/05 kèm hashtag quy định.",
  },
  {
    q: "Tôi không bị mụn có tham gia được không?",
    a: "Hoàn toàn được! The Running Babes là sự kiện cổ vũ lối sống năng động. BABÉ Stop AKN còn có các dòng sản phẩm kiềm dầu và làm sạch chuyên sâu cho mọi loại da.",
  },
  {
    q: "Cần chuẩn bị gì cho ngày chạy Marathon?",
    a: "Chúng tôi khuyến khích bạn mặc trang phục thể thao thoải mái. BABÉ sẽ cung cấp áo đấu, nước uống và các trạm phục hồi da trong suốt đường chạy.",
  },
];

export function LandingFaq() {
  return (
    <section className="py-12 md:py-[96px] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-[32px] lg:text-[48px] font-normal text-center mb-10 sm:mb-16 leading-tight">
        Câu hỏi thường gặp
      </h2>
      <div className="space-y-3 sm:space-y-4">
        {faqs.map((faq, idx) => (
          <details
            key={idx}
            className="group bg-white border border-[#c3c9b5] rounded-xl overflow-hidden"
            open={idx === 0}
          >
            <summary className="flex justify-between items-center p-4 sm:p-6 cursor-pointer list-none">
              <span className="text-base sm:text-[18px] lg:text-[20px] font-medium pr-4">
                {faq.q}
              </span>
              <ChevronDown className="w-5 h-5 shrink-0 transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-[14px] text-[#41454d] leading-relaxed border-t border-[#c3c9b5]/50 pt-4">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
