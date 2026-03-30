export default function About() {
  return (
    <section id="about" className="py-5">

      <div className="container">

        <div className="row align-items-center">

          <div className="col-md-4 text-center">
            <img
              src="/images/profile.jpg"
              className="img-fluid rounded-circle profile-img"
            />
          </div>

          <div className="col-md-8">

            <h2>About Me</h2>

            <p>
              I am a passionate full-stack developer experienced in building
              responsive web applications using React, Node.js and PostgreSQL.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}