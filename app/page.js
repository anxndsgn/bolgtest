import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href={"/projects"} className="text-4xl">
        project
      </Link>
    </main>
  );
}
