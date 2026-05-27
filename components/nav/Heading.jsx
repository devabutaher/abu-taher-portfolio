"use client";

import { SOCIAL_LINKS } from "@/data/links";
import Link from "next/link";
import { OutlineButton } from "../buttons/OutlineButton";
import { MyLinks } from "./components/MyLinks";
import styles from "./heading.module.scss";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <div className={styles.headingLeft}>
        <MyLinks />
      </div>
      <div className={styles.headingRight}>
        <Link href={SOCIAL_LINKS.resume} target="_blank">
          <OutlineButton>Resume</OutlineButton>
        </Link>
      </div>
    </header>
  );
};
