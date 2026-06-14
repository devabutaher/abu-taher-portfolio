"use client";

import { scrollToSection } from "@/lib/utils";
import { StandardButton } from "../buttons/StandardButton";

const ContactButton = () => {
  return (
    <StandardButton
      variant="outline"
      onClick={() => scrollToSection("contact")}
    >
      Contact me
    </StandardButton>
  );
};

export default ContactButton;
