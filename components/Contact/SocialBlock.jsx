"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

import { BiLoaderAlt, BiPaperPlane } from "react-icons/bi";
import { SiYoutube, SiGithub, SiTiktok, SiTwitter } from "react-icons/si";

import { Reveal } from "../utils/Reveal";
import { SectionHeader } from "../utils/SectionHeader";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

/* ── Input styles ── */
const inputCls = `
  w-full bg-[var(--background-dark)] text-[var(--text)]
  border border-[var(--background-lighter)]
  focus:border-[var(--brand)] focus:ring-1 focus:ring-[var(--brand)]/40
  rounded-xl outline-none transition-all duration-200
  px-4 py-3 text-[1.6rem] placeholder:text-slate-600
`;

const labelCls = "block text-[1.4rem] font-medium text-slate-400 mb-2";

/* ── Animated Block ── */
const Block = ({ className = "", ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: { scale: 0.5, y: 50, opacity: 0 },
        animate: { scale: 1, y: 0, opacity: 1 },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={`col-span-6 sm:col-span-3 rounded-lg border border-zinc-700 bg-zinc-800 p-6 ${className}`}
      {...rest}
    />
  );
};

/* ── Social Blocks ── */
const SocialsBlock = () => (
  <div className="grid grid-cols-6 gap-4">
    <Block whileHover={{ rotate: "2.5deg", scale: 1.1 }} className="bg-red-500">
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiYoutube />
      </a>
    </Block>

    <Block
      whileHover={{ rotate: "-2.5deg", scale: 1.1 }}
      className="bg-green-600"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiGithub />
      </a>
    </Block>

    <Block
      whileHover={{ rotate: "-2.5deg", scale: 1.1 }}
      className="bg-zinc-100"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiTiktok />
      </a>
    </Block>

    <Block
      whileHover={{ rotate: "2.5deg", scale: 1.1 }}
      className="bg-blue-500"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiTwitter />
      </a>
    </Block>
  </div>
);

const Contact = () => {
  const [loading, setLoading] = useState(false);

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
    <section id="contact" className="section-wrapper">
      <SectionHeader title="Contact" dir="l" />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">
        {/* ── LEFT: Social Blocks ── */}
        <Reveal>
          <div className="space-y-6">
            <div>
              <h3 className="text-[2.4rem] sm:text-[2.8rem] font-bold text-white mb-3">
                Let&apos;s connect.
              </h3>
              <p className="text-[1.6rem] text-slate-400">
                Find me on these platforms.
              </p>
            </div>

            <SocialsBlock />
          </div>
        </Reveal>

        {/* ── RIGHT: Contact Form ── */}
        <Reveal width="100%">
          <form
            onSubmit={sendEmail}
            noValidate
            className="p-6 sm:p-8 rounded-2xl space-y-5 bg-[var(--background-light)] border border-[var(--background-lighter)]"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className={labelCls}>
                  Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="Your name"
                  className={inputCls}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className={labelCls}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className={inputCls}
                  required
                />
              </div>
            </div>

            <div>
              <label className={labelCls}>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                className={inputCls}
              />
            </div>

            <div>
              <label className={labelCls}>Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project…"
                className={`${inputCls} resize-none`}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 bg-[var(--brand)] hover:bg-[var(--brand-light)] disabled:opacity-60 text-white font-semibold text-[1.7rem] py-3.5 rounded-xl transition-all duration-200"
            >
              {loading ? (
                <>
                  <BiLoaderAlt className="animate-spin" size="2rem" />
                  Sending…
                </>
              ) : (
                <>
                  <BiPaperPlane size="2rem" />
                  Send message
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
