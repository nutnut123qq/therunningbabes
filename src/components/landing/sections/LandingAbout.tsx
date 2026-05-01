"use client";

export function LandingAbout() {
  return (
    <section className="py-12 md:py-[96px] bg-[#eaeefb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Left image */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-[#3e6a00]/10 rounded-xl transform rotate-3 transition-transform group-hover:rotate-0" />
          <div className="relative w-full aspect-square rounded-xl shadow-lg overflow-hidden">
            <img
              src="/brand/oil-control-pads.jpg"
              alt="BABÉ Stop AKN Oil Control Pads"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right content */}
        <div>
          <h2 className="text-2xl sm:text-[32px] lg:text-[48px] font-normal mb-6 sm:mb-8 leading-tight">
            Tại sao BABÉ Stop AKN?
          </h2>
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h4 className="text-lg sm:text-[20px] lg:text-[24px] font-medium mb-4 text-[#6FA234]">
                Cơ chế Action 360
              </h4>
              <p className="text-sm sm:text-[16px] lg:text-[20px] text-[#41454d] leading-relaxed">
                Không chỉ làm sạch bề mặt, BABÉ Stop AKN tác động trực tiếp vào 4
                nguyên nhân gây mụn: Kiểm soát nhờn, Giảm viêm, Kháng khuẩn và Tái
                tạo hàng rào bảo vệ da.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 sm:p-6 bg-white rounded-xl border border-[#c3c9b5]">
                <div className="text-[#6FA234] text-3xl sm:text-4xl font-normal mb-2">82%</div>
                <p className="text-[10px] sm:text-[10px] text-[#41454d] uppercase font-medium">
                  Giảm mụn sau 28 ngày
                </p>
              </div>
              <div className="p-4 sm:p-6 bg-white rounded-xl border border-[#c3c9b5]">
                <div className="text-[#6FA234] text-3xl sm:text-4xl font-normal mb-2">0%</div>
                <p className="text-[10px] sm:text-[10px] text-[#41454d] uppercase font-medium">
                  Kích ứng & Paraben
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
