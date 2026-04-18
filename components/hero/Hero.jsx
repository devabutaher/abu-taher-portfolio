import { Reveal } from "@/components/utils/Reveal";
import Image from "next/image";
import profile from "../../assets/profile.png";
import ContactButton from "./ContactButton";
import { DrawCircle } from "./DrawCircle";
import styles from "./hero.module.scss";
import RoleTypeWriter from "./RoleTypeWriter";

export const Hero = () => {
  return (
    <section className="section-wrapper" aria-label="Hero">
      <div
        className={`${styles.copyWrapper} flex flex-col justify-between items-center md:flex-row-reverse gap-20`}
      >
        <Reveal>
          <div className="flex justify-center">
            {/* <Image
              className="w-[40rem]"
              src={profile}
              alt="Abu Taher — Profile Photo"
              priority
              sizes="(max-width: 768px) 80vw, 40rem"
            /> */}
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h1 className={`${styles.title} py-4`}>
              Hey, I&apos;m <DrawCircle />
              <span> .</span>
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
            <ContactButton />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
