import Link from "next/link";
import { formatDate, getProjects } from "./utils";

export const metadata = {
  title: "Projects",
};

export default function Page() {
  let projects = getProjects().sort((a, b) => {
    return new Date(b.metadata.date) - new Date(a.metadata.date);
  });

  return (
    <main className="md:w-[40rem] w-full m-auto px-8 mt-32 flex flex-col gap-10">
      <h1 className="text-3xl font-semibold">Projects</h1>

      <section className="grid gap-5 transition-all h-auto">
        {projects.map((project) => (
          <Link key={project.slug} href={`projects/${project.slug}`}>
            {project.metadata.title}
          </Link>
        ))}
      </section>
    </main>
  );
}
