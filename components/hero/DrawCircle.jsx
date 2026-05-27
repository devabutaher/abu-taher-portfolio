"use client";

import { motion } from "framer-motion";

export const DrawCircle = () => {
  return (
    <span className="relative inline-block ml-2">
      Abu Taher
      <svg
        viewBox="0 0 286 73"
        fill="none"
        className="absolute bottom-0 left-0 right-0 translate-y-1"
        style={{ width: "110%", marginLeft: "-5%" }}
      >
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 2.25,
            ease: "easeInOut",
          }}
          d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
          stroke="var(--brand)"
          strokeWidth="3"
        />
      </svg>
    </span>
  );
};
