import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { LandingPage } from "./landing-page";
import { DevicesPage } from "./devices-page";

function Pages() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/devices" element={<DevicesPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export { Pages };
