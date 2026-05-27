"use client";

import dynamic from "next/dynamic";
import { Reveal } from "@/components/utils/Reveal";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import styles from "./projects.module.scss";

const ProjectModal = dynamic(
  () => import("./ProjectModal").then((m) => m.ProjectModal),
);

export const Project = ({ project, index = 0 }) => {
  const { title, imgSrc, code, projectLink, tech, description, modalContent } = project;

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75, delay: index * 0.15 }}
        className={styles.projectCard}
      >
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={styles.projectImage}
          aria-label={`Open details for ${title}`}
        >
          <Image
            src={imgSrc}
            alt={`Screenshot of the ${title} project`}
            width={600}
            height={400}
            className={styles.projectImg}
          />
          <div className={styles.cardGlow} />
        </button>

        <div className={styles.projectCopy}>
          <Reveal width="100%">
            <div className={styles.projectTitle}>
              <h4>{title}</h4>
              <div className={styles.projectTitleLine} />
              <Link
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} source code on GitHub`}
              >
                <AiFillGithub size="2.8rem" aria-hidden="true" />
              </Link>
              <Link
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live project`}
              >
                <AiOutlineExport size="2.8rem" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

            <Reveal>
              <div className={styles.projectTech}>
                {tech.map((t) => (
                  <span key={t} className={styles.chip}>
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>

          <Reveal>
            <p className={styles.projectDescription}>
              {description}{" "}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className={styles.learnMoreBtn}
              >
                Learn more &gt;
              </button>
            </p>
          </Reveal>
        </div>
      </motion.div>

      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        title={title}
        code={code}
        tech={tech}
        imgSrc={imgSrc}
      />
    </>
  );
};
