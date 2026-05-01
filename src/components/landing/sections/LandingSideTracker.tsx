"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Video, Footprints, ArrowLeftRight } from "lucide-react";

const steps = [
  { Icon: Video, label: "Step 1: UGC", href: "#ugc-challenge" },
  { Icon: Footprints, label: "Step 2: Marathon", href: "#marathon" },
  { Icon: ArrowLeftRight, label: "Step 3: Trade-in", href: "#trade-in" },
];

export function LandingSideTracker() {
  const [activeHref, setActiveHref] = useState("#ugc-challenge");

  useEffect(() => {
    const elements = steps
      .map((s) => document.querySelector(s.href))
      .filter(Boolean) as Element[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const best = visible.reduce((prev, curr) =>
            curr.intersectionRatio > prev.intersectionRatio ? curr : prev
          );
          setActiveHref(`#${best.target.id}`);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6 bg-[#fafafa]/80 backdrop-blur-md rounded-r-full h-fit py-8 px-2 border-r border-white/50">
      <div className="flex flex-col items-center gap-4">
        {steps.map((step) => (
          <a
            key={step.href}
            href={step.href}
            onClick={() => setActiveHref(step.href)}
            className={cn(
              "group relative rounded-full p-3 transition-all",
              activeHref === step.href
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
