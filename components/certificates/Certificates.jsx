"use client";

/**
 * Certificates — infinite auto-scrolling marquee of certificate cards.
 *
 * Behaviour:
 *  • Two tracks scroll in opposite directions (mirrors TechMarquee pattern)
 *  • Framer Motion drives the animation; `animationPlayState` pauses on hover
 *  • Clicking a card opens the credential URL in a new tab
 *  • Cards use the project-system glass-card aesthetic:
 *    glassmorphic background, border-glow, shadow-glow, sheen sweep on hover
 */

import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { ParallaxWrapper } from "@/components/utils/ParallaxWrapper";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { CERTIFICATES } from "@/data/certificates";
import styles from "./certificates.module.scss";

// ─── Individual certificate card ────────────────────────────────────────────

const CertCard = ({ cert }) => {
  const { title, issuer, date, credentialUrl, badgeColor, category } = cert;

  return (
    <a
      href={credentialUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.certCard}
      aria-label={`View ${title} certificate from ${issuer}`}
      title={`Open credential — ${title}`}
    >
      {/* Decorative badge glow */}
      <div
        className={styles.badgeGlow}
        style={{ "--badge-color": badgeColor }}
        aria-hidden="true"
      />

      {/* Badge icon area */}
      <div className={styles.badgeIcon} style={{ "--badge-color": badgeColor }}>
        <MdVerified size="2.4rem" color={badgeColor} aria-hidden="true" />
      </div>

      {/* Content */}
      <div className={styles.certContent}>
        <span className={styles.categoryChip}>{category}</span>
        <h4 className={styles.certTitle}>{title}</h4>
        <p className={styles.certIssuer}>{issuer}</p>
        <div className={styles.certFooter}>
          <span className={styles.certDate}>{date}</span>
          <AiOutlineLink
            size="1.5rem"
            className={styles.linkIcon}
            aria-hidden="true"
          />
        </div>
      </div>
    </a>
  );
};

// ─── Marquee row ─────────────────────────────────────────────────────────────

const CertMarqueeRow = ({ items, direction = "left", speed = 55 }) => {
  // Triple-duplicate so the loop is seamless at any viewport width
  const track = [...items, ...items, ...items];
  const [paused, setPaused] = useState(false);

  return (
    <div
      className={styles.marqueeRow}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
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
        style={{ animationPlayState: paused ? "paused" : "running" }}
        // Framer Motion doesn't expose animationPlayState directly,
        // so we complement with CSS via the data attribute:
        data-paused={paused}
      >
        {track.map((cert, i) => (
          <CertCard key={`${cert.id}-${i}`} cert={cert} />
        ))}
      </motion.div>
    </div>
  );
};

// ─── Section ─────────────────────────────────────────────────────────────────

export const Certificates = () => {
  return (
    <section
      className={styles.certificatesSection}
      id="certificates"
      aria-label="Certificates section"
    >
      {/* Header stays inside the standard container width */}
      <div className={styles.headerWrapper}>
        <ParallaxWrapper offset={0.35}>
          <SectionHeader title="Certificates" dir="l" />
        </ParallaxWrapper>
      </div>

      {/* Marquee spans full viewport width */}
      <ParallaxWrapper offset={0.45}>
        <div className={styles.marqueeContainer}>
          <CertMarqueeRow items={CERTIFICATES} direction="left" speed={50} />
        </div>
      </ParallaxWrapper>
    </section>
  );
};

export default Certificates;
