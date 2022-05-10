export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <div className="container-xxl">
        <a href="/" className="navbar-brand">
          <span className="fw-bold text-light">
            <i className="bi bi-book"></i> A Book Full of Hope
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#topics">
                About the Book
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#reviews">
                Honest Reviews
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact us
              </a>
            </li>
            <li className="nav-item d-md-none">
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item ms-2 d-none d-md-inline">
              <a className="btn btn-secondary" href="#pricing">
                buy now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
