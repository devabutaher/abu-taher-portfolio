import { Reveal } from "@/components/utils/Reveal";
import Image from "next/image";
import profile from "../../assets/profile.png";
import ContactButton from "./ContactButton";
import { DrawCircle } from "./DrawCircle";
import styles from "./hero.module.scss";
import RoleTypeWriter from "./RoleTypeWriter";
import { Hero3D } from "./Hero3D";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative px-4 section-wrapper sm:px-6"
      aria-label="Hero Section"
    >
      <div className={styles.backgroundContainer}>
        <div className={styles.gradientOrb}></div>
        <div className={styles.gradientOrb}></div>
      </div>

      <div
        className={`${styles.copyWrapper} relative flex flex-col md:flex-row-reverse items-center justify-between gap-10`}
      >
        {/* Image & 3D */}
        <Reveal direction="scale" delay={0.1}>
          <div className="flex flex-col gap-8 items-center flex-shrink-0">
            <div className={`${styles.imageContainer}`}>
              <Image
                className="w-[200px] sm:w-[280px] md:w-[340px] lg:w-[38rem] h-auto rounded-full"
                src={profile}
                alt="Portrait of Abu Taher, MERN stack developer"
                priority
                placeholder="blur"
                quality={85}
                sizes="(max-width: 768px) 60vw, (max-width: 1024px) 35vw, 35rem"
              />
            </div>
            <Hero3D />
          </div>
        </Reveal>

        {/* Content */}
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

          <Reveal direction="up" delay={0.5}>
            <div className="py-4">
              <ContactButton />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
