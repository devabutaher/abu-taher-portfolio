"use client";

/**
 * Blog — section grid, structurally mirrors Projects.jsx:
 *  • SectionHeader with dir="r"
 *  • ParallaxWrapper on both header and grid
 *  • Reveal stagger on each card
 *  • auto-fit grid: minmax(340px, 1fr)
 */

import { ParallaxWrapper } from "@/components/utils/ParallaxWrapper";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { BLOGS } from "@/data/blogs";
import { BlogCard } from "./BlogCard";
import styles from "./blog.module.scss";

export const Blog = () => {
  return (
    <section className="section-wrapper" id="blog" aria-label="Blog section">
      <ParallaxWrapper offset={0.35}>
        <SectionHeader title="Blog" dir="r" />
      </ParallaxWrapper>

      <ParallaxWrapper offset={0.45}>
        <div className={styles.blogGrid}>
          {BLOGS.map((blog, i) => (
            <BlogCard key={blog.id} blog={blog} index={i} />
          ))}
        </div>
      </ParallaxWrapper>
    </section>
  );
};

export default Blog;
