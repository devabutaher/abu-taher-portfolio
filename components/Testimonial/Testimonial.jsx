"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FaQuoteRight } from "react-icons/fa";
import { LOOP } from "@splidejs/splide";
import { SectionHeader } from "../utils/SectionHeader";
import styles from "./Testimonial.module.scss";
import { Reveal } from "../utils/Reveal";
import { TESTIMONIALS } from "@/data/testimonials";

const SPLIDE_OPTIONS = {
  perPage: 2,
  arrows: false,
  pagination: true,
  perMove: 1,
  rewind: true,
  autoplay: true,
  type: LOOP,
};

const Testimonial = () => {
  return (
    <section id="testimonial" className="section-wrapper hidden xl:block">
      <SectionHeader title="Testimonial" dir="r" />
      <Reveal width="100%">
        <Splide options={SPLIDE_OPTIONS} aria-label="Testimonials">
          {TESTIMONIALS.map(({ name, text, work }) => (
            <SplideSlide
              key={name}
              className="flex flex-col md:flex-row items-center justify-center"
            >
              <div className={`${styles.splideCard} space-y-4`}>
                <blockquote>
                  <p className={styles.splideText}>{text}</p>
                </blockquote>
                <div className="flex justify-between items-center pt-4">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="border-brand border-2 md:w-24 w-16" aria-hidden="true" />
                    <p className="md:text-4xl text-2xl text-gray-200">
                      {name}
                      <br />
                      <span className="md:text-3xl text-xl">{work}</span>
                    </p>
                  </div>
                  <FaQuoteRight
                    className="text-brand"
                    size="3rem"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </Reveal>
    </section>
  );
};

export default Testimonial;
