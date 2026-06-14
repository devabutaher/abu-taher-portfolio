"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./sidebar.module.scss";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certificates", label: "Certificates" },
  { id: "testimonial", label: "Testimonial" },
  { id: "contact", label: "Contact" },
];

export const SideBar = () => {
  const [activeSection, setActiveSection] = useActiveSection();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState({}, "", "/");
    setActiveSection("hero");
  };

  const handleNavClick = (id) => {
    scrollToSection(id);
    setActiveSection(id);
  };

  return (
    <motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.sideBar}
      aria-label="Page sections"
    >
      <div onClick={scrollToTop} className={styles.logoArea}>
        <Image
          src="/logo.png"
          alt="Abu Taher logo"
          width={28}
          height={28}
          priority
        />
      </div>

      {NAV_ITEMS.map(({ id, label }, i) => {
        const isActive = activeSection === id;
        return (
          <motion.a
            key={id}
            href={`#${id}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isActive ? 1 : 0.6, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(id);
            }}
            className={isActive ? styles.selected : ""}
          >
            {label}
          </motion.a>
        );
      })}
    </motion.nav>
  );
};
