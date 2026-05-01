"use client";

export function LandingFooter() {
  return (
    <footer className="bg-[#0b231e] text-white py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top CTA row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 sm:gap-12 border-b border-white/10 pb-12 sm:pb-16 mb-12 sm:mb-16">
          <div className="md:w-2/3">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-normal mb-4 sm:mb-6 leading-tight">
              Bạn đã sẵn sàng phá vòng lặp chưa?
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-400 leading-relaxed">
              Đăng ký ngay hôm nay để trở thành một phần của cộng đồng The Running
              Babes Việt Nam.
            </p>
          </div>
          <a
            href="#ugc-challenge"
            className="inline-flex items-center justify-center bg-[#6FA234] text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full font-medium text-base sm:text-lg hover:scale-105 transition-transform shrink-0"
          >
            Đăng ký ngay
          </a>
        </div>

        {/* Middle grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div>
            <div className="mb-6">
              <img
                src="/brand/logo-babe.svg"
                alt="BABÉ Laboratorios"
                className="h-8 w-auto invert"
              />
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed uppercase tracking-widest">
              Dòng sản phẩm chuyên sâu cho da mụn từ Laboratorios BABÉ Tây Ban
              Nha.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["#HustleCrew_DC26", "#TheRunningBabes", "#DigitalCreatory", "#LaboratoriosBaBé"].map(
                (tag) => (
                  <div
                    key={tag}
                    className="aspect-square bg-white/5 rounded-lg flex items-center justify-center border border-white/10 text-[10px] text-gray-500 font-medium"
                  >
                    {tag}
                  </div>
                )
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-[10px] text-gray-600">
          © 2024 Laboratorios BABÉ. All rights reserved. Designed for The
          Running Babes Vietnam.
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#6FA234]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
    </footer>
  );
}
