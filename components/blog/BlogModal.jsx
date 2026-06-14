"use client";

/**
 * BlogModal — mirrors ProjectModal exactly:
 *  • ReactDOM.createPortal to #root
 *  • backdrop click to close
 *  • Framer Motion { y: 100 → 0, opacity: 0 → 1 }
 *  • Same CSS animation keyframes (fadeInModal / slideInModalCard)
 *  • Closes on Escape key
 *  • body scroll locked while open
 */

import { motion } from "framer-motion";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import styles from "./blogmodal.module.scss";

// ─── Content block renderer ───────────────────────────────────────────────────

const ContentBlock = ({ block }) => {
  switch (block.type) {
    case "heading":
      return <h5 className={styles.contentHeading}>{block.text}</h5>;

    case "code":
      return (
        <div className={styles.codeBlock}>
          {block.language && (
            <div className={styles.codeLang}>{block.language}</div>
          )}
          <pre className={styles.codePre}>
            <code>{block.text}</code>
          </pre>
        </div>
      );

    case "paragraph":
    default:
      return <p className={styles.contentParagraph}>{block.text}</p>;
  }
};

// ─── Modal ────────────────────────────────────────────────────────────────────

export const BlogModal = ({ blog, isOpen, setIsOpen }) => {
  // Lock body scroll
  useEffect(() => {
    const body = document.body;
    const prev = body.style.overflowY;
    body.style.overflowY = isOpen ? "hidden" : "";
    return () => {
      body.style.overflowY = prev;
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, setIsOpen]);

  if (!isOpen || !blog) return null;

  const { title, tags, date, readingTime, content, coverColor } = blog;

  const modalJsx = (
    <div
      className={styles.modal}
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} — full article`}
    >
      {/* Close button */}
      <button
        className={styles.closeModalBtn}
        onClick={() => setIsOpen(false)}
        aria-label="Close article"
      >
        <MdClose aria-hidden="true" />
      </button>

      {/* Card — stop click bubbling to backdrop */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modalCard}
      >
        {/* Decorative cover strip */}
        <div
          className={styles.coverStrip}
          style={{ "--cover-color": coverColor }}
          aria-hidden="true"
        >
          <div className={styles.coverGradient} />
          <div className={styles.coverPattern} />
        </div>

        <div className={styles.modalContent}>
          {/* Tag row */}
          <div className={styles.tagRow}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h4 className={styles.modalTitle}>{title}</h4>

          {/* Meta — date + reading time */}
          <div className={styles.metaRow}>
            <span className={styles.metaItem}>
              <AiOutlineCalendar aria-hidden="true" />
              {date}
            </span>
            <span className={styles.metaDivider} aria-hidden="true">·</span>
            <span className={styles.metaItem}>
              <AiOutlineClockCircle aria-hidden="true" />
              {readingTime} min read
            </span>
          </div>

          {/* Article body */}
          <div className={styles.articleBody}>
            {content.map((block, i) => (
              <ContentBlock key={i} block={block} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );

  return ReactDOM.createPortal(modalJsx, document.getElementById("root"));
};

export default BlogModal;
