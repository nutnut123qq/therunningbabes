"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const rewards = [
  "Full bộ BABÉ Stop AKN",
  "Voucher mua hàng 1.000.000đ",
  "Vé VIP Marathon Thủ Thiêm",
  "Soi da chuyên sâu tại đích",
];

export function LandingUgcChallenge() {
  return (
    <section className="py-12 md:py-[96px] bg-white overflow-hidden" id="ugc-challenge">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* Left content */}
        <div>
          <span className="text-[#6FA234] text-[10px] sm:text-[12px] uppercase tracking-[0.2em] font-medium mb-4 block">
            Bước 01: 7-Day Challenge
          </span>
          <h2 className="text-2xl sm:text-[32px] lg:text-[48px] font-normal mb-8 sm:mb-12 leading-tight">
            Chứng minh bạn sẵn sàng thoát khỏi mụn
          </h2>

          <div className="space-y-8 sm:space-y-12">
            <div className="flex gap-4 sm:gap-8 items-start">
              <div className="text-[#3e6a00]/20 text-5xl sm:text-7xl font-black leading-none shrink-0">
                01
              </div>
              <div>
                <h4 className="text-lg sm:text-[20px] lg:text-[24px] font-medium mb-2">
                  Đăng ký & Nhận Kit
                </h4>
                <p className="text-sm sm:text-[16px] text-[#41454d] leading-relaxed">
                  Điền thông tin bên dưới để nhận ngay sample kit khởi đầu hành
                  trình 7 ngày.
                </p>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-8 items-start">
              <div className="text-[#3e6a00]/20 text-5xl sm:text-7xl font-black leading-none shrink-0">
                02
              </div>
              <div>
                <h4 className="text-lg sm:text-[20px] lg:text-[24px] font-medium mb-2">
                  Quay Video Mỗi Ngày
                </h4>
                <p className="text-sm sm:text-[16px] text-[#41454d] leading-relaxed">
                  Ghi lại khoảnh khắc vận động hoặc chăm da cùng BABÉ và đăng lên
                  TikTok/IG.
                </p>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-8 items-start">
              <div className="text-[#3e6a00]/20 text-5xl sm:text-7xl font-black leading-none shrink-0">
                03
              </div>
              <div>
                <h4 className="text-lg sm:text-[20px] lg:text-[24px] font-medium mb-2">
                  Hashtag & Win
                </h4>
                <p className="text-sm sm:text-[16px] text-[#41454d] leading-relaxed">
                  Kèm bộ hashtag #TheRunningBabes #BabeVietnam để có cơ hội nhận
                  voucher 500k.
                </p>
              </div>
            </div>
          </div>

          {/* Rewards */}
          <div className="mt-10 sm:mt-16 p-6 sm:p-8 bg-[#f0f3ff] rounded-xl">
            <h5 className="text-lg sm:text-[20px] font-medium mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-[#6FA234] fill-[#6FA234]" />
              Phần thưởng đặc biệt
            </h5>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {rewards.map((r) => (
                <li
                  key={r}
                  className="flex items-center gap-3 text-sm sm:text-[14px] text-[#181d26]"
                >
                  <span className="w-1.5 h-1.5 bg-[#6FA234] rounded-full shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right form */}
        <div className="bg-white border border-[#c3c9b5] p-6 sm:p-10 rounded-xl shadow-sm">
          <h3 className="text-lg sm:text-[20px] lg:text-[24px] font-medium mb-6 sm:mb-8">
            Đăng ký tham gia ngay
          </h3>
          <form className="space-y-5 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-[10px] sm:text-[12px] uppercase tracking-[0.05em] font-medium text-[#41454d] block mb-2">
                Họ và tên
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-[#737968] focus:ring-0 focus:border-[#6FA234] transition-colors py-3 text-sm sm:text-[14px] outline-none"
                placeholder="Nguyễn Văn A"
                type="text"
              />
            </div>
            <div>
              <label className="text-[10px] sm:text-[12px] uppercase tracking-[0.05em] font-medium text-[#41454d] block mb-2">
                Email của bạn
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-[#737968] focus:ring-0 focus:border-[#6FA234] transition-colors py-3 text-sm sm:text-[14px] outline-none"
                placeholder="example@gmail.com"
                type="email"
              />
            </div>
            <button
              className={cn(
                "w-full bg-[#3e6a00] text-white py-4 sm:py-5 rounded-full font-medium text-sm sm:text-[16px] lg:text-[18px]",
                "hover:opacity-90 transition-opacity mt-6 sm:mt-8"
              )}
              type="submit"
            >
              Gửi đăng ký
            </button>
            <p className="text-center text-[10px] text-[#41454d] px-4 sm:px-8">
              Bằng cách đăng ký, bạn đồng ý với các Điều khoản và Chính sách bảo
              mật của Laboratorios BABÉ.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
