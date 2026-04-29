"use client";

import { cn } from "@/lib/utils";
import { Video, Footprints, ArrowLeftRight } from "lucide-react";

const steps = [
  { Icon: Video, label: "Step 1: UGC", href: "#ugc-challenge", active: true },
  { Icon: Footprints, label: "Step 2: Marathon", href: "#marathon", active: false },
  { Icon: ArrowLeftRight, label: "Step 3: Trade-in", href: "#trade-in", active: false },
];

export function LandingSideTracker() {
  return (
    <aside className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6 bg-[#fafafa]/80 backdrop-blur-md rounded-r-full h-fit py-8 px-2 border-r border-white/50">
      <div className="flex flex-col items-center gap-4">
        {steps.map((step) => (
          <a
            key={step.href}
            href={step.href}
            className={cn(
              "group relative rounded-full p-3 transition-all",
              step.active
                ? "bg-[#6FA234] text-white active:scale-110 transition-transform"
                : "text-[#bbb] hover:text-[#6FA234] transition-colors"
            )}
          >
            <step.Icon className="w-5 h-5" />
            <span className="absolute left-14 bg-white text-[#3e6a00] text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm font-medium">
              {step.label}
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
}
