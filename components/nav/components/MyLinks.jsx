import { SOCIAL_LINKS } from "@/data/links";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import styles from "./headinglinks.module.scss";

const LINKS = [
  {
    href: SOCIAL_LINKS.linkedin,
    Icon: AiFillLinkedin,
    label: "LinkedIn profile",
  },
  { href: SOCIAL_LINKS.github, Icon: AiFillGithub, label: "GitHub profile" },
  {
    href: SOCIAL_LINKS.twitter,
    Icon: AiFillTwitterCircle,
    label: "Twitter profile",
  },
];

export const MyLinks = () => {
  return (
    <div className={styles.links}>
      {LINKS.map(({ href, Icon, label }, i) => (
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Icon size="2.8rem" aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
};
