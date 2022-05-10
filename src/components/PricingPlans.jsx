export const PricingPlans = () => {
  return (
    <section id="pricing" className="bg-light mt-5">
      <div className="container-lg">
        <div className="text-center">
          <h2 className="text-muted text-decoration-underline">
            Pricing Plans
          </h2>
          <p className="lead text-muted">
            Choose a pricing plan that suits your needs
          </p>
        </div>
        <div className="row my-5 align-items-center justify-content-center g-3">
          <div className="col-8 col-lg-4 col-xl-3">
            <div className="card border-0 h-505550">
              <div className="card-body text-center py-4">
                <h4 className="card-title">Starter Edition</h4>
                <p className="lead card-subtitle">eBook download only</p>
                <p className="display-5 my-4 text-primary fw-bold">$12.99</p>
                <p className="card-text mx-5 text-muted d-none d-lg-block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia, vitae magni! Repellat commodi a fuga corporis saepe
                  dolorum.
                </p>
                <a
                  href="#buyBase"
                  className="btn btn-outline-primary btn-lg mt-3"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-9 col-lg-4">
            <div className="card border-primary border-2">
              <div className="card-header text-center text-primary">
                Recommended
              </div>
              <div className="card-body text-center py-5">
                <h4 className="card-title">Gold Edition</h4>
                <p className="lead card-subtitle">
                  eBook download & all updates
                </p>
                <p className="display-4 my-4 text-primary fw-bold">£17.99</p>
                <p className="card-text mx-5 text-muted d-none d-lg-block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia, vitae magni! Repellat commodi a fuga corporis saepe
                  dolorum.
                </p>
                <a
                  href="#buyGold"
                  className="btn btn-outline-primary btn-lg mt-3"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-8 col-lg-4 col-xl-3">
            <div className="card border-0">
              <div className="card-body text-center py-4">
                <h4 className="card-title">Hopeful Edition</h4>
                <p className="lead card-subtitle">
                  eBook Download, updates & extra Hope
                </p>
                <p className="display-5 my-4 text-primary fw-bold">£29.99</p>
                <p className="card-text mx-5 text-muted d-none d-lg-block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia, vitae magni! Repellat commodi a fuga corporis saepe
                  dolorum.
                </p>
                <a
                  href="#buyHopeful"
                  className="btn btn-outline-primary btn-lg mt-3"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
