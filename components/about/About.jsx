import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MyLinks } from "../nav/components/MyLinks";
import styles from "./about.module.scss";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper" aria-label="About Section">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Abu Taher, I&apos;ve successfully completed several
              projects that showcase my ability to leverage these technologies
              effectively. Working individually or as part of a team, I&apos;ve
              gained valuable experience in collaborating on team and delivering
              awesome projects.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;ve a deep passion for learning and staying updated with the
              latest technologies in order to drive growth and deliver
              exceptional results.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m eager to contribute my skills to a dynamic and innovative
              company. Seeking an opportunity to join a supportive team where I
              can further enhance my skills, contribute to meaningful projects,
              and advance my career in web development.
            </p>
          </Reveal>
          <Reveal>
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
