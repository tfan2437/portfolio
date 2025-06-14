import { PROJECTS_CARDS } from "@/lib/constants";

export const validateName = (name: string) => {
  return PROJECTS_CARDS.some((project) => project.name === name);
};
