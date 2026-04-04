import { Link } from "react-router-dom";

export default function ProjectCard({
  image,
  title,
  description,
  link
}) {

  const isComingSoon =
    link === "coming-soon";

  return (

    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={image}
          className="card-img-top project-img"
          alt={title}
        />
        <div className="card-body text-center">
          <h5>{title}</h5>
          <p>{description}</p>
          {
            isComingSoon ?
              <Link
                to="/coming-soon"
                className="btn btn-secondary"
              >
                Coming Soon
              </Link>
            :
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                View Project
              </a>
          }
        </div>
      </div>
    </div>

  );

}