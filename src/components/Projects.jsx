import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-5 bg-light">

      <div className="container">

        <h2 className="text-center mb-4">Projects</h2>

        <div className="row">

          <ProjectCard
            image="/images/project1.png"
            title="Portfolio Website"
            description="Built using React and Bootstrap"
            link="https://github.com"
          />

          <ProjectCard
            image="/images/project2.png"
            title="CRUD Application"
            description="Full stack CRUD using PERN"
            link="https://github.com"
          />

        </div>

      </div>

    </section>
  );
}