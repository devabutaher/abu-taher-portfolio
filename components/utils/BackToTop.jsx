"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./back-to-top.module.scss";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={styles.backToTop}
      aria-label="Back to top"
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
        visibility: isVisible ? "visible" : "hidden",
      }}
    >
      <FaArrowUp />
    </button>
  );
};
