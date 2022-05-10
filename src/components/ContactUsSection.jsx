export const ContactUsSection = () => {
  return (
    <section id="contact">
      <div className="container-lg">
        <div className="text-center">
          <h2>Contact Us</h2>
          <p className="lead">
            Got a question? Ask me. Seriously I'm the one responding..
          </p>
        </div>
        <div className="row justify-content-center my-5">
          <div className="col-lg-6">
            <form>
              <label for="email" className="form-label">
                Email:
              </label>
              <div className="input-group mb-4">
                <span className="input-group-text">
                  <i className="bi bi-envelope-fill text-secondary"></i>
                </span>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  placeholder="e.g. curiousreader@example.com"
                />
                <span className="input-group-text">
                  <span
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title="Enter an email to be responded to."
                  >
                    <i className="bi bi-question-circle text-muted"></i>
                  </span>
                </span>
              </div>
              <label for="name" className="form-label">
                Name:
              </label>
              <div className="mb-4 input-group">
                <span className="input-group-text">
                  <i className="bi bi-person-fill text-secondary"></i>
                </span>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="e.g. Mary"
                />
              </div>
              <label for="subject" className="form-label">
                What is your question?
              </label>
              <div className="mb-4 input-group">
                <span className="input-group-text">
                  <i className="bi bi-chat-right-dots-fill text-secondary"></i>
                </span>
                <select className="form-select" id="subject">
                  <option value="pricing" selected>
                    Pricing/Payments related
                  </option>
                  <option value="content">Content related</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4 mt-5 form-floating">
                <textarea
                  className="form-control"
                  id="query"
                  style={{ height: "120px" }}
                  placeholder="query"
                ></textarea>
                <label for="query">Your question..</label>
              </div>
              <div className="mb-4 text-center">
                <button type="submit" className="btn btn-secondary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
