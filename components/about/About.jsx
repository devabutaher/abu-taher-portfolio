import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MyLinks } from "../nav/components/MyLinks";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { StatsCards } from "./StatsCards";

export const About = () => {
  return (
    <section id="about" className="section-wrapper" aria-label="About Section">
      <SectionHeader title="About" dir="l" />
      <StatsCards />
      <div className={styles.about}>
        <div>
          <Reveal direction="left">
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Abu Taher, I&apos;ve successfully completed several
              projects that showcase my ability to{" "}
              <span className={styles.highlight}>
                leverage these technologies effectively
              </span>
              . Working individually or as part of a team, I&apos;ve gained
              valuable experience in{" "}
              <span className={styles.highlight}>
                collaborating on team and delivering awesome projects
              </span>
              .
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.35}>
            <p className={styles.aboutText}>
              I&apos;ve a{" "}
              <span className={styles.highlight}>
                deep passion for learning
              </span>{" "}
              and staying updated with the latest technologies in order to{" "}
              <span className={styles.highlight}>
                drive growth and deliver exceptional results
              </span>
              .
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.45}>
            <p className={styles.aboutText}>
              I&apos;m eager to contribute my skills to a dynamic and innovative
              company. Seeking an opportunity to join a{" "}
              <span className={styles.highlight}>supportive team</span> where I
              can further enhance my skills, contribute to meaningful projects,
              and advance my career in{" "}
              <span className={styles.highlight}>web development</span>.
            </p>
          </Reveal>
          <Reveal direction="scale" delay={0.55}>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
