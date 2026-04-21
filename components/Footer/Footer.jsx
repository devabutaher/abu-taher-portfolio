import { SOCIAL_LINKS } from "@/data/links";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

const SOCIAL = [
  { href: SOCIAL_LINKS.github, Icon: AiFillGithub, label: "GitHub" },
  { href: SOCIAL_LINKS.facebook, Icon: SiFacebook, label: "Facebook" },
  { href: SOCIAL_LINKS.linkedin, Icon: AiFillLinkedin, label: "LinkedIn" },
];

const NAV = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonial", label: "Testimonial" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-[var(--background-light)] bg-[var(--background-dark)]">
      <div className="!py-12 section-wrapper">
        {/* ── Top row: 3 columns ── */}
        <div className="grid grid-cols-1 gap-10 mb-10 sm:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Abu Taher logo"
                width={30}
                height={30}
              />
              <span className="text-[2rem] font-bold [var(--text)]">
                Abu Taher
              </span>
            </div>
            <p className="text-[1.5rem] text-[var(--text-dark)] leading-relaxed sm:max-w-xs">
              MERN Stack Developer building fast, scalable, and polished web
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:col-span-2">
            {/* Quick nav */}
            <div>
              <p className="text-[1.3rem] font-semibold uppercase tracking-widest text-[var(--text-dark)] mb-4">
                Navigation
              </p>
              <ul className="space-y-2">
                {NAV.map(({ href, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[1.5rem] text-slate-500 font-medium hover:text-[var(--brand)] transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Social */}
            <div>
              <p className="text-[1.3rem] font-semibold uppercase tracking-widest text-[var(--text-dark)] mb-4">
                Find me on
              </p>
              <div className="flex flex-col gap-3">
                {SOCIAL.map(({ href, Icon, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-500 hover:text-[var(--brand)] transition-colors duration-200 group"
                  >
                    <span className="flex items-center justify-center transition-colors duration-200 rounded-lg w-9 h-9">
                      <Icon size="1.8rem" />
                    </span>
                    <span className="text-[1.5rem] font-medium">{label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--background-lighter)]">
          <p className="text-[1.4rem] text-[var(--text-dark)] text-center sm:text-left">
            © {new Date().getFullYear()} Abu Taher · Built with Next.js,
            Tailwind CSS & Framer Motion
          </p>

          {/* Back to top */}
          <a
            href="#"
            aria-label="Back to top"
            className="
              flex items-center gap-2 text-[1.4rem] font-medium
              text-[var(--text-dark)] hover:text-[var(--brand)]
              transition-colors duration-200 group
            "
          >
            Back to top
            <span className="flex items-center justify-center w-8 h-8 transition-colors duration-200 rounded-full">
              <FaRegArrowAltCircleUp size="1.6rem" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
