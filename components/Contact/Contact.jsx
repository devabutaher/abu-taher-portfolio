"use client";

import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { BiPaperPlane } from "react-icons/bi";
import { StandardButton } from "../buttons/StandardButton";
import { Reveal } from "../utils/Reveal";
import { SectionHeader } from "../utils/SectionHeader";
import styles from "./contact.module.scss";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const inputClass = `${styles.text} w-full bg-transparent text-white border-2 focus:border-brand rounded outline-none transition duration-100 px-3 py-2`;

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        e.target,
        EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => toast.success("Message sent successfully!"),
        () => toast.error("Something went wrong. Please try again."),
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="section-wrapper">
      <SectionHeader title="Contact" dir="l" />
      <Reveal width="100%">
        <form
          onSubmit={sendEmail}
          className="grid sm:grid-cols-2 gap-8"
          noValidate
        >
          <div>
            <label
              htmlFor="fullName"
              className={`inline-block text-white mb-2 ${styles.text}`}
            >
              Name
            </label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              className={inputClass}
              required
              autoComplete="name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className={`inline-block text-white mb-2 ${styles.text}`}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className={inputClass}
              required
              autoComplete="email"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className={`inline-block text-white mb-2 ${styles.text}`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={`${inputClass} h-52`}
              required
            />
          </div>

          <div className="sm:col-span-2 flex justify-between items-center">
            <StandardButton type="submit">
              <BiPaperPlane
                size="2.2rem"
                className="inline mx-1"
                aria-hidden="true"
              />{" "}
              Send
            </StandardButton>
          </div>
        </form>
      </Reveal>
    </section>
  );
};

export default Contact;
