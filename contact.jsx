const Contact = () => {
  return (
    <div className="container py-5">
      {/* Title */}
      <div className="text-center mb-5">
        <h1>Contact Us</h1>
        <p className="text-muted">
          Feel free to contact us for more information about our Smart Home
          project.
        </p>
      </div>

      {/* Contact Form */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow p-4">
            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>

                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
