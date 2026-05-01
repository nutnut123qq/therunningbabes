"use client";

import { ArrowRight } from "lucide-react";

export function LandingTradeIn() {
  return (
    <section className="py-12 md:py-[96px] bg-[#f9f9ff]" id="trade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative bg-[#ede1cc] rounded-xl p-3 sm:p-4 overflow-hidden">
              <div className="w-full aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src="/brand/mattifying-fluid.jpg"
                  alt="BABÉ Stop AKN Mattifying Fluid"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-10 sm:left-10 sm:right-10 bg-white/90 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white">
                <p className="text-[10px] sm:text-[11px] text-[#6FA234] uppercase font-medium mb-2">
                  Mechanical Swap
                </p>
                <p className="text-base sm:text-[18px] lg:text-[20px] font-medium leading-tight">
                  Reset Your Skin Routine tại điểm đích
                </p>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="text-[#6FA234] text-[10px] sm:text-[12px] uppercase tracking-widest font-medium mb-4 block">
              Bước 03: Tái tạo
            </span>
            <h2 className="text-2xl sm:text-[32px] lg:text-[48px] font-normal mb-6 sm:mb-8 leading-tight">
              Không thử sai bằng làn da thật
            </h2>
            <p className="text-sm sm:text-[16px] lg:text-[20px] text-[#41454d] leading-relaxed mb-8 sm:mb-12">
              Tại vạch đích, BABÉ mang đến đặc quyền Trade-in duy nhất: Mang theo
              các sản phẩm trị mụn đã qua sử dụng hoặc không phù hợp để đổi lấy
              lộ trình phục hồi chuẩn y khoa từ chuyên gia Tây Ban Nha.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="border-l-4 border-[#6FA234] pl-4 sm:pl-6">
                <h4 className="text-base sm:text-[18px] lg:text-[20px] font-medium mb-2">
                  Soi da 360 AI
                </h4>
                <p className="text-sm sm:text-[14px] text-[#41454d]">
                  Phân tích đa tầng cấu trúc da mụn.
                </p>
              </div>
              <div className="border-l-4 border-[#6FA234] pl-4 sm:pl-6">
                <h4 className="text-base sm:text-[18px] lg:text-[20px] font-medium mb-2">
                  Lộ trình cá nhân
                </h4>
                <p className="text-sm sm:text-[14px] text-[#41454d]">
                  Routine tinh gọn dành riêng cho bạn.
                </p>
              </div>
            </div>

            <button className="bg-[#3e6a00] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-medium text-sm sm:text-[16px] lg:text-[18px] flex items-center gap-4 hover:scale-105 transition-transform group">
              Đăng ký slot soi da miễn phí
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
