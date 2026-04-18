import { SectionHeader } from "@/components/utils/SectionHeader";
import { PROJECTS } from "@/data/projects";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />
      <div className={styles.projects}>
        {PROJECTS.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};
