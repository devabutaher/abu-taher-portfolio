import { Reveal } from "@/components/utils/Reveal";
import Image from "next/image";
import profile from "../../assets/profile1.png";
import ContactButton from "./ContactButton";
import { DrawCircle } from "./DrawCircle";
import styles from "./hero.module.scss";
import RoleTypeWriter from "./RoleTypeWriter";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="px-4 section-wrapper sm:px-6"
      aria-label="Hero section"
    >
      <div
        className={`${styles.copyWrapper} flex flex-col justify-between items-center md:flex-row-reverse gap-10 md:gap-16`}
      >
        {/* Image */}
        <Reveal>
          <div className="flex justify-center">
            <Image
              className="w-[180px] sm:w-[240px] md:w-[300px] lg:w-[34rem] h-auto rounded-full"
              src={profile}
              alt="Portrait of Abu Taher, MERN stack developer"
              priority
              placeholder="blur"
              quality={85}
              sizes="(max-width: 768px) 60vw, (max-width: 1024px) 35vw, 34rem"
            />
          </div>
        </Reveal>

        {/* Content */}
        <div>
          <Reveal>
            <h1 className={`${styles.title} py-4`}>
              Hey, I&apos;m <DrawCircle />
              <span>.</span>
            </h1>
          </Reveal>

          <Reveal>
            <h2 className={styles.subTitle}>
              <RoleTypeWriter />
            </h2>
          </Reveal>

          <Reveal>
            <p className={styles.aboutCopy}>
              I&apos;m equipped to build scalable and efficient web
              applications. Having successfully completed multiple projects with
              a focus on team collaboration, project management, and delivering
              high-quality work.
            </p>
          </Reveal>

          <Reveal>
            <div className="py-4">
              <ContactButton />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
