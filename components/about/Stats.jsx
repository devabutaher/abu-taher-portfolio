"use client";

import { Reveal } from "@/components/utils/Reveal";
import { AiFillCode } from "react-icons/ai";
import styles from "./stats.module.scss";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal direction="right" delay={0.2}>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.6rem" color="var(--brand)" />
            <span>Front End</span>
          </h4>
          <div className={styles.statGrid}>
            {[
              "JavaScript",
              "TypeScript",
              "NextJS",
              "React",
              "Firebase",
              "HTML",
              "CSS",
              "Tailwind",
              "MUI",
              "SASS",
            ].map((skill, i) => (
              <span key={i} className={styles.skillChip}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal direction="left" delay={0.4}>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode
              size="2.6rem"
              color="var(--brand)"
              className="rotate-180"
            />
            <span>Back End</span>
          </h4>
          <div className={styles.statGrid}>
            {["NextJS", "NodeJS", "Express", "MongoDB", "JWT"].map(
              (skill, i) => (
                <span key={i} className={styles.skillChip}>
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>
      </Reveal>
    </div>
  );
};
