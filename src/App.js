import "./App.css";
import { ContactUsSection } from "./components/ContactUsSection";
import { IntroText } from "./components/IntroText";
import { NavBar } from "./components/Navbar";
import { PricingPlans } from "./components/PricingPlans";
import { Reviews } from "./components/Reviews";
import { Topics } from "./components/Topics";
import { Tooltip } from "bootstrap/dist/js/bootstrap.esm.min.js";
import { useEffect } from "react";
import { SubscribeSection } from "./components/SubscribeSection";


function App() {
  useEffect(() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  });

  return (
    <div className="App">
      <NavBar />
      <IntroText />
      <PricingPlans />
      <Topics />
      <Reviews />
      <ContactUsSection />
      <SubscribeSection />
    </div>
  );
}

export default App;
