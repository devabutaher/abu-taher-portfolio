"use client";

import { useEffect, useState } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState("0%");

  useEffect(() => {
    const handleScroll = () => {
      const html = document.documentElement;
      const scrolled = html.scrollTop / (html.scrollHeight - html.clientHeight);
      setProgress(`${Math.min(scrolled * 100, 100)}%`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}
