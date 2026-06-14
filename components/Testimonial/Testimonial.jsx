"use client";

import { TESTIMONIALS } from "@/data/testimonials";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { SectionHeader } from "../utils/SectionHeader";
import styles from "./Testimonial.module.scss";
import { ParallaxWrapper } from "@/components/utils/ParallaxWrapper";

export const Testimonial = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      breakpoints: { "(min-width: 768px)": { slidesToScroll: 1 } },
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onInit = useCallback((api) => setScrollSnaps(api.scrollSnapList()), []);
  const onSelect = useCallback(
    (api) => setSelectedIndex(api.selectedScrollSnap()),
    [],
  );

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onInit);
  }, [emblaApi, onInit, onSelect]);

  const scrollTo = useCallback(
    (i) => emblaApi && emblaApi.scrollTo(i),
    [emblaApi],
  );

  return (
    <section id="testimonial" className="section-wrapper">
      <ParallaxWrapper offset={0.35}>
        <SectionHeader title="Testimonial" dir="r" />
      </ParallaxWrapper>

      <ParallaxWrapper offset={0.45}>
        <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-0">
          {TESTIMONIALS.map(({ name, text, work }) => (
            <div
              key={name}
              className="flex-[0_0_100%] md:flex-[0_0_50%] px-2 sm:px-3 flex flex-col"
            >
              <motion.div
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                className={styles.testimonialCard}
              >
                <blockquote>
                  <p className="text-[1.6rem] sm:text-[1.8rem] leading-relaxed text-[var(--text)] font-light font-sans">
                    &ldquo;{text}&rdquo;
                  </p>
                </blockquote>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="
                      w-14 h-14 rounded-full flex-shrink-0
                      bg-[var(--brand)]/20 border-2 border-[var(--brand)]
                      flex items-center justify-center
                      text-[1.6rem] font-bold text-[var(--brand)]
                    "
                    >
                      {name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-[1.7rem] font-semibold font-heading text-[var(--text)] leading-tight">
                        {name}
                      </p>
                      <p className="text-[1.4rem] text-[var(--brand)] font-medium">
                        {work}
                      </p>
                    </div>
                  </div>
                  <FaQuoteRight
                    className="text-[var(--brand)] opacity-30 flex-shrink-0"
                    size="3rem"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot navigation */}
      <div
        className="flex justify-center gap-3 mt-12 mb-4"
        role="tablist"
        aria-label="Testimonial navigation"
      >
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === selectedIndex}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === selectedIndex
                ? "w-6 h-6 bg-[var(--brand)] shadow-[0_0_20px_rgba(139,92,246,0.4)] scale-110"
                : "w-4 h-4 bg-[var(--background-lighter)] hover:bg-[var(--border-glow)]"
            }`}
          />
        ))}
        </div>
      </ParallaxWrapper>
    </section>
  );
};

export default Testimonial;
