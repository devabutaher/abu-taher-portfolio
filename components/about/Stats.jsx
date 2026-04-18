"use client";

import { Reveal } from "@/components/utils/Reveal";
import { AiFillCode } from "react-icons/ai";
import styles from "./stats.module.scss";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.6rem" color="var(--brand)" />
            <span>Front End</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">NextJS</span>
            <span className="chip">React</span>
            <span className="chip">Firebase</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">Tailwind</span>
            <span className="chip">MUI</span>
            <span className="chip">SASS</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
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
            <span className="chip">NextJS</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Express</span>
            <span className="chip">MongoDB</span>
            <span className="chip">JWT</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
