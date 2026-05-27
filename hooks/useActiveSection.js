"use client";

import { useEffect, useRef, useState } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("hero");
  const sectionIdsRef = useRef([]);

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");
    sectionIdsRef.current = Array.from(sections).map((s) => s.id);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => {
            const aIdx = sectionIdsRef.current.indexOf(a.target.id);
            const bIdx = sectionIdsRef.current.indexOf(b.target.id);
            return aIdx - bIdx;
          });

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return [activeSection, setActiveSection];
}
