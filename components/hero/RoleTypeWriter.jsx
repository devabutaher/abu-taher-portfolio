"use client";

import { Typewriter } from "react-simple-typewriter";

const RoleTypeWriter = () => {
  const ROLES = [
    "React Developer",
    "Front-End Developer",
    "MERN Stack Developer",
  ];

  return (
    <Typewriter
      cursor
      delaySpeed={1000}
      deleteSpeed={25}
      loop={0}
      typeSpeed={75}
      words={ROLES}
    />
  );
};

export default RoleTypeWriter;
