"use client";

import { useRef, useEffect, useState } from "react";

export const ParallaxWrapper = ({ children, offset = 0.5 }) => {
  const ref = useRef(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const element = ref.current;
      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight && elementTop + elementRect.height > 0) {
        const parallaxAmount = (windowHeight - elementTop) * offset;
        setTranslateY(parallaxAmount * 0.1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return (
    <div
      ref={ref}
      style={{
        transform: `translateY(${translateY}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}
    </div>
  );
};
