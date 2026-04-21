"use client";

import { TESTIMONIALS } from "@/data/testimonials";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { Reveal } from "../utils/Reveal";
import { SectionHeader } from "../utils/SectionHeader";

const Testimonial = () => {
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
      <SectionHeader title="Testimonial" dir="r" />

      <Reveal width="100%">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-0">
            {TESTIMONIALS.map(({ name, text, work }) => (
              <div
                key={name}
                className="flex-[0_0_100%] md:flex-[0_0_50%] px-2 sm:px-3"
              >
                <div
                  className="
                  flex flex-col justify-between h-full
                  p-6 sm:p-8 rounded-2xl space-y-6
                  bg-[var(--background-light)]
                  border border-[var(--background-lighter)]
                "
                >
                  <blockquote>
                    <p className="text-[1.6rem] sm:text-[1.8rem] leading-relaxed text-[var(--text)] font-light">
                      &ldquo;{text}&rdquo;
                    </p>
                  </blockquote>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-4">
                      {/* Avatar circle */}
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
                        <p className="text-[1.7rem] font-semibold text-[var(--text)] leading-tight">
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
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot navigation */}
        <div
          className="flex justify-center gap-2 mt-8"
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
              className={`
                rounded-full transition-all duration-300
                ${
                  i === selectedIndex
                    ? "w-5 h-5 bg-[var(--brand)]"
                    : "w-4 h-4 bg-[var(--background-lighter)]"
                }
              `}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Testimonial;
