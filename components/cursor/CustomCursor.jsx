"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./cursor.module.scss";

const COLORS = ["#8b5cf6", "#3b82f6", "#14b8a6", "#a855f7"];
const COLOR_SPEED = 0.003;

function hexToRgb(h) {
  return [
    parseInt(h.slice(1, 3), 16),
    parseInt(h.slice(3, 5), 16),
    parseInt(h.slice(5, 7), 16),
  ];
}

function lerpColor(a, b, t) {
  const ca = hexToRgb(a),
    cb = hexToRgb(b);
  return [
    Math.round(ca[0] + (cb[0] - ca[0]) * t),
    Math.round(ca[1] + (cb[1] - ca[1]) * t),
    Math.round(ca[2] + (cb[2] - ca[2]) * t),
  ];
}

export const CustomCursor = () => {
  const rafRef = useRef(null);
  const colorRef = useRef({ idx: 0, t: 0 });
  const ringRef = useRef(null);
  const ringInnerRef = useRef(null);
  const dotRef = useRef(null);

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const springConfig = { damping: 24, stiffness: 350, mass: 0.5 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  const [isVisible, setIsVisible] = useState(false);
  const stateRef = useRef({ isPointer: false, isDown: false });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setIsVisible(true);

    const onMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      const el = document.elementFromPoint(e.clientX, e.clientY);
      stateRef.current.isPointer = !!(
        el?.tagName === "A" ||
        el?.tagName === "BUTTON" ||
        el?.closest("a") ||
        el?.closest("button") ||
        el?.closest("[role='button']") ||
        el?.closest("input") ||
        el?.closest("textarea") ||
        el?.classList?.contains("cursor-pointer")
      );
    };
    const onDown = () => {
      stateRef.current.isDown = true;
    };
    const onUp = () => {
      stateRef.current.isDown = false;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const tick = () => {
      const c = colorRef.current;
      const s = stateRef.current;
      const dot = dotRef.current;
      const ring = ringRef.current;
      const inner = ringInnerRef.current;
      if (!dot || !ring || !inner) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      // advance color
      c.t += COLOR_SPEED;
      if (c.t >= 1) {
        c.t = 0;
        c.idx = (c.idx + 1) % COLORS.length;
      }
      const [r, g, b] = lerpColor(
        COLORS[c.idx],
        COLORS[(c.idx + 1) % COLORS.length],
        c.t,
      );
      const col = `rgb(${r},${g},${b})`;
      const colA = (a) => `rgba(${r},${g},${b},${a})`;

      // always update color — never touches transition-affecting props
      ring.style.borderColor = s.isDown
        ? colA(0.9)
        : s.isPointer
          ? colA(0.6)
          : colA(0.75);

      inner.style.background = colA(s.isDown ? 0.12 : 0.08);
      dot.style.background = s.isPointer || s.isDown ? col : "#fff";
      dot.style.boxShadow = s.isDown ? `0 0 0 3px ${colA(0.25)}` : "none";

      // size + opacity changes — CSS transitions animate these
      if (s.isDown) {
        dot.style.width = "8px";
        dot.style.height = "8px";
        ring.style.width = "20px";
        ring.style.height = "20px";
        ring.style.borderWidth = "2.5px";
        inner.style.opacity = "1";
      } else if (s.isPointer) {
        dot.style.width = "4px";
        dot.style.height = "4px";
        ring.style.width = "46px";
        ring.style.height = "46px";
        ring.style.borderWidth = "1.5px";
        inner.style.opacity = "1";
      } else {
        dot.style.width = "5px";
        dot.style.height = "5px";
        ring.style.width = "32px";
        ring.style.height = "32px";
        ring.style.borderWidth = "2px";
        inner.style.opacity = "0";
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <div className={styles.cursorContainer} aria-hidden="true">
      <motion.div
        ref={dotRef}
        className={styles.cursorDot}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        ref={ringRef}
        className={styles.cursorRing}
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      >
        <div ref={ringInnerRef} className={styles.cursorRingInner} />
      </motion.div>
    </div>
  );
};
