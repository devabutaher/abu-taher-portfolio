"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";

import { BiLoaderAlt, BiPaperPlane } from "react-icons/bi";
import { SiGithub, SiFacebook, SiLinkedin, SiX } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { SOCIAL_LINKS } from "@/data/links";

import { NotificationContainer } from "../shared/Notification";
import { Reveal } from "../utils/Reveal";
import { SectionHeader } from "../utils/SectionHeader";
import { StandardButton } from "../buttons/StandardButton";
import styles from "./contact.module.scss";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const Block = ({ className = "", children, ...rest }) => (
  <motion.div
    variants={{
      initial: { scale: 0.5, y: 50, opacity: 0 },
      animate: { scale: 1, y: 0, opacity: 1 },
    }}
    transition={{ type: "spring", mass: 1, stiffness: 300, damping: 30 }}
    className={`${styles.socialBlock} ${className}`}
    {...rest}
  >
    {children}
  </motion.div>
);

const SocialsBlock = () => (
  <div className={styles.socialGrid}>
    <Block
      whileHover={{ rotate: "2.5deg", scale: 1.05 }}
    >
      <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <SiLinkedin />
      </a>
    </Block>

    <Block
      whileHover={{ rotate: "-2.5deg", scale: 1.05 }}
    >
      <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <SiGithub />
      </a>
    </Block>

    <Block
      whileHover={{ rotate: "-2.5deg", scale: 1.05 }}
    >
      <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <SiFacebook />
      </a>
    </Block>

    <Block
      whileHover={{ rotate: "2.5deg", scale: 1.05 }}
    >
      <a href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" aria-label="X">
        <SiX />
      </a>
    </Block>
  </div>
);

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const addNotification = (type, text) => {
    const id = Date.now() + Math.random();
    setNotifications((pv) => [{ id, type, text }, ...pv]);
  };

  const removeNotif = (id) => {
    setNotifications((pv) => pv.filter((n) => n.id !== id));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);
      addNotification("success", "Message sent! I'll get back to you soon.");
      e.target.reset();
    } catch {
      addNotification("error", "Something went wrong — please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-wrapper !overflow-visible">
      <SectionHeader title="Contact" dir="l" />
      <NotificationContainer
        notifications={notifications}
        removeNotif={removeNotif}
      />

      <div className={styles.contactSection}>
        <div className={styles.contactLeft}>
          <Reveal width="100%" delay={0.1} clipOverflow={false}>
            <SocialsBlock />
          </Reveal>

          <Reveal width="100%" delay={0.2} clipOverflow={false}>
            <div className={styles.emailCard}>
              <AiOutlineMail size="2.4rem" />
              <a href={SOCIAL_LINKS.email} className={styles.emailLink}>
                {SOCIAL_LINKS.email.replace("mailto:", "")}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal width="100%" delay={0.3} clipOverflow={false}>
          <form className={styles.contactForm} onSubmit={sendEmail}>
            <div className={styles.inputGroupRow}>
              <div>
                <label className={styles.label}>Name</label>
                <input
                  className={styles.input}
                  type="text"
                  name="fullName"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className={styles.label}>Email</label>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className={styles.label}>Subject</label>
              <input
                className={styles.input}
                type="text"
                name="subject"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className={styles.label}>Message</label>
              <textarea
                className={styles.textarea}
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
              <StandardButton type="submit" disabled={loading}>
                {loading ? (
                  <BiLoaderAlt className="text-3xl animate-spin" />
                ) : (
                  <BiPaperPlane className="text-4xl" />
                )}
                <span>{loading ? "Sending..." : "Send message"}</span>
              </StandardButton>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
