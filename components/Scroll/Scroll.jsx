"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function ScrollIndicator({ children }) {
  const progress = useScrollProgress();

  return (
    <>
      <div
        className="fixed top-0 left-0 z-40 h-1.5 w-screen bg-transparent"
        role="progressbar"
        aria-valuenow={parseFloat(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      >
        <div
          className="h-full bg-brand transition-[width]"
          style={{ width: progress }}
        />
      </div>
      {children}
    </>
  );
}
