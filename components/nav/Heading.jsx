"use client";

import { SOCIAL_LINKS } from "@/data/links";
import { OutlineButton } from "../buttons/OutlineButton";
import { MyLinks } from "./components/MyLinks";
import styles from "./heading.module.scss";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <OutlineButton onClick={() => window.open(SOCIAL_LINKS.resume)}>
        My resume
      </OutlineButton>
    </header>
  );
};
