import { Reveal } from "@/components/utils/Reveal";
import ContactButton from "./ContactButton";
import { DrawCircle } from "./DrawCircle";
import styles from "./hero.module.scss";
import RoleTypeWriter from "./RoleTypeWriter";
import { HeroProfile } from "./HeroProfile";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative px-4 section-wrapper sm:px-6"
      aria-label="Hero Section"
    >
      {/* Ambient background orbs */}
      <div className={styles.backgroundContainer} aria-hidden="true">
        <div className={styles.gradientOrb} />
        <div className={styles.gradientOrb} />
      </div>

      <div
        className={`${styles.copyWrapper} relative flex flex-col md:flex-row-reverse items-center justify-between gap-10`}
      >
        {/* ── Right: Animated profile portrait ── */}
        <Reveal direction="scale" delay={0.05}>
          <HeroProfile />
        </Reveal>

        {/* ── Left: Text content ── */}
        <div className="flex flex-col justify-center flex-1 py-8">
          <Reveal direction="right" delay={0.2} clipOverflow={false}>
            <h1 className={`${styles.title} py-4`}>
              Hey, I&apos;m <DrawCircle />
            </h1>
          </Reveal>

          <Reveal direction="right" delay={0.3}>
            <h2 className={styles.subTitle}>
              <RoleTypeWriter />
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.4}>
            <p className={styles.aboutCopy}>
              I&apos;m equipped to build{" "}
              <span className={styles.highlight}>
                scalable and efficient web applications
              </span>
              . Having successfully completed multiple projects with a focus on{" "}
              <span className={styles.highlight}>
                team collaboration, project management
              </span>
              , and delivering high-quality work.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.5} clipOverflow={false}>
            <div className="py-4">
              <ContactButton />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
