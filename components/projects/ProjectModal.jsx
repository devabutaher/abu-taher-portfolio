"use client";

import styles from "./projectmodal.module.scss";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  isOpen,
  title,
  code,
  tech,
}) => {
  useEffect(() => {
    const body = document.body;
    const prevOverflow = body.style.overflowY;
    body.style.overflowY = isOpen ? "hidden" : "";
    return () => {
      body.style.overflowY = prevOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const content = (
    <div
      className={styles.modal}
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} project details`}
    >
      <button
        className={styles.closeModalBtn}
        onClick={() => setIsOpen(false)}
        aria-label="Close modal"
      >
        <MdClose aria-hidden="true" />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modalCard}
      >
        <Image
          className={styles.modalImage}
          src="/orbit_zone.png"
          alt={`Screenshot of the ${title} project`}
          width={800}
          height={500}
        />

        <div className={styles.modalContent}>
          <h4>{title}</h4>
          <div className={styles.modalTech}>{tech.join(" - ")}</div>
          <div className={styles.suppliedContent}>{modalContent}</div>

          <div className={styles.modalFooter}>
            <p className={styles.linksText}>
              Project Links<span>.</span>
            </p>
            <div className={styles.links}>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={code}
                aria-label={`${title} source code`}
              >
                <AiFillGithub aria-hidden="true" /> source code
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={projectLink}
                aria-label={`${title} live project`}
              >
                <AiOutlineExport aria-hidden="true" /> live project
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("root"));
};
