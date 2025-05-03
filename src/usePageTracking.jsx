// src/usePageTracking.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "./analytics";

function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
}

export default usePageTracking;
