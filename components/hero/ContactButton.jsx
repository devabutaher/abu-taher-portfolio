"use client";

import { scrollToSection } from "@/lib/utils";
import { StandardButton } from "../buttons/StandardButton";

const ContactButton = () => {
  return (
    <StandardButton onClick={() => scrollToSection("contact")}>
      Contact me
    </StandardButton>
  );
};

export default ContactButton;
