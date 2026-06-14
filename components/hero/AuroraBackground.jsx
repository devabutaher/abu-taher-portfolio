"use client";

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useMemo, useState } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  animate,
  motion,
} from "framer-motion";

const COLORS_TOP = ["#8b5cf6", "#3b82f6", "#06b6d4", "#a855f7"];

export const AuroraBackground = () => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handleChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    if (reducedMotion) return;
    const controls = animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
    });
    return () => controls.stop();
  }, [color, reducedMotion]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #0a0a19 50%, ${color})`;

  const starsConfig = useMemo(
    () => ({
      radius: 40,
      count: reducedMotion || isMobile ? 400 : 1200,
      factor: 5,
      fade: true,
      speed: reducedMotion ? 0.3 : 1.5,
    }),
    [reducedMotion, isMobile],
  );

  return (
    <motion.div
      className="fixed inset-0 z-0 overflow-hidden"
      style={{
        background: reducedMotion ? "#0a0a19" : backgroundImage,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 1], fov: 60 }}
        style={{ width: "100%", height: "100%" }}
        dpr={[1, isMobile ? 1 : 1.2]}
        gl={{ antialias: !isMobile, alpha: true, powerPreference: "low-power" }}
        frameloop={reducedMotion ? "demand" : "always"}
      >
        <Stars {...starsConfig} />
      </Canvas>
    </motion.div>
  );
};

export default AuroraBackground;
