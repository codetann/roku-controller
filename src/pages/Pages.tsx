import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { LandingPage } from "./landing-page";

function Pages() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export { Pages };
