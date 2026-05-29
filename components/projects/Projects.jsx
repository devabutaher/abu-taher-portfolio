"use client";

import { SectionHeader } from "@/components/utils/SectionHeader";
import { PROJECTS } from "@/data/projects";
import { Reveal } from "../utils/Reveal";
import { Project } from "./Project";
import styles from "./projects.module.scss";
import { ParallaxWrapper } from "@/components/utils/ParallaxWrapper";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <ParallaxWrapper offset={0.35}>
        <SectionHeader title="Projects" dir="r" />
      </ParallaxWrapper>
      <ParallaxWrapper offset={0.45}>
        <div className={styles.projects}>
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title}>
            <Project project={project} index={i} />
          </Reveal>
        ))}
        </div>
      </ParallaxWrapper>
    </section>
  );
};
