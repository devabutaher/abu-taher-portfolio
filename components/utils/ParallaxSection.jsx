"use client";

import { useEffect, useRef, useState } from "react";

export const ParallaxSection = ({ children, offset = 0.5, className = "" }) => {
  const [yPos, setYPos] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const elementRect = elementRef.current.getBoundingClientRect();
      const elementTop = elementRect.top;
      const windowHeight = window.innerHeight;

      // Only apply parallax when element is in viewport
      if (elementTop < windowHeight && elementTop > -elementRect.height) {
        const scrolled = window.scrollY;
        const elementScrollPos = elementTop + window.scrollY;
        setYPos((scrolled - elementScrollPos) * offset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform: `translateY(${yPos}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}
    </div>
  );
};
