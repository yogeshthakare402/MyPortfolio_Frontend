import { portfolioData } from "@/data/portfolio-data";
import { slugify } from "@/lib/utils";
import type { Project } from "../types";

export const projects: Project[] = portfolioData.projects.map((project) => ({
  ...project,
  slug: slugify(project.title),
}));
