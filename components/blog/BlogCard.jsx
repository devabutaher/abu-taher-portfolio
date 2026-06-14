"use client";

/**
 * BlogCard — mirrors Project.jsx architecture:
 *  • Framer Motion staggered entrance (opacity + y)
 *  • useInView + useAnimation (once: true)
 *  • glass-card hover mixin via SCSS
 *  • Opens BlogModal on click
 */

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineArrowRight,
} from "react-icons/ai";
import styles from "./blog.module.scss";

const BlogModal = dynamic(() =>
  import("./BlogModal").then((m) => m.BlogModal)
);

export const BlogCard = ({ blog, index = 0 }) => {
  const { title, excerpt, tags, readingTime, date, coverColor } = blog;
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <>
      <motion.article
        ref={ref}
        variants={{
          hidden:  { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0  },
        }}
        initial="hidden"
        animate={controls}
        transition={{
          duration: 0.7,
          delay: index * 0.12,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={styles.blogCard}
      >
        {/* Cover image area — decorative gradient + pattern */}
        <button
          type="button"
          className={styles.coverArea}
          style={{ "--cover-color": coverColor }}
          onClick={() => setIsOpen(true)}
          aria-label={`Read article: ${title}`}
        >
          {/* Radial colour wash */}
          <div className={styles.coverRadial} aria-hidden="true" />
          {/* Dot grid */}
          <div className={styles.coverDots}  aria-hidden="true" />
          {/* Glow on hover */}
          <div className={styles.coverGlow}  aria-hidden="true" />

          {/* Read label that appears on hover */}
          <span className={styles.readLabel} aria-hidden="true">
            Read article
          </span>
        </button>

        {/* Card body */}
        <div className={styles.cardBody}>
          {/* Tag chips */}
          <div className={styles.tagRow}>
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h4 className={styles.cardTitle}>{title}</h4>

          {/* Excerpt */}
          <p className={styles.cardExcerpt}>{excerpt}</p>

          {/* Footer — meta + CTA */}
          <div className={styles.cardFooter}>
            <div className={styles.metaRow}>
              <span className={styles.metaItem}>
                <AiOutlineCalendar aria-hidden="true" />
                {date}
              </span>
              <span className={styles.metaDivider} aria-hidden="true">·</span>
              <span className={styles.metaItem}>
                <AiOutlineClockCircle aria-hidden="true" />
                {readingTime} min
              </span>
            </div>

            <button
              type="button"
              className={styles.readMoreBtn}
              onClick={() => setIsOpen(true)}
              aria-label={`Read full article: ${title}`}
            >
              Read more
              <AiOutlineArrowRight size="1.4rem" aria-hidden="true" />
            </button>
          </div>
        </div>
      </motion.article>

      <BlogModal blog={blog} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default BlogCard;
