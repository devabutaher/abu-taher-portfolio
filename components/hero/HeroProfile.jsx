"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import profile from "../../assets/profile.png";
import styles from "./heroProfile.module.scss";

/**
 * HeroProfile — Animated profile portrait
 *
 * A lightweight replacement for TechOrbit that keeps only the
 * profile image with its entrance animation, spinning gradient
 * ring, and pulsating glow — zero Three.js overhead.
 */
export const HeroProfile = () => {
  const controls = useAnimation();

  useEffect(() => {
    const t = setTimeout(() => {
      controls.start({
        scale:   1,
        opacity: 1,
        y:       0,
        transition: {
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 },
        },
      });
    }, 300);
    return () => clearTimeout(t);
  }, [controls]);

  return (
    <div className={styles.sceneWrapper} aria-label="Profile portrait">
      <motion.div
        className={styles.profileWrapper}
        initial={{ scale: 0, opacity: 0, y: 30 }}
        animate={controls}
      >
        <div className={styles.profileRing} aria-hidden="true" />
        <div className={styles.profileGlow} aria-hidden="true" />
        <div className={styles.profileImageClip}>
          <Image
            src={profile}
            alt="Abu Taher — MERN Stack Developer"
            width={260}
            height={260}
            priority
            placeholder="blur"
            quality={90}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroProfile;
