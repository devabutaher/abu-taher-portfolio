"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-hot-toast";

import { BiLoaderAlt, BiPaperPlane } from "react-icons/bi";
import { SiGithub, SiTiktok, SiTwitter, SiYoutube } from "react-icons/si";

import { Reveal } from "../utils/Reveal";
import { SectionHeader } from "../utils/SectionHeader";
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
    transition={{ type: "spring", mass: 3, stiffness: 400, damping: 50 }}
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
      className="bg-red-500"
    >
      <a href="#">
        <SiYoutube />
      </a>
    </Block>

    <Block
      whileHover={{ rotate: "-2.5deg", scale: 1.05 }}
      className="bg-green-600"
    >
      <a href="#">
        <SiGithub />
      </a>
    </Block>

    <Block
      whileHover={{ rotate: "-2.5deg", scale: 1.05 }}
      className={`${styles.tiktok} bg-zinc-50`}
    >
      <a href="#">
        <SiTiktok />
      </a>
    </Block>

    <Block
      whileHover={{ rotate: "2.5deg", scale: 1.05 }}
      className="bg-blue-500"
    >
      <a href="#">
        <SiTwitter />
      </a>
    </Block>
  </div>
);

const Contact = () => {
  const [loading, setLoading] = useState(true);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);
      toast.success("Message sent! I'll get back to you soon.");
      e.target.reset();
    } catch {
      toast.error("Something went wrong — please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-wrapper !overflow-visible">
      <SectionHeader title="Contact" dir="l" />

      <div className={styles.contactSection}>
        <Reveal width="100%">
          <SocialsBlock />
        </Reveal>

        <Reveal width="100%">
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

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading}
            >
              {loading ? (
                <BiLoaderAlt className="text-3xl animate-spin" />
              ) : (
                <BiPaperPlane className="text-4xl" />
              )}
              <span>{loading ? "Sending..." : "Send message"}</span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
