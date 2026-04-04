import { Link } from "react-router-dom";

export default function ComingSoon() {

  return (
    <section className="coming-soon-page d-flex align-items-center justify-content-center">
      <div className="container text-center">
        <h1 className="coming-title pulse">🚧 Project Coming Soon</h1>
        <p className="lead mt-3">
          This project is currently under development.
          Stay tuned for updates!
        </p>

        <img
          src="/images/comingsoon.png"
          alt="Coming Soon"
          className="comingsoon-img mt-4"
        />

        <div className="mt-4">
          <Link
            to="/"
            className="btn btn-dark me-3">
            Back to Home
          </Link>

        </div>
      </div>
    </section>

  );
}

