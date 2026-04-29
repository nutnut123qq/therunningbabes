"use client";

import { Plus } from "lucide-react";

export function LandingFab() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50">
      <a
        href="#ugc-challenge"
        className="w-12 h-12 sm:w-16 sm:h-16 bg-[#6FA234] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
        aria-label="Tham gia ngay"
      >
        <Plus className="w-6 h-6 sm:w-8 sm:h-8" />
      </a>
    </div>
  );
}
