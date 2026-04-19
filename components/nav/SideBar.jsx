"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./sidebar.module.scss";

const NAV_ITEMS = [
  { id: "about", label: "About", delay: 0.1 },
  { id: "projects", label: "Projects", delay: 0.2 },
  { id: "experience", label: "Experience", delay: 0.3 },
  { id: "testimonial", label: "Testimonial", delay: 0.4 },
  { id: "contact", label: "Contact", delay: 0.5 },
];

export const SideBar = () => {
  const [activeSection, setActiveSection] = useActiveSection();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState({}, "", "/");
    setActiveSection("hero");
  };

  return (
    <motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.sideBar}
      aria-label="Page sections"
    >
      <div
        onClick={(e) => {
          e.preventDefault();
          scrollToTop();
        }}
        className="flex flex-col items-center py-10 cursor-pointer"
      >
        <Image
          src="/logo.png"
          alt="Abu Taher logo"
          width={32}
          height={32}
          priority
        />
      </div>

      {NAV_ITEMS.map(({ id, label, delay }) => {
        const isActive = activeSection === id;
        return (
          <motion.a
            key={id}
            href={`#${id}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{
              x: 0,
              opacity: isActive ? 1 : 0.6,
            }}
            transition={{ duration: 0.5, delay }}
            onClick={() => setActiveSection(id)}
            className={`${activeSection === id ? styles.selected : ""}`}
          >
            {label}
          </motion.a>
        );
      })}
    </motion.nav>
  );
};
