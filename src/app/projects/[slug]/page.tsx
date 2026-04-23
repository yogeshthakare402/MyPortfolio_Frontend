import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/Components/container";
import { getProjectBySlug, getProjectSlugs } from "@/features/projects/lib/get-project-by-slug";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="section">
      <Container>
        <Link href="/projects" className="back-link">
          Back to projects
        </Link>
        <h1 className="project-title">{project.title}</h1>
        <p className="project-description">{project.description}</p>
        <div className="project-hero-image">
          <Image
            src={project.image}
            alt={project.title}
            width={1280}
            height={720}
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
        <h2>Tech stack</h2>
        <ul className="stack-list">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <p>
          <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-primary">
            Open live project
          </a>
        </p>
      </Container>
    </main>
  );
}
