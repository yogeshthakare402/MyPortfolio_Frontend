import FadeIn from "@/Components/fade-in";
import type { Project } from "../types";
import ProjectCard from "./project-card";

type ProjectGridProps = {
  projects: Project[];
};

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <FadeIn key={project.slug} delay={index * 0.04}>
          <ProjectCard project={project} />
        </FadeIn>
      ))}
    </div>
  );
}
