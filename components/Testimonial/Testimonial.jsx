"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaQuoteRight } from "react-icons/fa";
import { useEffect, useState, useCallback } from "react";
import { SectionHeader } from "../utils/SectionHeader";
import styles from "./Testimonial.module.scss";
import { Reveal } from "../utils/Reveal";
import { TESTIMONIALS } from "@/data/testimonials";

const Testimonial = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
      }),
    ],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // update dots state
  const onInit = useCallback((embla) => {
    setScrollSnaps(embla.scrollSnapList());
  }, []);

  const onSelect = useCallback((embla) => {
    setSelectedIndex(embla.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onInit);
  }, [emblaApi, onInit, onSelect]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  return (
    <section id="testimonial" className="section-wrapper">
      <SectionHeader title="Testimonial" dir="r" />

      <Reveal width="100%">
        <div className="py-4">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {TESTIMONIALS.map(({ name, text, work }) => (
                <div key={name} className="flex-[0_0_50%] px-3">
                  <div className={`${styles.splideCard} space-y-4`}>
                    <blockquote>
                      <p className={styles.splideText}>{text}</p>
                    </blockquote>
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex flex-col gap-4 md:flex-row md:items-center">
                        <div className="w-16 border-2 border-brand md:w-24" />
                        <p className="text-2xl text-gray-200 md:text-4xl">
                          {name}
                          <br />
                          <span className="text-xl md:text-3xl">{work}</span>
                        </p>
                      </div>
                      <FaQuoteRight className="text-brand" size="3rem" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-6">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-4 w-4 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-brand scale-125"
                    : "bg-gray-500 opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Testimonial;
