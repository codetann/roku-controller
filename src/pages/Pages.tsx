import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

function Pages() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<div />} />
      </Routes>
    </AnimatePresence>
  );
}

export { Pages };
