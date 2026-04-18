"use client";

import { motion } from "framer-motion";

export const DrawCircle = () => {
  return (
    <span className="relative">
      Abu Taher
      <svg
        viewBox="0 0 286 73"
        fill="none"
        className="absolute bottom-0 translate-y-2 -left-4 -right-4 -top-6"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{
            duration: 4,
            ease: "easeInOut",
          }}
          d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
          style={{ stroke: "var(--brand)" }}
          strokeWidth="3"
        />
      </svg>
    </span>
  );
};
