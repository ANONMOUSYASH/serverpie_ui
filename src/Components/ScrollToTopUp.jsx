import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopUp = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]); // this will trigger on every route change

  return null;
};

export default ScrollToTopUp;
