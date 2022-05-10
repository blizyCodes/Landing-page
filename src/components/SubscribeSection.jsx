export const SubscribeSection = () => {
  return (
    <>
      <section className="bg-light">
        <div className="container">
          <div className="text-center">
            <h2>Keep in touch</h2>
            <p className="lead">Do not miss out on latest news & updates!!!</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <p className="text-muted my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                exercitationem voluptatibus porro, hic asperiores fuga illo
                voluptates obcaecati deleniti veritatis sunt saepe quasi
                deserunt ex ipsum.
              </p>
              <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#subscribe-modal"
              >
                Subscribe to newsletter
              </button>
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal fade"
        id="subscribe-modal"
        tabindex="-1"
        aria-labelledby="modal-title"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modal-title">
                Get the Latest Updates
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
                exercitationem laboriosam nihil minus voluptatibus harum aliquam
                consequatur pariatur inventore dignissimos illum excepturi
                ratione ipsum sit iusto alias eligendi fugit laborum?
              </p>
              <label for="modal-email" className="form-label">
                Your email:
              </label>
              <input
                type="text"
                className="form-control"
                id="modal-email"
                placeholder="e.g. informedreader@example.com"
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
