"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const DIRECTIONS = {
  up: { hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -75 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 75 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } },
};

export const Reveal = ({
  children,
  width = "fit-content",
  direction = "up",
  duration = 0.5,
  delay = 0.25,
  clipOverflow = true,
}) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = DIRECTIONS[direction] || DIRECTIONS.up;

  useEffect(() => {
    if (!isInView) return;
    mainControls.start("visible");
    slideControls.start("visible");
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: clipOverflow ? "hidden" : "visible" }}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "var(--brand)",
          zIndex: 20,
        }}
      />
    </div>
  );
};
