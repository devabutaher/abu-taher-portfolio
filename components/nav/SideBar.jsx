"use client";

import { motion } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";
import styles from "./sidebar.module.scss";

const NAV_ITEMS = [
  { id: "about",       label: "About",    delay: 0.1 },
  { id: "projects",    label: "Projects", delay: 0.2 },
  { id: "testimonial", label: "Testimony",delay: 0.3, className: "xl:hidden" },
  { id: "contact",     label: "Contact",  delay: 0.4 },
];

export const SideBar = () => {
  const [activeSection, setActiveSection] = useActiveSection();

  return (
    <motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.sideBar}
      aria-label="Page sections"
    >
      <span className={styles.logo} aria-hidden="true">
        A<span>.</span>
      </span>

      {NAV_ITEMS.map(({ id, label, delay, className }) => (
        <motion.a
          key={id}
          href={`#${id}`}
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay }}
          onClick={() => setActiveSection(id)}
          className={[
            activeSection === id ? styles.selected : "",
            className ?? "",
          ]
            .join(" ")
            .trim()}
          aria-current={activeSection === id ? "true" : undefined}
        >
          {label}
        </motion.a>
      ))}
    </motion.nav>
  );
};
