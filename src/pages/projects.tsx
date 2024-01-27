import { Section } from "@/components/ui/section";
import { ProjectCard } from "@/components/project-card";
import { RESUME_DATA } from "@/data/resume-data";
import "../app/globals.css";

export default function ProjectsPage() {
  return (
    <main className="container mx-auto p-4">
      <Section className="space-y-4">
        {/* <h2 className="text-xl font-bold">Projects</h2> */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {RESUME_DATA.projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.techStack}
              link={project.link?.href}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
