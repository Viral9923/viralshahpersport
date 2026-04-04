import ProjectCard from "./ProjectCard";

export default function Projects() {

  return (

    <section
      id="projects"
      className="py-5 bg-light mt-5 "
    >
      <div className="container">
        <h2 className="text-center mb-5">
          Projects
        </h2>
        <div className="row g-4">
          <ProjectCard
            image="/images/project1.png"
            title="Fancy Threading Salon"
            description="Built using HTML, CSS, JS"
            link="https://www.fancythreadingsalon.com"
          />

          <ProjectCard
            image="/images/project2.png"
            title="Lonni Gallagher Wellness"
            description="Built using Web technology"
            link="https://lgwellness.github.io"
          />

          <ProjectCard
            image="/images/project2.png"
            title="Marks Tree Service"
            description="Built using Web Technology"
            link="coming-soon"
          />

          <ProjectCard
            image="/images/project2.png"
            title="Keller Property Management"
            description="Built using Web Technology"
            link="coming-soon"
          />

        </div>
      </div>
    </section>

  );

}