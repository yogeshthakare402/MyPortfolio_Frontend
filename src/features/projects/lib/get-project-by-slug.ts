import { cache } from "react";
import { projects } from "./projects-data";

export const getProjectSlugs = cache(async () => {
  return projects.map((project) => project.slug);
});

export const getProjectBySlug = cache(async (slug: string) => {
  return projects.find((project) => project.slug === slug) ?? null;
});
