import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          form.current.reset();
        },
        () => {
          setStatus("Failed to send message ❌");
        }
      );
  };

  return (

    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">
          Contact Me!
        </h2>
        <div className="row align-items-center">
          {/* FORM COLUMN */}
          <div className="col-lg-6">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="contact-form"
            >

              <input
                type="text"
                name="name"
                className="form-control mb-3"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="email"
                className="form-control mb-3"
                placeholder="Your Email"
                required
              />

              <textarea
                name="message"
                rows="4"
                className="form-control mb-3"
                placeholder="Message"
                required
              ></textarea>

              <button
                type="submit"
                className="btn btn-dark w-100"
              >
                Send Message
              </button>

              {status && (
                <p className="mt-3 text-center">
                  {status}
                </p>
              )}

            </form>
          </div>

          {/* IMAGE COLUMN */}

          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <h4>Scan this code to contact and collaborate. </h4>
            <img
              src="/images/vscontactqr.png"
              alt="Profile"
              className="img-fluid thumbnail profile-img shadow"
            />

          </div>
        </div>
      </div>

    </section>

  );
}