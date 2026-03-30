export default function ProjectCard({ image, title, description, link }) {
  return (
    <div className="col-md-4">

      <div className="card shadow project-card">

        <img src={image} className="card-img-top" />

        <div className="card-body">

          <h5 className="card-title">{title}</h5>

          <p className="card-text">{description}</p>

          <a
            href={link}
            target="_blank"
            className="btn btn-outline-primary"
          >
            View Project
          </a>

        </div>

      </div>

    </div>
  );
}