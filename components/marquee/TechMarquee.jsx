"use client";

import { motion } from "framer-motion";
import {
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSass,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import styles from "./marquee.module.scss";

const TECH_ROW_1 = [
  { icon: SiJavascript, label: "JavaScript", color: "#f7df1e" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178c6" },
  { icon: SiReact, label: "React", color: "#61dafb" },
  { icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
  { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { icon: SiTailwindcss, label: "Tailwind", color: "#06b6d4" },
  { icon: SiMongodb, label: "MongoDB", color: "#47a248" },
  { icon: SiFirebase, label: "Firebase", color: "#ffca28" },
  { icon: SiSupabase, label: "Supabase", color: "#3ecf8e" },
  { icon: SiVercel, label: "Vercel", color: "#ffffff" },
];

const TECH_ROW_2 = [
  { icon: SiExpress, label: "Express", color: "#ffffff" },
  { icon: SiSass, label: "SASS", color: "#cc6699" },
  { icon: SiDocker, label: "Docker", color: "#2496ed" },
  { icon: SiGit, label: "Git", color: "#f05032" },
  { icon: SiGraphql, label: "GraphQL", color: "#e10098" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "#336791" },
  { icon: SiPrisma, label: "Prisma", color: "#2d3748" },
  { icon: SiSocketdotio, label: "Socket.io", color: "#010101" },
  { icon: SiJavascript, label: "HTML/CSS", color: "#e34f26" },
  { icon: SiReact, label: "Framer Motion", color: "#61dafb" },
];

const MarqueeRow = ({ items, direction = "left", speed = 40 }) => {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className={styles.marqueeRow}>
      <motion.div
        className={styles.marqueeTrack}
        animate={{
          x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map(({ icon: Icon, label, color }, i) => (
          <div key={i} className={styles.techItem}>
            <Icon size="2rem" color={color} />
            <span>{label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const TechMarquee = () => {
  return (
    <section className={styles.marqueeSection} aria-label="Technologies used">
      <div className={styles.marqueeContainer}>
        <MarqueeRow items={TECH_ROW_1} direction="left" speed={45} />
        <MarqueeRow items={TECH_ROW_2} direction="right" speed={50} />
      </div>
    </section>
  );
};

export default TechMarquee;
