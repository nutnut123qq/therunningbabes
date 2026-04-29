"use client";

export function LandingMarathon() {
  return (
    <section className="py-12 md:py-[96px] bg-[#3e6a00] relative" id="marathon">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 gap-8">
          <div className="text-white w-full md:max-w-2xl">
            <span className="text-[10px] sm:text-[12px] uppercase tracking-widest font-medium opacity-70 mb-4 block">
              Bước 02: Sự kiện chính
            </span>
            <h2 className="text-2xl sm:text-[32px] lg:text-[48px] font-normal mb-4 sm:mb-6 leading-tight">
              The Running Babes Marathon
            </h2>
            <p className="text-sm sm:text-[16px] lg:text-[20px] leading-relaxed opacity-90">
              Không chỉ là tốc độ, đây là hành trình bền bỉ của ý chí và làn da.
              Chinh phục cung đường Thủ Thiêm với 3 trạm tiếp sức chuyên biệt.
            </p>
          </div>

          {/* Countdown */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 rounded-xl text-white text-center w-full md:min-w-[300px] md:w-auto">
            <div className="text-[10px] sm:text-[12px] uppercase tracking-tighter mb-4 font-medium">
              Countdown to Race Day
            </div>
            <div className="flex justify-center gap-4 sm:gap-6">
              <div>
                <div className="text-3xl sm:text-[48px] font-bold leading-none">42</div>
                <div className="text-[10px] uppercase mt-1">Days</div>
              </div>
              <div className="text-3xl sm:text-[48px] font-bold opacity-30 leading-none">:</div>
              <div>
                <div className="text-3xl sm:text-[48px] font-bold leading-none">12</div>
                <div className="text-[10px] uppercase mt-1">Hours</div>
              </div>
              <div className="text-3xl sm:text-[48px] font-bold opacity-30 leading-none">:</div>
              <div>
                <div className="text-3xl sm:text-[48px] font-bold leading-none">08</div>
                <div className="text-[10px] uppercase mt-1">Mins</div>
              </div>
            </div>
          </div>
        </div>

        {/* Map visual */}
        <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] md:aspect-[21/9]">
          <div className="absolute inset-0 bg-white/5 rounded-full border border-white/10 animate-pulse" />
          <div className="absolute inset-4 bg-white/5 rounded-full border border-white/10" />
          <svg className="w-full h-full" viewBox="0 0 1000 400">
            <path
              d="M50,200 C200,50 400,350 600,100 C800,-50 950,300 950,200"
              fill="none"
              opacity="0.4"
              stroke="white"
              strokeDasharray="12 12"
              strokeWidth="4"
            />
            {/* Checkpoints */}
            <g transform="translate(200,100)">
              <circle fill="white" r="12" />
              <text
                fill="white"
                fontFamily="Inter, sans-serif"
                fontSize="14"
                fontWeight="bold"
                x="20"
                y="5"
              >
                KM 2: REGULATE
              </text>
            </g>
            <g transform="translate(550,150)">
              <circle fill="white" r="12" />
              <text
                fill="white"
                fontFamily="Inter, sans-serif"
                fontSize="14"
                fontWeight="bold"
                x="20"
                y="5"
              >
                KM 5: TREAT
              </text>
            </g>
            <g transform="translate(850,230)">
              <circle fill="#3e6a00" r="12" stroke="white" strokeWidth="4" />
              <text
                fill="white"
                fontFamily="Inter, sans-serif"
                fontSize="14"
                fontWeight="bold"
                x="20"
                y="5"
              >
                FINISH: RESTORE
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Decorative circle */}
      <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] border-[40px] sm:border-[60px] border-white/5 rounded-full pointer-events-none" />
    </section>
  );
}
