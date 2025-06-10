import { redirect } from "next/navigation";
import Project from "./project";

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  const validProjects = [
    "sonicfi",
    "orbit",
    "orbit-v1",
    "portfolio",
    "rerender",
    "tovier",
  ];

  if (!validProjects.includes(name)) {
    redirect("/");
  }

  return <Project name={name} />;
}
