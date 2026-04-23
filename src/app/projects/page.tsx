import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/Components/container";
import SectionTitle from "@/Components/section-title";
import { portfolioData } from "@/data/portfolio-data";
import ProjectGrid from "@/features/projects/components/project-grid";
import { getProjects } from "@/features/projects/lib/get-projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "All portfolio projects and case studies.",
};

export const revalidate = 3600;

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="section">
      <Container>
        <Link href="/" className="back-link">
          Back to home
        </Link>
        <SectionTitle title="All Projects" subtitle={portfolioData.sections.projects.subtitle} />
        <ProjectGrid projects={projects} />
      </Container>
    </main>
  );
}
