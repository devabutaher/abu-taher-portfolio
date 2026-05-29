"use client";

import { Typewriter } from "react-simple-typewriter";
import styles from "./roleTypewriter.module.scss";

const RoleTypeWriter = () => {
  const ROLES = [
    "React.js Developer",
    "Next.js Developer",
    "Front-End Developer",
    "MERN Stack Developer",
  ];

  return (
    <span className={styles.typewriterWrapper}>
      <Typewriter
        cursor
        cursorStyle="|"
        delaySpeed={1000}
        deleteSpeed={25}
        loop={0}
        typeSpeed={75}
        words={ROLES}
      />
    </span>
  );
};

export default RoleTypeWriter;
