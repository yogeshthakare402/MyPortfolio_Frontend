import { cache } from "react";
import { projects } from "./projects-data";

export const getProjects = cache(async () => {
  return projects;
});

export const getFeaturedProjects = cache(async () => {
  return projects.filter((project) => project.featured);
});
