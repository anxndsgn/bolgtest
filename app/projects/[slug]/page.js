import { getProjects } from "../utils";

export async function generateStaticParams() {
  const projects = getProjects();
  console.log(projects);
  return projects.map((project) => ({
    params: { slug: project.slug },
  }));
}

export default function Page({ params }) {
  const project = getProjects().find((project) => project.slug === params.slug);

  console.log(project.metadata);

  return (
    <div>
      <h1 className="text-3xl font-semibold">{project.metadata.title}</h1>
      <p>{project.metadata.date}</p>
      <p>{project.metadata.description}</p>
      <p>{project.content}</p>
    </div>
  );
}
