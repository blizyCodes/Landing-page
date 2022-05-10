import coverPic from "../assets/coverPic.jpg";
import bootstrap from "bootstrap";

export const IntroText = () => {
  return (
    <section>
      <div className="container-lg">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5 text-center text-md-start">
            <h1>
              <div className="display-2">Restore Your</div>
              <div className="display-5 text-muted">Faith in Humanity</div>
            </h1>
            <p className="lead-my4 text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <a href="#pricing" className="btn btn-secondary btn-lg">
              Buy Now
            </a>
            <a
              href="#sidebar"
              className="d-block mt-3"
              data-bs-toggle="offcanvas"
              role="button"
              aria-controls="sidebar"
            >
              Explore my other magnificent works
            </a>
            <div
              className="offcanvas offcanvas-bottom"
              tabindex="-1"
              id="sidebar"
              aria-labelledby="sidebar-label"
              data-bs-backdrop="false"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="sidebar-label">
                  I wrote it all.
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                  minima ducimus excepturi quasi tempore fugit quis voluptatibus
                  aut error possimus, tenetur natus magni quam voluptatem quae
                  eligendi repudiandae delectus eaque!
                </p>
                <div className="dropdown mt-3">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="book-dropdown"
                    data-bs-toggle="dropdown"
                  >
                    Choose a title
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="book-dropdown">
                    <li>
                      <a className="dropdown-item" href="#1">
                        Cryptos and pineapples.
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#2">
                        The art of gardening.
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#3">
                        is Greece the new China?
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 text-center d-none d-md-block">
            <span
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="A book full of hope cover"
            >
              <img src={coverPic} alt="book cover" className="img-fluid" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
