import kindlePic from "../assets/kindlePic.jpg";
export const Topics = () => {
  return (
    <section id="topics">
      <div className="container-md">
        <div className="text-center">
          <h2>Inside the Book...</h2>
          <p className="lead text-muted">
            A quick glance at the topics you'll learn
          </p>
        </div>
        <div className="row my-5 g-5 justify-content-around align-items-center">
          <div className="col-6 col-lg-4">
            <img src={kindlePic} className="img-fluid" alt="book on kindle" />
          </div>
          <div className="col-lg-6">
            <div className="accordion" id="chapters">
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-1">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#chapter-1"
                    aria-expanded="true"
                    aria-controls="chapter-1"
                  >
                    Chapter 1 - Are you happy?
                  </button>
                </h2>
                <div
                  id="chapter-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="heading-1"
                  data-bs-parent="#chapters"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quis assumenda delectus sapiente quidem consequatur odit
                      adipisci necessitatibus nemo aliquid minus modi tempore
                      quibusdam quas vitae, animi ipsam nulla sunt alias.
                    </p>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quis assumenda delectus sapiente quidem consequatur odit
                      adipisci necessitatibus nemo aliquid minus modi tempore
                      quibusdam quas vitae, animi ipsam nulla sunt alias.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#chapter-2"
                    aria-expanded="false"
                    aria-controls="chapter-2"
                  >
                    Chapter 2 - Change is inevitable
                  </button>
                </h2>
                <div
                  id="chapter-2"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-2"
                  data-bs-parent="#chapters"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quis assumenda delectus sapiente quidem consequatur odit
                      adipisci necessitatibus nemo aliquid minus modi tempore
                      quibusdam quas vitae, animi ipsam nulla sunt alias.
                    </p>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quis assumenda delectus sapiente quidem consequatur odit
                      adipisci necessitatibus nemo aliquid minus modi tempore
                      quibusdam quas vitae, animi ipsam nulla sunt alias.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#chapter-3"
                    aria-expanded="false"
                    aria-controls="chapter-1"
                  >
                    Chapter 3 - Hope is not just a fancy name
                  </button>
                </h2>
                <div
                  id="chapter-3"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-3"
                  data-bs-parent="#chapters"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quis assumenda delectus sapiente quidem consequatur odit
                      adipisci necessitatibus nemo aliquid minus modi tempore
                      quibusdam quas vitae, animi ipsam nulla sunt alias.
                    </p>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quis assumenda delectus sapiente quidem consequatur odit
                      adipisci necessitatibus nemo aliquid minus modi tempore
                      quibusdam quas vitae, animi ipsam nulla sunt alias.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#chapter-4"
                    aria-expanded="false"
                    aria-controls="chapter-4"
                  >
                    Chapter 4 - The power of confidence
                  </button>
                </h2>
                <div
                  id="chapter-4"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-4"
                  data-bs-parent="#chapters"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quis assumenda delectus sapiente quidem consequatur odit
                      adipisci necessitatibus nemo aliquid minus modi tempore
                      quibusdam quas vitae, animi ipsam nulla sunt alias.
                    </p>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quis assumenda delectus sapiente quidem consequatur odit
                      adipisci necessitatibus nemo aliquid minus modi tempore
                      quibusdam quas vitae, animi ipsam nulla sunt alias.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-5">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#chapter-5"
                    aria-expanded="false"
                    aria-controls="chapter-5"
                  >
                    Chapter 5 - Thank me later, for real
                  </button>
                </h2>
                <div
                  id="chapter-5"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-5"
                  data-bs-parent="#chapters"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quis assumenda delectus sapiente quidem consequatur odit
                      adipisci necessitatibus nemo aliquid minus modi tempore
                      quibusdam quas vitae, animi ipsam nulla sunt alias.
                    </p>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quis assumenda delectus sapiente quidem consequatur odit
                      adipisci necessitatibus nemo aliquid minus modi tempore
                      quibusdam quas vitae, animi ipsam nulla sunt alias.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
