import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { LandingPage } from "./landing-page";
import { DevicesPage } from "./devices-page";
import { RemotePage } from "./remote-page";

function Pages() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/devices" element={<DevicesPage />} />
        <Route path="/remote" element={<RemotePage />} />
      </Routes>
    </AnimatePresence>
  );
}

export { Pages };
