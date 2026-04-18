import { SOCIAL_LINKS } from "@/data/links";
import Image from "next/image";
import Link from "next/link";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const FOOTER_LINKS = [
  { href: SOCIAL_LINKS.github, Icon: AiFillGithub, label: "GitHub" },
  { href: SOCIAL_LINKS.facebook, Icon: AiFillFacebook, label: "Facebook" },
  { href: SOCIAL_LINKS.linkedin, Icon: AiFillLinkedin, label: "LinkedIn" },
];

const iconBtnClass =
  "bg-brand rounded-full p-2 hover:text-brand hover:bg-white transition-colors";

const Footer = () => {
  return (
    <footer className="px-4 bg-slate-600">
      <div className="flex flex-col items-center justify-between max-w-screen-xl gap-4 py-8 mx-auto md:flex-row">
        <div className="flex items-center justify-center gap-2 pb-4">
          <Image
            src="/logo.png"
            alt="Abu Taher logo"
            width={32}
            height={32}
            className="w-10 h-10"
          />
          <p className="text-3xl">Abu Taher</p>
        </div>

        <nav
          aria-label="Footer social links"
          className="flex justify-center gap-4"
        >
          {FOOTER_LINKS.map(({ href, Icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={iconBtnClass}
            >
              <Icon size="2rem" aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
