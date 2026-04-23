import Image from "next/image";
import Link from "next/link";
import type { Project } from "../types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card glass-card">
      <Link href={`/projects/${project.slug}`} className="project-image-link" aria-label={project.title}>
        <Image
          src={project.image}
          alt={project.title}
          width={900}
          height={520}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="project-image"
        />
      </Link>
      <div className="project-content">
        <div className="project-meta-row">
          <span className="project-year">{project.year}</span>
          <span className="project-impact">{project.impact}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          <Link href={`/projects/${project.slug}`}>Case Study</Link>
          <a href={project.link} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}
