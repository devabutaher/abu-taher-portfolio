"use client";

import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { EXPERIENCES } from "@/data/experience";
import { motion } from "framer-motion";
import styles from "./experience.module.scss";

export const Experience = () => {
  return (
    <section id="experience" className="section-wrapper">
      <SectionHeader title="Experience" dir="l" />

      <div className={styles.timeline}>
        {EXPERIENCES.map((exp, i) => (
          <Reveal key={i} width="100%">
            <motion.div
              className={styles.timelineCard}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className={styles.timelineDot} />

              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <div>
                    <h4 className={styles.role}>{exp.role}</h4>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                  <div className={styles.periodBadge}>
                    <span>{exp.period}</span>
                    {exp.type && <span className={styles.type}>{exp.type}</span>}
                  </div>
                </div>

                <ul className={styles.descriptionList}>
                  {exp.description.map((desc, j) => (
                    <li key={j}>{desc}</li>
                  ))}
                </ul>

                <div className={styles.techStack}>
                  {exp.tech.map((t) => (
                    <span key={t} className={styles.skillChip}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
