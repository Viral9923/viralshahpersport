export default function About() {
  return (

    <section id="about" className="py-5 about-section">

      <div className="container">

        <div className="row align-items-center g-4">

          {/* PROFILE IMAGE */}

          <div className="col-lg-4 col-md-5 text-center">

            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="img-fluid rounded-circle shadow profile-img"
            />

          </div>

          {/* ABOUT TEXT */}

          <div className="col-lg-8 col-md-7 text-center text-md-start">

            <h2 className="mb-3">
              About Me
            </h2>

            <p className="about-text">

              I am a Computer Science graduate with experience in
              web design and development.

              <br /><br />

              I am a passionate full-stack developer experienced in
              building responsive web applications using React,
              Node.js and PostgreSQL.

            </p>

            <h4 className="mt-4">
              Check my work below!
            </h4>

          </div>

        </div>

      </div>

    </section>

  );
}