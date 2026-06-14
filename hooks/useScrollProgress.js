"use client";

import { useEffect, useState } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState("0%");

  useEffect(() => {
    const handleScroll = () => {
      // Always read from window/documentElement — consistent with
      // the single scroll container (html element).
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(`${Math.min(scrolled * 100, 100)}%`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialise on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}
